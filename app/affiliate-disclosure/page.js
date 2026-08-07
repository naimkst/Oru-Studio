import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";
import { company } from "../../data/siteContent";

export const metadata = {
  title: "Affiliate Disclosure | Oru Studio",
  description:
    "Oru Studio affiliate disclosure for Shopify, ecommerce tools, app recommendations, and commerce-related educational content.",
};

export default function AffiliateDisclosurePage() {
  return (
    <SiteFrame>
      <section className="policy-page section-padding">
        <div className="container">
          <div className="policy-content">
            <span className="eyebrow">Affiliate Disclosure</span>
            <h1>Affiliate Disclosure</h1>
            <p>
              Oru Studio publishes Shopify and ecommerce educational content for merchants, founders, and teams evaluating commerce tools. Some pages may include affiliate links, referral links, or partner links.
            </p>
            <h2>How affiliate links work</h2>
            <p>
              If you click an affiliate link and later purchase a product or service, Oru Studio may receive a commission or referral credit at no extra cost to you. Any potential commission does not change the price you pay.
            </p>
            <h2>Editorial independence</h2>
            <p>
              Our recommendations are based on implementation experience, product fit, merchant workflow, technical quality, support needs, and practical ecommerce outcomes. We do not recommend a tool only because it may pay a commission.
            </p>
            <h2>Shopify relationship</h2>
            <p>
              Oru Studio provides Shopify development services and publishes commerce education. Shopify is a trademark of Shopify Inc. Oru Studio is not owned by Shopify, and our content is not official Shopify guidance unless we link directly to Shopify-owned documentation or pages.
            </p>
            <h2>Questions</h2>
            <p>
              Questions about affiliate links, recommendations, or corrections can be sent to <Link href={`mailto:${company.email}`}>{company.email}</Link>.
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
