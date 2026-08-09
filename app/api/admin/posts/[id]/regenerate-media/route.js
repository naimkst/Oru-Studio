import { NextResponse } from "next/server";
import { requireAdminFromRequest } from "../../../../../../lib/auth";
import { regenerateGeneratedPostMedia } from "../../../../../../lib/blogMediaRegenerator";

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
    const post = await regenerateGeneratedPostMedia(Number(id));

    if (!post) {
      return NextResponse.json({ message: "Post not found." }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error("Media regeneration failed", error);

    return NextResponse.json(
      { message: error.message || "Media regeneration failed." },
      { status: 500 }
    );
  }
}
