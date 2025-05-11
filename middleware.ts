import { NextRequest, NextResponse } from "next/server";

interface GeoRequest extends NextRequest {
  geo?: {
    country?: string;
  };
}

export function middleware(request: GeoRequest) {
  const country = request.geo?.country || "US";
  const currentHost = request.headers.get('host');

  // 如果当前请求已经是目标域名，避免再次重定向
  if (country !== "AU" && currentHost !== "scenario-mv2f.vercel.app") {
    return NextResponse.redirect("https://scenario-mv2f.vercel.app");
  }

  return NextResponse.next();
}