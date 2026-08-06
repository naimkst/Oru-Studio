import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";
import { company } from "../../data/siteContent";

export const metadata = {
  title: "Terms & Conditions | Oru Studio",
  description: "Oru Studio service terms for development inquiries, proposals, project delivery, and website use.",
};

export default function TermsConditionsPage() {
  return (
    <SiteFrame>
      <section className="policy-page section-padding">
        <div className="container">
          <div className="policy-content">
            <span className="eyebrow">Terms & Conditions</span>
            <h1>Terms & Conditions</h1>
            <p>
              These terms outline the general conditions for using the Oru Studio website and starting service conversations with us.
            </p>
            <h2>Project inquiries</h2>
            <p>
              Submitting a form or contacting us does not create a service agreement. A project begins only after scope, pricing, timeline, and payment terms are agreed in writing.
            </p>
            <h2>Service delivery</h2>
            <p>
              Deliverables, milestones, revisions, support, and ownership terms are defined per project. We work to agreed requirements and communicate changes before expanding scope.
            </p>
            <h2>Website content</h2>
            <p>
              Website content is provided for general information about Oru Studio services. We may update services, pricing structures, case studies, or policies when needed.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to <Link href={`mailto:${company.email}`}>{company.email}</Link>.
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
