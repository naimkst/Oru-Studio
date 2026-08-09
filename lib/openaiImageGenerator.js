import fs from "fs";
import {
  ensureGeneratedImageDir,
  generatedImageApiSrc,
  generatedImageFilePath,
} from "./generatedBlogImageStorage";

const VISUAL_VARIANTS = [
  "merchant operations desk with packaged products, tablet analytics, and warm yellow plus cool blue accents",
  "development planning wall with wireframe printouts, code editor glow, and green plus graphite accents",
  "storefront quality review scene across phone, tablet, and desktop with coral plus navy accents",
  "automation workflow scene with connected devices, order packaging, and teal plus amber accents",
  "app architecture workspace with API diagrams, terminal windows, and electric blue plus lime accents",
  "conversion audit setup with product photography, checkout flow sketches, and magenta plus slate accents",
  "inventory and fulfillment planning table with barcode scanner, tablet, and cyan plus orange accents",
  "headless commerce build scene with modular UI boards, browser windows, and violet plus emerald accents",
  "performance optimization desk with speed charts, device testing, and red plus indigo accents",
  "merchant support troubleshooting scene with annotated sticky notes, laptop, and yellow plus charcoal accents",
];

function safeFilePart(value) {
  return String(value || "blog-image")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function hashString(value) {
  return String(value || "")
    .split("")
    .reduce((hash, character) => (hash * 31 + character.charCodeAt(0)) >>> 0, 0);
}

function pickVisualVariant(seed) {
  return VISUAL_VARIANTS[hashString(seed) % VISUAL_VARIANTS.length];
}

function buildImagePrompt(prompt, { title, kind, visualSeed }) {
  const composition =
    kind === "thumbnail"
      ? "wide 3:2 editorial hero image, useful as a blog thumbnail"
      : "wide editorial image placed inside a long-form technical blog article";
  const visualVariant = pickVisualVariant(visualSeed || title);

  return `
Create a unique, professional image for an Oru Studio Shopify development blog post.

Article title: ${title}
Image role: ${composition}
Unique visual seed: ${visualSeed}
Seeded composition direction: ${visualVariant}

Visual direction:
${prompt}

Style rules:
- Modern ecommerce and software product strategy aesthetic.
- Show realistic merchant workflows, dashboards, development planning, automation, or storefront operations.
- Make this composition visibly different from other Oru Studio blog thumbnails by varying scene, camera angle, device layout, color accents, and subject matter.
- Do not reuse a generic laptop-dashboard composition unless the visual direction specifically requires it.
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
  const model = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1";
  const size =
    kind === "thumbnail"
      ? process.env.OPENAI_THUMBNAIL_SIZE || "1536x1024"
      : process.env.OPENAI_CONTENT_IMAGE_SIZE || "1536x1024";
  const quality = process.env.OPENAI_IMAGE_QUALITY || "medium";
  const uniquePart = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const visualSeed = `${safeFilePart(slug || title)}-${kind}-${index}-${uniquePart}`;

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt: buildImagePrompt(prompt, { title, kind, visualSeed }),
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

  ensureGeneratedImageDir();

  const suffix = kind === "thumbnail" ? "thumbnail" : `content-${index}`;
  const filename = `${safeFilePart(slug)}-${suffix}-${uniquePart}.${outputFormat}`;
  const filePath = generatedImageFilePath(filename);

  fs.writeFileSync(filePath, Buffer.from(base64Image, "base64"));

  return generatedImageApiSrc(filename, uniquePart);
}
