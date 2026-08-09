import fs from "fs";
import path from "path";

const GENERATED_IMAGE_DIR = path.join(process.cwd(), "public", "images", "generated-blog");
const PUBLIC_IMAGE_BASE = "/images/generated-blog";

function safeFilePart(value) {
  return String(value || "blog-image")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function buildImagePrompt(prompt, { title, kind }) {
  const composition =
    kind === "thumbnail"
      ? "wide 3:2 editorial hero image, useful as a blog thumbnail"
      : "wide editorial image placed inside a long-form technical blog article";

  return `
Create a unique, professional image for an Oru Studio Shopify development blog post.

Article title: ${title}
Image role: ${composition}

Visual direction:
${prompt}

Style rules:
- Modern ecommerce and software product strategy aesthetic.
- Show realistic merchant workflows, dashboards, development planning, automation, or storefront operations.
- No logos, no brand marks, no fake screenshots, no readable text, no UI labels.
- Clean lighting, practical business context, high-detail composition.
`.trim();
}

export async function generateAndSaveBlogImage({
  prompt,
  title,
  slug,
  kind = "content",
  index = 1,
} = {}) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured.");
  }

  const outputFormat = process.env.OPENAI_IMAGE_FORMAT || "webp";
  const model = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1.5";
  const size =
    kind === "thumbnail"
      ? process.env.OPENAI_THUMBNAIL_SIZE || "1536x1024"
      : process.env.OPENAI_CONTENT_IMAGE_SIZE || "1536x1024";
  const quality = process.env.OPENAI_IMAGE_QUALITY || "medium";

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt: buildImagePrompt(prompt, { title, kind }),
      n: 1,
      size,
      quality,
      output_format: outputFormat,
      background: "opaque",
      moderation: "auto",
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || `OpenAI image request failed with ${response.status}.`);
  }

  const base64Image = data.data?.[0]?.b64_json;

  if (!base64Image) {
    throw new Error("OpenAI image response did not include image data.");
  }

  fs.mkdirSync(GENERATED_IMAGE_DIR, { recursive: true });

  const suffix = kind === "thumbnail" ? "thumbnail" : `content-${index}`;
  const filename = `${safeFilePart(slug)}-${suffix}.${outputFormat}`;
  const filePath = path.join(GENERATED_IMAGE_DIR, filename);

  fs.writeFileSync(filePath, Buffer.from(base64Image, "base64"));

  return `${PUBLIC_IMAGE_BASE}/${filename}`;
}
