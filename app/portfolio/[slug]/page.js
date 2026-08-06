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
                <span>Portfolio</span>
              </div>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <Link href="/contact" className="btn-style-2 button">
                <span className="main-text">Build something similar</span>
                <span className="hover-text">Build something similar</span>
              </Link>
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
              <h2>Challenge</h2>
              <p>{project.challenge}</p>
              <h2>Solution</h2>
              <p>{project.solution}</p>
              <h2>Result</h2>
              <ul className="check-list">
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
            <aside className="detail-sidebar">
              <h3>Relevant services</h3>
              <ul className="plain-link-list">
                {services.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
