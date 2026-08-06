import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";

export const metadata = {
  title: "Open Source & Resources | Oru Studio",
  description:
    "Developer resources, reusable patterns, and open-source friendly engineering practices from Oru Studio.",
};

const resources = [
  {
    title: "Reusable Shopify Patterns",
    description:
      "Theme sections, app architecture notes, metafield planning, and merchant workflow patterns for practical Shopify builds.",
  },
  {
    title: "Full Stack Starter Thinking",
    description:
      "Product planning, auth, dashboards, backend APIs, database models, deployment, and launch checklist patterns.",
  },
  {
    title: "Performance & QA Notes",
    description:
      "Core Web Vitals, accessibility checks, responsive QA, analytics setup, and production release habits.",
  },
];

export default function OpenSourcePage() {
  return (
    <SiteFrame>
      <section className="inner-page-hero section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="inner-hero-content">
                <span className="eyebrow">Open Source & Resources</span>
                <h1>Practical engineering notes and reusable patterns for better delivery.</h1>
                <p>
                  This page collects the kind of reusable thinking Oru Studio applies to Shopify, full stack, performance, and launch work.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="inner-hero-media">
                <img src="/images/hero-img.webp" alt="Developer resources" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="page-card-grid">
            {resources.map((resource) => (
              <div className="content-card" key={resource.title}>
                <img src="/images/service4.svg" alt="" />
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </div>
            ))}
          </div>
          <div className="cta-band mt-30">
            <div>
              <span className="eyebrow">Need implementation?</span>
              <h2>Use the resources, or bring Oru Studio in to build the product.</h2>
            </div>
            <Link href="/contact" className="btn-style-1">
              <span className="main-text">Contact us</span>
              <span className="hover-text">Contact us</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
