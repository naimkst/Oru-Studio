import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";
import { portfolioItems, publishedShopifyApps, services } from "../../data/siteContent";
import { createPageMetadata } from "../../data/seo";

export const metadata = createPageMetadata({
  title: "Shopify Case Studies & Portfolio | Oru Studio",
  description:
    "Selected Oru Studio Shopify case studies, published App Store apps, Shopify themes, full stack dashboards, headless commerce, ecommerce, and backend platforms.",
  path: "/portfolio",
  image: "/images/portfolio-merchant-automation-app.webp",
  keywords: [
    "Shopify case studies",
    "Shopify portfolio",
    "Shopify app case study",
    "Shopify theme case study",
    "headless Shopify portfolio",
    "ecommerce development portfolio",
  ],
});

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

          <div className="portfolio-story-section">
            <div className="portfolio-story-copy">
              <span className="eyebrow">How to read the work</span>
              <h2>Every portfolio page now explains the business goal, design decisions, build scope, and launch result.</h2>
              <p>
                The case studies are written for store owners and technical buyers who need more than a screenshot. Each project explains what was broken, what we built, how the user experience was shaped, and which operational details mattered during launch.
              </p>
              <p>
                You can compare Shopify app strategy, theme architecture, backend integrations, dashboards, and headless storefront builds with enough context to judge fit, quality, and delivery approach before starting a conversation.
              </p>
            </div>
            <div className="portfolio-story-media">
              {portfolioItems.slice(0, 3).map((project, index) => (
                <img src={project.image} alt={`${project.title} preview`} key={project.id} className={`story-image image-${index + 1}`} />
              ))}
            </div>
          </div>

          <div className="portfolio-evidence-grid">
            {[
              ["Problem context", "Clear challenge and buyer need before the solution is introduced."],
              ["UX decisions", "Interaction, content, and admin workflow choices are explained in plain language."],
              ["Build scope", "Stack, Shopify surfaces, integrations, and QA responsibilities are visible."],
              ["Outcome signals", "Each page includes launch proof points, results, and next-step context."],
            ].map(([title, text]) => (
              <div className="portfolio-evidence-item" key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </div>
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
                  <p>{project.heroLead || project.description}</p>
                  {project.scope?.length > 0 && (
                    <ul className="portfolio-card-tags">
                      {project.scope.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
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
