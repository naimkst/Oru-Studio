import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";
import { company } from "../../data/siteContent";

export const metadata = {
  title: "Privacy Policy | Oru Studio",
  description: "Oru Studio privacy policy for project inquiries, contact forms, and service communication.",
};

export default function PrivacyPolicyPage() {
  return (
    <SiteFrame>
      <section className="policy-page section-padding">
        <div className="container">
          <div className="policy-content">
            <span className="eyebrow">Privacy Policy</span>
            <h1>Privacy Policy</h1>
            <p>
              Oru Studio collects only the information needed to respond to project inquiries, prepare proposals, deliver services, and maintain client communication.
            </p>
            <h2>Information we collect</h2>
            <p>
              We may collect your name, email address, phone number, project details, budget range, messages, and any files or links you choose to share with us.
            </p>
            <h2>How we use information</h2>
            <p>
              We use submitted information to reply to inquiries, understand project requirements, provide estimates, deliver contracted work, and improve our services.
            </p>
            <h2>Sharing</h2>
            <p>
              We do not sell your personal information. We may share limited information with trusted service providers only when required to deliver agreed project work.
            </p>
            <h2>Contact</h2>
            <p>
              For privacy questions, contact <Link href={`mailto:${company.email}`}>{company.email}</Link>.
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
