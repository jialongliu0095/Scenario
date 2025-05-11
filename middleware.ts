import { NextRequest, NextResponse } from "next/server";

interface GeoRequest extends NextRequest {
  geo?: {
    country?: string;
    region?: string;
    city?: string;
  };
}

export function middleware(request: GeoRequest) {
  const country = request.geo?.country || "US";

  if (country !== "AU") {
    return NextResponse.redirect("https://global.stratamanagement.com");
  }

  return NextResponse.next();
}
