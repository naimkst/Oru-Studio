export const serviceDetailsById = {
  "full-stack-web-development": {
    image: "/images/portfolio-saas-operations-dashboard.webp",
    secondaryImage: "/images/hero-video-area-04.webp",
    metaDescription:
      "Full stack web development for SaaS, portals, dashboards, APIs, databases, and production-ready business platforms.",
    heroLead:
      "Custom web application development for teams that need more than a marketing site: secure workflows, polished interfaces, reliable APIs, and a production system that can grow with the business.",
    highlights: [
      { value: "End-to-end", label: "product architecture, UI, backend, database, and deployment" },
      { value: "Secure", label: "auth, roles, validation, logging, and operational visibility" },
      { value: "Scalable", label: "clean code paths for future features, teams, and integrations" },
    ],
    overviewTitle: "Build a web product that is useful on launch day and maintainable after it grows.",
    overview: [
      "A strong full stack application is not just a set of screens connected to a database. It needs a clear product model, thoughtful user flows, reliable backend rules, fast frontend interactions, and a release process that keeps future changes manageable.",
      "Oru Studio plans the product from the business workflow backward. We map the users, permissions, data model, integrations, reporting needs, and launch constraints before writing the core application. That keeps the first version focused while leaving room for the product to expand.",
      "This service is a fit for SaaS dashboards, customer portals, internal tools, booking platforms, vendor systems, marketplaces, admin panels, and custom products where off-the-shelf software cannot support the exact workflow.",
    ],
    idealFor: [
      "Founders building a first SaaS or operational platform",
      "Agencies that need a dependable full stack build partner",
      "Companies replacing spreadsheets, manual approvals, or disconnected tools",
      "Teams that need secure customer portals, admin tools, or reporting views",
    ],
    process: [
      {
        title: "Product and workflow mapping",
        text: "We define the roles, core actions, records, permissions, edge cases, and success criteria before the interface or database becomes too expensive to change.",
      },
      {
        title: "Interface and data architecture",
        text: "We shape the user experience, component structure, database schema, API boundaries, and integration plan around the actual workflow.",
      },
      {
        title: "Milestone-based development",
        text: "The application is built in reviewable milestones so you can test real flows early instead of waiting for a large final handoff.",
      },
      {
        title: "Launch and operational hardening",
        text: "We prepare deployment, environment variables, monitoring, backups, analytics, documentation, and post-launch fixes so the system is easier to operate.",
      },
    ],
    featureSections: [
      {
        title: "Product interfaces people can use every day",
        text: "The frontend is designed for repeated use, clear states, and fast decisions. Dashboards, tables, forms, filters, notifications, and role-based screens are built to feel calm and predictable.",
        image: "/images/portfolio-saas-operations-dashboard.webp",
        points: ["Responsive React and Next.js interfaces", "Dashboards, portals, and admin views", "Loading, empty, error, and permission states"],
      },
      {
        title: "Backend systems that protect the workflow",
        text: "The backend defines what can happen, who can do it, and how the system behaves when integrations fail. That makes the product safer than a thin UI over fragile data.",
        image: "/images/hero-video-area-04.webp",
        points: ["REST or GraphQL APIs", "Auth, roles, validation, and audit trails", "Database design and third-party integrations"],
      },
    ],
    outcomes: [
      "A working product with clear user flows, not just static screens",
      "A backend that supports permissions, validation, reporting, and integrations",
      "Deployment and environment setup suitable for production use",
      "Documentation that makes future development and handoff easier",
    ],
    faqs: [
      {
        question: "Can you build both frontend and backend?",
        answer:
          "Yes. We handle interface development, backend APIs, database modeling, integrations, deployment, and launch support in one delivery path.",
      },
      {
        question: "Can you continue from an existing codebase?",
        answer:
          "Yes. We begin with a code review, identify the safest path, stabilize the core flows, and then add features without unnecessary rewrites.",
      },
      {
        question: "What stack do you usually use?",
        answer:
          "Most full stack builds use React or Next.js with a backend, database, authentication, and deployment stack selected around the product requirements.",
      },
    ],
  },
  "shopify-app-development": {
    image: "/images/portfolio-merchant-automation-app.webp",
    secondaryImage: "/images/hero-video-area-shopify-04.webp",
    metaDescription:
      "Custom Shopify app development for embedded admin apps, Admin GraphQL, webhooks, app billing, custom data, and merchant automation.",
    heroLead:
      "Custom Shopify apps for merchants and SaaS teams that need embedded admin experiences, automation, storefront logic, custom data, billing, and dependable Shopify API architecture.",
    highlights: [
      { value: "Admin GraphQL", label: "products, orders, customers, inventory, discounts, and metafields" },
      { value: "Automation", label: "webhooks, background jobs, retries, and merchant workflow rules" },
      { value: "Review-ready", label: "permissions, billing, onboarding, QA, and app submission support" },
    ],
    overviewTitle: "Turn a merchant workflow into a Shopify app that feels native inside the admin.",
    overview: [
      "A good Shopify app starts with a merchant problem. The app should reduce manual work, improve product data, connect Shopify to another system, or create a storefront capability that the theme alone cannot handle.",
      "We plan the embedded app experience, Shopify permissions, Admin GraphQL operations, webhooks, billing logic, app-owned database tables, and error handling before building the screens. That keeps the app easier to approve, support, and extend.",
      "This service is suited for private apps, public Shopify apps, merchant dashboards, automation tools, custom integrations, data management apps, and Shopify features that need backend logic.",
    ],
    idealFor: [
      "SaaS companies building a Shopify channel",
      "Merchants with repeated manual Shopify workflows",
      "Agencies that need a Shopify app engineering partner",
      "Businesses connecting Shopify to ERP, CRM, fulfillment, email, or analytics systems",
    ],
    process: [
      {
        title: "Merchant workflow discovery",
        text: "We document the exact workflow, Shopify data touched by the app, required permissions, install flow, and expected merchant outcome.",
      },
      {
        title: "App architecture and data model",
        text: "We plan embedded screens, Shopify API operations, webhooks, billing, custom data, database records, and background jobs.",
      },
      {
        title: "Development and Shopify QA",
        text: "We build the app, test install and uninstall behavior, verify API scopes, handle webhook retries, and validate merchant-facing states.",
      },
      {
        title: "Launch, submission, and support",
        text: "We prepare production hosting, documentation, support paths, and App Store review requirements when the app is intended for public release.",
      },
    ],
    featureSections: [
      {
        title: "Embedded admin UX for merchant work",
        text: "The app interface is built around merchant tasks such as setup, rules, product data, reporting, and action confirmation. The goal is clarity, not feature clutter.",
        image: "/images/portfolio-merchant-automation-app.webp",
        points: ["Embedded app dashboards", "Setup and onboarding flows", "Status, history, and error states"],
      },
      {
        title: "Shopify API and webhook engineering",
        text: "We use Shopify APIs carefully so the app handles rate limits, retries, permissions, custom data, and background jobs without surprising merchants.",
        image: "/images/hero-video-area-shopify-04.webp",
        points: ["Admin GraphQL operations", "Webhook handlers and queues", "Metafields, metaobjects, and app-owned data"],
      },
    ],
    outcomes: [
      "A Shopify app shaped around a real merchant workflow",
      "Reliable API, webhook, and database behavior",
      "Clean install, onboarding, permission, and billing paths",
      "App review and launch preparation when needed",
    ],
    faqs: [
      {
        question: "Do you build public Shopify apps?",
        answer:
          "Yes. We can build public apps and prepare the technical pieces needed for App Store review, including permissions, billing, onboarding, and QA.",
      },
      {
        question: "Can you build private Shopify apps?",
        answer:
          "Yes. Private and custom apps are often the best fit for merchant-specific workflows, internal automation, and store-to-system integrations.",
      },
      {
        question: "Can the app use metafields or metaobjects?",
        answer:
          "Yes. We model custom data with metafields, metaobjects, and app-owned database tables depending on who needs to edit the data and where it appears.",
      },
    ],
  },
  "shopify-theme-development": {
    image: "/images/portfolio-shopify-fashion-theme.webp",
    secondaryImage: "/images/hero-video-area-shopify-02.webp",
    metaDescription:
      "Shopify theme development for fast storefronts, custom Liquid sections, product pages, collection pages, cart UX, SEO, and conversion improvements.",
    heroLead:
      "Conversion-focused Shopify theme development for merchants who need a fast, flexible storefront with custom sections, strong product pages, and a shopping experience that is easy to manage.",
    highlights: [
      { value: "Flexible", label: "custom sections and templates merchants can edit without code" },
      { value: "Fast", label: "performance-conscious Liquid, assets, images, and theme architecture" },
      { value: "Commerce-led", label: "product, collection, cart, and campaign pages built to sell" },
    ],
    overviewTitle: "Create a Shopify storefront that looks distinct and stays easy for the merchant to run.",
    overview: [
      "A Shopify theme should balance brand expression with daily store management. Merchants need sections they can reuse, product pages that answer buying questions, collection pages that help discovery, and cart flows that keep shoppers confident.",
      "We build Shopify themes with clean Liquid, modular content controls, responsive layouts, performance discipline, and SEO-ready page structure. The result is a storefront that can support campaigns and product launches without constant developer involvement.",
      "This service is ideal for new Shopify stores, redesigns, theme migrations, conversion improvements, custom product pages, landing pages, and brands that have outgrown a generic theme setup.",
    ],
    idealFor: [
      "Stores launching or redesigning a Shopify storefront",
      "Brands that need custom sections and reusable templates",
      "Merchants improving product pages, collection pages, and cart UX",
      "Teams migrating from an old theme or another ecommerce platform",
    ],
    process: [
      {
        title: "Storefront audit and theme plan",
        text: "We review the current store, brand needs, product structure, content workflow, apps, performance issues, and conversion gaps.",
      },
      {
        title: "Section and template design",
        text: "We define the reusable sections, page templates, product modules, collection behavior, cart features, and content controls.",
      },
      {
        title: "Liquid development and QA",
        text: "We build clean theme code, test responsive behavior, verify dynamic content, optimize assets, and check critical ecommerce flows.",
      },
      {
        title: "Launch support and merchant handoff",
        text: "We support theme publishing, redirects, analytics checks, app compatibility, and documentation for content editing.",
      },
    ],
    featureSections: [
      {
        title: "Custom sections for real merchandising",
        text: "Reusable sections give the merchant control over product storytelling, campaigns, testimonials, comparisons, FAQs, and landing pages.",
        image: "/images/portfolio-shopify-fashion-theme.webp",
        points: ["Homepage and campaign sections", "Product storytelling modules", "Reusable landing page blocks"],
      },
      {
        title: "Product and collection experiences that reduce doubt",
        text: "We structure product information, variant behavior, filters, badges, trust elements, and cart paths so shoppers can make decisions faster.",
        image: "/images/hero-video-area-shopify-02.webp",
        points: ["Product page UX", "Collection filtering and sorting", "Cart and drawer refinements"],
      },
    ],
    outcomes: [
      "A branded Shopify theme with flexible merchant editing",
      "Improved product discovery and page structure",
      "Better mobile shopping experience and performance hygiene",
      "Cleaner launch process with theme QA and documentation",
    ],
    faqs: [
      {
        question: "Can you customize an existing Shopify theme?",
        answer:
          "Yes. We can improve an existing theme, build new sections, fix Liquid issues, refine product pages, and clean up theme performance.",
      },
      {
        question: "Can you build a theme from a Figma design?",
        answer:
          "Yes. We can translate approved designs into Shopify sections, templates, responsive layouts, and content controls.",
      },
      {
        question: "Do you handle migration work?",
        answer:
          "Yes. We support theme migration, content structure, redirects, app checks, and launch QA for stores moving to a better storefront setup.",
      },
    ],
  },
  "headless-shopify-commerce": {
    image: "/images/portfolio-headless-commerce-storefront.webp",
    secondaryImage: "/images/hero-video-area-shopify-06.webp",
    metaDescription:
      "Headless Shopify development using Shopify as commerce backend with custom storefronts, Storefront API, checkout, content, search, and analytics.",
    heroLead:
      "Headless Shopify storefronts for brands that need custom frontend control, faster content experiences, advanced buying journeys, and Shopify powering the commerce backend.",
    highlights: [
      { value: "Custom UX", label: "storefronts beyond standard theme limitations" },
      { value: "Shopify-backed", label: "products, cart, checkout, inventory, and orders stay in Shopify" },
      { value: "Performance", label: "modern frontend architecture with clear speed budgets" },
    ],
    overviewTitle: "Use Shopify where it is strong and build the customer experience your brand needs.",
    overview: [
      "Headless commerce is valuable when a traditional theme cannot support the required buying journey, content model, frontend performance, or integration strategy. Shopify remains the commerce engine while the storefront is built as a custom application.",
      "We plan the product data, cart behavior, checkout path, CMS needs, search, analytics, personalization, redirects, and deployment model before development starts. That keeps the storefront fast and avoids fragile API usage.",
      "This service is best for brands with advanced content needs, custom product discovery, multi-region frontend requirements, complex integrations, or a frontend vision that does not fit a standard Shopify theme.",
    ],
    idealFor: [
      "Brands that need a custom storefront experience",
      "Stores combining Shopify with a CMS, search, or personalization layer",
      "Teams with strict frontend performance and content requirements",
      "Merchants whose theme has become too limited or too hard to extend",
    ],
    process: [
      {
        title: "Architecture and commerce mapping",
        text: "We document product data, variant behavior, cart rules, checkout constraints, content sources, redirects, tracking, and launch risks.",
      },
      {
        title: "Frontend and API implementation",
        text: "We build the storefront, connect Shopify Storefront API, shape the cart flow, and integrate content, search, and analytics systems.",
      },
      {
        title: "Performance and SEO validation",
        text: "We check page speed, metadata, structured content, crawl paths, image handling, redirect behavior, and mobile usability.",
      },
      {
        title: "Launch and monitoring",
        text: "We prepare hosting, environment variables, checkout testing, analytics, error monitoring, and post-launch support.",
      },
    ],
    featureSections: [
      {
        title: "Custom storefront architecture",
        text: "A headless storefront can support editorial content, custom journeys, advanced filtering, product storytelling, and fast page transitions.",
        image: "/images/portfolio-headless-commerce-storefront.webp",
        points: ["Next.js storefronts", "CMS and content integration", "Custom product and collection templates"],
      },
      {
        title: "Shopify commerce still runs the transaction",
        text: "Products, pricing, inventory, checkout, orders, and customer operations remain connected to Shopify so the merchant keeps a familiar backend.",
        image: "/images/hero-video-area-shopify-06.webp",
        points: ["Storefront API integration", "Cart and checkout flows", "Analytics and conversion tracking"],
      },
    ],
    outcomes: [
      "A unique storefront experience connected to Shopify commerce",
      "Improved frontend control over content, UX, and performance",
      "Cleaner integration plan for CMS, search, analytics, and marketing tools",
      "Launch checks for SEO, redirects, checkout, and tracking",
    ],
    faqs: [
      {
        question: "Is headless Shopify right for every store?",
        answer:
          "No. Many stores are better served by a strong Shopify theme. Headless is best when the business needs frontend control that a normal theme cannot provide cleanly.",
      },
      {
        question: "Will checkout still use Shopify?",
        answer:
          "Usually yes. Shopify remains the commerce backend, and checkout is kept aligned with Shopify capabilities and account requirements.",
      },
      {
        question: "Can you migrate an existing Shopify theme to headless?",
        answer:
          "Yes. We plan redirects, content structure, product data, SEO, analytics, and checkout testing before replacing the storefront.",
      },
    ],
  },
  "ecommerce-development": {
    image: "/images/portfolio-custom-product-builder.webp",
    secondaryImage: "/images/hero-video-area-shopify-03.webp",
    metaDescription:
      "Ecommerce development for Shopify and custom stores, product builders, checkout flows, subscriptions, catalog systems, payments, and integrations.",
    heroLead:
      "Ecommerce development for brands that need stores, product builders, catalog systems, subscriptions, payment flows, and integrations built around how customers actually buy.",
    highlights: [
      { value: "Conversion", label: "product discovery, buying confidence, and checkout clarity" },
      { value: "Operations", label: "inventory, fulfillment, CRM, ERP, and email integrations" },
      { value: "Flexible", label: "Shopify, WooCommerce, and custom ecommerce architecture" },
    ],
    overviewTitle: "Build a store that supports both the buying journey and the business behind it.",
    overview: [
      "Ecommerce development works best when customer experience and operations are planned together. Product data, options, inventory, discounts, shipping, payment, tax, fulfillment, and email flows all affect the final shopping experience.",
      "We design and build ecommerce systems that help shoppers understand products, compare options, customize purchases, and complete checkout while giving the business clear management tools behind the scenes.",
      "This service is a fit for new stores, redesigns, migrations, custom product builders, subscription flows, checkout improvements, marketplace features, and commerce systems that need custom logic.",
    ],
    idealFor: [
      "Brands launching or rebuilding an ecommerce store",
      "Stores with product options, bundles, subscriptions, or customizers",
      "Businesses that need payment, shipping, inventory, or CRM integrations",
      "Teams improving conversion, tracking, and post-purchase operations",
    ],
    process: [
      {
        title: "Commerce requirements audit",
        text: "We map products, variants, pricing, promotions, shipping, tax, payment, inventory, content, and operational systems.",
      },
      {
        title: "Store and buying flow design",
        text: "We shape product pages, collections, search, cart, checkout, account flows, and post-purchase communication.",
      },
      {
        title: "Development and integration",
        text: "We build the store, product logic, checkout-related flows, and third-party integrations required for daily operations.",
      },
      {
        title: "Launch optimization",
        text: "We test critical paths, analytics, redirects, mobile experience, order handling, and conversion blockers before and after launch.",
      },
    ],
    featureSections: [
      {
        title: "Custom buying flows and product builders",
        text: "When products need options, personalization, bundles, or guided configuration, we create buying paths that make choices easier.",
        image: "/images/portfolio-custom-product-builder.webp",
        points: ["Product customizers", "Bundles and subscriptions", "Guided product selection"],
      },
      {
        title: "Commerce operations connected behind the scenes",
        text: "A good store should reduce manual work. We connect payments, shipping, inventory, CRM, email, analytics, and fulfillment where needed.",
        image: "/images/hero-video-area-shopify-03.webp",
        points: ["Payment and shipping integrations", "Inventory and fulfillment workflows", "CRM, email, and analytics connections"],
      },
    ],
    outcomes: [
      "A store experience built around real customer decisions",
      "Cleaner product, cart, checkout, and post-purchase flows",
      "Integrated operations that reduce manual work",
      "Better tracking and launch confidence",
    ],
    faqs: [
      {
        question: "Do you only work with Shopify?",
        answer:
          "Shopify is a major focus, but we can also work with WooCommerce and custom ecommerce stacks when the business case supports it.",
      },
      {
        question: "Can you build custom product options?",
        answer:
          "Yes. We can build product builders, option rules, custom pricing logic, bundle flows, and guided buying experiences.",
      },
      {
        question: "Can you help after launch?",
        answer:
          "Yes. We support optimization, bug fixes, tracking improvements, feature development, and operational integrations after launch.",
      },
    ],
  },
  "backend-api-integrations": {
    image: "/images/hero-video-area-08.webp",
    secondaryImage: "/images/portfolio-booking-service-platform.webp",
    metaDescription:
      "Backend API development and integrations for REST, GraphQL, webhooks, background jobs, payments, CRM, ERP, email, analytics, and secure data flows.",
    heroLead:
      "Backend API and integration engineering for teams that need reliable data movement, secure server-side rules, webhook processing, automation, and third-party system connections.",
    highlights: [
      { value: "Reliable", label: "API design, validation, logging, retries, and failure handling" },
      { value: "Connected", label: "payments, CRM, ERP, email, analytics, fulfillment, and Shopify" },
      { value: "Secure", label: "permissions, secrets, rate limits, and operational controls" },
    ],
    overviewTitle: "Make the systems behind the product dependable, observable, and easier to operate.",
    overview: [
      "Backend work often decides whether a product feels stable. APIs need clear contracts, integrations need retry logic, webhooks need idempotency, and sensitive data needs validation and protection.",
      "We build backend systems that move data safely between your product and the tools around it. That includes API design, webhook processing, background jobs, database models, third-party connections, reporting, and internal admin controls.",
      "This service is useful for products that need Shopify integrations, payment workflows, CRM or ERP sync, email automation, custom dashboards, reporting systems, and server-side business logic.",
    ],
    idealFor: [
      "Products with fragile integrations or manual data movement",
      "Teams building APIs for frontend apps or partner systems",
      "Businesses connecting Shopify, CRM, ERP, payment, or fulfillment tools",
      "Apps that need webhook processing, workers, queues, and logging",
    ],
    process: [
      {
        title: "System and data flow mapping",
        text: "We identify each system, data owner, trigger, payload, permission, failure state, and reporting requirement.",
      },
      {
        title: "API and integration design",
        text: "We define endpoints, schemas, authentication, webhook handling, database tables, queue behavior, and monitoring points.",
      },
      {
        title: "Implementation and test coverage",
        text: "We build the server-side logic, validate real payloads, test edge cases, and add logging for operational visibility.",
      },
      {
        title: "Deployment and monitoring",
        text: "We prepare production settings, secrets, retries, alerts, documentation, and support for ongoing changes.",
      },
    ],
    featureSections: [
      {
        title: "APIs with clear contracts and safer data rules",
        text: "A backend API should make the frontend and integrations easier to build. We design endpoints around clear resources, validation, and predictable responses.",
        image: "/images/hero-video-area-08.webp",
        points: ["REST and GraphQL APIs", "Auth and role-based access", "Validation, errors, and logs"],
      },
      {
        title: "Integrations that survive real-world failures",
        text: "Third-party systems fail, slow down, or send duplicate events. We design webhooks and sync jobs with retries, idempotency, and visibility.",
        image: "/images/portfolio-booking-service-platform.webp",
        points: ["Webhook handlers", "Background jobs and queues", "CRM, ERP, email, analytics, and Shopify sync"],
      },
    ],
    outcomes: [
      "A backend that supports the product instead of slowing it down",
      "Cleaner API contracts for frontend and partner usage",
      "More reliable third-party integrations and webhook behavior",
      "Better logs, documentation, and operational visibility",
    ],
    faqs: [
      {
        question: "Can you integrate with existing systems?",
        answer:
          "Yes. We can connect to existing APIs, databases, Shopify stores, payment systems, CRM tools, email services, and internal platforms.",
      },
      {
        question: "Can you fix unreliable webhooks?",
        answer:
          "Yes. We review current webhook behavior, add validation, idempotency, retries, logging, and clearer failure handling.",
      },
      {
        question: "Can this include an admin dashboard?",
        answer:
          "Yes. Many backend projects include admin tools for reviewing records, retrying jobs, checking logs, and managing settings.",
      },
    ],
  },
  "ui-ux-product-design": {
    image: "/images/founder-studio-workspace.webp",
    secondaryImage: "/images/hero-video-area-05.webp",
    metaDescription:
      "UI/UX and product design for SaaS, ecommerce, Shopify apps, dashboards, wireframes, prototypes, design systems, and conversion-focused user flows.",
    heroLead:
      "UI/UX and product design for digital products that need clear user flows, polished interfaces, practical design systems, and conversion-focused experiences before development begins.",
    highlights: [
      { value: "Clear", label: "information architecture, flows, and interface hierarchy" },
      { value: "Practical", label: "design systems that developers can implement cleanly" },
      { value: "Commerce-aware", label: "product pages, app workflows, dashboards, and conversion paths" },
    ],
    overviewTitle: "Design the product around the decisions users need to make.",
    overview: [
      "Good product design is not decoration. It clarifies what users can do, what matters now, what changed, and what action should happen next. That is especially important in SaaS dashboards, Shopify apps, ecommerce flows, and operational tools.",
      "We design interfaces around real workflows, content hierarchy, edge states, and development feasibility. The output can include user flows, wireframes, high-fidelity screens, prototypes, component systems, and implementation notes.",
      "This service is best for founders, merchants, and teams that need to turn an idea into a buildable product, improve a confusing interface, or align design and development before investing in a full build.",
    ],
    idealFor: [
      "Founders planning a SaaS, marketplace, or customer portal",
      "Shopify app teams designing merchant workflows",
      "Ecommerce brands improving product and checkout experiences",
      "Teams that need a design system before scaling product work",
    ],
    process: [
      {
        title: "Discovery and user flow mapping",
        text: "We define users, jobs, page hierarchy, decision points, content needs, and success criteria before designing polished screens.",
      },
      {
        title: "Wireframes and interaction model",
        text: "We create low-friction screen structures, navigation patterns, empty states, and flows that make the product easier to understand.",
      },
      {
        title: "Visual design and design system",
        text: "We refine typography, spacing, components, responsive behavior, states, and design tokens for implementation-ready handoff.",
      },
      {
        title: "Review and developer handoff",
        text: "We provide implementation notes, component specs, and iteration support so the design survives the move into code.",
      },
    ],
    featureSections: [
      {
        title: "Interfaces designed for repeated use",
        text: "Operational tools and dashboards should be calm, dense, and easy to scan. We design for daily work instead of only first impressions.",
        image: "/images/founder-studio-workspace.webp",
        points: ["Dashboards and admin panels", "Forms, tables, filters, and states", "Responsive interface systems"],
      },
      {
        title: "Commerce and app flows that reduce friction",
        text: "For ecommerce and Shopify apps, the design must help people compare, configure, trust, purchase, or complete a merchant workflow.",
        image: "/images/hero-video-area-05.webp",
        points: ["Product and checkout UX", "Shopify app workflows", "Prototypes and usability review"],
      },
    ],
    outcomes: [
      "Clearer user journeys and page hierarchy",
      "Polished interface design with responsive states",
      "Design systems and components that support development",
      "Less rework during engineering because flows are resolved earlier",
    ],
    faqs: [
      {
        question: "Can you design before development starts?",
        answer:
          "Yes. We can start with discovery, flows, wireframes, and UI design so development begins with a clear implementation plan.",
      },
      {
        question: "Can you improve an existing interface?",
        answer:
          "Yes. We can audit the product, identify usability issues, simplify flows, improve typography and hierarchy, and prepare developer-ready changes.",
      },
      {
        question: "Do you create design systems?",
        answer:
          "Yes. We can define components, states, spacing, typography, and usage rules that make future product screens more consistent.",
      },
    ],
  },
  "devops-deployment-maintenance": {
    image: "/images/benefits-bg.webp",
    secondaryImage: "/images/hero-video-area-09.webp",
    metaDescription:
      "DevOps, deployment, and maintenance for Next.js, Shopify apps, VPS hosting, CI/CD, monitoring, backups, SSL, PM2, nginx, and production support.",
    heroLead:
      "Deployment and maintenance support for products that need stable hosting, reliable releases, monitoring, backups, SSL, environment management, and ongoing technical care.",
    highlights: [
      { value: "Stable", label: "hosting, process management, SSL, nginx, and environment setup" },
      { value: "Visible", label: "logs, monitoring, uptime checks, backups, and alerts" },
      { value: "Maintainable", label: "release routines, dependency updates, and support documentation" },
    ],
    overviewTitle: "Keep production systems healthy after the first launch.",
    overview: [
      "A product is not finished when it deploys. It needs environment variables, domain setup, SSL, process management, logging, monitoring, backups, dependency updates, and a repeatable release path.",
      "We set up and maintain production infrastructure for websites, apps, Shopify app backends, Next.js projects, VPS deployments, and managed hosting environments. The goal is fewer surprises and faster recovery when something goes wrong.",
      "This service is useful for teams that need launch support, production hardening, uptime checks, hosting migration, SSL fixes, CI/CD, PM2 and nginx setup, or monthly maintenance.",
    ],
    idealFor: [
      "Products moving from local development to production",
      "Sites with unstable hosting, SSL, or 502 gateway issues",
      "Teams that need release checklists and monitoring",
      "Businesses that want ongoing maintenance and security updates",
    ],
    process: [
      {
        title: "Production audit",
        text: "We review hosting, domains, SSL, environment variables, process management, logs, dependencies, backups, and current failure points.",
      },
      {
        title: "Deployment setup",
        text: "We configure the hosting environment, build process, reverse proxy, PM2 or platform process, environment files, and release steps.",
      },
      {
        title: "Monitoring and recovery",
        text: "We add health checks, logs, alerts, backups, rollback notes, and operational documentation for common issues.",
      },
      {
        title: "Ongoing maintenance",
        text: "We support patches, dependency updates, uptime checks, performance reviews, and emergency fixes as the product changes.",
      },
    ],
    featureSections: [
      {
        title: "Deployment paths that are repeatable",
        text: "A clean deployment process reduces risk. We document commands, environment variables, build steps, reload steps, and rollback options.",
        image: "/images/benefits-bg.webp",
        points: ["VPS, Vercel, and managed hosting", "PM2, nginx, SSL, and domain setup", "CI/CD and environment configuration"],
      },
      {
        title: "Maintenance that catches problems earlier",
        text: "Monitoring, logs, health checks, and backups make issues easier to find and recover from before they become expensive outages.",
        image: "/images/hero-video-area-09.webp",
        points: ["Uptime and health checks", "Backups and log review", "Security patches and dependency updates"],
      },
    ],
    outcomes: [
      "A production environment with clearer release steps",
      "Reduced hosting, SSL, and reverse proxy surprises",
      "Better visibility through logs, health checks, and monitoring",
      "Ongoing maintenance plan for updates and support",
    ],
    faqs: [
      {
        question: "Can you fix nginx or SSL issues?",
        answer:
          "Yes. We can inspect nginx, certbot, DNS, app process status, and upstream health to resolve common production issues.",
      },
      {
        question: "Can you maintain an existing app?",
        answer:
          "Yes. We can handle dependency updates, deployment support, backups, monitoring, bug fixes, and technical improvements.",
      },
      {
        question: "Do you work with VPS hosting?",
        answer:
          "Yes. We support VPS deployments with nginx, PM2, SSL, environment files, backups, and health checks when that is the right hosting option.",
      },
    ],
  },
  "performance-seo-optimization": {
    image: "/images/hero-video-area-shopify-10.webp",
    secondaryImage: "/images/bg-blue.webp",
    metaDescription:
      "Performance, SEO, and CRO optimization for Core Web Vitals, technical SEO, schema, page content, tracking, accessibility, and conversion improvements.",
    heroLead:
      "Performance, SEO, and conversion optimization for websites and stores that need faster pages, stronger technical structure, better content depth, and clearer user journeys.",
    highlights: [
      { value: "Fast", label: "Core Web Vitals, images, scripts, rendering, and mobile experience" },
      { value: "Findable", label: "metadata, schema, internal links, crawl paths, and content structure" },
      { value: "Measurable", label: "analytics, events, conversion tracking, and experiment-ready improvements" },
    ],
    overviewTitle: "Improve the parts of the site that affect search visibility and user confidence.",
    overview: [
      "SEO and performance are connected to user experience. Thin pages, slow images, unclear headings, missing schema, weak internal links, poor mobile usability, and messy tracking can all reduce the value of good design.",
      "We audit the site technically and structurally, then improve speed, metadata, content depth, page hierarchy, schema, accessibility, internal linking, and conversion flow. The goal is practical improvement, not generic SEO checklists.",
      "This service is useful for Shopify stores, service websites, SaaS pages, blogs, landing pages, and existing builds that need stronger ranking potential and a better visitor experience.",
    ],
    idealFor: [
      "Websites with thin service pages or weak search landing pages",
      "Stores with slow product, collection, or content pages",
      "Teams that need better Core Web Vitals and mobile usability",
      "Businesses cleaning up analytics, schema, redirects, and technical SEO",
    ],
    process: [
      {
        title: "Performance and SEO audit",
        text: "We review page speed, metadata, headings, content depth, schema, images, scripts, internal links, redirects, and mobile usability.",
      },
      {
        title: "Prioritized improvement plan",
        text: "We separate high-impact fixes from low-value noise so the work targets ranking, speed, and conversion constraints first.",
      },
      {
        title: "Implementation and content structure",
        text: "We improve templates, page sections, technical SEO, accessibility, analytics, and content hierarchy in the codebase.",
      },
      {
        title: "Measurement and iteration",
        text: "We verify changes with testing tools, analytics, search data, and user flow review so future improvements have a baseline.",
      },
    ],
    featureSections: [
      {
        title: "Technical SEO and content depth",
        text: "Search pages need enough useful detail, clear headings, internal links, schema, and matching metadata to explain the service or product.",
        image: "/images/hero-video-area-shopify-10.webp",
        points: ["Metadata and schema", "Service page content expansion", "Internal linking and crawl paths"],
      },
      {
        title: "Speed and conversion improvements",
        text: "We reduce friction by improving rendering, image handling, page structure, mobile layout, tracking, and user decision paths.",
        image: "/images/bg-blue.webp",
        points: ["Core Web Vitals fixes", "Image and script optimization", "Analytics and conversion tracking"],
      },
    ],
    outcomes: [
      "More useful, structured pages for visitors and search engines",
      "Improved page speed and mobile usability",
      "Cleaner metadata, schema, redirects, and internal links",
      "Better tracking for conversion and optimization decisions",
    ],
    faqs: [
      {
        question: "Can you expand thin service pages?",
        answer:
          "Yes. We can add detailed sections, better headings, useful FAQs, internal links, and structured content that supports search intent.",
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No ethical SEO work can guarantee rankings. We improve the technical, content, and UX foundations that help pages compete more effectively.",
      },
      {
        question: "Can this include Core Web Vitals fixes?",
        answer:
          "Yes. We can improve images, scripts, rendering behavior, layout shifts, caching, and frontend performance issues.",
      },
    ],
  },
  "qa-technical-support": {
    image: "/images/discuss.webp",
    secondaryImage: "/images/portfolio-booking-service-platform.webp",
    metaDescription:
      "QA and technical support for bug fixing, regression testing, launch QA, Shopify support, code review, documentation, and ongoing product stabilization.",
    heroLead:
      "QA and technical support for active websites, stores, apps, and digital products that need bug fixing, launch checks, regression testing, code cleanup, and reliable ongoing help.",
    highlights: [
      { value: "Focused", label: "critical flows, bug reports, launch blockers, and regression checks" },
      { value: "Practical", label: "fixes, documentation, testing notes, and support-ready handoff" },
      { value: "Ongoing", label: "retainer support for stores, apps, and production products" },
    ],
    overviewTitle: "Stabilize the product so users, merchants, and teams can trust it.",
    overview: [
      "Support work is most valuable when it is organized around risk. Checkout, login, forms, dashboards, app installs, payment flows, product pages, and admin tools need focused testing and clear bug handling.",
      "We help teams find, prioritize, and fix issues in active products. That can include QA passes, regression testing, code review, bug fixing, documentation, dependency updates, Shopify support, and launch readiness checks.",
      "This service fits teams that already have a product in use, are preparing for launch, inherited a messy codebase, or need a dependable technical partner for ongoing improvements.",
    ],
    idealFor: [
      "Teams preparing for a launch or migration",
      "Stores and apps with recurring bugs or unclear support paths",
      "Agencies needing overflow QA and technical implementation help",
      "Businesses that need monthly support without hiring a full team",
    ],
    process: [
      {
        title: "Issue intake and risk review",
        text: "We collect known issues, identify critical flows, review logs or reproduction steps, and sort fixes by user impact.",
      },
      {
        title: "QA and reproduction",
        text: "We test across devices, browsers, roles, content states, and integrations to confirm what is broken and why.",
      },
      {
        title: "Fixes and regression checks",
        text: "We implement targeted fixes, avoid unrelated rewrites, and retest the affected flows to reduce repeat issues.",
      },
      {
        title: "Documentation and ongoing support",
        text: "We provide notes, handoff details, support routines, and ongoing maintenance for future changes.",
      },
    ],
    featureSections: [
      {
        title: "Launch QA for critical user flows",
        text: "We test the paths that matter most, including forms, checkout, account flows, dashboards, app installs, content pages, and integrations.",
        image: "/images/discuss.webp",
        points: ["Regression testing", "Mobile and browser checks", "Launch readiness reports"],
      },
      {
        title: "Technical support that keeps moving",
        text: "Support should not create more confusion. We document issues, fix them in small batches, and keep the product stable while it evolves.",
        image: "/images/portfolio-booking-service-platform.webp",
        points: ["Bug fixing and code cleanup", "Dependency updates", "Documentation and handoff"],
      },
    ],
    outcomes: [
      "Fewer launch surprises and recurring bugs",
      "Clearer issue priority and reproduction notes",
      "Focused fixes that avoid unnecessary code churn",
      "Ongoing support path for future product changes",
    ],
    faqs: [
      {
        question: "Can you work from a bug list?",
        answer:
          "Yes. We can review an existing bug list, reproduce issues, prioritize fixes, and work through them in clear batches.",
      },
      {
        question: "Can you support Shopify stores and apps?",
        answer:
          "Yes. We support Shopify themes, apps, integrations, checkout-adjacent flows, product data issues, and launch checks.",
      },
      {
        question: "Do you offer ongoing support?",
        answer:
          "Yes. We can provide ongoing support for bug fixes, QA, maintenance, technical questions, and incremental product improvements.",
      },
    ],
  },
};
