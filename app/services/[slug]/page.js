import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import SiteFrame from "../../../components/SiteFrame";
import { portfolioItems, serviceBySlug, services } from "../../../data/siteContent";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  createPageMetadata,
  siteUrl,
} from "../../../data/seo";

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

  return createPageMetadata({
    title: `${service.title} | Oru Studio Services`,
    description: service.metaDescription || service.shortDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const highlights = service.highlights || [];
  const overview = service.overview || [service.description];
  const idealFor = service.idealFor || [];
  const processSteps = service.process || [];
  const featureSections = service.featureSections || [];
  const outcomes = service.outcomes || [];
  const faqs = service.faqs || [];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription || service.description,
    serviceType: service.title,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image),
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} deliverables`,
      itemListElement: service.deliverables.map((deliverable) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: deliverable,
        },
      })),
    },
    serviceOutput: outcomes,
  };

  const faqJsonLd = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <SiteFrame>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          serviceJsonLd,
          faqJsonLd,
        ].filter(Boolean)}
      />
      <section className="detail-hero service-detail-hero section-padding">
        <div className="container">
          <div className="detail-hero-inner service-hero-grid">
            <div className="service-hero-copy">
              <div className="content-meta">
                <span>Service</span>
                <span>Oru Studio</span>
                <span>Shopify and full stack delivery</span>
              </div>
              <h1>{service.title}</h1>
              <p>{service.heroLead || service.description}</p>
              <div className="service-hero-actions">
                <Link href="/contact" className="btn-style-2 button">
                  <span className="main-text">Request this service</span>
                  <span className="hover-text">Request this service</span>
                </Link>
                <Link href="/portfolio" className="text-link">
                  See related work
                </Link>
              </div>
              {idealFor.length > 0 && (
                <ul className="service-hero-points">
                  {idealFor.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="detail-hero-media service-hero-media">
              <img src={service.image} alt={`${service.title} project visual`} />
              <div className="service-media-caption">
                <span>{service.title}</span>
                <strong>Strategy, design, engineering, launch</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {highlights.length > 0 && (
        <section className="service-proof-section section-padding pt-0">
          <div className="container">
            <div className="service-proof-grid">
              {highlights.map((item) => (
                <div className="service-proof-item" key={`${item.value}-${item.label}`}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="service-story-section section-padding pt-0">
        <div className="container">
          <div className="service-story-grid">
            <div className="service-story-copy">
              <span className="eyebrow">Service depth</span>
              <h2>{service.overviewTitle || `A practical ${service.title.toLowerCase()} partner`}</h2>
              {overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="service-story-visual">
              <img src={service.secondaryImage || service.image} alt={`${service.title} planning and execution`} />
              <div className="service-story-list">
                <h3>Best fit</h3>
                <ul>
                  {idealFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {featureSections.length > 0 && (
        <section className="service-feature-section section-padding pt-0">
          <div className="container">
            <div className="service-section-heading">
              <span className="eyebrow">What the work covers</span>
              <h2>Clear strategy, polished UI, and production-minded engineering.</h2>
            </div>
            <div className="service-feature-list">
              {featureSections.map((block, index) => (
                <article className="service-feature-row" key={block.title}>
                  <div className="service-feature-copy">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{block.title}</h3>
                    <p>{block.text}</p>
                    {block.points?.length > 0 && (
                      <ul className="check-list">
                        {block.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="service-feature-media">
                    <img src={block.image || service.image} alt={block.title} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {processSteps.length > 0 && (
        <section className="page-section service-process-section section-padding pt-0">
          <div className="container">
            <div className="page-intro-grid">
              <h2>How we move from idea to production.</h2>
              <p>
                The process is built around clarity, reviewable milestones, and launch readiness. Each step reduces uncertainty before the next layer of work begins.
              </p>
            </div>
            <div className="service-process-grid">
              {processSteps.map((step, index) => (
                <div className="service-process-card" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="detail-section service-delivery-section section-padding pt-0">
        <div className="container">
          <div className="detail-layout service-detail-layout">
            <div className="article-content service-inclusion-panel">
              <h2>What is included</h2>
              <p>
                Every engagement is scoped around the outcome you need, but the work usually combines planning, interface decisions, implementation, QA, and launch support.
              </p>
              <ul className="check-list">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>

              {outcomes.length > 0 && (
                <>
                  <h2>Business outcomes</h2>
                  <div className="service-outcome-grid">
                    {outcomes.map((outcome) => (
                      <div className="service-outcome-item" key={outcome}>
                        <span className="ti-check" aria-hidden="true"></span>
                        <p>{outcome}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            <aside className="detail-sidebar service-detail-sidebar">
              <img src={service.icon} alt="" />
              <h3>Best for</h3>
              <p>{service.shortDescription}</p>
              <div className="sidebar-group">
                <h3>Primary focus</h3>
                <ul>
                  {service.deliverables.slice(0, 3).map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="text-link dark">
                Start a project
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="service-faq-section section-padding pt-0">
          <div className="container">
            <div className="service-section-heading">
              <span className="eyebrow">Questions</span>
              <h2>Common questions about {service.title.toLowerCase()}.</h2>
            </div>
            <div className="service-faq-list">
              {faqs.map((item) => (
                <article className="service-faq-item" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="service-cta-section section-padding pt-0">
        <div className="container">
          <div className="service-cta-band">
            <div>
              <span className="eyebrow">Project fit</span>
              <h2>Need {service.title.toLowerCase()} with careful execution?</h2>
            </div>
            <Link href="/contact" className="btn-style-1 button">
              <span className="main-text">Contact Oru Studio</span>
              <span className="hover-text">Contact Oru Studio</span>
            </Link>
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
