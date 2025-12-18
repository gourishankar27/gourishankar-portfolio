export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type?: "conference" | "journal" | "workshop" | "thesis" | "preprint";
  link?: string;     // external link (IEEE, arXiv, etc.)
  pdf?: string;      // local /public pdf path, if you add later
  abstract?: string;
  bibtex?: string;
}
