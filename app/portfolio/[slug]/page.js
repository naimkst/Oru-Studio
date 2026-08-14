import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import SiteFrame from "../../../components/SiteFrame";
import { portfolioBySlug, portfolioItems, services } from "../../../data/siteContent";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildSeoKeywords,
  createPageMetadata,
  siteUrl,
} from "../../../data/seo";

export async function generateStaticParams() {
  return portfolioItems.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = portfolioBySlug[slug];

  if (!project) {
    return {
      title: "Project Not Found | Oru Studio",
    };
  }

  return createPageMetadata({
    title: `${project.title} | Oru Studio Portfolio`,
    description: project.metaDescription || project.description,
    path: `/portfolio/${project.slug}`,
    image: project.image,
    keywords: [
      project.title,
      project.category,
      project.scope,
      project.stack,
      project.results,
    ],
  });
}

export default async function PortfolioDetailPage({ params }) {
  const { slug } = await params;
  const project = portfolioBySlug[slug];

  if (!project) {
    notFound();
  }
  const relatedProjects = portfolioItems
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);
  const sidebarServices = project.relatedServiceSlugs?.length
    ? services.filter((service) => project.relatedServiceSlugs.includes(service.slug)).slice(0, 5)
    : services.slice(0, 5);
  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.metaDescription || project.description,
    image: absoluteUrl(project.image),
    url: absoluteUrl(`/portfolio/${project.slug}`),
    creator: {
      "@id": `${siteUrl}/#organization`,
    },
    about: project.category,
    keywords: buildSeoKeywords(project.title, project.category, project.scope, project.stack).join(", "),
    ...(project.appStoreUrl ? { sameAs: project.appStoreUrl } : {}),
  };

  return (
    <SiteFrame>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: project.title, path: `/portfolio/${project.slug}` },
          ]),
          portfolioJsonLd,
        ]}
      />
      <section className="detail-hero section-padding">
        <div className="container">
          <div className="detail-hero-inner">
            <div>
              <div className="content-meta">
                <span>{project.category}</span>
                <span>{project.status || "Portfolio"}</span>
              </div>
              <h1>{project.title}</h1>
              <p>{project.heroLead || project.description}</p>
              <div className="hero-action-row">
                <Link href="/contact" className="btn-style-2 button">
                  <span className="main-text">Build something similar</span>
                  <span className="hover-text">Build something similar</span>
                </Link>
                {project.appStoreUrl && (
                  <Link href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                    View App Store listing
                  </Link>
                )}
              </div>
              {project.scope?.length > 0 && (
                <ul className="case-hero-points">
                  {project.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="detail-hero-media case-hero-media">
              <img src={project.image} alt={project.title} />
              <div className="case-media-caption">
                <span>{project.category}</span>
                <strong>{project.title}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.metrics?.length > 0 && (
        <section className="case-proof-section section-padding pt-0">
          <div className="container">
            <div className="case-proof-grid">
              {project.metrics.map((metric) => (
                <div className="case-proof-item" key={metric}>
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(project.overviewTitle || project.overview?.length > 0) && (
        <section className="case-overview-section section-padding pt-0">
          <div className="container">
            <div className="case-overview-grid">
              <div className="case-overview-copy">
                <span className="eyebrow">Case study context</span>
                <h2>{project.overviewTitle || "Project overview"}</h2>
                {(project.overview || [project.description]).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="case-overview-visual">
                <img src={project.secondaryImage || project.image} alt={`${project.title} supporting visual`} />
                {project.goals?.length > 0 && (
                  <div className="case-goals-panel">
                    <h3>Project goals</h3>
                    <ul>
                      {project.goals.map((goal) => (
                        <li key={goal}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {project.featureSections?.length > 0 && (
        <section className="case-feature-section section-padding pt-0">
          <div className="container">
            <div className="case-section-heading">
              <h2>What the build focused on</h2>
            </div>
            <div className="case-feature-list">
              {project.featureSections.map((section) => (
                <div className="case-feature-row" key={section.title}>
                  <div className="case-feature-copy">
                    <span>{section.label}</span>
                    <h3>{section.title}</h3>
                    <p>{section.text}</p>
                  </div>
                  <div className="case-feature-media">
                    <img src={section.image || project.image} alt={section.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.process?.length > 0 && (
        <section className="case-process-section section-padding pt-0">
          <div className="container">
            <div className="case-section-heading">
              <h2>Project process</h2>
            </div>
            <div className="case-process-grid">
              {project.process.map((step, index) => (
                <div className="case-process-card" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="detail-section section-padding pt-0">
        <div className="container">
          <div className="detail-layout">
            <div className="article-content">
              <h2>Challenge</h2>
              <p>{project.challenge}</p>
              <h2>Solution</h2>
              <p>{project.solution}</p>
              {project.sections?.map((section) => (
                <div key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              ))}
              <h2>Result</h2>
              <ul className="check-list">
                {(project.outcomes || project.results).map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
              {project.takeaway && (
                <div className="article-callout">
                  {project.takeaway}
                </div>
              )}
            </div>
            <aside className="detail-sidebar">
              <div className="sidebar-group">
                <h3>Project scope</h3>
                <ul className="plain-link-list">
                  {(project.scope || [project.category]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {project.appStoreUrl && (
                <div className="sidebar-group">
                  <h3>Public listing</h3>
                  <p>This project is published on the Shopify App Store under the Naim Hossain developer profile.</p>
                  <Link href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="text-link dark">
                    Open Shopify listing
                  </Link>
                </div>
              )}
              {project.stack?.length > 0 && (
                <div className="sidebar-group">
                  <h3>Stack</h3>
                  <ul className="plain-link-list">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="sidebar-group">
                <h3>Relevant services</h3>
                <ul className="plain-link-list">
                  {sidebarServices.map((service) => (
                    <li key={service.id}>
                      <Link href={`/services/${service.slug}`}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="page-section section-padding pt-0">
          <div className="container">
            <div className="case-section-heading">
              <h2>More portfolio examples</h2>
            </div>
            <div className="portfolio-page-grid compact">
              {relatedProjects.map((relatedProject) => (
                <Link href={`/portfolio/${relatedProject.slug}`} className="portfolio-card" key={relatedProject.id}>
                  <div className="portfolio-card-image">
                    <img src={relatedProject.image} alt={relatedProject.title} />
                  </div>
                  <div className="portfolio-card-content">
                    <span>{relatedProject.category}</span>
                    <h2>{relatedProject.title}</h2>
                    <p>{relatedProject.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteFrame>
  );
}
