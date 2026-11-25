export type ResumeId = "ai" | "robotics";

export interface Resume {
  id: ResumeId;
  title: string;
  tabLabel: string;
  specialization: string;
  description: string;
  pdfPath: string;
  downloadFilename: string;
  technologies: string[];
  relatedProjectIds: string[];
}
