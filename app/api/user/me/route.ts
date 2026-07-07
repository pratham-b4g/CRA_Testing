import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/middleware/withAuth';
import { User, syncModels } from '@/lib/db/models';
import { successResponse, errorResponse } from '@/lib/utils/apiResponse';
import type { JwtPayload } from '@/types/api';

async function handler(
  _req: NextRequest,
  _context: { params: Promise<Record<string, string>> },
  user: JwtPayload
): Promise<NextResponse> {
  try {
    await syncModels();
    const dbUser = await User.findByPk(user.id);
    if (!dbUser) return errorResponse('User not found', 404);
    return successResponse(dbUser.toSafeObject());
  } catch (err) {
    console.error('Get user error:', err);
    return errorResponse('Internal server error', 500);
  }
}

export const GET = withAuth(handler);
