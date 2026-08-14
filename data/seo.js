export const siteName = "Oru Studio";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://orustudio.com"
).replace(/\/$/, "");

export const defaultSeoImage = "/images/hero-video-area-shopify-01.webp";

export const baseSeoKeywords = [
  "Oru Studio",
  "Shopify app development",
  "Shopify store development",
  "Shopify theme development",
  "Shopify Plus development",
  "custom Shopify apps",
  "Shopify API integrations",
  "headless Shopify",
  "ecommerce development",
  "full stack web development",
  "technical SEO",
];

export function absoluteUrl(path = "/") {
  if (!path) {
    return siteUrl;
  }

  if (/^(https?:|mailto:|tel:)/.test(path)) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function normalizeKeyword(keyword) {
  return String(keyword || "")
    .replace(/\s+/g, " ")
    .replace(/[.;:]+$/, "")
    .trim();
}

export function buildSeoKeywords(...groups) {
  const pageKeywords = groups
    .flat()
    .filter(Boolean)
    .flatMap((keyword) => String(keyword).split(/[|,]/))
    .map(normalizeKeyword)
    .filter((keyword) => keyword && keyword.length <= 72 && keyword.split(/\s+/).length <= 9);
  const seen = new Set();

  return [...pageKeywords, ...baseSeoKeywords]
    .filter((keyword) => {
      const key = keyword.toLowerCase();

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    })
    .slice(0, 24);
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = defaultSeoImage,
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: buildSeoKeywords(keywords),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildWebPageJsonLd({ name, description, path = "/" }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
  };
}
