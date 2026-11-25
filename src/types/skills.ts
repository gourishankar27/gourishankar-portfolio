export type SkillGroup = "ai" | "robotics" | "software" | "research";

export interface SkillCategory {
  id: string;
  name: string;
  description?: string;
  skills: string[];
  groups?: SkillGroup[];
  familiarity?: string[];
}
