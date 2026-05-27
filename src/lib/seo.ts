export const siteConfig = {
  name: "Gourishankar Bansode",
  title: "Gourishankar Bansode | Robotics & AI Software Engineer",
  description:
    "Portfolio of Gourishankar Bansode - robotics and AI software engineer working on event-based vision, space autonomy, state estimation, differentiable physics, autonomous systems, and reliability-focused production software.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gshankar.me",
  email: "gourishankar@asu.edu",
  // phone: "+1-602-491-8770",
  location: "Tempe, AZ",
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
