import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";
import { blogPosts } from "../../data/siteContent";

export const metadata = {
  title: "Blog | Oru Studio",
  description:
    "Oru Studio articles on Shopify app development, Shopify themes, full stack web apps, backend integrations, launch QA, and maintenance.",
};

export default function BlogPage() {
  return (
    <SiteFrame>
      <section className="inner-page-hero section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="inner-hero-content">
                <span className="eyebrow">Oru Studio Blog</span>
                <h1>Practical notes on building better web products and Shopify systems.</h1>
                <p>
                  Guides, launch checklists, and implementation thinking for founders, merchants, and teams building with modern web and commerce stacks.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="inner-hero-media">
                <img src="/images/blog-bg.webp" alt="Oru Studio blog" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="blog-page-grid">
            {blogPosts.map((post) => (
              <article className="blog-page-card" key={post.id}>
                <Link href={`/blog/${post.slug}`} className="blog-page-image">
                  <img src={post.thumbnail} alt={post.title} />
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
        </div>
      </section>
    </SiteFrame>
  );
}
