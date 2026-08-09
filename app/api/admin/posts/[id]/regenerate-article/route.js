import { NextResponse } from "next/server";
import { requireAdminFromRequest } from "../../../../../../lib/auth";
import { regenerateGeneratedPostArticle } from "../../../../../../lib/blogArticleRegenerator";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
}

export async function POST(request, { params }) {
  if (!requireAdminFromRequest(request)) {
    return unauthorized();
  }

  const { id } = await params;

  try {
    const post = await regenerateGeneratedPostArticle(Number(id));

    if (!post) {
      return NextResponse.json({ message: "Post not found." }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error("Article regeneration failed", error);

    return NextResponse.json(
      { message: error.message || "Article regeneration failed." },
      { status: error.statusCode || 500 }
    );
  }
}
