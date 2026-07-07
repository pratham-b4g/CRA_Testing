import { NextRequest, NextResponse } from 'next/server';
import { signupSchema } from '@/lib/validation/auth.schemas';
import { User, syncModels } from '@/lib/db/models';
import { signToken } from '@/lib/auth/jwt';
import { successResponse, errorResponse } from '@/lib/utils/apiResponse';
import { authRateLimit } from '@/lib/middleware/withRateLimit';

async function handler(req: NextRequest): Promise<NextResponse> {
  try {
    await syncModels();

    const body = await req.json();
    const { error, value } = signupSchema.validate(body, { abortEarly: false });

    if (error) {
      const errors = Object.fromEntries(
        error.details.map((d) => [d.path[0] as string, d.message])
      );
      return errorResponse('Validation failed', 422, errors);
    }

    const { name, email, password } = value;

    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return errorResponse('An account with this email already exists', 409);
    }

    const user = await User.create({ name, email, password });
    const token = await signToken({ id: user.id, email: user.email, name: user.name });

    const response = successResponse(user.toSafeObject(), 201);
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (err) {
    console.error('Signup error:', err);
    return errorResponse('Internal server error', 500);
  }
}

export const POST = authRateLimit(handler);
