import { NextResponse } from "next/server";
import { requireAdminFromRequest } from "../../../../lib/auth";
import { publishDuePosts } from "../../../../lib/blogDb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  if (!requireAdminFromRequest(request)) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const publishedCount = publishDuePosts();

  return NextResponse.json({ publishedCount });
}
