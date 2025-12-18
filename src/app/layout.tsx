import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Gourishankar Bansode | Robotics & AI Engineer",
  description:
    "Portfolio of Gourishankar Bansode – Robotics & AI engineer working on differentiable physics, autonomous systems, deep learning, and defense-focused systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body
        className="antialiased"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <div
          className="min-h-screen flex flex-col"
          style={{ backgroundColor: "#FAFAFD", color: "#1F1F1F" }}
        >
          <Header />
          <PageShell>{children}</PageShell>
          <Footer />
        </div>
      </body>
    </html>
  );
}
