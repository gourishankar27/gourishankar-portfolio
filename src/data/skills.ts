import type { SkillCategory } from "@/types/skills";

export const skillCategories: SkillCategory[] = [
  {
    id: "robotics-systems",
    name: "Robotics & Systems",
    description:
      "Building autonomous systems that connect perception, planning, and control.",
    skills: [
      "Robotics",
      "ROS",
      "PX4 / ArduPilot",
      "Autonomous Drones",
      "System Identification",
      "Differentiable Physics",
      "Simulation (Isaac Lab)",
    ],
  },
  {
    id: "ai-ml",
    name: "AI & Deep Learning",
    description:
      "Designing and training deep learning systems for perception, forecasting, and generation.",
    skills: [
      "Transformers",
      "Vision Transformers (ViT)",
      "CNNs (ResNet)",
      "RNNs / GRUs / LSTMs",
      "GANs & Diffusion Models",
      "Perceptual Losses",
      "Representation Learning",
    ],
  },
  {
    id: "math-control",
    name: "Math, Control & Simulation",
    description:
      "Modeling, dynamics, and control for real-world robotic and autonomous systems.",
    skills: [
      "Linear Algebra & Optimization",
      "Probability & Statistics",
      "Control (PID, MPC)",
      "Trajectory Prediction",
      "System Modeling",
      "Time-Series Forecasting (TFT, ARIMAX)",
    ],
  },
  {
    id: "programming-tools",
    name: "Programming & Tools",
    description:
      "Engineering production-grade systems from low-level embedded to high-level ML.",
    skills: [
      "Python",
      "C / C++",
      "PyTorch",
      "NumPy / Pandas",
      "Linux",
      "Git",
      "Docker",
      "Three.js / React Three Fiber",
    ],
  },
];
