import { NextResponse } from 'next/server'
import { connectToDatabase } from './mongodb'

export async function middleware(request) {
  // Get username and password cookies
  const username = request.cookies.get('username')?.value
  const password = request.cookies.get('password')?.value

  if (!username || !password) {
    return NextResponse.redirect('/login') 
  }

  // Connect to MongoDB
  const { db } = await connectToDatabase()

  // Check if password matches
  const user = await db.collection('users').findOne({
    username,
    password 
  })

  if (!user) {
    return NextResponse.redirect('/login')
  }

  // User is authenticated
  // Check if trying to access login
  if (request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect('/dashboard')
  }

  // Allow accessing dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
}