import HomePageShell from "../components/HomePageShell";
import JsonLd from "../components/JsonLd";
import { getAllBlogPosts } from "../lib/blogRepository";
import {
   buildWebPageJsonLd,
   createPageMetadata,
} from "../data/seo";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
   title: "Oru Studio | Shopify Apps, Store Development & Shopify Plus Experts",
   description:
      "Oru Studio builds Shopify apps, Shopify stores, Shopify Plus projects, ecommerce systems, and full stack web products for merchants, founders, and agencies.",
   path: "/",
   image: "/images/hero-video-area-shopify-01.webp",
   keywords: [
      "Shopify app development agency",
      "Shopify store development",
      "Shopify Plus experts",
      "custom Shopify apps",
      "ecommerce development agency",
   ],
});

const Home = () => {
   const featuredPosts = getAllBlogPosts().slice(0, 3);

   return (
      <>
         <JsonLd
            data={buildWebPageJsonLd({
               name: "Oru Studio",
               description:
                  "Shopify app development, Shopify store development, Shopify Plus planning, ecommerce systems, and full stack web product delivery.",
               path: "/",
            })}
         />
         <HomePageShell featuredPosts={featuredPosts} />
      </>
   )
}

export default Home;
