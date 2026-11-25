export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  period: string; // e.g. "2023 – 2025"
  location?: string;
  gpa?: {
    value: string;
    scale: string;
  };
  details?: string;
  highlights?: string[];
}
