import { NextResponse } from "next/server";
import { requireAdminFromRequest } from "../../../../lib/auth";
import { createGeneratedPost } from "../../../../lib/blogDb";
import { generateBlogArticle } from "../../../../lib/openaiBlogGenerator";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
}

export async function POST(request) {
  if (!requireAdminFromRequest(request)) {
    return unauthorized();
  }

  const body = await request.json().catch(() => ({}));

  try {
    const article = await generateBlogArticle({
      topic: body.topic,
      category: body.category,
      scheduledAt: body.scheduledAt,
    });
    const post = createGeneratedPost({
      ...article,
      status: body.status || (body.scheduledAt ? "scheduled" : "draft"),
      scheduledAt: body.scheduledAt || null,
      source: "openai",
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Article generation failed." },
      { status: 500 }
    );
  }
}
