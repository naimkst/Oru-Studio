import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";
import { portfolioItems, publishedShopifyApps, services } from "../../data/siteContent";

export const metadata = {
  title: "Shopify Case Studies & Portfolio | Oru Studio",
  description:
    "Selected Oru Studio Shopify case studies, published App Store apps, Shopify themes, full stack dashboards, headless commerce, ecommerce, and backend platforms.",
};

export default function PortfolioPage() {
  return (
    <SiteFrame>
      <section className="inner-page-hero section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="inner-hero-content">
                <span className="eyebrow">Shopify Case Studies & Portfolio</span>
                <h1>Published apps and real commerce builds from Oru Studio.</h1>
                <p>
                  Explore published Shopify App Store products, merchant workflow tools, custom Shopify builds, headless commerce projects, and full stack product examples.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="inner-hero-media">
                <video src="/images/project.mp4" autoPlay muted loop playsInline />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="portfolio-filter-row">
            {services.slice(0, 5).map((service) => (
              <Link href={`/services/${service.slug}`} key={service.id}>
                {service.title}
              </Link>
            ))}
          </div>

          <div className="app-store-band">
            <div>
              <span className="eyebrow">Shopify App Store links</span>
              <h2>Public Shopify apps by Naim Hossain</h2>
            </div>
            <div className="app-store-link-list">
              {publishedShopifyApps.map((app) => (
                <Link href={app.href} target="_blank" rel="noopener noreferrer" key={app.slug}>
                  <span>{app.name}</span>
                  <small>{app.category}</small>
                </Link>
              ))}
            </div>
          </div>

          <div className="portfolio-page-grid">
            {portfolioItems.map((project) => (
              <Link href={`/portfolio/${project.slug}`} className="portfolio-card" key={project.id}>
                <div className="portfolio-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="portfolio-card-content">
                  <span>{project.category}</span>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  {project.status && <strong>{project.status}</strong>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
