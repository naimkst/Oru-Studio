import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";
import {
  authorProfile,
  company,
  portfolioItems,
  publishedShopifyApps,
  services,
} from "../../data/siteContent";
import { createPageMetadata } from "../../data/seo";

export const metadata = createPageMetadata({
  title: "About Oru Studio | Full Stack & Shopify Development",
  description:
    "Oru Studio is a full stack development partner for Shopify apps, Shopify themes, ecommerce, SaaS products, and custom web applications.",
  path: "/about",
  image: "/images/founder-studio-workspace.webp",
});

export default function AboutPage() {
  return (
    <SiteFrame>
      <section className="inner-page-hero section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="inner-hero-content">
                <span className="eyebrow">About Oru Studio</span>
                <h1>Full stack product development for web, ecommerce, and Shopify teams.</h1>
                <p>
                  Oru Studio helps founders, agencies, and commerce teams design, build, launch, and maintain digital products with a practical full stack workflow.
                </p>
                <div className="hero-action-row">
                  <Link href="/services" className="btn-style-2 button">
                    <span className="main-text">Explore services</span>
                    <span className="hover-text">Explore services</span>
                  </Link>
                  <Link href="/portfolio" className="text-link">View portfolio</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="inner-hero-media about-hero-media">
                <img src="/images/founder-studio-workspace.webp" alt="Oru Studio product development workspace" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="page-intro-grid">
            <div>
              <span className="eyebrow">How we work</span>
              <h2>Design quality, engineering depth, and launch discipline in one service.</h2>
            </div>
            <p>
              The studio is built for clients who need more than isolated tasks. We can shape requirements, design screens, build frontend and backend systems, connect Shopify or third-party APIs, deploy to production, and stay involved after launch.
            </p>
          </div>

          <div className="metric-grid">
            <div className="metric-card">
              <strong>9Y+</strong>
              <span>Product development experience</span>
            </div>
            <div className="metric-card">
              <strong>{publishedShopifyApps.length}</strong>
              <span>Published Shopify App Store apps</span>
            </div>
            <div className="metric-card">
              <strong>{portfolioItems.length}</strong>
              <span>Portfolio and case study examples</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="page-intro-grid">
            <div>
              <span className="eyebrow">Published Shopify apps</span>
              <h2>Public Shopify App Store products from the Oru Studio founder.</h2>
            </div>
            <p>
              These listings show hands-on Shopify app experience beyond service pages: merchant admin workflows, app billing, storefront integration, product data, support policies, and App Store readiness.
            </p>
          </div>
          <div className="shopify-app-grid">
            {publishedShopifyApps.map((app) => (
              <Link href={app.href} target="_blank" rel="noopener noreferrer" className="shopify-app-card" key={app.slug}>
                <span>{app.category}</span>
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                <strong>{app.pricing}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="section-title s2">
            <h2>What we are built for</h2>
          </div>
          <div className="page-card-grid">
            {services.slice(0, 4).map((service) => (
              <Link href={`/services/${service.slug}`} className="content-card" key={service.id}>
                <img src={service.icon} alt="" />
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0" id="team">
        <div className="container">
          <div className="profile-band">
            <div className="profile-image">
              <img src={authorProfile.photo} alt={company.founder} />
            </div>
            <div className="profile-content">
              <span className="eyebrow">Author profile</span>
              <h2>{authorProfile.name}</h2>
              <h3>{authorProfile.title}</h3>
              <p>{authorProfile.summary}</p>
              <ul className="credential-list">
                {authorProfile.credentials.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
              <div className="profile-link-row">
                {authorProfile.links.slice(0, 3).map((link) => (
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-link dark" key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
