import { NextRequest, NextResponse } from "next/server";

interface GeoRequest extends NextRequest {
  geo?: {
    country?: string;
  };
}

export function middleware(request: GeoRequest) {
  const country = request.geo?.country || "US";
  const currentHost = request.headers.get('host');

  if (country !== "AU" && currentHost !== "scenario-mv2f.vercel.app") {
    return NextResponse.redirect("https://scenario-mv2f.vercel.app");
  }

  return NextResponse.next();
}