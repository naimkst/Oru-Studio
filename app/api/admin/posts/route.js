import { NextResponse } from "next/server";
import { requireAdminFromRequest } from "../../../../lib/auth";
import { createGeneratedPost, listAdminPosts } from "../../../../lib/blogDb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
}

export async function GET(request) {
  if (!requireAdminFromRequest(request)) {
    return unauthorized();
  }

  return NextResponse.json({ posts: listAdminPosts() });
}

export async function POST(request) {
  if (!requireAdminFromRequest(request)) {
    return unauthorized();
  }

  const body = await request.json().catch(() => ({}));

  if (!body.title || !body.description || !body.category || !Array.isArray(body.body)) {
    return NextResponse.json({ message: "title, description, category, and body are required." }, { status: 400 });
  }

  const post = createGeneratedPost({
    ...body,
    source: body.source || "manual",
  });

  return NextResponse.json({ post }, { status: 201 });
}
