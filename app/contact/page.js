import ContactPageShell from "../../components/ContactPageShell";
import JsonLd from "../../components/JsonLd";
import { company } from "../../data/siteContent";
import {
   buildBreadcrumbJsonLd,
   buildWebPageJsonLd,
   createPageMetadata,
} from "../../data/seo";

export const metadata = createPageMetadata({
   title: "Contact Oru Studio | Shopify & Full Stack Development",
   description:
      "Contact Oru Studio for Shopify app development, Shopify storefront work, ecommerce systems, full stack web products, maintenance, QA, and technical support.",
   path: "/contact",
   image: "/images/discuss.webp",
});

const contactJsonLd = {
   "@context": "https://schema.org",
   "@type": "ContactPage",
   name: "Contact Oru Studio",
   email: company.email,
   telephone: company.phoneHref,
};

const Contact = () => {
   return (
      <>
         <JsonLd
            data={[
               buildWebPageJsonLd({
                  name: "Contact Oru Studio",
                  description:
                     "Contact Oru Studio for Shopify app development, Shopify storefront work, ecommerce systems, maintenance, QA, and full stack product delivery.",
                  path: "/contact",
               }),
               buildBreadcrumbJsonLd([
                  { name: "Home", path: "/" },
                  { name: "Contact", path: "/contact" },
               ]),
               contactJsonLd,
            ]}
         />
         <ContactPageShell />
      </>
   )
}

export default Contact;
