import { blogPosts } from "../data/siteContent";
import { estimateReadTime, getRecentGeneratedTitles, slugify } from "./blogDb";

const thumbnailChoices = [
  "/images/hero-video-area-shopify-01.webp",
  "/images/hero-video-area-shopify-02.webp",
  "/images/hero-video-area-shopify-03.webp",
  "/images/hero-video-area-shopify-04.webp",
  "/images/hero-video-area-shopify-05.webp",
  "/images/hero-video-area-shopify-06.webp",
  "/images/portfolio-merchant-automation-app.webp",
  "/images/portfolio-headless-commerce-storefront.webp",
  "/images/portfolio-custom-product-builder.webp",
  "/images/portfolio-shopify-fashion-theme.webp",
];

const articleSchema = {
  type: "object",
  additionalProperties: false,
  required: ["title", "slug", "description", "category", "tags", "thumbnail", "body"],
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
    thumbnail: {
      type: "string",
      enum: thumbnailChoices,
    },
    body: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["type", "text", "items"],
        properties: {
          type: {
            type: "string",
            enum: ["paragraph", "heading", "list", "callout"],
          },
          text: {
            type: "string",
          },
          items: {
            type: "array",
            items: { type: "string" },
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
- Use heading, paragraph, list, and callout blocks.
- For list blocks, put a short intro in text and the bullet lines in items.
- For non-list blocks, items must be an empty array.
- Select one thumbnail from the allowed enum.
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
  const body = article.body.map((block) => ({
    type: block.type,
    text: block.text,
    items: Array.isArray(block.items) ? block.items : [],
  }));

  return {
    title: article.title,
    slug: slugify(article.slug || article.title),
    description: article.description,
    category: article.category,
    tags: article.tags,
    thumbnail: article.thumbnail,
    body,
    readTime: estimateReadTime(body),
    generationPrompt: prompt,
    model,
  };
}
