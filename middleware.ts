import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CheckPermission: boolean = false

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin') && !CheckPermission) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}
