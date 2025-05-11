import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  const email = searchParams.get('email')

  return NextResponse.json({
    message: `GET received: ${name} (${email})`
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  return NextResponse.redirect('https://scenario-mv2f.vercel.app/thank-you', 302)
}