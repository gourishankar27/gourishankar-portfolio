import type { Project } from "@/types/project";

export const featuredProjects: Project[] = [

  {
    id: "ownerpilot-ai-operating-copilot",
    title: "OwnerPilot - AI Operating Copilot for SMB Owners",
    year: 2026,
    category: "AI Product Engineering",
    featured: true,
    order: 6,
    summary:
      "Open-source decision intelligence platform that helps smaller business owners import records, track obligations, investigate cash and margin shifts, forecast scenarios, and execute evidence-backed operating actions.",
    role: "Full-Stack AI Product Engineer",
    tags: [
      "Full-Stack AI",
      "Decision Intelligence",
      "RAG",
      "Forecasting",
      "PWA",
      "SMB Analytics",
      "Self-Hosted",
      "Open Source",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Pydantic",
      "PostgreSQL",
      "pgvector",
      "Docker Compose",
      "Ollama",
      "Recharts",
      "Drizzle ORM",
      "Better Auth",
      "Turborepo",
    ],
    highlights: [
      "Built a monorepo product with a Next.js PWA frontend, FastAPI analytics service, shared typed contracts, Postgres/pgvector business memory, and Docker Compose self-hosting support.",
      "Implemented owner workflows for CSV/Excel import previews, confirmed ledger history, recurring obligations, quick-add sales/purchases/expenses, document storage, action queues, forecasting, scenario planning, and cash-aware reorder recommendations.",
      "Designed AI analyst flows with prompt guardrails, retrieval-backed evidence snippets, confidence and recommendation fields, and runtime metadata for provider, mode, latency, and estimated cost.",
      "Shipped a recruiter-ready India-first pharmacy demo with sanitized fixtures, deterministic walkthrough prompts, local-open Ollama mode, BYO cloud mode, hybrid routing, and hosted deployment path documentation.",
    ],
    coverImage: "/projects/ownerpilot-ai-operating-copilot/cover.svg",
    coverAlt: "OwnerPilot AI operating copilot project cover",
    links: [
      {
        type: "github",
        label: "Source repository",
        href: "https://github.com/gourishankar27/ownerpilot",
      },
      {
        type: "docs",
        label: "Architecture notes",
        href: "https://github.com/gourishankar27/ownerpilot/tree/main/docs",
      },
      {
        type: "website",
        label: "Discuss demo access",
        href: "/about#contact",
      },
    ],
    metrics: [
      {
        label: "Showcase release",
        value: "v1.0.0",
        context: "Public milestone with docs, demo data, and deployment paths",
      },
      {
        label: "API surface",
        value: "24 routes",
        context: "FastAPI endpoints for imports, investigations, forecasts, actions, and reorder plans",
      },
      {
        label: "Runtime modes",
        value: "3",
        context: "local-open, BYO cloud, and hybrid model routing",
      },
      {
        label: "Deployment paths",
        value: "2",
        context: "Hosted Vercel/Render/Supabase path and Docker/Ollama self-hosted path",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/ownerpilot-ai-operating-copilot/cover.svg",
        alt: "OwnerPilot command center cover image",
        caption: "Portfolio cover for the OwnerPilot SMB operating cockpit and AI copilot.",
      },
      {
        type: "image",
        src: "/projects/ownerpilot-ai-operating-copilot/architecture.svg",
        alt: "OwnerPilot technical architecture diagram",
        caption: "System architecture: Next.js PWA, FastAPI service, Postgres/pgvector memory, Ollama local inference, and optional cloud model providers.",
      },
      {
        type: "image",
        src: "/projects/ownerpilot-ai-operating-copilot/workflow.svg",
        alt: "OwnerPilot owner workflow diagram",
        caption: "Owner workflow: import records, build business memory, investigate issues, forecast scenarios, reorder stock, and move actions through a lifecycle.",
      },
    ],
    sections: [
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "Small business owners often make inventory, cash, supplier, and margin decisions without dedicated analytics teams or expensive operating software.",
          "OwnerPilot is designed to close that gap with practical owner workflows instead of generic dashboards: import the records a business already has, surface operational risks, and explain what to do next with evidence and confidence traces.",
        ],
      },
      {
        id: "product-scope",
        title: "Product scope",
        bullets: [
          "India-first pharmacy and medical-store showcase with reusable SMB domain models for sales, purchases, products, expenses, recurring obligations, documents, actions, forecasts, and reorder plans.",
          "Dashboard surfaces revenue, margin, bills, inventory alerts, morning briefs, action queue, and quick-add entries for daily operations.",
          "Owner workflows include import preview and confirmation, recurring obligation tracking, document upload, AI investigation, action lifecycle management, forecasting, scenario planning, and cash-aware replenishment.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        paragraphs: [
          "The system uses a thin web shell plus thin API orchestration model around a Postgres-first business memory. The web app owns the owner-facing PWA experience, while the API centralizes ingestion, analytics, retrieval, forecasting, scheduler, and AI orchestration workflows.",
        ],
        bullets: [
          "apps/web: Next.js App Router PWA with dashboard, imports, documents, Ask OwnerPilot, action center, planner, reorder plan, authentication, and workspace entry.",
          "apps/api: FastAPI service with Pydantic models for import jobs, document storage, investigations, briefings, forecasts, scenarios, quick-add ledger entries, actions, and scheduler runs.",
          "packages/contracts: shared schemas and structured response contracts to keep API/UI boundaries explicit.",
          "infra: Docker Compose stack with Postgres, pgvector, and Ollama for private self-hosted operation.",
        ],
      },
      {
        id: "ai-analyst-workflow",
        title: "AI analyst workflow",
        bullets: [
          "Investigation requests return structured summaries, confidence scores, evidence snippets, risks, recommendations, provider metadata, runtime mode, latency, and estimated cost.",
          "Retrieval-backed evidence is stored through the business document and pgvector memory path so recommendations can cite business context rather than acting like a free-form chatbot.",
          "Provider configuration supports local-open, BYO cloud, and hybrid modes so the project can demonstrate privacy-first local inference while still allowing hosted model fallbacks.",
          "Prompt guardrails and deterministic demo fixtures keep recruiter walkthroughs repeatable and safe to record.",
        ],
      },
      {
        id: "planning-and-actions",
        title: "Planning and action systems",
        bullets: [
          "Cash-aware reorder planning blends stock, sales velocity, supplier costs, expiry risk, and recurring obligation pressure into replenishment recommendations.",
          "Forecast Lab exposes deterministic baseline forecasts and scenario outputs with assumptions and warnings instead of opaque chart-only results.",
          "Action Center tracks open, watching, snoozed, and resolved states so insights become operational tasks rather than static dashboard observations.",
          "Scheduler routes generate briefings, anomalies, due reminders, and action prompts that can evolve into daily owner workflows.",
        ],
      },
      {
        id: "engineering-quality",
        title: "Engineering quality",
        bullets: [
          "Monorepo structure separates UX composition, API orchestration, contracts, UI primitives, infra, and sanitized demo data.",
          "Public fixtures are sanitized and reproducible, with strict data safety rules against committing raw private business data.",
          "CI-oriented commands cover linting, type checking, web builds, API compile sanity, and formatting baselines across TypeScript and Python modules.",
          "Deployment docs cover both near-zero-cost hosted mode and private self-hosted Windows-first mode with Docker and Ollama.",
        ],
      },
      {
        id: "demo-walkthrough",
        title: "Demo walkthrough",
        paragraphs: [
          "The showcase narrative starts with the dashboard, demonstrates import history, asks why profit dropped, reviews evidence and confidence, moves an action through the lifecycle, compares reorder horizons, and runs a forecast or scenario.",
        ],
        bullets: [
          "Sample prompts: 'Why did profit drop this month?', 'What are my top selling products?', 'Which expense categories are spiking?', and 'What should I reorder next week?'",
          "Expected proof points: evidence-backed response, provider/mode/latency/cost metadata, visible action lifecycle, and deterministic forecast/scenario output.",
        ],
      },
      {
        id: "next-steps",
        title: "Next steps",
        bullets: [
          "Add API integration tests for import confirmation, recurring obligations, investigation, scheduler, and reorder workflows.",
          "Add Playwright smoke coverage for dashboard -> import -> ask -> action transitions.",
          "Expand import mapping presets, supplier lead-time settings, localization scaffolding, and model-routing observability.",
          "Capture a 90-second recruiter walkthrough and a 2-3 minute technical walkthrough for the project page media gallery.",
        ],
      },
    ],
  },

  {
    id: "event-based-star-tracking",
    title: "Event-Based Star Tracking for Spacecraft Attitude Estimation",
    year: 2026,
    category: "Space Autonomy",
    featured: true,
    order: 0,
    summary:
      "Research project on event-based star tracking for high-speed spacecraft attitude estimation under low-SWaP constraints, combining centroid correction, astrometry, adaptive uncertainty, and weighted Wahba attitude estimation.",
    role: "Research Assistant",
    tags: [
      "Event-Based Vision",
      "Space Autonomy",
      "State Estimation",
      "Star Tracking",
      "Astrometry",
      "Low-SWaP",
    ],
    tech: [
      "Python",
      "Event-Based Cameras",
      "Astrometry",
      "Wahba Attitude Estimation",
      "Synthetic Data",
      "Performance Evaluation",
    ],
    highlights: [
      "Led research on an ASU-Alphacore NASA event-based star-tracking project for high-speed spacecraft attitude estimation under low-SWaP constraints.",
      "Developed a speed-aware and brightness-aware centroid-correction formulation for fast-moving stars, improving the measurement model beyond brightness-only correction.",
      "Evaluated the prototype on synthetic star-motion tests and public real-night-sky resources, including baseline vs speed-aware comparisons on a 3.0 s sequence with 372 batches and about 8.7M events.",
    ],
    coverImage: "/projects/event-based-star-tracking/cover.svg",
    coverAlt: "Event-based star tracking project cover",
    links: [
      {
        type: "website",
        label: "Contact for details",
        href: "/about#contact",
      },
    ],
    metrics: [
      {
        label: "Event volume",
        value: "~8.7M",
        context: "Events in a 3.0 s evaluation sequence",
      },
      {
        label: "Evaluation batches",
        value: "372",
        context: "Baseline vs speed-aware comparison",
      },
      {
        label: "Estimator",
        value: "Weighted Wahba",
        context: "Attitude estimation from corrected centroids",
      },
      {
        label: "System constraint",
        value: "Low-SWaP",
        context: "Spacecraft sensing and compute constraints",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/event-based-star-tracking/cover.svg",
        alt: "Event-based star tracking cover image",
        caption: "Project cover placeholder summarizing the event-based star-tracking research direction.",
      },
      {
        type: "image",
        src: "/projects/event-based-star-tracking/diagram.svg",
        alt: "Event-based star tracking pipeline diagram",
        caption: "Suggested pipeline: event stream -> centroid extraction/correction -> astrometry -> attitude estimation.",
      },
    ],
    sections: [
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "Traditional star-tracking pipelines can struggle when spacecraft motion is fast, sensor power/weight constraints are tight, and the visual signal is asynchronous rather than frame-based.",
          "This research explores how event-based sensing can support high-speed attitude estimation while preserving runtime feasibility under low-SWaP constraints.",
        ],
      },
      {
        id: "approach",
        title: "Approach",
        bullets: [
          "Batch asynchronous events into star-motion observations suitable for centroid extraction and correction.",
          "Move from brightness-only centroid correction to a formulation that is both speed-aware and brightness-aware for fast-moving stars.",
          "Use astrometric initialization and weighted Wahba attitude estimation with adaptive measurement uncertainty.",
        ],
      },
      {
        id: "evaluation",
        title: "Evaluation",
        paragraphs: [
          "The prototype was evaluated using synthetic star-motion tests and public real-night-sky resources, with comparisons between baseline and speed-aware correction settings.",
          "One reported comparison used a 3.0 second sequence with 372 batches and approximately 8.7 million events, emphasizing both measurement quality and runtime feasibility.",
        ],
      },
      {
        id: "engineering",
        title: "Engineering Notes",
        bullets: [
          "Key implementation themes: event batching, centroid extraction, measurement uncertainty, robust initialization, repeatable experiments, and clear evaluation plots.",
          "The case study is intentionally written at a public portfolio level; replace the placeholder media with shareable plots or figures when available.",
        ],
      },
      {
        id: "next",
        title: "Next steps",
        bullets: [
          "Add shareable evaluation figures for centroid residuals, attitude error, and runtime breakdowns.",
          "Document the sensor assumptions, event-rate behavior, failure modes, and ablation study design.",
        ],
      },
    ],
  },
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
    coverImage: "/projects/vision-guided-diff-physics/cover.svg",
    coverAlt: "Differentiable physics manipulation project cover",
    links: [
      {
        type: "website",
        label: "Contact",
        href: "/about#contact",
      },
    ],
    metrics: [
      {
        label: "Synthetic RGB-D data",
        value: "Isaac Lab",
        context: "Auto-labeled dynamics + contacts",
      },
      {
        label: "Differentiable physics",
        value: "NVIDIA Warp",
        context: "Custom kernels for system ID",
      },
      {
        label: "3D representation",
        value: "3D Gaussian Splatting",
        context: "Perception-to-control loop",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/vision-guided-diff-physics/cover.svg",
        alt: "Vision-guided differentiable physics cover image",
        caption: "Project cover (replace with real screenshots/figures).",
      },
      {
        type: "image",
        src: "/projects/vision-guided-diff-physics/diagram.svg",
        alt: "System diagram placeholder",
        caption: "Suggested figure: perception → differentiable simulation → control.",
      },
    ],
    sections: [
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "Contact-rich manipulation depends on physical properties (friction, mass) that are hard to measure and often mismatched between simulation and the real world.",
          "This project explores learning those latent properties directly from visual observations so planning/control can adapt online.",
        ],
      },
      {
        id: "approach",
        title: "Approach",
        bullets: [
          "Represent the scene with 3D Gaussian Splatting (3DGS) to get a differentiable visual representation.",
          "Use Isaac Lab to generate RGB-D trajectories with ground-truth dynamics and contact signals.",
          "Run differentiable physics kernels (NVIDIA Warp) to backpropagate error to physical parameters (e.g., friction, mass).",
        ],
      },
      {
        id: "results",
        title: "Results",
        paragraphs: [
          "System identification recovers plausible physical parameters and reduces the gap between simulated and observed trajectories, enabling tighter perception-to-control feedback loops.",
        ],
      },
      {
        id: "next",
        title: "Next steps",
        bullets: [
          "Add real-robot validation and evaluate sim-to-real transfer.",
          "Benchmark planning performance on multi-step tasks under varying friction/mass.",
        ],
      },
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
    coverImage: "/projects/sp500-deep-learning-forecasting/cover.svg",
    coverAlt: "S&P 500 forecasting system cover",
    links: [
      {
        type: "website",
        label: "Contact",
        href: "/about#contact",
      },
    ],
    metrics: [
      {
        label: "Data window",
        value: "1991–2025",
        context: "Mixed-frequency macro + markets",
      },
      {
        label: "Models",
        value: "TFT / LSTM / ARIMAX",
        context: "Baselines + ablations",
      },
      {
        label: "Directional lift",
        value: "~2%",
        context: "Over naive baselines (reported)",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/sp500-deep-learning-forecasting/cover.svg",
        alt: "Forecasting system cover image",
        caption: "Project cover (replace with plots).",
      },
      {
        type: "image",
        src: "/projects/sp500-deep-learning-forecasting/diagram.svg",
        alt: "Pipeline diagram placeholder",
        caption: "Suggested figure: data alignment → model → evaluation.",
      },
    ],
    sections: [
      {
        id: "data",
        title: "Data pipeline",
        bullets: [
          "Join daily market series with monthly macro releases and align them on the correct vintage dates to avoid look-ahead bias.",
          "Create consistent training/evaluation splits and normalize features.",
        ],
      },
      {
        id: "modeling",
        title: "Modeling",
        bullets: [
          "Train Temporal Fusion Transformer (TFT) models and compare against LSTM and ARIMAX baselines.",
          "Run ablations on horizon length and sampling frequency.",
        ],
      },
      {
        id: "evaluation",
        title: "Evaluation",
        bullets: [
          "Track directional accuracy and compare against naive strategies on held-out windows.",
          "Inspect failure cases like prediction collapse and distribution shifts.",
        ],
      },
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
    coverImage: "/projects/autonomous-drone-navigation/cover.svg",
    coverAlt: "Autonomous drone navigation system cover",
    links: [
      {
        type: "website",
        label: "Contact",
        href: "/about#contact",
      },
    ],
    metrics: [
      {
        label: "Stack",
        value: "Perception → SLAM → Planning → Control",
        context: "End-to-end autonomy",
      },
      {
        label: "Control",
        value: "PID / MPC + RL",
        context: "Low + high-level",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/autonomous-drone-navigation/cover.svg",
        alt: "Drone navigation cover image",
        caption: "Project cover (replace with flight logs/video).",
      },
      {
        type: "image",
        src: "/projects/autonomous-drone-navigation/diagram.svg",
        alt: "Autonomy stack diagram placeholder",
        caption: "Suggested figure: autonomy stack + interfaces.",
      },
    ],
    sections: [
      {
        id: "overview",
        title: "System overview",
        paragraphs: [
          "A full-stack autonomy project combining perception, state estimation, planning, and control for quadrotor navigation.",
        ],
      },
      {
        id: "approach",
        title: "Approach",
        bullets: [
          "Perception: tracking + ArUco localization + optional detector for semantics.",
          "Estimation: SLAM/mapping for consistent state.",
          "Planning: waypoint + collision avoidance.",
          "Control: PID/MPC for stabilization and tracking; RL for high-level behaviors.",
        ],
      },
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
    coverImage: "/projects/automated-goalie/cover.svg",
    coverAlt: "Automated goalie robot cover",
    links: [
      {
        type: "website",
        label: "Contact",
        href: "/about#contact",
      },
    ],
    metrics: [
      {
        label: "Detection mAP",
        value: "92%",
        context: "Custom YOLOv8 model",
      },
      {
        label: "Inference",
        value: "2.7 ms / frame",
        context: "Raspberry Pi stream",
      },
      {
        label: "Dataset",
        value: "1,000+ frames",
        context: "Custom labeled data",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/automated-goalie/cover.svg",
        alt: "Automated goalie project cover",
        caption: "Project cover (replace with ball tracking screenshots).",
      },
      {
        type: "image",
        src: "/projects/automated-goalie/diagram.svg",
        alt: "Realtime perception/control diagram placeholder",
        caption: "Suggested figure: camera → YOLO → trajectory → servo control.",
      },
    ],
    sections: [
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "Build a low-latency perception + control system that can react to a fast-moving ping pong ball using affordable hardware.",
        ],
      },
      {
        id: "approach",
        title: "Approach",
        bullets: [
          "Detect ball in real time (YOLOv8) on Raspberry Pi.",
          "Project detections into an estimated 3D trajectory using calibration + physics priors.",
          "Predict landing position and command a servo-driven goalie via MQTT.",
        ],
      },
      {
        id: "results",
        title: "Results",
        bullets: [
          "92% mAP ball detection with custom YOLOv8.",
          "2.7 ms/frame inference enabling reactive control.",
          "Accurate saves on test shots with near-optimal alignment.",
        ],
      },
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
    coverImage: "/projects/intellicart-iiot-smart-factory-vehicle/cover.svg",
    coverAlt: "IIoT smart factory vehicle cover",
    links: [
      {
        type: "website",
        label: "Contact",
        href: "/about#contact",
      },
    ],
    metrics: [
      {
        label: "Telemetry logging",
        value: "1 Hz",
        context: "Edge control loop + logging",
      },
      {
        label: "Data stack",
        value: "SQLite → PostgreSQL",
        context: "Per-vehicle → fleet",
      },
      {
        label: "Modes",
        value: "4",
        context: "Manual, line-follow, avoid, track",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/intellicart-iiot-smart-factory-vehicle/cover.svg",
        alt: "IntelliCart cover image",
        caption: "Project cover (replace with dashboard screenshots).",
      },
      {
        type: "image",
        src: "/projects/intellicart-iiot-smart-factory-vehicle/diagram.svg",
        alt: "Edge-to-cloud architecture diagram placeholder",
        caption: "Suggested figure: sensors → edge → DB → dashboard.",
      },
    ],
    sections: [
      {
        id: "architecture",
        title: "Architecture",
        bullets: [
          "Edge: Raspberry Pi + RobotHat runs the control loop and safety checks.",
          "Data: logs stored locally (SQLite) then synced to a central PostgreSQL fleet DB.",
          "UI: browser dashboard with camera, 3D model, radar, and charts.",
        ],
      },
    ],
  },
  
  {
    id: "descriptive-question-answering-system",
    title: "Descriptive Question Answering System",
    year: 2021,
    category: "NLP",
    featured: false,
    order: 7,
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
    coverImage: "/projects/descriptive-question-answering-system/cover.svg",
    coverAlt: "Descriptive question answering system cover",
    links: [
      {
        type: "website",
        label: "Contact",
        href: "/about#contact",
      },
    ],
    metrics: [
      {
        label: "Model",
        value: "BERT",
        context: "Fine-tuned for QA",
      },
      {
        label: "Publication",
        value: "IEEE",
        context: "Pune Section Intl. Conf. (Dec 2021)",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/descriptive-question-answering-system/cover.svg",
        alt: "QA system cover image",
        caption: "Project cover (replace with model diagram).",
      },
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
    coverImage: "/projects/resnet36-smoothrelu-imagenet/cover.svg",
    coverAlt: "ResNet-36 SmoothReLU cover",
    links: [],
    metrics: [
      {
        label: "Top-1",
        value: "63.7%",
        context: "650-class ImageNet subset",
      },
      {
        label: "Top-5",
        value: "84.8%",
        context: "From scratch on A100",
      },
      {
        label: "Δ vs ResNet-34",
        value: "+0.6 pp",
        context: "With ~5.5% more params",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/resnet36-smoothrelu-imagenet/cover.svg",
        alt: "ResNet-36 cover",
        caption: "Project cover (replace with training curves).",
      },
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
    coverImage: "/projects/vit-pv-defect-classification/cover.svg",
    coverAlt: "ViT PV defect classification cover",
    links: [],
    metrics: [
      {
        label: "Test accuracy",
        value: "89.3%",
        context: "Full fine-tuning",
      },
      {
        label: "Params trainable",
        value: "24%",
        context: "Partial unfreezing",
      },
      {
        label: "Dataset",
        value: "30k images",
        context: "12 balanced classes",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/vit-pv-defect-classification/cover.svg",
        alt: "PV defect classification cover",
        caption: "Project cover (replace with confusion matrix).",
      },
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
    coverImage: "/projects/perceptual-loss-turbulence-robust/cover.svg",
    coverAlt: "Perceptual loss turbulence robustness cover",
    links: [],
    metrics: [
      {
        label: "Shift robustness",
        value: "33–92×",
        context: "Vs pixel loss",
      },
      {
        label: "Turbulence sensitivity",
        value: "-24%",
        context: "Optimized layer weights",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/perceptual-loss-turbulence-robust/cover.svg",
        alt: "Perceptual loss cover",
        caption: "Project cover (replace with qualitative results).",
      },
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
    coverImage: "/projects/gru-music-generator/cover.svg",
    coverAlt: "GRU music generator cover",
    links: [],
    metrics: [],
    media: [
      {
        type: "image",
        src: "/projects/gru-music-generator/cover.svg",
        alt: "GRU music generator cover",
        caption: "Project cover (replace with audio visualizations).",
      },
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
    coverImage: "/projects/siren-image-fitting-custom-activation/cover.svg",
    coverAlt: "SIREN image fitting cover",
    links: [],
    metrics: [
      {
        label: "Resolution",
        value: "1024×1024",
        context: "Continuous implicit image",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/siren-image-fitting-custom-activation/cover.svg",
        alt: "SIREN cover",
        caption: "Project cover (replace with reconstructions).",
      },
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
    coverImage: "/projects/vit-segmentation-depth-lens-blur/cover.svg",
    coverAlt: "Segmentation and depth blur cover",
    links: [],
    metrics: [
      {
        label: "Image size",
        value: "512×512",
        context: "Selfie segmentation",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/vit-segmentation-depth-lens-blur/cover.svg",
        alt: "Segmentation cover",
        caption: "Project cover (replace with before/after).",
      },
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
    coverImage: "/projects/gans-and-diffusion-animal-dataset/cover.svg",
    coverAlt: "GANs and diffusion experiments cover",
    links: [],
    metrics: [
      {
        label: "Dataset size",
        value: "1k–5k",
        context: "Custom animal images",
      },
      {
        label: "Resolution",
        value: "256×256",
        context: "For GAN/Diffusion runs",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/gans-and-diffusion-animal-dataset/cover.svg",
        alt: "GAN and diffusion cover",
        caption: "Project cover (replace with samples grid).",
      },
    ],
  },
];
