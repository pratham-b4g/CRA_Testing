import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'fallback-secret-change-in-production'
);

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (token) {
    try {
      await jwtVerify(token, secret);
      redirect('/estimator');
    } catch {
      // Invalid token, fall through to redirect to login
    }
  }

  redirect('/login');
}
