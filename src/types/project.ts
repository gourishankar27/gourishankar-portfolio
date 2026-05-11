export type ProjectLinkType =
  | "github"
  | "paper"
  | "demo"
  | "video"
  | "docs"
  | "slides"
  | "dataset"
  | "website"
  | "other";

export interface ProjectLink {
  type: ProjectLinkType;
  label: string;
  href: string;
}

export type ProjectMediaType = "image" | "video" | "youtube";

export interface ProjectMedia {
  type: ProjectMediaType;
  /**
   * For images/videos: use a path under /public (e.g. /projects/<id>/demo.mp4)
   * For YouTube embeds: use an embed URL (e.g. https://www.youtube.com/embed/<id>)
   */
  src: string;
  alt?: string;
  caption?: string;
  /** Video poster image (optional) */
  poster?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  /** Optional extra context shown under the value */
  context?: string;
}

export interface ProjectSection {
  /** Used as an anchor id (e.g. "results") */
  id: string;
  title: string;
  /** Paragraphs rendered as plain text */
  paragraphs?: string[];
  /** Bulleted list items */
  bullets?: string[];
}

export interface Project {
  id: string;
  title: string;
  year: number;
  category: string;
  featured?: boolean;
  order?: number;
  summary: string;
  role?: string;

  /** Short labels used for filtering + scanning */
  tags?: string[];
  /** Tech stack (tools/frameworks/hardware) */
  tech?: string[];
  /** Quick bullets for the project hero section */
  highlights?: string[];

  /** Card + OG image cover. Store under /public/projects/<id>/cover.(png|jpg|svg) */
  coverImage?: string;
  coverAlt?: string;

  /** Optional for case-study page */
  metrics?: ProjectMetric[];
  links?: ProjectLink[];
  media?: ProjectMedia[];
  sections?: ProjectSection[];
}
