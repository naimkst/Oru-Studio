import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import SiteFrame from "../../components/SiteFrame";
import { publishedShopifyApps } from "../../data/siteContent";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
  createPageMetadata,
  siteUrl,
} from "../../data/seo";

export const metadata = createPageMetadata({
  title: "Shopify Apps by Oru Studio | Merchant Tools & Documentation",
  description:
    "Published Shopify apps from Oru Studio with documentation, support links, FAQs, privacy information, and App Store listings for merchants.",
  path: "/apps",
  image: "/images/portfolio-merchant-automation-app.webp",
});

const appsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Shopify Apps by Oru Studio",
  description:
    "Published Shopify apps from Oru Studio with merchant documentation, FAQs, support links, and App Store listings.",
  url: absoluteUrl("/apps"),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: publishedShopifyApps.map((app, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/apps/${app.slug}`),
      name: app.name,
    })),
  },
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

export default function AppsPage() {
  return (
    <SiteFrame>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            name: "Shopify Apps by Oru Studio",
            description:
              "Published Shopify apps from Oru Studio with merchant documentation, FAQs, support links, and App Store listings.",
            path: "/apps",
          }),
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Shopify Apps", path: "/apps" },
          ]),
          appsJsonLd,
        ]}
      />

      <section className="inner-page-hero section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="inner-hero-content">
                <span className="eyebrow">Shopify Apps</span>
                <h1>Published Shopify App Store tools from Oru Studio.</h1>
                <p>
                  Explore merchant documentation, setup notes, FAQs, privacy information, support paths, and public App Store listings for Oru Studio Shopify apps.
                </p>
                <div className="hero-action-row">
                  <Link href="/portfolio" className="btn-style-2 button">
                    <span className="main-text">View app case studies</span>
                    <span className="hover-text">View app case studies</span>
                  </Link>
                  <Link href="/contact" className="text-link">Get app support</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="inner-hero-media">
                <img src="/images/portfolio-merchant-automation-app.webp" alt="Oru Studio Shopify apps" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="shopify-app-grid">
            {publishedShopifyApps.map((app) => (
              <article className="shopify-app-card" key={app.slug}>
                <span>{app.category}</span>
                <h2>
                  <Link href={`/apps/${app.slug}`}>{app.name}</Link>
                </h2>
                <p>{app.description}</p>
                <strong>{app.pricing}</strong>
                <div className="app-card-actions">
                  <Link href={`/apps/${app.slug}`} className="text-link dark">Documentation</Link>
                  <Link href={app.href} target="_blank" rel="noopener noreferrer" className="text-link dark">
                    App Store
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
