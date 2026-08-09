import { getGeneratedPostById, updateGeneratedPost } from "./blogDb";
import { generateBlogArticle } from "./openaiBlogGenerator";

function buildRegenerationTopic(post) {
  return `
Regenerate this existing ${post.status} Oru Studio blog post from scratch.

Current title:
${post.title}

Current description:
${post.description}

Current category:
${post.category}

Instructions:
- Keep the same core topic and search intent.
- Improve the structure, practical depth, clarity, and usefulness.
- Rewrite the article fully; do not lightly paraphrase the existing text.
- Keep it suitable for a draft or scheduled Shopify-focused article.
- Include a fresh unique thumbnail prompt and fresh in-content image prompt.
`.trim();
}

export async function regenerateGeneratedPostArticle(id) {
  const post = getGeneratedPostById(id);

  if (!post) {
    return null;
  }

  if (post.status === "published") {
    const error = new Error("Published posts cannot be regenerated from the dashboard. Move it to draft first.");
    error.statusCode = 400;
    throw error;
  }

  const article = await generateBlogArticle({
    topic: buildRegenerationTopic(post),
    category: post.category,
    scheduledAt: post.scheduledAt,
  });

  return updateGeneratedPost(id, {
    ...article,
    slug: post.slug,
    status: post.status,
    scheduledAt: post.scheduledAt,
    publishedAt: post.publishedAt,
  });
}
