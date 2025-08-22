import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // For now, just let all requests through
  return NextResponse.next();
}

// You can delete this export if you don’t need route matching anymore
export const config = {
  matcher: ['/'],
};
