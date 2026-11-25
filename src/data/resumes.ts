import type { Resume, ResumeId } from "@/types/resume";

export const resumeSectionHref = "/about#resume";

export const resumes: Resume[] = [
  {
    id: "ai",
    title: "AI Engineering Resume",
    tabLabel: "AI Engineering",
    specialization: "Artificial Intelligence, Machine Learning & Software Engineering",
    description:
      "Focused on self-hosted LLMs, retrieval-augmented generation, document intelligence, AI agents, machine learning, and backend software engineering.",
    pdfPath: "/resumes/Gourishankar_Bansode_AI_Resume.pdf",
    downloadFilename: "Gourishankar_Bansode_AI_Resume.pdf",
    technologies: ["Ollama", "Qwen", "FastAPI", "PostgreSQL", "pgvector", "Tesseract OCR", "Celery", "Redis", "PyTorch", "Next.js"],
    relatedProjectIds: ["ownerpilot-ai-operating-copilot", "adaptive-digital-assistant"],
  },
  {
    id: "robotics",
    title: "Robotics Engineering Resume",
    tabLabel: "Robotics Engineering",
    specialization: "Robotics Software Engineering & Autonomous Systems",
    description:
      "Focused on ROS 2, autonomous navigation, robot perception, state estimation, motion planning, differentiable physics, and reliable C++ and Python systems.",
    pdfPath: "/resumes/Gourishankar_Bansode_Robotics_Resume.pdf",
    downloadFilename: "Gourishankar_Bansode_Robotics_Resume.pdf",
    technologies: ["ROS 2", "C++17", "Python", "MoveIt 2", "Gazebo Harmonic", "NVIDIA Warp", "OpenCV", "TF2", "EKF", "Raspberry Pi"],
    relatedProjectIds: ["vision-guided-diff-physics", "mission-x-citycar", "autonomous-drone-navigation"],
  },
];

export function getResume(value?: string | string[]): Resume {
  const id = Array.isArray(value) ? value[0] : value;
  return resumes.find((resume) => resume.id === id) ?? resumes[0];
}

export function resumeSelectionHref(id: ResumeId): string {
  return `/about?resume=${id}#resume`;
}
