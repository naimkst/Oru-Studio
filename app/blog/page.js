import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";
import { authorProfile, blogPosts, publishedShopifyApps } from "../../data/siteContent";
import { createPageMetadata } from "../../data/seo";

export const metadata = createPageMetadata({
  title: "Shopify Resources & Blog | Oru Studio",
  description:
    "Original Oru Studio Shopify resources, ecommerce guides, App Store case studies, app development notes, theme guidance, and store optimization articles.",
  path: "/blog",
  image: "/images/portfolio-headless-commerce-storefront.webp",
});

export default function BlogPage() {
  return (
    <SiteFrame>
      <section className="inner-page-hero section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="inner-hero-content">
                <span className="eyebrow">Shopify Resources & Blog</span>
                <h1>Original Shopify education for merchants, founders, and ecommerce teams.</h1>
                <p>
                  Long-form guides, practical tutorials, Shopify app development notes, conversion advice, Plus planning, troubleshooting, and case studies written from Oru Studio's implementation experience.
                </p>
                <div className="hero-action-row">
                  <Link href="/portfolio" className="btn-style-2 button">
                    <span className="main-text">View case studies</span>
                    <span className="hover-text">View case studies</span>
                  </Link>
                  <Link href="/about#team" className="text-link">Author profile</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="inner-hero-media blog-hero-media">
                <img src="/images/portfolio-headless-commerce-storefront.webp" alt="Oru Studio commerce and web product work" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="resource-proof-row">
            <div>
              <strong>{blogPosts.length}</strong>
              <span>Original resources</span>
            </div>
            <div>
              <strong>{publishedShopifyApps.length}</strong>
              <span>Published Shopify apps</span>
            </div>
            <div>
              <strong>9Y+</strong>
              <span>{authorProfile.name} experience</span>
            </div>
          </div>
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
