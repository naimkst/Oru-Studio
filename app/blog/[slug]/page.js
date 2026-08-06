import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFrame from "../../../components/SiteFrame";
import { blogBySlug, blogPosts } from "../../../data/siteContent";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogBySlug[slug];

  if (!post) {
    return {
      title: "Article Not Found | Oru Studio",
    };
  }

  return {
    title: `${post.title} | Oru Studio Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogBySlug[slug];

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <SiteFrame>
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
                <img src={post.thumbnail} alt={post.title} />
              </div>
            </div>
          </div>
        </section>

        <section className="detail-section section-padding pt-0">
          <div className="container">
            <div className="detail-layout">
              <div className="article-content">
                {post.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <aside className="detail-sidebar">
                <h3>Need this implemented?</h3>
                <p>
                  Oru Studio can help plan, build, improve, or maintain your web product, Shopify app, or Shopify storefront.
                </p>
                <Link href="/contact" className="btn-style-1">
                  <span className="main-text">Talk to us</span>
                  <span className="hover-text">Talk to us</span>
                </Link>
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
                  <img src={item.thumbnail} alt={item.title} />
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
