import Link from "next/link";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import ArticleBlocks from "../../../components/ArticleBlocks";
import FallbackImage from "../../../components/FallbackImage";
import JsonLd from "../../../components/JsonLd";
import SiteFrame from "../../../components/SiteFrame";
import { authorProfile, blogPosts, publishedShopifyApps } from "../../../data/siteContent";
import { ADMIN_COOKIE, readSessionCookieValue } from "../../../lib/auth";
import { getBlogPostBySlug, getRelatedBlogPosts } from "../../../lib/blogRepository";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  createPageMetadata,
  siteUrl,
} from "../../../data/seo";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

async function hasAdminSession() {
  const cookieStore = await cookies();

  return Boolean(readSessionCookieValue(cookieStore.get(ADMIN_COOKIE)?.value));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const isAdmin = await hasAdminSession();
  const post = getBlogPostBySlug(slug, { includeUnpublished: isAdmin });

  if (!post) {
    return {
      title: "Article Not Found | Oru Studio",
    };
  }

  const metadata = createPageMetadata({
    title: `${post.title} | Oru Studio Blog`,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.thumbnail,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
  });

  if (post.status && post.status !== "published") {
    metadata.title = `[Preview] ${post.title} | Oru Studio Blog`;
    metadata.robots = {
      index: false,
      follow: false,
    };
  }

  return metadata;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const isAdmin = await hasAdminSession();
  const post = getBlogPostBySlug(slug, { includeUnpublished: isAdmin });

  if (!post) {
    notFound();
  }

  const isAdminPreview = Boolean(post.status && post.status !== "published");
  const relatedPosts = getRelatedBlogPosts(post.slug, 3);
  const articleBlocks = post.body ?? post.content.map((paragraph) => ({
    type: "paragraph",
    text: paragraph,
  }));
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.thumbnail),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@id": `${siteUrl}/#naim-hossain-najmul`,
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
  };

  return (
    <SiteFrame>
      {isAdminPreview && (
        <section className="admin-public-preview-banner">
          <div className="container">
            <strong>Admin preview</strong>
            <span>This {post.status} post is visible because you are logged in. Visitors will see 404 until it is published.</span>
            <Link href={`/dashboard/posts/${post.dbId}`}>Open details</Link>
          </div>
        </section>
      )}
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleJsonLd,
        ]}
      />
      <article>
        <section className="detail-hero section-padding">
          <div className="container">
            <div className="detail-hero-inner">
              <div>
                <div className="content-meta">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
              </div>
              <div className="detail-hero-media">
                <FallbackImage src={post.thumbnail} alt={post.title} />
              </div>
            </div>
          </div>
        </section>

        <section className="detail-section section-padding pt-0">
          <div className="container">
            <div className="detail-layout">
              <div className="article-content">
                <ArticleBlocks blocks={articleBlocks} showMissingImageNotice={isAdminPreview} />
                <div className="article-author-box">
                  <img src={authorProfile.photo} alt={authorProfile.name} />
                  <div>
                    <span>Written by</span>
                    <h2>{authorProfile.name}</h2>
                    <p>{authorProfile.summary}</p>
                    <Link href="/about#team" className="text-link dark">Read author profile</Link>
                  </div>
                </div>
              </div>
              <aside className="detail-sidebar">
                <div className="sidebar-group">
                  <h3>Need this implemented?</h3>
                  <p>
                    Oru Studio can help plan, build, improve, or maintain your Shopify app, Shopify storefront, or ecommerce workflow.
                  </p>
                  <Link href="/contact" className="btn-style-1">
                    <span className="main-text">Talk to us</span>
                    <span className="hover-text">Talk to us</span>
                  </Link>
                </div>
                <div className="sidebar-group">
                  <h3>Published apps</h3>
                  <ul className="plain-link-list">
                    {publishedShopifyApps.map((app) => (
                      <li key={app.slug}>
                        <Link href={app.href} target="_blank" rel="noopener noreferrer">{app.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {post.references?.length > 0 && (
                  <div className="sidebar-group">
                    <h3>References</h3>
                    <ul className="plain-link-list">
                      {post.references.map((reference) => (
                        <li key={reference.href}>
                          <Link href={reference.href} target="_blank" rel="noopener noreferrer">{reference.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {post.tags?.length > 0 && (
                  <div className="sidebar-group">
                    <h3>Tags</h3>
                    <ul className="plain-link-list">
                      {post.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </article>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="section-title s2">
            <h2>Related Articles</h2>
          </div>
          <div className="blog-page-grid compact">
            {relatedPosts.map((item) => (
              <article className="blog-page-card" key={item.id}>
                <Link href={`/blog/${item.slug}`} className="blog-page-image">
                  <FallbackImage src={item.thumbnail} alt={item.title} />
                </Link>
                <div className="blog-page-content">
                  <div className="content-meta">
                    <span>{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h2>
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
