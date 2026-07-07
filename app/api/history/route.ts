import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/middleware/withAuth';
import { Estimation, syncModels } from '@/lib/db/models';
import { successResponse, errorResponse } from '@/lib/utils/apiResponse';
import type { JwtPayload } from '@/types/api';

async function handler(
  _req: NextRequest,
  _context: { params: Promise<Record<string, string>> },
  user: JwtPayload
): Promise<NextResponse> {
  try {
    await syncModels();

    const estimations = await Estimation.findAll({
      where: { userId: user.id },
      order: [['createdAt', 'DESC']],
      limit: 50,
    });

    return successResponse(estimations);
  } catch (err) {
    console.error('History error:', err);
    return errorResponse('Failed to fetch history', 500);
  }
}

export const GET = withAuth(handler);
