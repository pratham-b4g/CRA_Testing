import { NextResponse } from 'next/server';
import { successResponse } from '@/lib/utils/apiResponse';

export function POST(): NextResponse {
  const response = successResponse({ message: 'Logged out successfully' });
  response.cookies.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  return response;
}
