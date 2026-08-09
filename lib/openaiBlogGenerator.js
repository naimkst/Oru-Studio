import { blogPosts } from "../data/siteContent";
import { estimateReadTime, getRecentGeneratedTitles, slugify } from "./blogDb";
import { generateAndSaveBlogImage } from "./openaiImageGenerator";

const articleSchema = {
  type: "object",
  additionalProperties: false,
  required: [
    "title",
    "slug",
    "description",
    "category",
    "tags",
    "thumbnailPrompt",
    "body",
  ],
  properties: {
    title: {
      type: "string",
      description: "Specific SEO title for the article.",
    },
    slug: {
      type: "string",
      description: "URL slug in lowercase kebab-case.",
    },
    description: {
      type: "string",
      description: "Meta description between 140 and 165 characters.",
    },
    category: {
      type: "string",
      description: "One clear blog category.",
    },
    tags: {
      type: "array",
      items: { type: "string" },
    },
    thumbnailPrompt: {
      type: "string",
      description:
        "Detailed prompt for a unique generated blog thumbnail. No text, no logos, no brand marks.",
    },
    body: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["type", "text", "items", "imagePrompt", "alt", "caption"],
        properties: {
          type: {
            type: "string",
            enum: ["paragraph", "heading", "list", "callout", "image"],
          },
          text: {
            type: "string",
          },
          items: {
            type: "array",
            items: { type: "string" },
          },
          imagePrompt: {
            type: "string",
            description:
              "For image blocks only, a detailed image prompt. Empty string for all other block types.",
          },
          alt: {
            type: "string",
            description: "For image blocks only, accessible alt text. Empty string for other block types.",
          },
          caption: {
            type: "string",
            description: "For image blocks only, a short useful caption. Empty string for other block types.",
          },
        },
      },
    },
  },
};

function buildPrompt({ topic, category, scheduledAt }) {
  const existingTitles = [...blogPosts.map((post) => post.title), ...getRecentGeneratedTitles(40)]
    .slice(0, 60)
    .join("\n- ");
  const requestedTopic = topic?.trim()
    ? topic.trim()
    : "Choose one original Shopify merchant or Shopify development topic that is not already covered.";

  return `
Write one large, original, practical article for Oru Studio's blog.

Topic direction:
${requestedTopic}

Preferred category:
${category || "Shopify Development"}

Scheduled publish time:
${scheduledAt || "Publish today"}

Existing article titles to avoid duplicating:
- ${existingTitles}

Brand context:
Oru Studio builds Shopify apps, Shopify stores, Shopify Plus planning, ecommerce systems, and full stack web products. The audience is Shopify merchants, founders, agencies, and technical decision makers.

Quality requirements:
- Write from practical implementation experience.
- Make the article deep and useful, not generic.
- Include concrete Shopify examples, merchant risks, developer considerations, and implementation checklists.
- Do not mention WordPress.
- Do not invent client names, statistics, awards, certifications, or official requirements.
- The body should be long enough for a serious blog article, roughly 1,600 to 2,400 words.
- Use heading, paragraph, list, callout, and image blocks.
- Insert exactly ${process.env.BLOG_INSIDE_IMAGE_COUNT || "1"} image block(s) inside the article body after relevant sections.
- For image blocks, text must be an empty string, items must be an empty array, imagePrompt must be detailed, and alt/caption must be useful.
- For non-image blocks, imagePrompt, alt, and caption must be empty strings.
- For list blocks, put a short intro in text and the bullet lines in items.
- For non-list blocks, items must be an empty array.
- Write a unique thumbnailPrompt for a generated thumbnail image.
- Image prompts should describe original ecommerce/development scenes with no logos, no brand marks, no fake screenshots, and no readable text.
`;
}

function extractOutputText(data) {
  if (data.output_text) {
    return data.output_text;
  }

  return (data.output || [])
    .flatMap((item) => item.content || [])
    .filter((content) => content.type === "output_text" && content.text)
    .map((content) => content.text)
    .join("");
}

export async function generateBlogArticle({ topic, category, scheduledAt } = {}) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured.");
  }

  const model = process.env.OPENAI_BLOG_MODEL || "gpt-4.1-mini";
  const prompt = buildPrompt({ topic, category, scheduledAt });
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "system",
          content:
            "You are a senior Shopify content strategist and technical writer. Return only schema-valid JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_output_tokens: 7000,
      text: {
        format: {
          type: "json_schema",
          name: "oru_studio_blog_article",
          strict: true,
          schema: articleSchema,
        },
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || `OpenAI request failed with ${response.status}.`);
  }

  const outputText = extractOutputText(data);
  const article = JSON.parse(outputText);
  const slug = slugify(article.slug || article.title);
  const body = article.body.map((block) => ({
    type: block.type,
    text: block.text,
    items: Array.isArray(block.items) ? block.items : [],
    imagePrompt: block.imagePrompt || "",
    alt: block.alt || "",
    caption: block.caption || "",
  }));
  const contentImageLimit = Math.max(
    1,
    Math.min(3, Number(process.env.BLOG_INSIDE_IMAGE_COUNT || 1) || 1)
  );
  const contentImageBlocks = body
    .filter((block) => block.type === "image")
    .slice(0, contentImageLimit);

  if (contentImageBlocks.length === 0) {
    const fallbackImage = {
      type: "image",
      text: "",
      items: [],
      imagePrompt: `Original editorial image for ${article.title}, showing a practical Shopify merchant workflow and ecommerce development planning scene.`,
      alt: `${article.title} supporting ecommerce development image`,
      caption: "A generated visual supporting the Shopify strategy discussed in this article.",
    };
    const insertionIndex = Math.min(4, Math.max(1, body.length));
    body.splice(insertionIndex, 0, fallbackImage);
    contentImageBlocks.push(fallbackImage);
  }

  const [thumbnail] = await Promise.all([
    generateAndSaveBlogImage({
      prompt:
        article.thumbnailPrompt ||
        `Professional ecommerce development editorial thumbnail for ${article.title}.`,
      title: article.title,
      slug,
      kind: "thumbnail",
    }),
    ...contentImageBlocks.map(async (block, index) => {
      block.src = await generateAndSaveBlogImage({
        prompt:
          block.imagePrompt ||
          `Professional supporting image for a Shopify article titled ${article.title}.`,
        title: article.title,
        slug,
        kind: "content",
        index: index + 1,
      });
    }),
  ]);

  const bodyWithGeneratedImages = body.filter(
    (block) => block.type !== "image" || Boolean(block.src)
  );

  return {
    title: article.title,
    slug,
    description: article.description,
    category: article.category,
    tags: article.tags,
    thumbnail,
    body: bodyWithGeneratedImages,
    readTime: estimateReadTime(bodyWithGeneratedImages),
    generationPrompt: prompt,
    model,
  };
}
