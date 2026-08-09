import { NextResponse } from "next/server";
import { isProductionPasswordConfigured, requireAdminFromRequest } from "../../../../lib/auth";

export const runtime = "nodejs";

export async function GET(request) {
  const session = requireAdminFromRequest(request);

  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    username: session.username,
    insecureDefaultPassword: !isProductionPasswordConfigured(),
  });
}
