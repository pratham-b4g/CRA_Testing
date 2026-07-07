import { NextRequest, NextResponse } from 'next/server';
import { errorResponse } from '@/lib/utils/apiResponse';

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory store (replace with Redis for multi-instance production)
const store = new Map<string, RateLimitEntry>();

interface RateLimitOptions {
  max: number;
  windowMs: number;
}

type RouteHandler = (
  req: NextRequest,
  context: { params: Promise<Record<string, string>> }
) => Promise<NextResponse>;

export function withRateLimit(options: RateLimitOptions) {
  return (handler: RouteHandler): RouteHandler => {
    return async (req, context) => {
      const ip =
        req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
        req.headers.get('x-real-ip') ||
        'unknown';

      const key = `${ip}:${req.nextUrl.pathname}`;
      const now = Date.now();
      const entry = store.get(key);

      if (entry && now < entry.resetTime) {
        if (entry.count >= options.max) {
          const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
          return NextResponse.json(
            { success: false, message: 'Too many requests. Please try again later.' },
            {
              status: 429,
              headers: { 'Retry-After': String(retryAfter) },
            }
          );
        }
        entry.count++;
      } else {
        store.set(key, { count: 1, resetTime: now + options.windowMs });
      }

      return handler(req, context);
    };
  };
}

// Preset configs
export const authRateLimit = withRateLimit({ max: 5, windowMs: 15 * 60 * 1000 });
export const estimateRateLimit = withRateLimit({ max: 10, windowMs: 60 * 60 * 1000 });

// Clean up expired entries periodically
if (process.env.NODE_ENV !== 'test') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of store.entries()) {
      if (now >= entry.resetTime) store.delete(key);
    }
  }, 5 * 60 * 1000);
}
