import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import SiteFrame from "../../../components/SiteFrame";
import { publishedShopifyApps } from "../../../data/siteContent";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildSeoKeywords,
  createPageMetadata,
  siteUrl,
} from "../../../data/seo";

const appBySlug = publishedShopifyApps.reduce((items, app) => {
  items[app.slug] = app;
  return items;
}, {});

export async function generateStaticParams() {
  return publishedShopifyApps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const app = appBySlug[slug];

  if (!app) {
    return {
      title: "Shopify App Not Found | Oru Studio",
    };
  }

  return createPageMetadata({
    title: `${app.name} Shopify App | Oru Studio Documentation`,
    description: app.description,
    path: `/apps/${app.slug}`,
    image: app.image,
    keywords: [
      app.name,
      `${app.name} Shopify app`,
      app.category,
      app.features,
      "Shopify App Store",
    ],
  });
}

function buildAppJsonLd(app) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    description: app.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Shopify",
    url: absoluteUrl(`/apps/${app.slug}`),
    image: absoluteUrl(app.image),
    datePublished: app.launchedDate,
    offers: {
      "@type": "Offer",
      url: app.href,
      description: app.pricing,
      priceCurrency: "USD",
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    sameAs: app.href,
    keywords: buildSeoKeywords(app.name, app.category, app.features).join(", "),
  };
}

function buildFaqJsonLd(app) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: app.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default async function AppDetailPage({ params }) {
  const { slug } = await params;
  const app = appBySlug[slug];

  if (!app) {
    notFound();
  }

  return (
    <SiteFrame>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Shopify Apps", path: "/apps" },
            { name: app.name, path: `/apps/${app.slug}` },
          ]),
          buildAppJsonLd(app),
          buildFaqJsonLd(app),
        ]}
      />

      <section className="detail-hero section-padding">
        <div className="container">
          <div className="detail-hero-inner">
            <div>
              <div className="content-meta">
                <span>{app.category}</span>
                <span>{app.pricing}</span>
                <span>Launched {app.launched}</span>
              </div>
              <h1>{app.name} Shopify App</h1>
              <p>{app.description}</p>
              <div className="hero-action-row">
                <Link href={app.href} target="_blank" rel="noopener noreferrer" className="btn-style-2 button">
                  <span className="main-text">Open App Store listing</span>
                  <span className="hover-text">Open App Store listing</span>
                </Link>
                <Link href={app.supportHref} className="text-link">Get support</Link>
              </div>
            </div>
            <div className="detail-hero-media">
              <img src={app.image} alt={`${app.name} Shopify app documentation`} />
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section section-padding pt-0">
        <div className="container">
          <div className="detail-layout">
            <div className="article-content">
              <h2>What it helps merchants do</h2>
              <ul className="check-list">
                {app.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              {app.documentation.map((section) => (
                <div key={section.title}>
                  <h2>{section.title}</h2>
                  <ul className="article-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <h2>Privacy and data notes</h2>
              <ul className="article-list">
                {app.privacyNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>

              <h2>FAQ</h2>
              {app.faqs.map((faq) => (
                <div key={faq.question} className="app-faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
            <aside className="detail-sidebar">
              <div className="sidebar-group">
                <h3>App links</h3>
                <ul className="plain-link-list">
                  <li>
                    <Link href={app.href} target="_blank" rel="noopener noreferrer">Shopify App Store listing</Link>
                  </li>
                  <li>
                    <Link href={app.supportHref}>Support contact</Link>
                  </li>
                  <li>
                    <Link href={app.privacyHref}>Privacy policy</Link>
                  </li>
                  <li>
                    <Link href={`/portfolio/${app.caseStudySlug}`}>Case study</Link>
                  </li>
                </ul>
              </div>
              <div className="sidebar-group">
                <h3>Best for</h3>
                <p>{app.category}</p>
              </div>
              <div className="sidebar-group">
                <h3>Published</h3>
                <p>{app.launched}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
