export interface Project {
  id: string;
  title: string;
  year: number;
  category: string;
  featured?: boolean;
  order?: number;
  summary: string;
  role?: string;
  tags?: string[];
  tech?: string[];
  highlights?: string[];
}
