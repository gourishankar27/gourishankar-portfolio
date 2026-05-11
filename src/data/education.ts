import type { Education } from "@/types/education";

export const education: Education[] = [
  {
    id: "asu-ms-ras",
    school: "Arizona State University",
    degree: "Master of Science",
    field: "Robotics and Autonomous Systems (Artificial Intelligence)",
    period: "Aug 2024 - May 2026 (expected)",
    location: "Tempe, AZ, USA",
    details:
      "Graduate program focused on robotics, autonomous systems, and AI, with current research in event-based vision and spacecraft attitude estimation. GPA: 3.79.",
    highlights: [
      "Research Assistant on an ASU-Alphacore NASA event-based star-tracking project for high-speed spacecraft attitude estimation under low-SWaP constraints.",
      "Graduate projects in differentiable physics, vision-guided manipulation, autonomous drone landing, time-series forecasting, and deep learning model engineering.",
    ],
  },
  {
    id: "mit-adt-btech-intelligent-systems",
    school: "MIT School of Engineering, MIT-ADT University",
    degree: "Bachelor of Technology",
    field: "Computer Science (Specialized in Intelligent Systems)",
    period: "Aug 2017 - July 2021",
    location: "Pune, India",
    details:
      "Undergraduate program specializing in intelligent systems, machine learning, and computer science fundamentals.",
    highlights: [
      "Final-year project: Descriptive Question Answering System using BERT and transformers, published at the IEEE Pune Section International Conference (Dec 2021).",
      "Smart India Hackathon winner and National Innovation Contest finalist representing MIT-ADT University.",
    ],
  },
];
