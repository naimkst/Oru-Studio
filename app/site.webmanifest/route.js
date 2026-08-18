import { siteName, siteUrl } from "../../data/seo";

export const revalidate = 86400;

export function GET() {
  return Response.json(
    {
      name: siteName,
      short_name: siteName,
      description:
        "Shopify apps, Shopify store development, ecommerce systems, and full stack web products by Oru Studio.",
      start_url: "/",
      scope: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#101010",
      icons: [
        {
          src: "/favicon-48x48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "/favicon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "/icon-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
      id: siteUrl,
    },
    {
      headers: {
        "Content-Type": "application/manifest+json",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    }
  );
}
