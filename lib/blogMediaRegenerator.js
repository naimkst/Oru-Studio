import { getGeneratedPostById, updateGeneratedPost } from "./blogDb";
import { generateAndSaveBlogImage } from "./openaiImageGenerator";

function getImageCount() {
  return Math.max(1, Math.min(3, Number(process.env.BLOG_INSIDE_IMAGE_COUNT || 1) || 1));
}

function createFallbackImageBlock(post) {
  return {
    type: "image",
    text: "",
    items: [],
    imagePrompt: `Original editorial image for ${post.title}, showing practical Shopify theme development, merchant storefront review, and responsive ecommerce planning.`,
    alt: `${post.title} supporting Shopify article image`,
    caption: "A generated visual supporting the Shopify strategy discussed in this article.",
  };
}

export async function regenerateGeneratedPostMedia(id) {
  const post = getGeneratedPostById(id);

  if (!post) {
    return null;
  }

  const body = [...(post.body || [])];
  const contentImageLimit = getImageCount();
  let imageBlocks = body.filter((block) => block.type === "image").slice(0, contentImageLimit);

  if (imageBlocks.length === 0) {
    const fallbackBlock = createFallbackImageBlock(post);
    const insertionIndex = Math.min(4, Math.max(1, body.length));
    body.splice(insertionIndex, 0, fallbackBlock);
    imageBlocks = [fallbackBlock];
  }

  const [thumbnail] = await Promise.all([
    generateAndSaveBlogImage({
      prompt: `Unique editorial blog thumbnail for "${post.title}". Topic: ${post.description}. Category: ${post.category}.`,
      title: post.title,
      slug: post.slug,
      kind: "thumbnail",
    }),
    ...imageBlocks.map(async (block, index) => {
      block.src = await generateAndSaveBlogImage({
        prompt:
          block.imagePrompt ||
          `Original supporting image for a Shopify article titled "${post.title}".`,
        title: post.title,
        slug: post.slug,
        kind: "content",
        index: index + 1,
      });
      block.originalSrc = block.src;
      block.imageMissing = false;
    }),
  ]);

  return updateGeneratedPost(id, {
    thumbnail,
    body,
  });
}
