import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  createSessionCookieValue,
  isProductionPasswordConfigured,
  verifyAdminCredentials,
} from "../../../../lib/auth";

export const runtime = "nodejs";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));

  if (!verifyAdminCredentials(body.username, body.password)) {
    return NextResponse.json({ message: "Invalid username or password." }, { status: 401 });
  }

  const response = NextResponse.json({
    ok: true,
    username: body.username,
    insecureDefaultPassword: !isProductionPasswordConfigured(),
  });

  response.cookies.set(ADMIN_COOKIE, createSessionCookieValue(body.username), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return response;
}
