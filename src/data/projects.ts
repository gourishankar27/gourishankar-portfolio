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
      "End-to-end perception-to-control framework that uses 3D Gaussian Splatting and differentiable physics to identify object properties and plan contact-rich robotic manipulation.",
    role: "Research & Engineering",
    tags: ["Robotics", "Differentiable Physics", "3D Vision", "System Identification"],
    tech: ["PyTorch", "NVIDIA Warp", "Isaac Lab", "3D Gaussian Splatting", "Python"],
    highlights: [
      "Integrated 3D Gaussian Splatting with NVIDIA Warp to build a differentiable perception–physics loop for robotic manipulation.",
      "Used Isaac Lab to generate synthetic RGB-D data with ground-truth dynamics for system identification and planning.",
      "Recovered latent physical parameters such as friction and mass from visual gradients and stored them in a neural scene-graph for long-horizon planning.",
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
      "Temporal Fusion Transformer–based system for forecasting S&P 500 returns from mixed-frequency macroeconomic and market data, with ARIMAX and LSTM baselines.",
    role: "ML Research & Engineering",
    tags: ["Time-Series", "Finance", "Transformers", "Forecasting"],
    tech: ["Temporal Fusion Transformer", "PyTorch Forecasting", "Python", "Pandas", "ARIMAX", "LSTM"],
    highlights: [
      "Built a full pipeline spanning 1991–2025 combining daily market indicators (VIX, yields, spreads) with monthly macro releases aligned via ALFRED vintage data to avoid look-ahead bias.",
      "Implemented TFT, LSTM, and ARIMAX models, showing that weekly TFT and multi-horizon daily TFT achieve around 2% excess directional accuracy over naive baselines.",
      "Analyzed failure modes such as prediction collapse and encoder–output gradient disconnect, and explored regime-aware attention and loss penalties for improved interpretability.",
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
      "Full-stack autonomous quadrotor system combining computer vision, SLAM, optimal control, reinforcement learning, and waypoint navigation.",
    role: "Robotics Engineer",
    tags: ["Drones", "SLAM", "Reinforcement Learning", "Control"],
    tech: ["ROS", "PX4 / ArduPilot", "OpenCV", "YOLO", "Python", "C++", "PID", "MPC"],
    highlights: [
      "Implemented computer vision pipelines for object tracking and ArUco-marker-based localization, with optional YOLO-style detectors for semantic awareness.",
      "Used SLAM and mapping to build an environment representation for collision-free waypoint planning.",
      "Combined low-level PID/MPC flight control with a high-level reinforcement-learning policy and waypoint planner for fully autonomous missions.",
    ],
  },
  {
    id: "automated-goalie",
    title: "Automated Goalie: Ping Pong Ball Trajectory Prediction System",
    year: 2025,
    category: "Robotics",
    featured: true,
    order: 4,
    summary:
      "Real-time system that tracks a ping pong ball with YOLOv8 on a Raspberry Pi and steers a servo-driven goalie by predicting 3D trajectories.",
    role: "Computer Vision & Controls",
    tags: ["Computer Vision", "Trajectory Prediction", "Embedded Systems", "Real-Time Robotics"],
    tech: ["YOLOv8", "OpenCV", "NumPy", "Raspberry Pi 5", "MQTT", "Python"],
    highlights: [
      "Fine-tuned a YOLOv8 model on 1,000+ custom frames to detect a ping pong ball at around 2.7 ms per frame on a Raspberry Pi camera stream.",
      "Converted 2D detections into 3D coordinates via calibrated pixel-to-world mapping and inverse-square depth estimation, then fit quadratic polynomials to predict landing positions.",
      "Mapped predicted landing points to servo angles and streamed commands over MQTT, achieving accurate saves on several test positions with servo alignment within 5–10 degrees of optimal.",
    ],
  },
  {
    id: "intellicart-iiot-smart-factory-vehicle",
    title: "IntelliCart – IIoT Smart Factory Vehicle",
    year: 2025,
    category: "Systems / IIoT",
    featured: true,
    order: 5,
    summary:
      "An IIoT-enabled smart factory cart with end-to-end stack from edge control on a Raspberry Pi to central fleet analytics dashboards.",
    role: "Full-Stack Systems Engineer",
    tags: ["IIoT", "Edge Computing", "Robotics", "Dashboards"],
    tech: [
      "Raspberry Pi 4",
      "Flask",
      "SQLite",
      "PostgreSQL",
      "Chart.js",
      "Three.js",
      "Python",
      "HTML/CSS/JS",
    ],
    highlights: [
      "Integrated line sensors, ultrasonic distance sensors, and a pan–tilt camera with a Raspberry Pi 4 and RobotHat for multi-mode operation: manual drive, line follow, obstacle avoidance, and color tracking.",
      "Implemented an edge layer in Python + Flask handling the real-time control loop, safety thresholds, and telemetry logging at 1 Hz into a per-vehicle SQLite database.",
      "Synchronized per-vehicle logs into a central PostgreSQL fleet database and built a browser-based dashboard with live camera, 3D IntelliCart model, obstacle radar, and historical telemetry charts.",
    ],
  },
  {
    id: "descriptive-question-answering-system",
    title: "Descriptive Question Answering System",
    year: 2021,
    category: "NLP",
    featured: false,
    order: 6,
    summary:
      "Transformer-based descriptive question answering system using a fine-tuned BERT model and sentence-ranking pipeline, published at an IEEE conference.",
    role: "NLP Research (Bachelor's Thesis)",
    tags: ["NLP", "Question Answering", "Information Retrieval", "Transformers"],
    tech: ["BERT", "Transformers", "PyTorch", "Python"],
    highlights: [
      "Built a transformer-based architecture for descriptive question answering, fine-tuning BERT to retrieve and rank relevant passages from document collections.",
      "Implemented a sentence-ranking pipeline that scores candidate answers using transfer learning and semantic similarity for accurate response generation.",
      "Published the work at the IEEE Pune Section International Conference (Dec 2021) as part of a bachelor's final-year project.",
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
      "Custom ResNet-36 architecture and SmoothReLU activation that improve ImageNet-scale training from scratch with minimal parameter overhead.",
    role: "DL Research",
    tags: ["CNNs", "ResNet", "Activation Functions", "ImageNet"],
    tech: ["PyTorch", "ResNet", "CUDA", "Python"],
    highlights: [
      "Designed a ResNet-36 architecture that deepens the mid-level feature stage, improving validation accuracy by about 0.6 percentage points over ResNet-34 with roughly 5.5% more parameters.",
      "Developed SmoothReLU, a smooth non-zero-negative-slope activation function, improving validation accuracy by around 1.6 percentage points over ReLU without measurable training-time overhead.",
      "Scaled training to a 650-class ImageNet subset (~832k images), reaching about 63.7% Top-1 and 84.8% Top-5 accuracy from scratch on an A100 GPU.",
    ],
  },
  {
    id: "vit-pv-defect-classification",
    title: "Vision Transformer PV Defect Classification",
    year: 2025,
    category: "Deep Learning",
    summary:
      "Fine-tuning ViT-B/32 on a class-balanced photovoltaic infrared defect dataset to achieve high-accuracy multi-class classification.",
    role: "ML Engineer",
    tags: ["Vision Transformer", "Imbalanced Data", "Transfer Learning", "PV Defects"],
    tech: ["ViT-B/32", "PyTorch", "Torchvision", "Python"],
    highlights: [
      "Transformed a severely imbalanced 20k-image PV dataset (57:1 class ratio) into a balanced 30k-image dataset (12 classes) using unsharp masking and targeted data augmentation.",
      "Benchmarked head-only, partial-block, and full fine-tuning strategies for ViT-B/32, achieving about 89.3% test accuracy with full fine-tuning.",
      "Showed that partial block unfreezing reaches roughly 84.4% accuracy with around 24% of parameters trainable, offering a strong accuracy–compute trade-off.",
    ],
  },
  {
    id: "perceptual-loss-turbulence-robust",
    title: "Perceptual Loss Engineering & Turbulence-Robust Metric",
    year: 2025,
    category: "Deep Learning",
    summary:
      "Systematic study of VGG-based perceptual losses under shifts, noise, and depth-aware atmospheric turbulence, with a new turbulence-robust weighting scheme.",
    role: "Research",
    tags: ["Perceptual Loss", "VGG16", "Image Quality", "Simulation"],
    tech: ["PyTorch", "VGG-16", "NumPy", "DAATSim"],
    highlights: [
      "Compared pixel-wise losses with VGG-16 feature losses and showed 33–92× lower sensitivity to small translations and much higher robustness to additive noise.",
      "Integrated a depth-aware atmospheric turbulence simulator to create a dataset of turbulence-degraded images with realistic, depth-dependent distortions.",
      "Designed a multi-layer perceptual loss with optimized layer weights that reduced turbulence sensitivity by roughly 24% compared to uniform VGG-layer weighting.",
    ],
  },
  {
    id: "gru-music-generator",
    title: "GRU-Based Music Generator",
    year: 2025,
    category: "Generative Modeling",
    summary:
      "Sequence model that generates symbolic music with controllable temperature and musical parameters.",
    role: "ML Engineer",
    tags: ["RNN", "GRU", "Music Generation", "Sequence Modeling"],
    tech: ["TensorFlow or PyTorch", "Python", "MIDI Tooling"],
    highlights: [
      "Implemented a GRU-based recurrent network for symbolic music generation, trained on MIDI-like sequences.",
      "Exposed parameters such as temperature and pitch-shift to control diversity and transposition of generated sequences.",
      "Generated 10-second clips and analyzed how hyperparameters affect musical structure, repetition, and variability.",
    ],
  },
  {
    id: "siren-image-fitting-custom-activation",
    title: "SIREN Image Fitting with Custom Activation",
    year: 2025,
    category: "Neural Fields",
    summary:
      "High-resolution image representation using sinusoidal representation networks and a custom activation variant.",
    role: "Research",
    tags: ["SIREN", "Implicit Representations", "Neural Fields"],
    tech: ["PyTorch", "SIREN", "Python"],
    highlights: [
      "Reproduced SIREN to fit 1024×1024 images as continuous implicit neural representations.",
      "Designed and analyzed a custom activation function to replace the sinusoid and compared its reconstruction quality and convergence behavior against SIREN.",
      "Ran ablation experiments to validate hypotheses about why sinusoidal activations work so well for implicit image representations.",
    ],
  },
  {
    id: "vit-segmentation-depth-lens-blur",
    title: "Vision Transformer Segmentation & Depth-Based Lens Blur",
    year: 2025,
    category: "Computer Vision",
    summary:
      "Selfie segmentation and realistic lens-blur simulation using pretrained segmentation and monocular depth-estimation models.",
    role: "ML Engineer",
    tags: ["Segmentation", "Depth Estimation", "Image Effects"],
    tech: ["Hugging Face Transformers", "Monocular Depth Models", "PyTorch", "Python"],
    highlights: [
      "Used a Hugging Face segmentation model to isolate a person from a complex background in 512×512 selfies.",
      "Applied both fixed Gaussian background blur and depth-based variable blur where blur intensity scales with estimated depth.",
      "Packaged the pipeline into a reproducible Colab notebook and optional Hugging Face Space UI for interactive experimentation.",
    ],
  },
  {
    id: "gans-and-diffusion-animal-dataset",
    title: "GAN & Diffusion Experiments on Custom Datasets",
    year: 2025,
    category: "Generative Modeling",
    summary:
      "Comparative study of DCGAN, Progressive GAN, and diffusion models on faces, synthetic colored squares, and a custom animal image dataset.",
    role: "Research & Engineering",
    tags: ["GANs", "Progressive GAN", "Diffusion Models", "Generative Modeling"],
    tech: ["PyTorch", "DCGAN", "Progressive GAN", "Diffusion", "Python"],
    highlights: [
      "Trained a DCGAN on standard face datasets and a custom 64×64 colored-squares dataset to study sample complexity and mode collapse.",
      "Collected a 1k–5k image dataset of a chosen animal at 256×256 resolution and trained both DCGAN and Progressive GAN with augmentation and architecture tweaks.",
      "Implemented a diffusion model on the same animal dataset, visualizing the forward noising and reverse denoising processes and comparing sample quality against GAN-based approaches.",
    ],
  },
];
