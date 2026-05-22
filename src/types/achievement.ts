export interface Achievement {
  id: string;
  title: string;
  issuer?: string;      // e.g., "IEEE Pune Section"
  date?: string;        // e.g., "Dec 2021"
  description?: string;
  link?: string;        // optional URL
  tags?: string[];      // e.g., ["Publication", "NLP"]
}
