import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/middleware/withAuth';
import { estimateRateLimit } from '@/lib/middleware/withRateLimit';
import { analyzeCollectible } from '@/lib/gemini/client';
import { validateImageFile, fileToBase64 } from '@/lib/utils/imageUtils';
import { Estimation, syncModels } from '@/lib/db/models';
import { successResponse, errorResponse } from '@/lib/utils/apiResponse';
import type { JwtPayload } from '@/types/api';

async function handler(
  req: NextRequest,
  _context: { params: Promise<Record<string, string>> },
  user: JwtPayload
): Promise<NextResponse> {
  try {
    await syncModels();

    const formData = await req.formData();
    const file = formData.get('image') as File | null;

    if (!file) {
      return errorResponse('No image file provided', 400);
    }

    const validationError = validateImageFile(file);
    if (validationError) {
      return errorResponse(validationError, 400);
    }

    const { base64, mimeType } = await fileToBase64(file);
    const result = await analyzeCollectible(base64, mimeType);

    const estimation = await Estimation.create({
      userId: user.id,
      imageName: file.name,
      collectibleType: result.collectibleType,
      condition: result.condition,
      estimatedPriceMin: result.estimatedPriceMin,
      estimatedPriceMax: result.estimatedPriceMax,
      currency: result.currency,
      confidence: result.confidence,
      reasoning: result.reasoning,
    });

    return successResponse({
      ...result,
      id: estimation.id,
      createdAt: estimation.createdAt,
    });
  } catch (err) {
    console.error('Estimate error:', err);
    return errorResponse('Failed to analyze image. Please try again.', 500);
  }
}

// withAuth wraps the handler, then estimateRateLimit wraps that
const authedHandler = withAuth(handler);
export const POST = estimateRateLimit(
  authedHandler as (
    req: NextRequest,
    context: { params: Promise<Record<string, string>> }
  ) => Promise<NextResponse>
);
