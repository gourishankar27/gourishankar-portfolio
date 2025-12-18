import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "grad-robotics-ai",
    company: "Graduate Robotics & AI Work",
    role: "Robotics & AI Engineer",
    period: "2024 – Present",
    location: "",
    description:
      "Research and engineering at the intersection of differentiable physics, autonomous systems, and deep learning.",
    bullets: [
      "Developing vision-guided differentiable physics pipelines for robotic manipulation.",
      "Building autonomous drone navigation systems that combine vision, SLAM, and control.",
      "Designing and evaluating deep learning models for perception, forecasting, and generative tasks.",
    ],
    tech: [
      "PyTorch",
      "NVIDIA Warp",
      "Isaac Lab",
      "ROS",
      "PX4",
      "Transformers",
    ],
  },
  {
    id: "defense-embedded",
    company: "Defense & Embedded Systems (Industry)",
    role: "Robotics / Embedded Systems Engineer",
    period: "2021 – 2023",
    location: "",
    description:
      "Worked on real-time embedded software and robotics for safety-critical and defense-adjacent systems.",
    bullets: [
      "Implemented multithreaded control and sensor fusion pipelines on constrained embedded platforms.",
      "Collaborated with cross‑functional teams to integrate perception, control, and safety logic.",
      "Contributed to testing, debugging, and performance tuning under strict reliability requirements.",
    ],
    tech: ["C/C++", "RTOS", "Embedded Linux", "Sensors", "Communication Buses"],
  },
];
