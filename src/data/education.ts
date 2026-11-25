import type { Education } from "@/types/education";

export const education: Education[] = [
  {
    id: "asu-ms-ras",
    school: "Arizona State University",
    degree: "Master of Science",
    field: "Robotics and Autonomous Systems (Artificial Intelligence)",
    period: "August 2024 – May 2026",
    location: "Tempe, Arizona, United States",
    gpa: { value: "3.84", scale: "4.00" },
    details:
      "Graduate study in robotics, autonomous systems, and artificial intelligence, including perception, state estimation, motion planning, robot learning, and space autonomy.",
    highlights: [
      "Research Assistant on an ASU-Alphacore NASA event-based star-tracking project for high-speed spacecraft attitude estimation under low-SWaP constraints.",
      "Graduate projects in differentiable physics, vision-guided manipulation, autonomous drone landing, time-series forecasting, and deep learning model engineering.",
    ],
  },
  {
    id: "mit-adt-btech-intelligent-systems",
    school: "MIT-ADT University, Pune",
    degree: "Bachelor of Technology",
    field: "Computer Science — Intelligent Systems",
    period: "August 2017 – July 2021",
    location: "Pune, India",
    gpa: { value: "7.96", scale: "10.00" },
    details:
      "Undergraduate program specializing in intelligent systems, machine learning, and computer science fundamentals.",
    highlights: [
      "Final-year research: A Transfer Learning Approach for Descriptive Question Answering System, using BERT and transformers; published at the IEEE Pune Section International Conference (Dec 2021).",
      "Smart India Hackathon winner and National Innovation Contest finalist representing MIT-ADT University.",
    ],
  },
];
