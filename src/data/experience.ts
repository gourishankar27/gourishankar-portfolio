import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "asu-grad-ras",
    company: "Arizona State University",
    role: "Graduate Research & Projects – Robotics & Autonomous Systems (AI)",
    period: "Aug 2024 – Present",
    location: "Tempe, AZ, USA",
    description:
      "Graduate work in robotics and autonomous systems with a focus on AI, differentiable physics, and autonomous systems.",
    bullets: [
      "Developing a unified perception-to-control framework that integrates 3D Gaussian Splatting with NVIDIA Warp for differentiable physics-based manipulation.",
      "Building an S&P 500 deep learning forecasting system using Temporal Fusion Transformers alongside LSTM and ARIMAX baselines.",
      "Working on autonomous drone landing/navigation and an automated goalkeeper robot that combines YOLOv8-based vision with real-time control.",
    ],
    tech: [
      "PyTorch",
      "Temporal Fusion Transformer",
      "NVIDIA Isaac Sim/Lab",
      "MATLAB / Simulink",
      "ROS",
      "YOLOv8",
      "Python",
    ],
  },
  {
    id: "tata-advanced-systems",
    company: "Tata Advanced Systems Limited",
    role: "Software Executive",
    period: "Dec 2021 – June 2024",
    location: "Mumbai, India",
    description:
      "Built backend and data-intensive software for large, distributed defense platforms with strict reliability constraints, including Integrated Electronic Warfare Systems and naval projects.",
    bullets: [
      "Led backend development for Integrated Electronic Warfare Systems (IEWS), managing a team of 6 and building data pipelines and services for communication and configuration modules across heterogeneous hardware.",
      "Designed and documented a reusable Health Monitor SDK for critical Indian Navy projects (3D-ASR, CMS), exposing standardized health and performance signals and fault detection interfaces.",
      "Automated Fire Controller Units for defense projects Dhanush, ATAGS, and Pinaka, reducing manual intervention by around 75% and improving reliability through deterministic software control and repeatable test procedures.",
      "Implemented data cataloging and processing features in the Ballistic Logix library for ballistic range data handling, improving processing efficiency by ~60% and enabling downstream analytics and model development.",
    ],
    tech: [
      "Python",
      "C",
      "C++",
      "Qt",
      "Django",
      "FastAPI",
      "MySQL",
      "MongoDB",
      "Linux",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: "softnautics-intern",
    company: "Softnautics LLP",
    role: "Software Engineering Intern",
    period: "Jan 2021 – June 2021",
    location: "Pune, India",
    description:
      "Worked on ML and computer-vision-driven automotive interfaces and data visualization tools.",
    bullets: [
      "Developed a data-driven gesture-implied car infotainment prototype using OpenCV and TensorFlow, integrating REST APIs for real-time data exchange and achieving about 92% gesture recognition accuracy.",
      "Combined machine learning with computer vision and designed data visualization tools for a real-time automotive control interface, applying systematic profiling and debugging to resolve performance bottlenecks.",
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "REST APIs"],
  },
];
