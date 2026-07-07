import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth/jwt';
import { errorResponse } from '@/lib/utils/apiResponse';
import type { JwtPayload } from '@/types/api';

type AuthenticatedHandler = (
  req: NextRequest,
  context: { params: Promise<Record<string, string>> },
  user: JwtPayload
) => Promise<NextResponse>;

export function withAuth(handler: AuthenticatedHandler) {
  return async (
    req: NextRequest,
    context: { params: Promise<Record<string, string>> }
  ): Promise<NextResponse> => {
    const token = req.cookies.get('token')?.value;

    if (!token) {
      return errorResponse('Authentication required', 401);
    }

    try {
      const user = await verifyToken(token);
      return handler(req, context, user);
    } catch {
      return errorResponse('Invalid or expired token', 401);
    }
  };
}
