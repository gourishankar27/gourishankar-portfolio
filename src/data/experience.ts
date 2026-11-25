import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "asu-research-assistant-nasa-alphacore",
    company: "Arizona State University",
    role: "Research Assistant",
    period: "January 2026 – Present",
    location: "Tempe, Arizona, United States",
    description:
      "Developing and evaluating event-based vision and state-estimation algorithms for spacecraft attitude estimation, with a focus on measurement correction, uncertainty, and reproducible experimental validation. Supervised by Prof. Dr. Suren Jayasuriya on a NASA project with Alphacore Inc.",
    bullets: [
      "Built a spacecraft attitude-estimation pipeline using speed- and brightness-aware star-centroid correction and weighted Wahba optimization.",
      "Evaluated baseline and corrected pipelines on approximately 8.7 million events across 372 batches in one representative 3.0-second research sequence.",
      "Compared brightness-only and speed-aware measurement models, separating implementation and runtime feasibility from independently verified accuracy gains.",
      "Designed reproducible experiments to investigate uncertainty, algorithm behavior, and limitations.",
      "Authored NASA Phase I evidence and Phase II experiment plans to explain findings and guide subsequent research.",
    ],
    tech: ["Python", "Event-Based Vision", "Computer Vision", "State Estimation", "Wahba Attitude Estimation", "Astrometry", "Measurement Uncertainty", "Algorithm Evaluation", "Research Documentation"],
  },
  {
    id: "tata-advanced-systems",
    company: "Tata Advanced Systems Limited",
    role: "Software Engineer",
    period: "December 2021 – June 2024",
    location: "Mumbai, India",
    description:
      "Developed reliability-focused backend software, telemetry systems, data pipelines, and automation for mission-critical engineering platforms.",
    bullets: [
      "Led a six-engineer team delivering C/C++ and Python backend services, data pipelines, APIs, and control-plane components.",
      "Designed a reusable Health Monitor SDK that standardized telemetry, diagnostics, and monitoring interfaces across multiple Navy programs.",
      "Reduced manual intervention by 75% through deterministic control logic, Python automation, and log-driven validation.",
      "Improved Ballistic Logix data-processing efficiency by 60% through optimized data cataloging, integrity checks, and analytics.",
      "Supported reliable delivery through debugging, performance evaluation, documentation, and collaboration across the development team.",
    ],
    tech: ["C", "C++", "Python", "Qt", "Django", "REST APIs", "MySQL", "MongoDB", "Linux", "Docker", "SDK Development", "Observability"],
  },
  {
    id: "softnautics-intern",
    company: "Softnautics LLP",
    role: "Software Engineering Intern",
    period: "January 2021 – June 2021",
    location: "Pune, India",
    description:
      "Developed computer vision and machine-learning components for an automotive user-interface prototype.",
    bullets: [
      "Developed a gesture-recognition interface using OpenCV and TensorFlow, achieving 92% accuracy in the reported prototype evaluation.",
      "Debugged latency-sensitive visualization and computer-vision components to address performance bottlenecks.",
      "Integrated REST interfaces for data exchange and supporting visualization workflows.",
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "REST APIs", "Data Visualization"],
  },
];
