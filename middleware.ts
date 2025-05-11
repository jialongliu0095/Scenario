import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const country = request.geo?.country || "US";
  if (country !== "AU") {
    return NextResponse.redirect("https://global.stratamanagement.com");
  }
  return NextResponse.next();
}