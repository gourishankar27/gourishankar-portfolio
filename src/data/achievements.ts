import type { Achievement } from "@/types/achievement";

export const achievements: Achievement[] = [
  {
    id: "ieee-pune-2021-qa-paper",
    title: "Paper Acceptance – Descriptive Question Answering System",
    issuer: "IEEE Pune Section International Conference",
    date: "Dec 2021",
    description:
      "Bachelor’s final-year project on a transformer-based descriptive question answering system accepted and presented at an IEEE Pune Section conference.",
    tags: ["Publication", "NLP", "BERT"],
    // link: "https://some-link-to-paper-or-conference-page.com" // add later if available
  },
  {
    id: "grad-robotics-ai-projects",
    title: "Graduate Robotics & AI Project Portfolio",
    issuer: "Graduate Program / Research",
    date: "2023 – 2025",
    description:
      "Completed a series of advanced robotics and AI projects, including vision-guided differentiable physics, autonomous drone navigation, and S&P 500 deep learning forecasting.",
    tags: ["Robotics", "AI", "Deep Learning"],
  },
  {
    id: "dl-course-projects",
    title: "Deep Learning Course Projects – EEE 598",
    issuer: "EEE 598 Deep Learning",
    date: "2025",
    description:
      "Delivered several research-style deep learning projects spanning custom ResNet architectures, ViT fine-tuning, perceptual loss engineering, GANs, diffusion models, and sequence generation.",
    tags: ["Deep Learning", "Vision", "Generative Models"],
  },
  // Add more specific awards, scholarships, competition results here later
];
