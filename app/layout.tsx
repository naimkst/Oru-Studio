import type { Metadata } from "next";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import "../styles/font-awesome.min.css";
import "../styles/flaticon.css";
import "../styles/themify-icons.css";
import "../styles/sass/style.scss";
import GoogleAnalytics from "../components/GoogleAnalytics";
import JsonLd from "../components/JsonLd";
import { authorProfile, company } from "../data/siteContent";
import { absoluteUrl, baseSeoKeywords, siteName, siteUrl } from "../data/seo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Oru Studio | Shopify Apps, Store Development & Shopify Plus Experts",
    template: "%s",
  },
  description:
    "Oru Studio builds Shopify apps, Shopify stores, Shopify Plus projects, ecommerce systems, and full stack web products for merchants, founders, and agencies.",
  applicationName: siteName,
  manifest: "/site.webmanifest",
  authors: [{ name: company.founder, url: absoluteUrl("/about#team") }],
  creator: company.founder,
  publisher: siteName,
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    ...baseSeoKeywords,
    "Shopify development agency",
    "Shopify Plus experts",
  ],
  openGraph: {
    title: "Oru Studio | Shopify Apps, Store Development & Shopify Plus Experts",
    description:
      "Shopify app development, Shopify store development, Shopify Plus planning, ecommerce systems, and full stack web product delivery by Oru Studio.",
    url: siteUrl,
    siteName,
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/hero-video-area-shopify-01.webp"),
        width: 1200,
        height: 630,
        alt: "Oru Studio Shopify and ecommerce development work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oru Studio | Shopify Apps, Store Development & Shopify Plus Experts",
    description:
      "Shopify app development, Shopify store development, Shopify Plus planning, ecommerce systems, and full stack web product delivery by Oru Studio.",
    images: [absoluteUrl("/images/hero-video-area-shopify-01.webp")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const baseJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    description:
      "Oru Studio builds Shopify apps, Shopify stores, Shopify Plus projects, ecommerce systems, and full stack web products.",
    url: siteUrl,
    logo: absoluteUrl("/icon-512.png"),
    email: company.email,
    telephone: company.phoneHref,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: company.email,
      telephone: company.phoneHref,
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 N Gould St Ste N",
      addressLocality: "Sheridan",
      addressRegion: "WY",
      postalCode: "82801",
      addressCountry: "US",
    },
    founder: {
      "@id": `${siteUrl}/#naim-hossain-najmul`,
    },
    sameAs: authorProfile.links.map((link) => link.href),
    keywords: baseSeoKeywords.join(", "),
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#naim-hossain-najmul`,
    name: authorProfile.name,
    jobTitle: authorProfile.title,
    image: absoluteUrl(authorProfile.photo),
    url: absoluteUrl("/about#team"),
    worksFor: {
      "@id": `${siteUrl}/#organization`,
    },
    knowsAbout: [
      "Shopify app development",
      "Shopify theme development",
      "Shopify Admin GraphQL",
      "Full stack development",
      "Ecommerce development",
      "Performance optimization",
    ],
    sameAs: authorProfile.links.map((link) => link.href),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <JsonLd data={baseJsonLd} />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
