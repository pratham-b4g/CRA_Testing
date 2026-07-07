import type { NextRequest } from 'next/server';
import type { JwtPayload } from './api';

declare module 'next/server' {
  interface NextRequest {
    user?: JwtPayload;
  }
}
