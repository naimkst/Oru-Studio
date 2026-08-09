import { blogBySlug, blogPosts } from "../data/siteContent";
import {
  getGeneratedPostBySlug,
  getPublicGeneratedPosts,
} from "./blogDb";

function sortByDateDesc(posts) {
  return [...posts].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}

export function getAllBlogPosts() {
  return sortByDateDesc([...getPublicGeneratedPosts(), ...blogPosts]);
}

export function getPublishedGeneratedPosts() {
  return getPublicGeneratedPosts();
}

export function getBlogPostBySlug(slug, { includeUnpublished = false } = {}) {
  return getGeneratedPostBySlug(slug, { includeUnpublished }) || blogBySlug[slug] || null;
}

export function getRelatedBlogPosts(slug, limit = 3) {
  return getAllBlogPosts().filter((post) => post.slug !== slug).slice(0, limit);
}
