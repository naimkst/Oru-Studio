import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";
import { company, services, portfolioItems } from "../../data/siteContent";

export const metadata = {
  title: "About Oru Studio | Full Stack & Shopify Development",
  description:
    "Oru Studio is a full stack development partner for Shopify apps, Shopify themes, ecommerce, SaaS products, and custom web applications.",
};

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
              <strong>10Y</strong>
              <span>Product development experience</span>
            </div>
            <div className="metric-card">
              <strong>{services.length}+</strong>
              <span>Core services across product and commerce</span>
            </div>
            <div className="metric-card">
              <strong>{portfolioItems.length}</strong>
              <span>Featured portfolio directions</span>
            </div>
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
              <img src="/images/ceo.jpg" alt={company.founder} />
            </div>
            <div className="profile-content">
              <span className="eyebrow">Founder</span>
              <h2>{company.founder}</h2>
              <h3>{company.founderTitle}</h3>
              <p>
                Direct founder involvement keeps strategy, design, development, and delivery connected. You get clear technical decisions, practical implementation, and accountability through launch.
              </p>
              <Link href="/contact" className="btn-style-1">
                <span className="main-text">Start a project</span>
                <span className="hover-text">Start a project</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
