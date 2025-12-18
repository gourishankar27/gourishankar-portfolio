export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string; // free-form, e.g. "2022 – Present"
  location?: string;
  description?: string;
  bullets?: string[];
  tech?: string[];
}
