import JsonLd from "../../components/JsonLd";
import ServicesPageShell from "../../components/ServicesPageShell";
import { services } from "../../data/siteContent";
import {
   absoluteUrl,
   buildBreadcrumbJsonLd,
   buildWebPageJsonLd,
   createPageMetadata,
} from "../../data/seo";

export const metadata = createPageMetadata({
   title: "Shopify & Full Stack Development Services | Oru Studio",
   description:
      "Oru Studio services for Shopify app development, Shopify theme development, headless commerce, ecommerce, backend integrations, UI/UX, DevOps, QA, SEO, and support.",
   path: "/services",
   image: "/images/hero-video-area-shopify-02.webp",
   keywords: [
      "Shopify development services",
      "Shopify app development",
      "Shopify theme development",
      "headless Shopify development",
      "ecommerce development services",
      "backend API integrations",
      "technical SEO services",
   ],
});

const servicesJsonLd = {
   "@context": "https://schema.org",
   "@type": "ItemList",
   name: "Oru Studio development services",
   itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: absoluteUrl(`/services/${service.slug}`),
   })),
};

const Home = () => {
   return (
      <>
         <JsonLd
            data={[
               buildWebPageJsonLd({
                  name: "Shopify and full stack development services",
                  description:
                     "Oru Studio services for Shopify apps, Shopify storefronts, ecommerce systems, backend integrations, QA, performance, and support.",
                  path: "/services",
               }),
               buildBreadcrumbJsonLd([
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
               ]),
               servicesJsonLd,
            ]}
         />
         <ServicesPageShell />
      </>
   )
}

export default Home;
