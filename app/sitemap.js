import {
  blogPosts,
  portfolioItems,
  publishedShopifyApps,
  services,
} from "../data/siteContent";
import { getPublishedGeneratedPosts } from "../lib/blogRepository";
import { absoluteUrl } from "../data/seo";

export const dynamic = "force-dynamic";

const now = new Date();

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.75, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/apps", priority: 0.88, changeFrequency: "monthly" },
  { path: "/portfolio", priority: 0.82, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.86, changeFrequency: "weekly" },
  { path: "/process", priority: 0.65, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/open-source", priority: 0.45, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" },
  { path: "/affiliate-disclosure", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
  const allBlogPosts = [...getPublishedGeneratedPosts(), ...blogPosts];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
    })),
    ...publishedShopifyApps.map((app) => ({
      url: absoluteUrl(`/apps/${app.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    })),
    ...portfolioItems.map((project) => ({
      url: absoluteUrl(`/portfolio/${project.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: project.appStoreUrl ? 0.8 : 0.7,
    })),
    ...allBlogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.date ? new Date(post.date) : now,
      changeFrequency: "monthly",
      priority: 0.76,
    })),
  ];
}
