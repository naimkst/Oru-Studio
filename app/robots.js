import { siteUrl } from "../data/seo";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/api/generated-blog-images/"],
        disallow: [
          "/api/admin/",
          "/api/contact",
          "/api/cron/",
          "/api/health",
          "/dashboard",
          "/login",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
