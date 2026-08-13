const logoVersion = "v=20260813";
const versionedLogo = (path) => `${path}?${logoVersion}`;

export const platformLogos = [
  {
    id: "shopify",
    name: "Shopify",
    logo: versionedLogo("/images/platform-shopify.svg"),
    category: "Commerce",
    description:
      "Custom storefronts, Shopify apps, Admin GraphQL, Liquid sections, and merchant workflows.",
    duration: 1000,
  },
  {
    id: "stripe",
    name: "Stripe",
    logo: versionedLogo("/images/platform-stripe.svg"),
    category: "Payments",
    description:
      "Checkout flows, billing logic, subscription handling, webhooks, and payment integrations.",
    duration: 1100,
  },
  {
    id: "klaviyo",
    name: "Klaviyo",
    logo: versionedLogo("/images/platform-klaviyo.svg"),
    category: "Lifecycle",
    description:
      "Customer events, ecommerce segmentation, campaign data, and email automation support.",
    duration: 1200,
  },
  {
    id: "vercel",
    name: "Vercel",
    logo: versionedLogo("/images/platform-vercel.svg"),
    category: "Hosting",
    description:
      "Fast frontend deployments, preview workflows, edge delivery, and production release discipline.",
    duration: 1300,
  },
  {
    id: "github",
    name: "GitHub",
    logo: versionedLogo("/images/platform-github.svg"),
    category: "Engineering",
    description:
      "Clean repositories, pull request reviews, CI workflows, branching, and release collaboration.",
    duration: 1000,
  },
  {
    id: "supabase",
    name: "Supabase",
    logo: versionedLogo("/images/platform-supabase.svg"),
    category: "Backend",
    description:
      "Product databases, auth-aware dashboards, admin tooling, and API-backed application features.",
    duration: 1100,
  },
  {
    id: "sanity",
    name: "Sanity",
    logo: versionedLogo("/images/platform-sanity.svg"),
    category: "Content",
    description:
      "Structured content models, editorial workflows, landing pages, and headless commerce content.",
    duration: 1200,
  },
  {
    id: "posthog",
    name: "PostHog",
    logo: versionedLogo("/images/platform-posthog.svg"),
    category: "Analytics",
    description:
      "Product events, conversion tracking, funnels, experiments, and behavior insight setup.",
    duration: 1300,
  },
];
