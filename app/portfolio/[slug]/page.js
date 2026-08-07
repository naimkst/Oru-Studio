import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFrame from "../../../components/SiteFrame";
import { portfolioBySlug, portfolioItems, services } from "../../../data/siteContent";

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

  return {
    title: `${project.title} | Oru Studio Portfolio`,
    description: project.description,
  };
}

export default async function PortfolioDetailPage({ params }) {
  const { slug } = await params;
  const project = portfolioBySlug[slug];

  if (!project) {
    notFound();
  }

  return (
    <SiteFrame>
      <section className="detail-hero section-padding">
        <div className="container">
          <div className="detail-hero-inner">
            <div>
              <div className="content-meta">
                <span>{project.category}</span>
                <span>{project.status || "Portfolio"}</span>
              </div>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
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
            </div>
            <div className="detail-hero-media">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section section-padding pt-0">
        <div className="container">
          <div className="detail-layout">
            <div className="article-content">
              {project.metrics?.length > 0 && (
                <div className="case-metric-row">
                  {project.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
              )}
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
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
            <aside className="detail-sidebar">
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
                  {services.slice(0, 5).map((service) => (
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
    </SiteFrame>
  );
}
