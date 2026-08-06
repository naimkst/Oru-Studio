import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";
import { portfolioItems, services } from "../../data/siteContent";

export const metadata = {
  title: "Portfolio | Oru Studio",
  description:
    "Selected Oru Studio portfolio work across Shopify themes, Shopify apps, full stack dashboards, headless commerce, ecommerce, and backend platforms.",
};

export default function PortfolioPage() {
  return (
    <SiteFrame>
      <section className="inner-page-hero section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="inner-hero-content">
                <span className="eyebrow">Portfolio</span>
                <h1>Selected work across Shopify, ecommerce, SaaS, and custom web products.</h1>
                <p>
                  These portfolio directions show the kinds of product, commerce, and full stack problems Oru Studio is built to solve.
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
