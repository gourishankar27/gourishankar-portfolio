import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "asu-research-assistant-nasa-alphacore",
    company: "Arizona State University - Prof. Dr. Suren Jayasuriya; NASA project with Alphacore Inc.",
    role: "Research Assistant",
    period: "Jan 2026 - Present",
    location: "Tempe, AZ, USA",
    description:
      "Researching event-based star tracking for high-speed spacecraft attitude estimation under low-SWaP constraints, with emphasis on centroid correction, adaptive uncertainty, and evaluation-driven state estimation.",
    bullets: [
      "Lead research on the ASU-Alphacore NASA event-based star-tracking project for high-speed spacecraft attitude estimation under low-SWaP constraints.",
      "Led development of a centroid-correction algorithm, improving the measurement model from brightness-only correction to a speed-aware and brightness-aware formulation for fast-moving stars.",
      "Implemented speed-aware centroid correction with adaptive measurement uncertainty, event batching, centroid extraction, astrometric initialization, and weighted Wahba attitude estimation.",
      "Validated the prototype on synthetic star-motion tests and public real-night-sky resources; compared baseline and speed-aware runs on a 3.0 s sequence with 372 batches and about 8.7M events while preserving runtime feasibility.",
      "Supported the Phase I proposal submitted to NASA and currently contributing to Phase II technical progress, including experiments, evaluation design, and research/proposal writing.",
    ],
    tech: [
      "Python",
      "Event-Based Vision",
      "State Estimation",
      "Wahba Attitude Estimation",
      "Astrometry",
      "Synthetic Data",
      "Low-SWaP Systems",
      "Performance Evaluation",
    ],
  },
  {
    id: "tata-advanced-systems",
    company: "Tata Advanced Systems Limited",
    role: "Software Executive",
    period: "Dec 2021 - June 2024",
    location: "Mumbai, India",
    description:
      "Built backend and data-intensive software for large, distributed defense platforms with strict reliability, availability, and performance requirements, including Integrated Electronic Warfare Systems and naval projects.",
    bullets: [
      "Led backend development for the Indian Army's Integrated Electronic Warfare Systems (IEWS), delivering distributed C/C++ and Python services, data pipelines, and control-plane components across heterogeneous hardware; managed a team of 6 engineers.",
      "Designed and documented a reusable Health Monitor SDK for Indian Navy programs (3D-ASR, CMS), standardizing telemetry, diagnostics, fault-detection interfaces, and observability across products.",
      "Automated Fire Controller Units for Dhanush, ATAGS, and Pinaka platforms, reducing manual intervention by 75% through deterministic control logic, Python scripting, and repeatable validation workflows.",
      "Implemented high-performance data cataloging and processing features in the Ballistic Logix library for ballistic range data, improving processing efficiency by 60% and enabling downstream analytics and model development.",
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
      "Observability",
    ],
  },
  {
    id: "softnautics-intern",
    company: "Softnautics LLP",
    role: "Software Engineering Intern",
    period: "Jan 2021 - June 2021",
    location: "Pune, India",
    description:
      "Built machine-learning and computer-vision-driven automotive interfaces with real-time data exchange and visualization tooling.",
    bullets: [
      "Developed a gesture-driven car infotainment prototype using OpenCV and TensorFlow, integrating REST APIs for real-time data exchange and achieving 92% gesture-recognition accuracy.",
      "Combined machine learning, computer vision, and data visualization for a real-time automotive interface; profiled and debugged the perception pipeline to resolve latency and performance bottlenecks.",
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "REST APIs", "Data Visualization"],
  },
];
