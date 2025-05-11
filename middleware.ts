import { NextRequest, NextResponse } from "next/server";

interface GeoRequest extends NextRequest {
  geo?: {
    country?: string;
  };
}

export function middleware(request: GeoRequest) {
  const country = request.geo?.country || "US";

  if (country !== "AU") {
    return NextResponse.redirect("https://scenario-mv2f.vercel.app");
  }

  return NextResponse.next();
}