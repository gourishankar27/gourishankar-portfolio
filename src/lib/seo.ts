export const siteConfig = {
  name: "Gourishankar Bansode",
  role: "Robotics & AI Software Engineer",
  affiliation: "Research Assistant at Arizona State University",
  title: "Gourishankar Bansode | Robotics & AI Software Engineer",
  description:
    "Robotics and AI Software Engineer with professional C++ and Python experience, specializing in self-hosted LLMs, AI agents, retrieval systems, autonomous navigation, computer vision, state estimation, and reliable software engineering.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gshankar.me",
  email: "gourishankar@asu.edu",
  // phone: "+1-602-491-8770",
  location: "Tempe, Arizona, United States",
  socials: {
    github: "https://github.com/gourishankar27",
    linkedin: "https://linkedin.com/in/gourishankarb/",
  },
} as const;

export function absoluteUrl(path: string): string {
  try {
    return new URL(path, siteConfig.url).toString();
  } catch {
    // Fallback in case siteConfig.url is misconfigured.
    return path;
  }
}

export function ogImageUrl(params?: {
  title?: string;
  subtitle?: string;
}): string {
  const url = new URL("/api/og", siteConfig.url);
  if (params?.title) url.searchParams.set("title", params.title);
  if (params?.subtitle) url.searchParams.set("subtitle", params.subtitle);
  return url.toString();
}
