import { NextResponse } from "next/server";
import {
  createGeneratedPost,
  hasGeneratedPostForDate,
  publishDuePosts,
} from "../../../../lib/blogDb";
import { generateBlogArticle } from "../../../../lib/openaiBlogGenerator";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isAuthorized(request) {
  const secret = process.env.BLOG_CRON_SECRET;

  if (!secret) {
    return false;
  }

  const authHeader = request.headers.get("authorization") || "";
  const url = new URL(request.url);

  return authHeader === `Bearer ${secret}` || url.searchParams.get("secret") === secret;
}

async function runDailyGeneration(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Invalid cron secret." }, { status: 401 });
  }

  try {
    const publishedDue = publishDuePosts();
    const today = new Date().toISOString().slice(0, 10);

    if (hasGeneratedPostForDate(today)) {
      return NextResponse.json({
        ok: true,
        skipped: true,
        reason: "A generated post is already scheduled or published for today.",
        publishedDue,
      });
    }

    const article = await generateBlogArticle({
      topic:
        "Choose a high-intent Shopify merchant or Shopify app development topic that Oru Studio has not already covered.",
      category: "Shopify Development",
      scheduledAt: new Date().toISOString(),
    });
    const post = createGeneratedPost({
      ...article,
      status: "published",
      source: "openai-cron",
    });

    return NextResponse.json({ ok: true, post, publishedDue });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Daily blog generation failed." },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return runDailyGeneration(request);
}

export async function POST(request) {
  return runDailyGeneration(request);
}
