export const company = {
  name: "Oru Studio",
  email: "hello@orustudio.com",
  phone: "(307) 303-6989",
  phoneHref: "+13073036989",
  address: "30 N Gould St Ste N, Sheridan, WY, 82801, USA",
  addressLines: ["30 N Gould St Ste N", "Sheridan, WY, 82801, USA"],
  founder: "Naim Hossain Najmul",
  founderTitle: "Founder & Full Stack Developer",
  telegramUrl: "https://t.me/orustudio",
};

export const services = [
  {
    id: "full-stack-web-development",
    title: "Full Stack Web Development",
    slug: "full-stack-web-development",
    icon: "/images/service1.svg",
    image: "/images/case1.webp",
    duration: 1000,
    shortDescription:
      "Production-ready web apps with polished interfaces, secure APIs, dashboards, and scalable data flows.",
    description:
      "End-to-end product development for SaaS, marketplaces, portals, dashboards, and custom business tools. We handle frontend, backend, database design, integrations, deployment, and long-term iteration.",
    deliverables: [
      "Responsive Next.js and React applications",
      "Backend APIs, auth, roles, and database architecture",
      "Admin dashboards, customer portals, and operational tools",
      "Deployment, analytics, monitoring, and documentation",
    ],
  },
  {
    id: "shopify-app-development",
    title: "Shopify App Development",
    slug: "shopify-app-development",
    icon: "/images/service2.svg",
    image: "/images/case2.webp",
    duration: 1100,
    shortDescription:
      "Custom embedded Shopify apps for merchant workflows, automation, product data, subscriptions, and integrations.",
    description:
      "We build Shopify apps that solve real merchant problems, from embedded admin experiences to custom data, webhooks, billing, third-party integrations, and storefront features.",
    deliverables: [
      "Embedded admin apps and merchant dashboards",
      "Admin GraphQL, webhooks, billing, and app proxy setup",
      "Metafields, metaobjects, custom data, and automation",
      "App review preparation, QA, and deployment support",
    ],
  },
  {
    id: "shopify-theme-development",
    title: "Shopify Theme Development",
    slug: "shopify-theme-development",
    icon: "/images/service3.svg",
    image: "/images/case3.webp",
    duration: 1200,
    shortDescription:
      "Fast, conversion-focused Shopify themes with custom sections, clean Liquid, and flexible content controls.",
    description:
      "Custom Shopify storefronts built for speed, brand consistency, and easy merchant editing. We create reusable sections, product templates, collection experiences, and checkout-ready shopping flows.",
    deliverables: [
      "Custom Liquid sections and theme templates",
      "Product, collection, cart, and landing page builds",
      "Performance, accessibility, and SEO improvements",
      "Theme customization, migration, and ongoing support",
    ],
  },
  {
    id: "headless-shopify-commerce",
    title: "Headless Shopify Commerce",
    slug: "headless-shopify-commerce",
    icon: "/images/service4.svg",
    image: "/images/case4.webp",
    duration: 1300,
    shortDescription:
      "Headless commerce builds using Shopify as the backend and modern frontend frameworks for custom buying journeys.",
    description:
      "For stores that need more control than a traditional theme, we build custom storefronts with Shopify product data, cart, checkout, search, content, and analytics integrations.",
    deliverables: [
      "Custom storefront architecture",
      "Storefront API, cart, checkout, and account flows",
      "CMS, search, analytics, and marketing integrations",
      "Performance budgets and launch monitoring",
    ],
  },
  {
    id: "ecommerce-development",
    title: "Ecommerce Development",
    slug: "ecommerce-development",
    icon: "/images/service1.svg",
    image: "/images/blog-1.jpg",
    duration: 1400,
    shortDescription:
      "Online stores, product builders, checkout flows, subscriptions, and catalog systems designed to sell.",
    description:
      "We design and develop ecommerce systems for Shopify, WooCommerce, and custom stacks, including catalogs, filters, bundles, subscriptions, payments, and fulfillment integrations.",
    deliverables: [
      "Store setup, migration, and custom buying flows",
      "Product options, bundles, subscriptions, and customizers",
      "Payment, shipping, CRM, ERP, and inventory integrations",
      "Conversion tracking and post-launch optimization",
    ],
  },
  {
    id: "backend-api-integrations",
    title: "Backend API & Integrations",
    slug: "backend-api-integrations",
    icon: "/images/service2.svg",
    image: "/images/blog-2.jpg",
    duration: 1500,
    shortDescription:
      "Reliable server-side systems, third-party integrations, automation, and secure data handling.",
    description:
      "We build the backend systems that keep products dependable: APIs, workers, webhook handlers, integrations, role-based access, reporting, and database models.",
    deliverables: [
      "REST and GraphQL API development",
      "Webhook processing and background jobs",
      "Payment, CRM, ERP, email, and analytics integrations",
      "Security, validation, logging, and operational tooling",
    ],
  },
  {
    id: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    slug: "ui-ux-product-design",
    icon: "/images/service3.svg",
    image: "/images/blog-3.jpg",
    duration: 1600,
    shortDescription:
      "Clear interfaces, design systems, user flows, and prototypes that turn product ideas into usable software.",
    description:
      "We turn rough ideas into practical digital products through discovery, information architecture, interface design, prototyping, and implementation-ready design systems.",
    deliverables: [
      "Discovery workshops and product flows",
      "Wireframes, prototypes, and responsive UI design",
      "Design systems, components, and handoff specs",
      "Usability review and conversion improvements",
    ],
  },
  {
    id: "devops-deployment-maintenance",
    title: "DevOps, Deployment & Maintenance",
    slug: "devops-deployment-maintenance",
    icon: "/images/service4.svg",
    image: "/images/benefits-bg.webp",
    duration: 1700,
    shortDescription:
      "Deployment pipelines, hosting, monitoring, backups, and maintenance for stable production systems.",
    description:
      "We set up production infrastructure and keep products healthy with CI/CD, environment management, monitoring, backups, release support, and ongoing maintenance.",
    deliverables: [
      "Vercel, VPS, cloud, and managed hosting setup",
      "CI/CD pipelines and environment configuration",
      "Monitoring, backups, logging, and uptime checks",
      "Security patches, upgrades, and maintenance plans",
    ],
  },
  {
    id: "performance-seo-optimization",
    title: "Performance, SEO & CRO",
    slug: "performance-seo-optimization",
    icon: "/images/service1.svg",
    image: "/images/bg-blue.webp",
    duration: 1800,
    shortDescription:
      "Speed, technical SEO, accessibility, tracking, and conversion improvements for existing sites.",
    description:
      "We audit and improve real user experience with performance fixes, metadata, structured pages, accessibility passes, tracking cleanup, and conversion-focused interface improvements.",
    deliverables: [
      "Core Web Vitals and frontend performance fixes",
      "Technical SEO, metadata, sitemap, and schema support",
      "Analytics, events, and conversion tracking",
      "Accessibility and mobile usability improvements",
    ],
  },
  {
    id: "qa-technical-support",
    title: "QA & Technical Support",
    slug: "qa-technical-support",
    icon: "/images/service2.svg",
    image: "/images/discuss.webp",
    duration: 1900,
    shortDescription:
      "Bug fixing, testing, launch checks, code cleanup, and dependable support for active products.",
    description:
      "We help teams stabilize and improve active products through focused QA, regression testing, bug fixes, code review, documentation, and technical support.",
    deliverables: [
      "Manual QA, regression checks, and launch testing",
      "Bug fixing, refactoring, and dependency updates",
      "Documentation and developer handoff",
      "Retainer support for ongoing product work",
    ],
  },
];

export const portfolioItems = [
  {
    id: "shopify-fashion-theme-system",
    title: "Shopify Fashion Theme System",
    slug: "shopify-fashion-theme-system",
    category: "Shopify Theme, Ecommerce",
    image: "/images/portfolio-shopify-fashion-theme.webp",
    logo: "/images/project-logo.svg",
    cIcon: "/images/country.png",
    description:
      "A conversion-focused Shopify theme system with modular sections, fast product discovery, and flexible merchandising controls.",
    challenge:
      "The merchant needed a branded storefront that stayed easy to manage during seasonal launches without relying on repeated developer changes.",
    solution:
      "We built reusable Liquid sections, product storytelling modules, collection filters, cart refinements, and performance-focused templates.",
    results: ["Flexible campaign pages", "Faster product browsing", "Cleaner merchant editing"],
  },
  {
    id: "merchant-automation-shopify-app",
    title: "Merchant Automation Shopify App",
    slug: "merchant-automation-shopify-app",
    category: "Shopify App, Automation",
    image: "/images/portfolio-merchant-automation-app.webp",
    logo: "/images/project-logo.svg",
    cIcon: "/images/country.png",
    description:
      "An embedded Shopify app that automates product data, order tags, metafields, and merchant workflow rules.",
    challenge:
      "The client was manually updating product and order metadata across multiple campaigns, creating operational errors.",
    solution:
      "We designed an embedded app with rule builders, webhook processing, Admin GraphQL mutations, and clear status reporting.",
    results: ["Reduced manual operations", "Reliable webhook handling", "Merchant-friendly admin UX"],
  },
  {
    id: "custom-product-builder",
    title: "Custom Product Builder for Apparel",
    slug: "custom-product-builder",
    category: "Full Stack, Ecommerce",
    image: "/images/portfolio-custom-product-builder.webp",
    logo: "/images/project-logo.svg",
    cIcon: "/images/country.png",
    description:
      "A custom product builder for branded apparel with live previews, configurable options, and ecommerce checkout integration.",
    challenge:
      "The buying journey required more visual control than standard product options could provide.",
    solution:
      "We created an interactive builder, option rules, price calculations, cart integration, and admin-friendly content controls.",
    results: ["Better customization flow", "Higher quote quality", "Reduced support questions"],
  },
  {
    id: "saas-operations-dashboard",
    title: "SaaS Operations Dashboard",
    slug: "saas-operations-dashboard",
    category: "Full Stack, SaaS",
    image: "/images/portfolio-saas-operations-dashboard.webp",
    logo: "/images/project-logo.svg",
    cIcon: "/images/country.png",
    description:
      "A secure operational dashboard with role-based access, API integrations, activity tracking, and reporting views.",
    challenge:
      "The team needed one source of truth for operational status, customer requests, and internal workflow visibility.",
    solution:
      "We built a full stack dashboard with authentication, data models, integrations, filters, and clean management screens.",
    results: ["Centralized operations", "Role-based visibility", "Faster reporting"],
  },
  {
    id: "headless-commerce-storefront",
    title: "Headless Commerce Storefront",
    slug: "headless-commerce-storefront",
    category: "Headless Shopify, Next.js",
    image: "/images/portfolio-headless-commerce-storefront.webp",
    logo: "/images/project-logo.svg",
    cIcon: "/images/country.png",
    description:
      "A custom storefront using Shopify product data with modern frontend performance and tailored content presentation.",
    challenge:
      "The brand needed a unique shopping experience that could not be achieved cleanly in a standard theme.",
    solution:
      "We connected Shopify APIs to a custom frontend with cart flows, content sections, analytics, and performance budgets.",
    results: ["Custom buying journey", "Fast page transitions", "Stronger brand control"],
  },
  {
    id: "booking-and-service-platform",
    title: "Booking & Service Platform",
    slug: "booking-and-service-platform",
    category: "Web App, Backend",
    image: "/images/portfolio-booking-service-platform.webp",
    logo: "/images/project-logo.svg",
    cIcon: "/images/country.png",
    description:
      "A service booking platform with customer forms, admin review flows, notifications, and reporting.",
    challenge:
      "The business was managing service requests across email and spreadsheets with no clear status tracking.",
    solution:
      "We developed a full stack portal with forms, admin queues, automated notifications, and searchable records.",
    results: ["Clear request status", "Less manual follow-up", "Better customer response time"],
  },
];

export const blogPosts = [
  {
    id: "shopify-app-development-roadmap",
    title: "A Practical Roadmap for Shopify App Development",
    slug: "shopify-app-development-roadmap",
    category: "Shopify App",
    thumbnail: "/images/blog-1.jpg",
    date: "2026-07-18",
    readTime: "11 min read",
    description:
      "How to plan an embedded Shopify app from merchant workflow to Admin GraphQL, webhooks, billing, and launch QA.",
    content: [
      "A strong Shopify app starts with a merchant problem, not a feature list. Define the workflow, the data touched by the workflow, and the exact place where the app should appear inside Shopify admin.",
      "After the workflow is clear, map the technical pieces: Admin GraphQL operations, webhook events, billing requirements, app proxy needs, and any custom data stored in metafields or metaobjects.",
      "The last stage is launch readiness. Test install, uninstall, permissions, billing edge cases, webhook retries, error states, and merchant-facing documentation before submitting or deploying broadly.",
    ],
    body: [
      {
        type: "paragraph",
        text: "A Shopify app project can become complicated quickly if it starts with screens instead of merchant workflow. The strongest apps begin with a narrow operational problem: saving time, reducing errors, improving merchandising, automating a repeated task, or connecting Shopify to another system the business already uses.",
      },
      {
        type: "paragraph",
        text: "Before choosing architecture, write down the merchant action in plain language. What does the merchant need to do, where do they do it today, what Shopify data is involved, and what output should the app produce? That workflow becomes the scope filter for every design and engineering decision.",
      },
      {
        type: "heading",
        text: "Define the merchant workflow before the feature list",
      },
      {
        type: "paragraph",
        text: "A useful discovery process follows the merchant from trigger to result. For example, a store owner may need to tag high-value customers, sync inventory to a supplier, create custom product bundles, generate invoices, or review orders that match a fraud rule. Each workflow has a starting event, required data, decision points, failure states, and a final confirmation.",
      },
      {
        type: "list",
        items: [
          "Identify the exact Shopify resources the app reads or changes, such as products, variants, orders, customers, discounts, inventory, or metaobjects.",
          "Decide whether the app is mostly embedded admin UI, background automation, storefront extension, checkout-related logic, or a combination.",
          "Map every permission scope to a merchant-facing feature so the app never requests access it does not use.",
          "Write down what happens when the merchant installs, completes setup, changes settings, and uninstalls the app.",
        ],
      },
      {
        type: "image",
        src: "/images/portfolio-merchant-automation-app.webp",
        alt: "Shopify merchant automation app interface",
        caption: "A good Shopify app roadmap connects merchant workflow, Shopify data, app UI, background jobs, and support paths before development starts.",
      },
      {
        type: "heading",
        text: "Plan the technical architecture around Shopify data",
      },
      {
        type: "paragraph",
        text: "Once the workflow is clear, the technical plan becomes much easier. Most Shopify apps need an embedded interface, a backend, database tables for app-owned data, Admin GraphQL operations, webhook handlers, authentication, billing logic, and background jobs for long-running tasks. The roadmap should show which parts are needed for the first release and which can wait.",
      },
      {
        type: "paragraph",
        text: "Webhook design deserves special attention. Webhooks should be idempotent, fast to acknowledge, logged, and safe to retry. If an event requires heavy processing, store the event and hand it to a queue or background worker. That keeps the app resilient when Shopify retries events or when a merchant has a large catalog.",
      },
      {
        type: "heading",
        text: "Build for onboarding, billing, and edge cases",
      },
      {
        type: "paragraph",
        text: "A first-time merchant should understand the app within a few minutes. Keep setup focused, show connection status clearly, and explain what the app will change before it changes anything. For paid apps, billing needs the same clarity: plan selection, trial behavior, upgrade paths, cancellation, and what happens when payment is declined or a subscription changes.",
      },
      {
        type: "callout",
        text: "The roadmap is not only a development checklist. It is a risk-control document that keeps product, engineering, billing, merchant support, and App Store readiness aligned.",
      },
      {
        type: "heading",
        text: "Launch QA should mirror real merchant behavior",
      },
      {
        type: "paragraph",
        text: "Before launch, test the app on a fresh development store and behave like a merchant who has never seen it before. Install the app, deny or accept permissions, complete onboarding, trigger the main workflow, review logs, change settings, uninstall, reinstall, and confirm old data does not create confusing behavior.",
      },
      {
        type: "list",
        items: [
          "Confirm install and OAuth flows work consistently across browsers.",
          "Test permission errors and missing data states instead of only happy paths.",
          "Verify webhook retries, duplicate events, and uninstall cleanup.",
          "Review performance on stores with realistic product, order, or customer volume.",
          "Prepare support documentation, screenshots, and a clear merchant contact path.",
        ],
      },
      {
        type: "paragraph",
        text: "A practical roadmap keeps the first release small enough to ship and complete enough to trust. That balance is what turns a Shopify app from an idea into a dependable tool merchants can use every day.",
      },
    ],
  },
  {
    id: "shopify-theme-sections-that-sell",
    title: "Shopify Theme Sections That Help Stores Sell",
    slug: "shopify-theme-sections-that-sell",
    category: "Shopify Theme",
    thumbnail: "/images/blog-2.jpg",
    date: "2026-07-02",
    readTime: "9 min read",
    description:
      "A guide to building reusable Shopify sections for product storytelling, landing pages, trust signals, and conversion-focused collections.",
    content: [
      "Good Shopify themes give merchants control without letting every page become inconsistent. Reusable sections should have clear settings, sensible defaults, and enough constraints to protect the design.",
      "High-impact sections include product proof, comparison blocks, featured collections, benefit strips, reviews, FAQs, and campaign hero modules that connect cleanly to products and collections.",
      "Performance matters. Keep media optimized, avoid heavy scripts, limit layout shifts, and make every section work across mobile and desktop before it reaches the merchant.",
    ],
    body: [
      {
        type: "paragraph",
        text: "The best Shopify theme sections do two jobs at once: they help merchants tell a stronger product story and they protect the storefront from inconsistent editing. A section should be flexible enough for campaigns and simple enough that a busy store team can use it without design support every week.",
      },
      {
        type: "paragraph",
        text: "A theme becomes easier to operate when sections are designed around real merchandising needs. Instead of creating a generic text-and-image block for everything, build purposeful sections for product proof, comparison, trust, collection discovery, social proof, and buying confidence.",
      },
      {
        type: "heading",
        text: "Start with the selling job of each section",
      },
      {
        type: "paragraph",
        text: "Every section should answer a question shoppers have before buying. A benefit strip can explain the brand promise. A comparison table can clarify why one product is different from another. A review block can reduce doubt. A featured collection can guide shoppers toward the next useful choice.",
      },
      {
        type: "list",
        items: [
          "Campaign hero sections should connect to products, collections, and seasonal messages without custom code.",
          "Product story sections should support concise copy, image crops, badges, and mobile-first stacking.",
          "Trust sections should make shipping, returns, guarantees, ingredients, materials, or support policies easy to scan.",
          "FAQ sections should be reusable across product pages, landing pages, and collection templates.",
        ],
      },
      {
        type: "image",
        src: "/images/blog-2.jpg",
        alt: "Abstract product display used as Shopify theme article imagery",
        caption: "Reusable sections work best when the content controls match a real merchandising purpose, not a generic layout pattern.",
      },
      {
        type: "heading",
        text: "Give merchants useful controls, not unlimited controls",
      },
      {
        type: "paragraph",
        text: "Unlimited settings sound helpful until the storefront becomes hard to maintain. A good section offers controlled choices: layout direction, text alignment, background option, product or collection picker, image focal point, button destination, and a few brand-safe spacing options. That keeps pages editable while preserving design quality.",
      },
      {
        type: "paragraph",
        text: "Default values matter. If a merchant drops a section onto a page and the first version looks broken, the section is not ready. Defaults should show a complete, balanced layout with predictable spacing, responsive image behavior, and readable text at common breakpoints.",
      },
      {
        type: "heading",
        text: "Design sections around mobile shopping",
      },
      {
        type: "paragraph",
        text: "Many Shopify stores receive a large share of traffic from mobile devices, so sections should be tested on narrow screens first. Long headings need to wrap cleanly, product cards need stable heights, buttons need enough tap area, and images need crops that still communicate the product or offer.",
      },
      {
        type: "callout",
        text: "A section is successful when a merchant can reuse it many times and shoppers still feel like every page was designed intentionally.",
      },
      {
        type: "heading",
        text: "Performance is part of conversion",
      },
      {
        type: "paragraph",
        text: "Theme sections should not add heavy scripts or oversized images by default. Use responsive media, lazy load non-critical assets, keep animation subtle, and avoid layout shifts caused by missing image dimensions. Strong conversion design loses value if the page feels slow or unstable.",
      },
      {
        type: "paragraph",
        text: "When Shopify sections are planned this way, the theme becomes a selling system rather than a set of decorative blocks. Merchants get practical control, shoppers get clearer buying information, and the storefront remains easier to improve after launch.",
      },
    ],
  },
  {
    id: "full-stack-product-launch-checklist",
    title: "Full Stack Product Launch Checklist",
    slug: "full-stack-product-launch-checklist",
    category: "Full Stack",
    thumbnail: "/images/blog-3.jpg",
    date: "2026-06-21",
    readTime: "10 min read",
    description:
      "The checks we run before shipping web apps: auth, data validation, performance, deployment, analytics, and support paths.",
    content: [
      "A product launch is not only a deploy. Before launch, confirm the critical user flows, authentication rules, permissions, validation, empty states, error states, and email or notification paths.",
      "Production infrastructure needs the same attention as the interface. Check environment variables, logs, backups, monitoring, cache rules, redirects, and rollback options.",
      "After launch, watch real usage. Analytics, support requests, and logs reveal the next most valuable improvements far faster than internal guesses.",
    ],
    body: [
      {
        type: "paragraph",
        text: "A full stack launch is a business event, not only a deployment. By the time the product reaches production, the team should know which user flows must work, what failure looks like, who receives alerts, how data is protected, and how the release can be rolled back if something unexpected happens.",
      },
      {
        type: "paragraph",
        text: "The checklist below is the kind of review we run before shipping customer-facing web apps, SaaS tools, dashboards, booking systems, and commerce workflows. It keeps attention on the parts that create support issues, revenue loss, or user trust problems when they are skipped.",
      },
      {
        type: "heading",
        text: "Confirm the critical user journeys",
      },
      {
        type: "paragraph",
        text: "Start with the flows that create value: sign up, sign in, checkout, booking, form submission, account update, invitation, payment, upload, report generation, or whatever the product exists to help users complete. These paths need manual QA, automated coverage where practical, and clear fallback states.",
      },
      {
        type: "list",
        items: [
          "Test authenticated and unauthenticated states for every protected route.",
          "Validate role-based permissions for owners, admins, members, customers, and guests.",
          "Review required fields, invalid values, duplicate submissions, and slow network behavior.",
          "Confirm empty states, loading states, success states, and error messages are useful.",
        ],
      },
      {
        type: "image",
        src: "/images/blog-3.jpg",
        alt: "Soft product display used for launch checklist article",
        caption: "A strong launch checklist connects product UX, backend behavior, deployment readiness, analytics, and support response.",
      },
      {
        type: "heading",
        text: "Review backend and data safety",
      },
      {
        type: "paragraph",
        text: "Backend readiness means more than passing local tests. Confirm database migrations are safe, required environment variables are present, secrets are not exposed, rate limits are reasonable, and all third-party integrations have useful logging. If the product sends emails, webhooks, invoices, or notifications, verify templates and delivery events in production-like conditions.",
      },
      {
        type: "paragraph",
        text: "Backups and recovery plans should be checked before launch. A product team does not need a complex disaster recovery plan for every small release, but it does need to know how important data is backed up, how long recovery would take, and who is responsible if something breaks.",
      },
      {
        type: "heading",
        text: "Prepare the deployment path",
      },
      {
        type: "paragraph",
        text: "A release should have a known deployment command, a known environment, and a known rollback option. Redirects, cache rules, image domains, build variables, cron jobs, and serverless function settings should be checked before the final push. This is where many last-minute issues appear.",
      },
      {
        type: "callout",
        text: "The launch goal is not to eliminate every possible risk. The goal is to identify the important risks early enough that the team can make clear decisions.",
      },
      {
        type: "heading",
        text: "Watch the product after launch",
      },
      {
        type: "paragraph",
        text: "Launch work continues after the deploy finishes. Monitor logs, analytics, conversion events, form submissions, payment activity, and customer support messages. Real user behavior will quickly show which assumptions were correct and which parts of the product need improvement.",
      },
      {
        type: "paragraph",
        text: "A calm launch is usually the result of ordinary work done carefully: clear scope, tested flows, reliable infrastructure, useful analytics, and a support path. When those pieces are in place, the team can focus on learning from users instead of reacting to avoidable problems.",
      },
    ],
  },
  {
    id: "headless-shopify-vs-custom-theme",
    title: "Headless Shopify or Custom Theme: How to Choose",
    slug: "headless-shopify-vs-custom-theme",
    category: "Ecommerce",
    thumbnail: "/images/case1.webp",
    date: "2026-06-08",
    readTime: "8 min read",
    description:
      "When a Shopify theme is the pragmatic choice and when a headless storefront is worth the extra architecture.",
    content: [
      "A custom Shopify theme is usually the right first choice when the store needs strong branding, fast launch, merchant editing, and standard product, cart, and checkout behavior.",
      "Headless becomes useful when the buying journey, content model, performance goals, or multi-channel requirements exceed what a theme can support cleanly.",
      "The decision should include maintenance cost. Headless gives more control, but it also adds responsibility for frontend hosting, data fetching, analytics, and ongoing engineering support.",
    ],
    body: [
      {
        type: "paragraph",
        text: "Choosing between a custom Shopify theme and a headless storefront is mostly a question of business need, team capacity, and long-term maintenance. Both approaches can produce a strong commerce experience, but they solve different problems and create different responsibilities after launch.",
      },
      {
        type: "paragraph",
        text: "A custom theme keeps the store close to Shopify's native editing model. Merchants can use the theme editor, apps usually integrate more directly, checkout remains standard, and the launch path is often faster. Headless gives more control over frontend architecture, content presentation, and cross-platform experiences, but it asks the team to own more of the stack.",
      },
      {
        type: "heading",
        text: "When a custom Shopify theme is the pragmatic choice",
      },
      {
        type: "paragraph",
        text: "A theme is usually the best choice when the store needs better branding, stronger sections, improved performance, cleaner product pages, and a manageable admin experience. Most direct-to-consumer stores can go very far with a well-built custom theme and a disciplined section system.",
      },
      {
        type: "list",
        items: [
          "The store relies on standard Shopify product, cart, and checkout behavior.",
          "The merchant team needs simple visual editing without developer support for every campaign.",
          "The budget and timeline favor a focused storefront improvement over a broader platform build.",
          "The app ecosystem and Shopify theme editor are important to daily operations.",
        ],
      },
      {
        type: "image",
        src: "/images/case1.webp",
        alt: "Ecommerce storefront project preview",
        caption: "A custom Shopify theme is often the fastest path to a polished storefront when native Shopify workflows still fit the business.",
      },
      {
        type: "heading",
        text: "When headless starts to make sense",
      },
      {
        type: "paragraph",
        text: "Headless becomes valuable when the storefront needs a content model, user experience, or performance strategy that is difficult to achieve inside a theme. Examples include complex editorial commerce, multi-brand storefronts, custom product discovery, non-standard buying journeys, or a frontend shared across multiple systems.",
      },
      {
        type: "paragraph",
        text: "It can also be useful when the business has an engineering team ready to maintain the frontend, data fetching, deployment pipeline, preview workflow, analytics, redirects, and integration logic. Without that ownership, headless can feel powerful at launch and expensive six months later.",
      },
      {
        type: "heading",
        text: "Compare total cost, not only launch cost",
      },
      {
        type: "paragraph",
        text: "The decision should include support and iteration. A theme typically centralizes more work inside Shopify. A headless stack adds more moving parts: hosting, cache strategy, APIs, CMS integration, build times, preview environments, error monitoring, and custom developer workflows.",
      },
      {
        type: "callout",
        text: "Choose headless for a clear strategic advantage, not because it sounds more modern. A focused custom theme is often the better commercial decision.",
      },
      {
        type: "paragraph",
        text: "The safest approach is to define the storefront requirements first, then choose the architecture that satisfies those requirements with the least unnecessary complexity. When the architecture fits the business, the store becomes easier to grow instead of harder to maintain.",
      },
    ],
  },
  {
    id: "backend-integrations-for-commerce",
    title: "Backend Integrations Every Commerce Team Should Plan",
    slug: "backend-integrations-for-commerce",
    category: "Backend",
    thumbnail: "/images/case2.webp",
    date: "2026-05-24",
    readTime: "9 min read",
    description:
      "Payments, inventory, CRM, fulfillment, analytics, and webhook processing need a dependable backend plan.",
    content: [
      "Commerce teams often grow into integration complexity. Orders, customers, inventory, support, email, analytics, and fulfillment systems all need clean data movement.",
      "A reliable integration plan includes validation, retry behavior, logging, rate limit handling, and a clear place for staff to inspect failures.",
      "Treat integrations as product features. They need design, implementation, monitoring, and support just like customer-facing screens.",
    ],
    body: [
      {
        type: "paragraph",
        text: "Commerce operations rarely stay inside one system. A growing store may use Shopify, payment tools, warehouse software, email platforms, customer support tools, accounting software, analytics dashboards, and custom internal systems. The backend becomes the place where those workflows either stay reliable or slowly become fragile.",
      },
      {
        type: "paragraph",
        text: "A good integration plan starts by identifying which data is authoritative. Products may live in Shopify, inventory may be managed by a warehouse, customer support may rely on an external helpdesk, and financial reporting may depend on accounting exports. Without clear ownership, teams end up debugging mismatched data instead of serving customers.",
      },
      {
        type: "heading",
        text: "Map the data flow before writing code",
      },
      {
        type: "paragraph",
        text: "For each integration, document the trigger, source data, destination system, transformation rules, failure behavior, and staff visibility. This helps the engineering team design predictable jobs and helps the operations team understand what happens when something fails.",
      },
      {
        type: "list",
        items: [
          "Order flows may need fulfillment routing, tax handling, payment status checks, and customer notifications.",
          "Inventory flows need clear rules for reservations, stock adjustments, backorders, and sync conflicts.",
          "CRM flows should avoid duplicate customers and preserve consent, tags, segments, and lifecycle events.",
          "Analytics flows need consistent event names, order IDs, customer IDs, and attribution fields.",
        ],
      },
      {
        type: "image",
        src: "/images/case2.webp",
        alt: "Commerce integration workflow preview",
        caption: "Backend integrations should be designed as operational products with visibility, retries, and clear ownership.",
      },
      {
        type: "heading",
        text: "Build for retries, logs, and inspection",
      },
      {
        type: "paragraph",
        text: "Integration failures are normal. APIs time out, rate limits happen, webhooks repeat, and third-party systems change behavior. A reliable backend assumes these things will happen and gives the team tools to recover: idempotent handlers, retry queues, structured logs, failure dashboards, and manual reprocessing options.",
      },
      {
        type: "paragraph",
        text: "Staff visibility matters as much as technical correctness. If a fulfillment sync fails, the operations team should not need a developer to inspect raw logs. Provide a simple way to see what failed, why it failed, and whether it is being retried automatically.",
      },
      {
        type: "heading",
        text: "Keep integrations maintainable",
      },
      {
        type: "paragraph",
        text: "Every integration should have a small owner-facing contract: what it does, which data it changes, what credentials it uses, which environments it runs in, and what alerts exist. This documentation prevents one-off automation from becoming undocumented business infrastructure.",
      },
      {
        type: "callout",
        text: "A backend integration is successful when the business can trust it during normal operations and understand it quickly when something breaks.",
      },
      {
        type: "paragraph",
        text: "Planning these details early reduces support load, protects revenue, and makes future systems easier to add. The goal is not only to connect tools, but to create dependable operational flow across the entire commerce stack.",
      },
    ],
  },
  {
    id: "improving-existing-web-apps",
    title: "How We Improve Existing Web Apps Without Rebuilding Everything",
    slug: "improving-existing-web-apps",
    category: "Maintenance",
    thumbnail: "/images/case3.webp",
    date: "2026-05-09",
    readTime: "8 min read",
    description:
      "A practical approach to audits, bug fixing, performance, UX cleanup, and safe incremental releases.",
    content: [
      "Not every product needs a rebuild. Many products need a focused audit, a prioritized issue list, and a release plan that fixes the most painful problems first.",
      "We start with user-facing bugs, performance bottlenecks, security risks, and code paths that slow future development.",
      "Small, verified releases are usually better than broad rewrites. They reduce risk and let the product improve while the business keeps running.",
    ],
    body: [
      {
        type: "paragraph",
        text: "When an existing web app feels slow, fragile, or hard to extend, rebuilding from scratch can sound attractive. In practice, many products do not need a rebuild. They need a clear audit, a priority order, and a series of focused releases that improve the product while users and business operations continue.",
      },
      {
        type: "paragraph",
        text: "The first step is to separate frustration from evidence. A team may feel that everything is broken, but the highest-impact work usually lives in a few areas: user-facing bugs, slow pages, confusing workflows, missing validation, brittle integrations, or code paths that make every new feature expensive.",
      },
      {
        type: "heading",
        text: "Start with an audit that produces decisions",
      },
      {
        type: "paragraph",
        text: "A useful audit does not end with a long generic report. It should identify risks, explain business impact, estimate effort, and recommend an order of work. The goal is to help the team decide what to fix now, what to schedule later, and what to leave alone.",
      },
      {
        type: "list",
        items: [
          "Review critical user flows and record where users get blocked or confused.",
          "Check performance on important pages instead of only testing the homepage.",
          "Inspect authentication, permissions, validation, backups, and dependency risks.",
          "Look for repeated code, unclear data ownership, missing logs, and difficult deployment steps.",
        ],
      },
      {
        type: "image",
        src: "/images/case3.webp",
        alt: "Existing web app improvement project preview",
        caption: "Incremental improvement works best when every release has a clear target and a way to verify success.",
      },
      {
        type: "heading",
        text: "Prioritize fixes by user impact and release risk",
      },
      {
        type: "paragraph",
        text: "The best first fixes are usually visible and contained. A broken form, slow dashboard, confusing checkout step, missing email, or unreliable admin action can often be improved without changing the entire architecture. These wins create trust and give the team momentum.",
      },
      {
        type: "paragraph",
        text: "Large internal refactors should still happen when they remove real risk, but they need a release strategy. Wrap changes behind tests, feature flags, or small migration steps. Replace risky code paths gradually and verify each step before moving to the next.",
      },
      {
        type: "heading",
        text: "Improve the product while it stays live",
      },
      {
        type: "paragraph",
        text: "A live product has constraints that a greenfield build does not. Users keep using it, staff keep depending on it, and data keeps changing. That is why incremental work needs backups, rollback plans, staging review, and clear communication around visible changes.",
      },
      {
        type: "callout",
        text: "A rebuild should be a business decision with evidence. If focused improvement can solve the pain faster and with less risk, that is usually the better path.",
      },
      {
        type: "paragraph",
        text: "The outcome of this approach is a healthier product, not just a cleaner codebase. Users experience fewer issues, the team releases with more confidence, and future features become easier to build because the worst bottlenecks have been removed in a controlled way.",
      },
    ],
  },
  {
    id: "shopify-app-store-review-readiness",
    title: "Shopify App Store Review Readiness Checklist",
    slug: "shopify-app-store-review-readiness",
    category: "Shopify App",
    thumbnail: "/images/portfolio-merchant-automation-app.webp",
    date: "2026-04-22",
    readTime: "10 min read",
    description:
      "What to check before submitting a public Shopify app, from onboarding and billing to permissions, webhooks, and support content.",
    content: [
      "A successful Shopify App Store submission starts before the final upload. The app needs a clear merchant use case, a focused onboarding flow, and permissions that match the features shown in the interface.",
      "Review readiness also includes billing behavior, uninstall cleanup, webhook reliability, embedded app navigation, privacy links, app listing copy, screenshots, and support details.",
      "The best preparation is to test like a new merchant. Install the app on a clean store, complete setup, trigger real edge cases, review empty states, and confirm every public promise is backed by working product behavior.",
    ],
    body: [
      {
        type: "paragraph",
        text: "Preparing a Shopify app for App Store review is not a final-week task. The app should be designed from the beginning with clear merchant value, appropriate permissions, predictable onboarding, transparent billing, and reliable uninstall behavior. Review readiness is really product readiness.",
      },
      {
        type: "paragraph",
        text: "The review process becomes harder when the app listing promises one thing and the app experience shows another. Before submission, make sure the app name, screenshots, feature copy, pricing, onboarding, support links, and actual product behavior tell the same story.",
      },
      {
        type: "heading",
        text: "Make the first merchant session obvious",
      },
      {
        type: "paragraph",
        text: "A reviewer should be able to install the app, understand the core feature, complete setup, and see useful output without asking for private instructions. If setup depends on external credentials, test data, or a third-party account, explain that clearly in the review notes and inside the product.",
      },
      {
        type: "list",
        items: [
          "Request only the scopes required by visible app features.",
          "Show empty states that explain the next action instead of showing blank dashboards.",
          "Include clear error messages for missing setup, disconnected services, and permission problems.",
          "Confirm the app works inside the embedded Shopify admin experience across common screen sizes.",
        ],
      },
      {
        type: "image",
        src: "/images/portfolio-merchant-automation-app.webp",
        alt: "Shopify app dashboard preview",
        caption: "Review readiness improves when onboarding, permissions, billing, app UI, and support content are tested as one merchant journey.",
      },
      {
        type: "heading",
        text: "Check billing, privacy, and support paths",
      },
      {
        type: "paragraph",
        text: "Billing should be understandable before a merchant commits. If the app has a trial, usage-based fees, plan limits, or upgrade paths, those details should be visible and consistent. Merchants should know what they are approving and what changes when they upgrade, downgrade, cancel, or uninstall.",
      },
      {
        type: "paragraph",
        text: "Privacy and support pages should be reachable, complete, and aligned with the app behavior. A public app needs clear contact information, documentation that answers setup questions, and a support process for merchants who experience data sync or billing issues.",
      },
      {
        type: "heading",
        text: "Test lifecycle behavior, not only feature behavior",
      },
      {
        type: "paragraph",
        text: "Install, onboarding, plan approval, webhook registration, settings changes, uninstall, reinstall, and data cleanup are all part of the app lifecycle. These paths should be tested on clean stores and stores with realistic product, order, or customer data.",
      },
      {
        type: "callout",
        text: "A review-ready app should feel complete to a merchant who has no context from the development team.",
      },
      {
        type: "paragraph",
        text: "The best review preparation is disciplined product QA. When the app works clearly, explains itself well, handles edge cases, and keeps the listing honest, submission becomes a confirmation step instead of a scramble to fix avoidable gaps.",
      },
    ],
  },
  {
    id: "shopify-metafields-metaobjects-guide",
    title: "Using Shopify Metafields and Metaobjects the Right Way",
    slug: "shopify-metafields-metaobjects-guide",
    category: "Shopify Custom Data",
    thumbnail: "/images/portfolio-custom-product-builder.webp",
    date: "2026-04-08",
    readTime: "9 min read",
    description:
      "How to model custom Shopify data without creating a hard-to-maintain setup for products, pages, collections, and app features.",
    content: [
      "Metafields and metaobjects are powerful when the data model is clear. Start by deciding whether the content belongs to an existing Shopify resource or needs its own reusable structured object.",
      "Good custom data design keeps naming consistent, field types specific, validation strict, and admin editing simple for merchants who will maintain the store after launch.",
      "Before building templates or app logic around custom data, test how the fields behave in theme sections, product pages, collection pages, search, localization, and future migration paths.",
    ],
    body: [
      {
        type: "paragraph",
        text: "Shopify metafields and metaobjects can turn a simple store into a flexible content system, but only when the data model is planned carefully. Without structure, custom data becomes a collection of one-off fields that are hard for merchants to maintain and hard for developers to extend.",
      },
      {
        type: "paragraph",
        text: "The first decision is where the data belongs. If the data extends a product, variant, collection, customer, page, or order, a metafield may be the right fit. If the data is a reusable object with its own fields and relationships, a metaobject can keep the model cleaner.",
      },
      {
        type: "heading",
        text: "Choose the right custom data shape",
      },
      {
        type: "paragraph",
        text: "Use metafields for resource-specific details such as product care instructions, ingredient lists, size guide references, warranty text, delivery notes, or editorial fields that belong directly to one Shopify resource. Use metaobjects when the content should be managed once and reused across many places, such as designer profiles, store locations, product comparison rows, material libraries, recipes, press quotes, or landing page modules.",
      },
      {
        type: "list",
        items: [
          "Use specific field types instead of plain text when dates, files, references, numbers, or booleans are more accurate.",
          "Keep namespaces and keys consistent so developers can query data predictably.",
          "Add validation rules where possible to protect merchant-entered content from breaking templates.",
          "Document which fields power themes, apps, automations, or integrations.",
        ],
      },
      {
        type: "image",
        src: "/images/portfolio-custom-product-builder.webp",
        alt: "Custom product builder preview",
        caption: "Custom product experiences often depend on well-modeled metafields and metaobjects behind the storefront UI.",
      },
      {
        type: "heading",
        text: "Design for merchant editing",
      },
      {
        type: "paragraph",
        text: "A custom data model is only successful if the store team can use it correctly. Labels should be clear, required fields should be obvious, and field groups should follow how the merchant thinks about the product or content. If a field is technically correct but confusing in admin, it will eventually be misused.",
      },
      {
        type: "paragraph",
        text: "Theme sections should also handle missing data gracefully. If a merchant has not filled a field yet, the storefront should hide optional elements or show a useful fallback instead of leaving broken spacing or placeholder copy.",
      },
      {
        type: "heading",
        text: "Plan for future templates and integrations",
      },
      {
        type: "paragraph",
        text: "Custom data often starts as a theme requirement and later becomes useful for search, filtering, apps, feeds, localization, or reporting. Naming and field choices should leave room for that growth. A short planning session before implementation can prevent expensive migration work later.",
      },
      {
        type: "callout",
        text: "Good custom data design makes Shopify more powerful without making the admin harder for merchants to use.",
      },
      {
        type: "paragraph",
        text: "When metafields and metaobjects are modeled with purpose, they support richer product pages, better landing pages, cleaner app logic, and more maintainable storefronts. The result is a store that can grow its content system without relying on hardcoded templates for every new idea.",
      },
    ],
  },
  {
    id: "nextjs-performance-release-checks",
    title: "Next.js Performance Checks Before a Production Release",
    slug: "nextjs-performance-release-checks",
    category: "Next.js",
    thumbnail: "/images/portfolio-headless-commerce-storefront.webp",
    date: "2026-03-26",
    readTime: "9 min read",
    description:
      "A practical performance pass for modern frontend launches, including images, bundles, caching, server rendering, and analytics scripts.",
    content: [
      "Performance work should happen before the final QA pass, not after launch. Start with the routes that matter most: homepage, landing pages, product pages, checkout-adjacent flows, and authenticated dashboards.",
      "Review image sizes, font loading, third-party scripts, JavaScript bundle weight, server response time, caching rules, and layout shifts across mobile and desktop devices.",
      "The goal is not a perfect score in isolation. The goal is a fast, stable user experience that protects conversion, keeps content readable, and gives the team clear metrics to monitor after release.",
    ],
    body: [
      {
        type: "paragraph",
        text: "Performance checks should happen before the final release candidate, not after users complain. In a Next.js project, slow pages can come from many places: image handling, bundle size, server work, cache configuration, third-party scripts, font loading, or data fetching patterns that looked harmless during development.",
      },
      {
        type: "paragraph",
        text: "Start with the routes that matter to the business. For a commerce site, that may be homepage, collection pages, product pages, cart, and campaign landing pages. For a SaaS app, it may be sign up, dashboard, reports, onboarding, and billing. Testing everything equally often means the most important pages do not receive enough attention.",
      },
      {
        type: "heading",
        text: "Check media, fonts, and layout stability",
      },
      {
        type: "paragraph",
        text: "Images are one of the most common sources of performance issues. Use the right dimensions, compress assets, avoid loading huge desktop images on mobile, and reserve layout space so content does not jump as media loads. Fonts should be limited, predictable, and loaded in a way that keeps text readable quickly.",
      },
      {
        type: "list",
        items: [
          "Review hero images, product imagery, background media, and card thumbnails on mobile and desktop.",
          "Check for layout shifts caused by missing dimensions, late-loading embeds, banners, or dynamic widgets.",
          "Remove unused font weights and avoid loading multiple families when one system can do the job.",
          "Confirm lazy loading does not delay important first-viewport content.",
        ],
      },
      {
        type: "image",
        src: "/images/portfolio-headless-commerce-storefront.webp",
        alt: "Headless storefront performance preview",
        caption: "Performance work should focus on the routes and assets that users actually touch before buying, signing up, or completing a workflow.",
      },
      {
        type: "heading",
        text: "Review JavaScript and third-party scripts",
      },
      {
        type: "paragraph",
        text: "Modern frontend apps often ship more JavaScript than the page needs. Before release, inspect large dependencies, client components, analytics tags, chat widgets, review widgets, personalization scripts, and marketing pixels. Every script should earn its place, especially on conversion pages.",
      },
      {
        type: "paragraph",
        text: "Third-party scripts should be loaded intentionally. Some belong after interaction, some can wait until consent, and some should not be present on every route. Removing or delaying unnecessary scripts can improve perceived speed without changing the product design.",
      },
      {
        type: "heading",
        text: "Measure server and cache behavior",
      },
      {
        type: "paragraph",
        text: "Frontend performance is not only client-side. Slow APIs, unoptimized database queries, repeated fetches, cache misses, and heavy server rendering can all delay the page. Test production-like builds with realistic data and review what happens when cache is warm, cold, or invalidated.",
      },
      {
        type: "callout",
        text: "A performance pass is successful when users feel the product is stable and responsive, not only when a lab score improves.",
      },
      {
        type: "paragraph",
        text: "After release, keep monitoring. Real users bring different devices, locations, network conditions, and behavior patterns. Analytics, performance traces, and support feedback will show which optimizations should come next.",
      },
    ],
  },
  {
    id: "monthly-website-maintenance-for-revenue",
    title: "Monthly Website Maintenance Tasks That Protect Revenue",
    slug: "monthly-website-maintenance-for-revenue",
    category: "Website Maintenance",
    thumbnail: "/images/portfolio-saas-operations-dashboard.webp",
    date: "2026-03-12",
    readTime: "8 min read",
    description:
      "The recurring checks that keep business websites healthy: updates, backups, forms, analytics, security, speed, and conversion paths.",
    content: [
      "A website can look fine while important business paths quietly break. Monthly maintenance should verify forms, checkout flows, analytics events, redirects, backups, uptime, and key landing pages.",
      "Security and dependency updates matter, but they should be handled with review and testing. Updating blindly can create new issues; never updating leaves the site exposed.",
      "A useful maintenance report connects technical work to business impact. It should show what was checked, what changed, what risks remain, and which improvements should be prioritized next.",
    ],
    body: [
      {
        type: "paragraph",
        text: "A website can look healthy while important business paths quietly stop working. A contact form may fail, analytics may stop tracking conversions, a checkout step may become confusing after an app update, or a key landing page may load slowly on mobile. Monthly maintenance catches these issues before they turn into lost leads or support problems.",
      },
      {
        type: "paragraph",
        text: "Maintenance is most useful when it follows a repeatable checklist. The goal is not to change the site every month for the sake of activity. The goal is to protect revenue paths, keep the site secure, preserve performance, and identify the next improvements with evidence.",
      },
      {
        type: "heading",
        text: "Check the paths that create leads and sales",
      },
      {
        type: "paragraph",
        text: "Start with the actions that matter commercially: contact forms, booking flows, checkout, quote requests, newsletter signups, account login, payment confirmations, and thank-you pages. Test them from the user side and confirm that the business receives the right notification, CRM entry, order, or analytics event.",
      },
      {
        type: "list",
        items: [
          "Submit all important forms and verify email delivery or CRM capture.",
          "Review checkout or booking flows on mobile and desktop.",
          "Check analytics events, conversion goals, pixels, and campaign landing pages.",
          "Confirm redirects, broken links, search indexing basics, and important calls to action.",
        ],
      },
      {
        type: "image",
        src: "/images/portfolio-saas-operations-dashboard.webp",
        alt: "Operations dashboard used for website maintenance article",
        caption: "Monthly maintenance should connect technical checks to the business workflows the website supports.",
      },
      {
        type: "heading",
        text: "Handle updates with review, not guesswork",
      },
      {
        type: "paragraph",
        text: "Dependencies, CMS plugins, Shopify apps, themes, frameworks, and hosting settings all change over time. Updates should be reviewed, applied in a controlled way, and tested against the important user flows. Updating blindly can create new issues, but avoiding updates forever creates security and compatibility risk.",
      },
      {
        type: "paragraph",
        text: "Backups should also be verified. It is not enough to assume backups exist. The team should know what is backed up, how often it runs, where it is stored, and how recovery would work if a deployment, update, or content change caused a problem.",
      },
      {
        type: "heading",
        text: "Report maintenance in business language",
      },
      {
        type: "paragraph",
        text: "A monthly report should explain what was checked, what changed, what was fixed, and what still needs attention. It should avoid hiding behind technical language. The business needs to know whether the website is capturing leads, supporting customers, loading quickly, and staying reliable.",
      },
      {
        type: "callout",
        text: "Maintenance protects the value of the website after launch. It is less dramatic than a redesign, but it often has a clearer connection to revenue.",
      },
      {
        type: "paragraph",
        text: "When maintenance becomes a habit, the site improves steadily. Small issues are fixed before they stack up, analytics stay trustworthy, and future projects start from a healthier foundation.",
      },
    ],
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description:
      "We clarify the business goal, users, technical constraints, content needs, integrations, and launch priorities.",
  },
  {
    title: "Product Planning",
    description:
      "We turn requirements into user flows, scope, milestones, data models, and a practical implementation plan.",
  },
  {
    title: "Design",
    description:
      "We create interfaces, content structure, responsive states, and design systems that match the product purpose.",
  },
  {
    title: "Development",
    description:
      "We build frontend, backend, Shopify, integrations, CMS, and deployment workflows with regular review points.",
  },
  {
    title: "QA & Launch",
    description:
      "We test critical flows, performance, accessibility, content, forms, analytics, redirects, and production setup.",
  },
  {
    title: "Support",
    description:
      "After launch, we monitor, improve, maintain, and extend the product based on real usage and business needs.",
  },
];

export const featuredServices = services.slice(0, 6);
export const featuredPortfolio = portfolioItems.slice(0, 4);
export const featuredBlogPosts = blogPosts.slice(0, 3);

export const serviceBySlug = services.reduce((items, service) => {
  items[service.slug] = service;
  return items;
}, {});

export const portfolioBySlug = portfolioItems.reduce((items, project) => {
  items[project.slug] = project;
  return items;
}, {});

export const blogBySlug = blogPosts.reduce((items, post) => {
  items[post.slug] = post;
  return items;
}, {});
