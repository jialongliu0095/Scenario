import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // 从 URL 获取查询参数
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name') || 'Unknown'
  const email = searchParams.get('email') || 'Unknown'

  // 返回 GET 请求的响应
  return NextResponse.json({
    message: `GET received: ${name} (${email})`
  })
}

export async function POST(request: NextRequest) {
  // 解析请求体中的数据
  const body = await request.json()
  const { name, email } = body

  // 检查是否包含必需的字段
  if (!name || !email) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  // 如果没有缺少字段，重定向到成功页面
  return NextResponse.redirect('https://scenario-mv2f.vercel.app/for-thanks', 302)
}