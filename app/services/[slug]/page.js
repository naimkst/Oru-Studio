import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFrame from "../../../components/SiteFrame";
import { portfolioItems, serviceBySlug, services } from "../../../data/siteContent";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];

  if (!service) {
    return {
      title: "Service Not Found | Oru Studio",
    };
  }

  return {
    title: `${service.title} | Oru Studio Services`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <SiteFrame>
      <section className="detail-hero section-padding">
        <div className="container">
          <div className="detail-hero-inner">
            <div>
              <div className="content-meta">
                <span>Service</span>
                <span>Oru Studio</span>
              </div>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <Link href="/contact" className="btn-style-2 button">
                <span className="main-text">Request this service</span>
                <span className="hover-text">Request this service</span>
              </Link>
            </div>
            <div className="detail-hero-media">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section section-padding pt-0">
        <div className="container">
          <div className="detail-layout">
            <div className="article-content">
              <h2>What is included</h2>
              <ul className="check-list">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
              <h2>How we deliver it</h2>
              <p>
                We begin with the business goal, required user flows, content, data, and launch constraints. From there, we design the implementation path, build in reviewable milestones, test the critical flows, and prepare the product for production.
              </p>
              <p>
                For Shopify work, that can include theme architecture, app setup, Admin GraphQL operations, storefront behavior, webhooks, custom data, app review preparation, or ongoing merchant support.
              </p>
            </div>
            <aside className="detail-sidebar">
              <img src={service.icon} alt="" />
              <h3>Best for</h3>
              <p>{service.shortDescription}</p>
              <Link href="/portfolio" className="text-link">See related work</Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="section-title s2">
            <h2>Related Services</h2>
          </div>
          <div className="page-card-grid">
            {relatedServices.map((item) => (
              <Link href={`/services/${item.slug}`} className="content-card" key={item.id}>
                <img src={item.icon} alt="" />
                <h3>{item.title}</h3>
                <p>{item.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="section-title s2">
            <h2>Portfolio Examples</h2>
          </div>
          <div className="portfolio-page-grid compact">
            {portfolioItems.slice(0, 3).map((project) => (
              <Link href={`/portfolio/${project.slug}`} className="portfolio-card" key={project.id}>
                <div className="portfolio-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="portfolio-card-content">
                  <span>{project.category}</span>
                  <h2>{project.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
