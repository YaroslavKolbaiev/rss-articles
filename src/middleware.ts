import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './lib/auth';

export async function middleware(request: NextRequest) {
  const session = await getSession();

  if (session.isLoggedIn && session.role === 'ADMIN') {
    return NextResponse.next();
  }

  const redirectLogin = new URL('/login', request.nextUrl);

  return NextResponse.redirect(redirectLogin);
}

export const config = {
  matcher: ['/admin/:path*'],
};
