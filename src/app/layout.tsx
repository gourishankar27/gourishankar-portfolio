import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { absoluteUrl, ogImageUrl, siteConfig } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Gourishankar Bansode",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: ogImageUrl({
          title: siteConfig.name,
          subtitle: "Robotics & AI Software Engineer",
        }),
        width: 1200,
        height: 630,
        alt: "Portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      ogImageUrl({
        title: siteConfig.name,
        subtitle: "Robotics & AI Software Engineer",
      }),
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Prevent theme “flash” by applying the persisted user preference as early as possible.
  // If no preference is stored, we fall back to prefers-color-scheme via CSS.
  const themeInitScript = `(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') {
        document.documentElement.setAttribute('data-theme', stored);
      }
    } catch (e) {
      // no-op
    }
  })();`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": absoluteUrl("/#person"),
        name: siteConfig.name,
        url: siteConfig.url,
        jobTitle: "Robotics & AI Software Engineer",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tempe",
          addressRegion: "AZ",
          addressCountry: "US",
        },
        sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: siteConfig.title,
        url: siteConfig.url,
        publisher: {
          "@id": absoluteUrl("/#person"),
        },
        potentialAction: {
          "@type": "SearchAction",
          target: absoluteUrl("/projects?q={search_term_string}"),
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased"
      >
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <div className="min-h-screen flex flex-col bg-[color:var(--canvas)] text-[color:var(--text)]">
          <Header />
          <PageShell>{children}</PageShell>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
