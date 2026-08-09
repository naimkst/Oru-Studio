import { NextResponse } from "next/server";
import { requireAdminFromRequest } from "../../../../../lib/auth";
import { deleteGeneratedPost, updateGeneratedPost } from "../../../../../lib/blogDb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
}

export async function PATCH(request, { params }) {
  if (!requireAdminFromRequest(request)) {
    return unauthorized();
  }

  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const post = updateGeneratedPost(Number(id), body);

  if (!post) {
    return NextResponse.json({ message: "Post not found." }, { status: 404 });
  }

  return NextResponse.json({ post });
}

export async function DELETE(request, { params }) {
  if (!requireAdminFromRequest(request)) {
    return unauthorized();
  }

  const { id } = await params;
  const deleted = deleteGeneratedPost(Number(id));

  if (!deleted) {
    return NextResponse.json({ message: "Post not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
