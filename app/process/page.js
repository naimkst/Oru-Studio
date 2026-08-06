import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";
import { processSteps } from "../../data/siteContent";

export const metadata = {
  title: "Process | Oru Studio",
  description:
    "The Oru Studio process for discovery, planning, design, full stack development, Shopify development, QA, launch, and support.",
};

export default function ProcessPage() {
  return (
    <SiteFrame>
      <section className="inner-page-hero section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="inner-hero-content">
                <span className="eyebrow">Our Process</span>
                <h1>A practical product workflow from first idea to supported launch.</h1>
                <p>
                  Every project follows a clear path: understand the goal, plan the build, design the experience, develop the system, test the release, and support the product after launch.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="inner-hero-media process-media">
                <img src="/images/process.svg" alt="Oru Studio process" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div className="process-step-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-padding pt-0">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="eyebrow">Ready to scope it?</span>
              <h2>Bring the idea. We will map the practical build path.</h2>
            </div>
            <Link href="/contact" className="btn-style-1">
              <span className="main-text">Start a project</span>
              <span className="hover-text">Start a project</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
