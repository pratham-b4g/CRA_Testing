import { NextResponse } from 'next/server';
import type { ApiResponse } from '@/types/api';

export function successResponse<T>(data: T, status = 200): NextResponse<ApiResponse<T>> {
  return NextResponse.json({ success: true, data }, { status });
}

export function errorResponse(
  message: string,
  status = 500,
  errors?: Record<string, string>
): NextResponse<ApiResponse> {
  return NextResponse.json({ success: false, message, errors }, { status });
}
