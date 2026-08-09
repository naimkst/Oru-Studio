"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import FallbackImage from "./FallbackImage";

const PAGE_SIZE = 12;

export default function BlogLoadMoreGrid({ posts = [] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visiblePosts = useMemo(
    () => posts.slice(0, visibleCount),
    [posts, visibleCount]
  );
  const hasMore = visibleCount < posts.length;

  return (
    <>
      <div className="blog-page-grid">
        {visiblePosts.map((post) => (
          <article className="blog-page-card" key={post.id}>
            <Link href={`/blog/${post.slug}`} className="blog-page-image">
              <FallbackImage src={post.thumbnail} alt={post.title} />
            </Link>
            <div className="blog-page-content">
              <div className="content-meta">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="text-link">Read article</Link>
            </div>
          </article>
        ))}
      </div>

      {hasMore && (
        <div className="blog-load-more">
          <button
            type="button"
            className="btn-style-2 button"
            onClick={() => setVisibleCount((current) => current + PAGE_SIZE)}
          >
            <span className="main-text">Load more articles</span>
            <span className="hover-text">Load more articles</span>
          </button>
          <p>
            Showing {visiblePosts.length} of {posts.length} articles
          </p>
        </div>
      )}
    </>
  );
}
