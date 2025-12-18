import type { Project } from "@/types/project";

export const featuredProjects: Project[] = [
  {
    id: "vision-guided-diff-physics",
    title: "Vision-Guided Differentiable Physics for Robotic Manipulation",
    year: 2025,
    category: "Robotics",
    featured: true,
    order: 1,
    summary:
      "End-to-end perception-to-control framework using 3D Gaussian Splatting and differentiable physics for contact-rich manipulation.",
    role: "Research & Engineering",
    tags: [
      "Robotics",
      "Differentiable Physics",
      "3D Vision",
      "System Identification",
    ],
    tech: ["PyTorch", "NVIDIA Warp", "Isaac Lab", "3D Gaussian Splatting"],
    highlights: [
      "Built a differentiable perception–physics loop integrating 3DGS with NVIDIA Warp for robotic manipulation.",
      "Used Isaac Lab synthetic data to recover latent physical parameters such as friction and mass from visual gradients.",
    ],
  },
  {
    id: "sp500-deep-learning-forecasting",
    title: "S&P 500 Deep Learning Forecasting System",
    year: 2025,
    category: "Machine Learning",
    featured: true,
    order: 2,
    summary:
      "Temporal Fusion Transformer-based pipeline for S&P 500 forecasting using mixed-frequency macroeconomic and market data.",
    role: "ML Research & Engineering",
    tags: ["Time-Series", "Finance", "Transformers", "Forecasting"],
    tech: ["PyTorch", "Temporal Fusion Transformer", "Pandas"],
    highlights: [
      "Combined daily indicators and monthly macro data via ALFRED vintages to avoid look-ahead bias.",
      "Benchmarked TFT against LSTM and ARIMAX, getting more stable directional accuracy over naive baselines.",
    ],
  },
  {
    id: "autonomous-drone-navigation",
    title: "Autonomous Drone Navigation System",
    year: 2025,
    category: "Robotics",
    featured: true,
    order: 3,
    summary:
      "Full-stack quadrotor autonomy stack combining vision, SLAM, control, and waypoint navigation.",
    role: "Robotics Engineer",
    tags: ["Drones", "SLAM", "Reinforcement Learning", "Control"],
    tech: ["ROS", "PX4", "OpenCV", "Python", "C++"],
    highlights: [
      "Implemented computer-vision-based localization and mapping for obstacle-aware flight.",
      "Combined low-level PID/MPC control with high-level waypoint and policy logic for autonomous missions.",
    ],
  },
];

export const miniProjects: Project[] = [
  {
    id: "resnet36-smoothrelu-imagenet",
    title: "Custom ResNet-36 + SmoothReLU on ImageNet",
    year: 2025,
    category: "Deep Learning",
    summary:
      "Custom ResNet-36 and SmoothReLU activation achieving better ImageNet-scale training from scratch with minimal parameter overhead.",
    role: "DL Research",
    tags: ["CNNs", "ResNet", "Activation Functions", "ImageNet"],
    tech: ["PyTorch", "CUDA"],
    highlights: [
      "Extended ResNet-34 to a ResNet-36 with a deeper mid-level stage, improving validation accuracy with small parameter increase.",
      "Designed SmoothReLU activation, improving validation accuracy over ReLU without noticeable training overhead.",
    ],
  },
  {
    id: "vit-pv-defect-classification",
    title: "Vision Transformer PV Defect Classification",
    year: 2025,
    category: "Deep Learning",
    summary:
      "Fine-tuning ViT-B/32 on a rebalance photovoltaic infrared defect dataset to achieve high multi-class accuracy.",
    role: "ML Engineer",
    tags: ["Vision Transformer", "Imbalanced Data", "Transfer Learning"],
    tech: ["ViT-B/32", "PyTorch"],
    highlights: [
      "Rebalanced a 20k-image PV defect set to a 30k-image perfectly balanced dataset.",
      "Showed that partial-block fine-tuning yields strong accuracy–compute trade-offs compared to head-only and full fine-tuning.",
    ],
  },
  {
    id: "descriptive-question-answering-system",
    title: "Descriptive Question Answering System",
    year: 2021,
    category: "NLP",
    summary:
      "Bachelor’s final-year project: BERT-based descriptive QA system with sentence ranking, published at an IEEE conference.",
    role: "NLP Research (Bachelor's Thesis)",
    tags: ["NLP", "Question Answering", "Transformers"],
    tech: ["BERT", "PyTorch"],
    highlights: [
      "Fine-tuned BERT for descriptive question answering over document collections.",
      "Designed a sentence-ranking pipeline and published results at an IEEE Pune Section conference.",
    ],
  },
];
