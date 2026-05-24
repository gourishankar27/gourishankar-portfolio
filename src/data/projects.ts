import type { Project } from "@/types/project";

export const featuredProjects: Project[] = [

  {
    id: "event-based-star-tracking",
    title: "Event-Based Star Tracking for Spacecraft Attitude Estimation",
    year: 2026,
    category: "Space Autonomy",
    featured: true,
    order: 0,
    summary:
      "A Speed-Aware EBS-EKF research prototype for event-camera star tracking that improves low-light spacecraft attitude estimation by making centroid correction depend on both brightness and image-plane speed.",
    role: "Research Assistant / Star-Tracking Research Lead",
    tags: [
      "Event-Based Vision",
      "Space Autonomy",
      "State Estimation",
      "Star Tracking",
      "EBS-EKF",
      "Astrometry",
      "Low-SWaP",
      "Attitude Estimation",
    ],
    tech: [
      "Python",
      "Event-Based Cameras",
      "Extended Kalman Filtering",
      "Weighted Wahba Solver",
      "Blind Astrometry",
      "Synthetic Data Generation",
      "Low-Light Sensor Modeling",
      "Performance Evaluation",
    ],
    highlights: [
      "Extended EBS-EKF from brightness-only centroid correction to a speed-aware measurement model that shifts positive-event centroids along the image-plane motion direction.",
      "Integrated adaptive measurement covariance so fast-moving stars and weak centroid clusters contribute less aggressively to the weighted attitude update.",
      "Built on an event-tracking prototype with event batching, centroid extraction, blind astrometry initialization, and batchwise weighted Wahba attitude estimation.",
      "Validated the end-to-end module on a 3.0 s representative track with 372 event batches, about 8.7M events, and 38.3 average centroids per batch without adding measurable runtime cost.",
    ],
    coverImage: "/projects/event-based-star-tracking/cover.png",
    coverAlt: "Speed-aware event-based star tracking project cover",
    links: [
      {
        type: "paper",
        label: "Final report",
        href: "/projects/event-based-star-tracking/final-report.pdf",
      },
      {
        type: "slides",
        label: "Presentation slides",
        href: "/projects/event-based-star-tracking/presentation-slides.pdf",
      },
      {
        type: "website",
        label: "Contact for research details",
        href: "/about#contact",
      },
    ],
    metrics: [
      {
        label: "Event volume",
        value: "8.7M",
        context: "Events processed in a 3.0 s representative track",
      },
      {
        label: "Evaluation batches",
        value: "372",
        context: "Paired baseline vs speed-aware run",
      },
      {
        label: "Centroid density",
        value: "38.3",
        context: "Average centroids per batch",
      },
      {
        label: "Mean latency",
        value: "8.17 ms",
        context: "Speed-aware prototype vs 8.47 ms baseline",
      },
      {
        label: "Max latency",
        value: "118.39 ms",
        context: "Speed-aware prototype vs 124.49 ms baseline",
      },
      {
        label: "Budget overruns",
        value: "49",
        context: "One fewer than the magnitude-only baseline on the same track",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/event-based-star-tracking/cover.png",
        alt: "Speed-aware EBS-EKF cover image",
        caption:
          "Project cover summarizing the event-camera star-tracking pipeline, speed-aware centroid correction, adaptive covariance, and preliminary runtime metrics.",
      },
      {
        type: "image",
        src: "/projects/event-based-star-tracking/approach-overview.png",
        alt: "Prototype evolution and speed-aware EBS-EKF pipeline",
        caption:
          "Approach overview: the baseline performs event batching, centroid extraction, blind astrometry, and weighted Wahba attitude updates; the extension estimates image-plane speed, applies speed-aware correction, and moves toward asynchronous 3D EBS-EKF.",
      },
      {
        type: "image",
        src: "/projects/event-based-star-tracking/measurement-model.png",
        alt: "Conceptual speed-aware centroid correction and uncertainty surfaces",
        caption:
          "Measurement-model motivation: EBS-EKF corrects centroid bias with brightness, while this project adds image-plane speed and adaptive uncertainty for fast-moving or weak centroid observations.",
      },
      {
        type: "image",
        src: "/projects/event-based-star-tracking/method-details.png",
        alt: "Speed-aware correction equations, adaptive uncertainty, and weighted Wahba update",
        caption:
          "Method details: corrected centroids are shifted along normalized image-plane velocity, covariance increases with speed and weak centroid support, and weighted Wahba fuses measurements batch-by-batch.",
      },
      {
        type: "image",
        src: "/projects/event-based-star-tracking/baseline-results.png",
        alt: "Magnitude-only baseline attitude tracking report",
        caption:
          "Baseline run on the representative track: 3.0 s sequence, 372 batches, about 8.7M events, 38.3 average centroids per batch, 8.47 ms mean latency, 124.49 ms max latency, and 50 budget overruns.",
      },
      {
        type: "image",
        src: "/projects/event-based-star-tracking/speed-aware-results.png",
        alt: "Speed-aware prototype attitude tracking report",
        caption:
          "Speed-aware run on the same track: RA, Dec, and roll estimates visibly change while mean latency drops to 8.17 ms, max latency drops to 118.39 ms, and budget overruns drop to 49.",
      },
    ],
    sections: [
      {
        id: "problem",
        title: "Problem and research gap",
        paragraphs: [
          "Star trackers estimate spacecraft attitude from observed star positions, which is critical for communication, Earth observation, and scientific pointing. Conventional APS star trackers are limited by exposure time and frame processing cadence, making rapid motion and high-frequency pointing harder to support.",
          "Event-based cameras are attractive because they output sparse asynchronous brightness-change events at microsecond-scale temporal resolution. For sparse star fields, most pixels remain inactive, so the sensor can offer lower latency, lower data volume, reduced motion blur, and potentially lower power consumption.",
          "The main challenge is measurement quality under low light. Existing EBS-EKF work uses a low-light event model, a magnitude-dependent centroid correction, and a 3D EKF. The remaining gap is that the centroid offset is treated as a fixed function of brightness, even though the offset should theoretically vary with image-plane star speed.",
        ],
      },
      {
        id: "approach",
        title: "System overview",
        paragraphs: [
          "I kept the measurement-driven philosophy of EBS-EKF instead of replacing the tracker. The implemented prototype starts from a practical event-tracking baseline: accumulate event batches, extract star centroids, initialize the field with blind astrometry, and estimate attitude batch-by-batch through a weighted Wahba solve.",
          "The speed-aware extension is inserted between centroid extraction and attitude update. For each tracked star, the prototype estimates image-plane velocity from consecutive batches, uses centroid event count as a brightness proxy, applies a speed-aware centroid correction, and computes adaptive measurement covariance before the attitude update.",
        ],
      },
      {
        id: "measurement-model",
        title: "Speed-aware measurement model",
        paragraphs: [
          "The measured centroid is treated as a biased observation rather than as a perfect star location. The correction shifts the centroid along normalized image-plane velocity using an offset function conditioned on brightness proxy and speed. In the prototype, centroid support count stands in for catalog magnitude while the full target method would use apparent magnitude and calibrated event-camera parameters.",
          "The uncertainty model is adaptive: covariance increases when motion is fast or centroid support is weak. The intuition is that fast-moving stars and dimmer or weaker clusters should influence the attitude estimate less strongly than stable, well-supported measurements.",
        ],
        bullets: [
          "Corrected centroid: measured centroid plus a motion-direction offset driven by brightness proxy and image-plane speed.",
          "Adaptive covariance: fast motion and weak centroid support increase measurement uncertainty.",
          "Weighted fusion: inverse-variance weights feed the weighted Wahba attitude update in the current prototype.",
        ],
      },
      {
        id: "evaluation",
        title: "Evaluation setup",
        paragraphs: [
          "The project uses a staged evaluation plan. Synthetic trade-space scenarios generate controlled star-motion data for speed and brightness sweeps, helping calibrate the correction and debug failure modes before large real-data runs.",
          "The real-data stage is designed around released EBS-EKF real-night-sky data, Earth-rotation-based validation, and public variable-speed slew observations. The current results are an initial ablation, not a final accuracy benchmark.",
        ],
        bullets: [
          "Comparisons: current baseline, magnitude-only correction, and speed-aware prototype.",
          "Current metrics: RA/Dec/roll attitude behavior, mean and max latency, budget overruns, and centroids per batch.",
          "Target metrics: across/about attitude error when trusted reference solutions are available.",
        ],
      },
      {
        id: "results",
        title: "Preliminary results",
        paragraphs: [
          "On one representative 3.0 s track, both the baseline and speed-aware prototype processed 372 batches and approximately 8.7M events with the same average centroid count of 38.3 centroids per batch. This keeps the comparison focused on the measurement-model change rather than a different detection count.",
          "The speed-aware prototype changed the estimated RA, Dec, and roll trajectories, showing that the new measurement layer is active end-to-end. Runtime stayed essentially the same: mean latency decreased from 8.47 ms to 8.17 ms, max latency decreased from 124.49 ms to 118.39 ms, and budget overruns decreased from 50 to 49.",
          "These results support the engineering viability of the module, but they are intentionally framed as preliminary. A single track demonstrates integration and runtime feasibility; it does not yet prove consistent accuracy gains across regimes.",
        ],
      },
      {
        id: "engineering",
        title: "Engineering contribution",
        bullets: [
          "Implemented a measurement-model upgrade that can be tested inside the existing event_explorer-style pipeline without first rebuilding a full asynchronous 3D EKF.",
          "Preserved astrometry and visualization tooling, making the prototype easier to debug and compare against the magnitude-only baseline.",
          "Designed the synthetic scenario workflow around speed, brightness, field density, sky location, focal length, detector thresholds, and motion-axis sweeps.",
          "Kept the algorithmic focus on low-SWaP constraints where measurement-model improvements are valuable because hardware, aperture, and compute budgets are limited.",
        ],
      },
      {
        id: "next-steps",
        title: "Limitations and next steps",
        bullets: [
          "Run the full synthetic trade-space sweep to calibrate the speed-aware correction across speed and brightness regimes.",
          "Evaluate paired baseline vs speed-aware runs across multiple real night-sky tracks instead of one representative sequence.",
          "Use Earth-rotation and public variable-speed observations for stronger validation and less reliance on a single reference tracker.",
          "Integrate the corrected measurements and adaptive covariance into a fuller asynchronous 3D EBS-EKF pipeline for continuous rotation and angular-velocity updates.",
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
    category: "Financial ML",
    featured: true,
    order: 2,
    summary:
      "A research-grade forecasting system that evaluates Temporal Fusion Transformers against LSTM and ARIMAX baselines for S&P 500 return prediction using mixed-frequency market and macroeconomic data, then extends TFT with regime-aware attention and interpretability diagnostics.",
    role: "ML Research Engineer / Time-Series Modeling",
    tags: [
      "Financial ML",
      "Time-Series Forecasting",
      "Temporal Fusion Transformer",
      "Regime-Aware Attention",
      "Mixed-Frequency Data",
      "Quantile Forecasting",
      "Model Interpretability",
      "Experiment Design",
    ],
    tech: [
      "Python",
      "PyTorch",
      "PyTorch Forecasting",
      "Temporal Fusion Transformer",
      "LSTM",
      "ARIMAX",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "ALFRED / FRED",
      "VIX Regime Features",
      "Quantile Loss",
    ],
    highlights: [
      "Built a mixed-frequency financial forecasting pipeline spanning January 1991 to October 2025, combining daily market variables such as VIX, Treasury yields, and yield spreads with monthly CPI-derived inflation releases.",
      "Aligned macroeconomic variables using ALFRED vintage dates to reduce look-ahead bias, then evaluated models across chronological train, validation, and test windows covering COVID-19, post-pandemic, and Fed-tightening regimes.",
      "Implemented and compared TFT, LSTM, and ARIMAX baselines, then added domain-specific TFT modifications including directional-diversity penalties, regime-conditional outputs, multi-task classification, and VIX-conditioned attention gates.",
      "Found that regime-aware attention improved weekly directional accuracy from 57.9% to 59.4% and Sharpe ratio from 1.05 to 1.22, while learned gates dampened attention in low-volatility regimes and amplified it in high-volatility regimes.",
      "Used attention gates, variable-selection weights, gradient-flow plots, prediction variance, and directional-bias diagnostics to explain when the model learned useful regime structure and when the output layer collapsed.",
    ],
    coverImage: "/projects/sp500-deep-learning-forecasting/cover.png",
    coverAlt: "S&P 500 deep learning forecasting system cover",
    links: [
      {
        type: "github",
        label: "Source repository",
        href: "https://github.com/gourishankar27/financial-market-prediction",
      },
      {
        type: "paper",
        label: "Final project report",
        href: "/projects/sp500-deep-learning-forecasting/final-report.pdf",
      },
      {
        type: "website",
        label: "Discuss project",
        href: "/about#contact",
      },
    ],
    metrics: [
      {
        label: "Data window",
        value: "1991-2025",
        context: "Daily S&P 500 + mixed-frequency macro indicators",
      },
      {
        label: "Weekly accuracy",
        value: "59.4%",
        context: "Regime-aware TFT directional accuracy",
      },
      {
        label: "Sharpe ratio",
        value: "1.22",
        context: "Weekly long-only strategy after regime attention",
      },
      {
        label: "Attention gates",
        value: "4 params",
        context: "2 VIX regimes x 2 attention heads",
      },
      {
        label: "Bear-market VIX weight",
        value: "0.74",
        context: "Regime-aware VSN focus during 2022 stress period",
      },
      {
        label: "Baselines",
        value: "TFT / LSTM / ARIMAX",
        context: "Transformer, recurrent, and statistical comparisons",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/sp500-deep-learning-forecasting/cover.png",
        alt: "S&P 500 forecasting project cover",
        caption: "Project cover summarizing the mixed-frequency forecasting problem, model family, and regime-aware evaluation loop.",
      },
      {
        type: "image",
        src: "/projects/sp500-deep-learning-forecasting/architecture.svg",
        alt: "Modified Temporal Fusion Transformer architecture for financial forecasting",
        caption: "System architecture: mixed-frequency features enter a TFT encoder, then branch into quantile regression, optional classification, mixture-of-experts output, and regime-aware attention gates.",
      },
      {
        type: "image",
        src: "/projects/sp500-deep-learning-forecasting/regime-gates.svg",
        alt: "Learned regime-aware attention gates by volatility regime",
        caption: "Regime-aware attention results: weekly directional accuracy improved from 57.9% to 59.4%, Sharpe increased from 1.05 to 1.22, and high-volatility gates amplified attention while low-volatility gates dampened it.",
      },
      {
        type: "image",
        src: "/projects/sp500-deep-learning-forecasting/feature-weights.svg",
        alt: "Variable selection weights by market period",
        caption: "Variable-selection interpretation: baseline feature weights shift gradually, while regime-aware attention focuses more sharply on VIX in the 2022 bear market and yield spread in the 2024-2025 bull-market setting.",
      },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          "This project investigates whether Temporal Fusion Transformers can forecast S&P 500 returns when market data arrives at different temporal resolutions. Daily variables such as VIX update continuously, while macroeconomic variables such as CPI-derived inflation arrive monthly and can become stale before the next release.",
          "The portfolio version emphasizes the engineering story: building the dataset correctly, avoiding look-ahead bias, comparing strong baselines, diagnosing model collapse, and adding regime-aware mechanisms that make the model behavior more interpretable.",
        ],
      },
      {
        id: "problem",
        title: "Problem and constraints",
        bullets: [
          "Financial returns are noisy and close to random-walk behavior, so even small directional improvements must be treated carefully and evaluated over multiple market regimes.",
          "Mixed-frequency features create a stale-information problem: a 30-day-old macro release should not be treated with the same freshness as yesterday's volatility signal.",
          "Market non-stationarity creates regime shifts where relationships between volatility, yields, inflation, and returns change across bull, bear, crisis, and tightening periods.",
          "The project is framed as an evaluation and interpretability system, not a claim of deployable trading alpha.",
        ],
      },
      {
        id: "data-pipeline",
        title: "Data pipeline",
        paragraphs: [
          "The dataset spans January 1991 to October 2025 and combines S&P 500 returns with daily market indicators and lower-frequency macroeconomic releases. Features include VIX, 10-year Treasury yield, 10Y-2Y yield spread, and CPI-derived inflation with publication lag handling.",
          "To reduce look-ahead bias, macroeconomic records were aligned using ALFRED vintage dates so each historical prediction only sees data that would have been available at that point in time.",
        ],
        bullets: [
          "Chronological split: train on 1991-2015, validate on 2015-2020, test on 2020-2025.",
          "Validation covers COVID-era disruption; testing covers post-pandemic conditions and 2022-2023 Fed-tightening regimes.",
          "VIX-based regime labels are used for interpretability, attention gating, and rolling-window robustness analysis.",
        ],
      },
      {
        id: "modeling",
        title: "Modeling approach",
        bullets: [
          "Temporal Fusion Transformer: LSTM encoder/decoder for local temporal structure plus interpretable multi-head attention for longer-range dependencies and variable selection.",
          "Quantile forecasting: predicts seven quantiles (0.02, 0.10, 0.25, 0.50, 0.75, 0.90, 0.98) using quantile loss to represent asymmetric uncertainty.",
          "Baselines: ARIMAX for statistical comparison and a three-layer LSTM baseline for recurrent deep learning comparison on the same prediction task.",
          "Training controls: constrained TFT hidden size after larger hidden dimensions produced degenerate positive-return predictions with low output variance.",
        ],
      },
      {
        id: "regime-aware-attention",
        title: "Regime-aware attention",
        paragraphs: [
          "The central architectural experiment adds lightweight VIX-conditioned attention gates. Each attention head is multiplied by a learned regime-specific gate, letting the model specialize attention behavior under low- and high-volatility conditions with only four learned parameters for two regimes and two heads.",
          "The resulting gates learned intuitive behavior: low-volatility periods dampened attention to about 0.46, while high-volatility periods amplified attention to about 0.57. In the weekly setting this lifted directional accuracy from 57.9% to 59.4% and improved Sharpe ratio from 1.05 to 1.22.",
        ],
        bullets: [
          "Low-volatility regime: attention is dampened, suggesting the model relies less on sharp historical re-weighting when markets are calmer.",
          "High-volatility regime: attention is amplified, suggesting the model searches harder for regime-specific temporal signals during stress periods.",
          "Feature-weight analysis showed VIX becoming dominant during the 2022 bear market and yield spread becoming more important in later bull-market windows.",
        ],
      },
      {
        id: "failure-analysis",
        title: "Failure analysis and diagnostics",
        paragraphs: [
          "A major learning from the project was that validation loss alone was not enough. Multiple experiments converged to similar validation loss while producing very different downstream behavior, including prediction collapse.",
          "Gradient-flow diagnostics showed cases where encoder and decoder layers continued learning useful structure while the output layer collapsed early, indicating a mismatch between representation learning and the final prediction objective.",
        ],
        bullets: [
          "Tracked prediction variance, directional bias, gradient norms, quantile loss, directional accuracy, hit rate, Sharpe ratio, RMSE, MAE, and max drawdown.",
          "Added directional-diversity and anti-collapse penalties to discourage batches where almost all predictions share the same sign.",
          "Used multi-task classification to test whether the encoder could learn VIX-based regime structure even when daily direction prediction remained noisy.",
        ],
      },
      {
        id: "results",
        title: "Results and interpretation",
        bullets: [
          "Weekly regime-aware attention improved directional accuracy from 57.9% to 59.4%, a 1.5 percentage-point lift in a very noisy forecasting task.",
          "The same weekly setting improved Sharpe ratio from 1.05 to 1.22, suggesting that the regime-conditioned attention mechanism improved the quality of selected signals, not just the raw classification metric.",
          "Variable-selection weights became more regime-adaptive: VIX rose to about 0.74 during the 2022 bear market compared with about 0.31 in the baseline visualization, while yield spread dominated the 2024 bull-market window at about 0.54.",
          "The project ultimately shows both promise and limits: transformer encoders can learn meaningful regime structure, but noisy financial targets require careful evaluation, interpretation, and failure-mode analysis.",
        ],
      },
      {
        id: "engineering-contribution",
        title: "Engineering contribution",
        bullets: [
          "Designed reproducible data preprocessing and chronological evaluation workflows for mixed-frequency financial time series.",
          "Implemented TFT, LSTM, and ARIMAX experiments with comparable inputs and evaluation metrics.",
          "Built diagnostics to expose output collapse, gradient disconnect, prediction diversity, and regime-specific attention behavior.",
          "Produced clear visualizations for attention gates, variable-selection weights, rolling regimes, and architecture-level modifications.",
        ],
      },
      {
        id: "next-steps",
        title: "Next steps",
        bullets: [
          "Add multi-horizon and multi-target forecasting across S&P 500 constituents rather than a single index-level target.",
          "Compare additional architectures such as Informer, Autoformer, and non-stationarity-aware time-series models on the same vintage-aligned dataset.",
          "Add a Streamlit or Next.js demo that allows users to inspect a forecast window, attention weights, feature weights, and regime classification side-by-side.",
          "Turn the notebook/report artifacts into a fully reproducible experiment package with locked data snapshots and automated figure generation.",
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
      "A closed-loop robot-learning prototype that detects a ping pong ball, estimates its 3D motion, predicts the landing point, and rotates a servo-driven blocker in real time on a Raspberry Pi-based hardware setup.",
    role: "Robotics Perception, Prediction & Controls Lead",
    tags: [
      "Computer Vision",
      "Trajectory Prediction",
      "Embedded Systems",
      "Real-Time Robotics",
      "Robot Learning",
      "Hardware Integration",
    ],
    tech: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "NumPy",
      "Raspberry Pi 5",
      "Pi Camera",
      "Servo Motor",
      "MQTT",
      "Quadratic Regression",
      "Camera Calibration",
    ],
    highlights: [
      "Designed the end-to-end perception-to-control loop: camera capture, YOLO-based ball detection, pixel-to-world mapping, motion buffering, quadratic trajectory prediction, and MQTT servo commands.",
      "Fine-tuned a YOLO-family detector on more than 1,000 custom labeled ping pong ball images and reported 92% mAP with approximately 2.7 ms inference per frame.",
      "Built a lightweight 3D position estimate from 2D bounding-box centers and apparent ball radius, then fit a quadratic model to predict the interception point on the goalie plane.",
      "Integrated Raspberry Pi 5, Pi Camera, and a servo-driven blocker into a functional real-time hardware demo, with servo alignment typically within 5-10 degrees of a good blocking angle.",
      "Analyzed system-level failure cases caused by noisy detections, single-camera depth uncertainty, bounce timing, limited field of view, and fixed-frame-rate assumptions.",
    ],
    coverImage: "/projects/automated-goalie/cover.png",
    coverAlt: "Automated goalie robot project cover",
    links: [
      {
        type: "paper",
        label: "Final report",
        href: "/projects/automated-goalie/final-report.pdf",
      },
      {
        type: "slides",
        label: "Presentation slides",
        href: "/projects/automated-goalie/presentation-slides.pdf",
      },
      {
        type: "website",
        label: "Discuss project",
        href: "/about#contact",
      },
    ],
    metrics: [
      {
        label: "Detector mAP",
        value: "92%",
        context: "Reported custom ping pong ball detector performance",
      },
      {
        label: "Inference latency",
        value: "2.7 ms",
        context: "Average per-frame processing in the project conclusion",
      },
      {
        label: "Training data",
        value: "1,000+",
        context: "Custom labeled images from the project setup",
      },
      {
        label: "Camera rate",
        value: "60 FPS",
        context: "Pi camera stream used for real-time detection",
      },
      {
        label: "Workspace",
        value: "40 x 23 cm",
        context: "Approximate physical play area",
      },
      {
        label: "Servo alignment",
        value: "5-10°",
        context: "Typical blocking-angle error during testing",
      },
    ],
    media: [
      {
        type: "image",
        src: "/projects/automated-goalie/cover.png",
        alt: "Automated goalie project cover",
        caption:
          "Generated cover summarizing the end-to-end robotics loop: detect the ball, estimate its motion, predict the landing point, and command the servo blocker.",
      },
      {
        type: "image",
        src: "/projects/automated-goalie/demo.gif",
        alt: "Automated goalie hardware demo frame",
        caption:
          "Demo frame from the physical prototype showing the servo-driven blocker inside the small ping pong test arena.",
      },
      {
        type: "image",
        src: "/projects/automated-goalie/system-diagram.png",
        alt: "Automatic goalie perception, prediction, and control system diagram",
        caption:
          "System diagram from the final report: camera input flows through YOLO detection, 2D-to-3D mapping, motion buffering, trajectory prediction, and MQTT servo control.",
      },
      {
        type: "image",
        src: "/projects/automated-goalie/hardware-architecture.png",
        alt: "Raspberry Pi camera and servo hardware architecture slide",
        caption:
          "Hardware architecture: Raspberry Pi 5, Pi Camera, servo motor, 60 FPS detection, z-depth from apparent ball radius, and servo-angle mapping from predicted position.",
      },
      {
        type: "image",
        src: "/projects/automated-goalie/yolo-detection-pipeline.png",
        alt: "YOLO detector training examples and real-time pipeline slide",
        caption:
          "Detection and control implementation: fine-tuned YOLO-family detector, image-to-world coordinate mapping, quadratic trajectory prediction, and servo command publishing.",
      },
      {
        type: "image",
        src: "/projects/automated-goalie/trajectory-modeling.png",
        alt: "Pixel-to-world mapping and quadratic trajectory prediction slide",
        caption:
          "Trajectory modeling workflow: map pixel coordinates and ball diameter into approximate x, y, z positions, collect trajectory data, fit a quadratic curve, and predict the interception point where z reaches the goalie plane.",
      },
      {
        type: "image",
        src: "/projects/automated-goalie/prototype-results-slide.png",
        alt: "Automatic goalie prototype conclusion slide",
        caption:
          "Prototype result slide: the system produced a functional real-time demo, delivered accurate predictions on multiple target positions, and averaged about 2.7 ms processing per frame.",
      },
    ],
    sections: [
      {
        id: "problem",
        title: "Problem and objective",
        paragraphs: [
          "This project reduced the table-tennis robot problem into a compact automatic goalie: observe a ping pong ball in a small arena, predict where it will land, and rotate a blocker before impact.",
          "The key challenge was not only training a detector. The system had to close the loop across perception, calibration, prediction, communication, and actuation under real timing constraints on lightweight hardware.",
        ],
      },
      {
        id: "hardware",
        title: "Hardware and sensing setup",
        paragraphs: [
          "The prototype used a Raspberry Pi 5, Pi Camera, and servo motor inside an approximately 40 cm by 23 cm workspace. The camera observed the ball from above while the servo rotated a simple goalie arm across the interception region.",
          "The design intentionally used affordable hardware so the main engineering challenge was software integration: reliable detection, approximate 3D position estimation, fast trajectory prediction, and responsive servo control.",
        ],
        bullets: [
          "Pi Camera stream at 60 FPS for fast visual feedback.",
          "Servo-driven blocker mounted at the front of the arena.",
          "MQTT interface separating prediction logic from motor command publishing.",
        ],
      },
      {
        id: "perception",
        title: "Perception and calibration",
        paragraphs: [
          "The perception stack used a custom YOLO-family detector trained on more than 1,000 labeled images collected from the project setup. The detector localized the orange ping pong ball in each frame and produced bounding boxes used for downstream position estimation.",
          "After detection, the system converted the bounding-box center into approximate workspace x-y coordinates. The apparent radius or diameter of the ball was used as a depth cue for z, which kept the setup simple but introduced sensitivity to small detection-size errors.",
        ],
        bullets: [
          "Reported detector performance: 92% mAP.",
          "Average processing latency: approximately 2.7 ms per frame.",
          "Calibration mapped image coordinates and ball size into approximate real-world position.",
        ],
      },
      {
        id: "prediction-control",
        title: "Trajectory prediction and servo control",
        paragraphs: [
          "The system stored a short buffer of recent ball positions, smoothed noisy measurements, and fit a quadratic trajectory model. The prediction target was the landing or interception position where the ball would cross the goalie plane.",
          "The predicted x-y point was mapped to a servo angle and published through MQTT. This kept the software modular while allowing the servo controller to rotate the blocker toward the predicted landing region.",
        ],
        bullets: [
          "Used quadratic regression as a lightweight physics-inspired predictor suitable for Raspberry Pi deployment.",
          "Mapped predicted landing points to servo commands for reactive blocking.",
          "Logged throw outputs so errors could be traced to detection, calibration, timing, or actuation.",
        ],
      },
      {
        id: "results",
        title: "Results and representative predictions",
        paragraphs: [
          "The prototype produced strong results on several test throws. Representative targets at (0, 20) cm and (40, 10) cm were predicted exactly as (0.0, 20.0) cm and (40.0, 10.0) cm, while a mid-field target at (20, 18) cm was predicted as (20.5, 20.0) cm.",
          "The system also exposed clear failure modes. Low-y targets were often overestimated, and aggressive extrapolation sometimes pushed the prediction toward the workspace boundary. These errors were usually linked to noisy paths, bounce ambiguity, or mismatch between real timing and the fixed 60 FPS assumption.",
        ],
        bullets: [
          "Exact predictions on selected corner and side targets in representative tests.",
          "Servo usually moved within about 5-10 degrees of a good blocking angle.",
          "Demonstrated a real closed-loop robot behavior rather than only offline ball detection.",
        ],
      },
      {
        id: "contribution",
        title: "My contribution",
        paragraphs: [
          "I led the design of the full pipeline and hardware setup. My work covered detector training, camera calibration, trajectory prediction logic, and integration of the MQTT servo-control loop with the rest of the system.",
          "This made the project a complete robotics integration exercise: data collection, model training, calibration, real-time inference, prediction, motor command publishing, and hardware testing all had to work together.",
        ],
      },
      {
        id: "lessons",
        title: "Lessons learned and next steps",
        paragraphs: [
          "The project showed that robotics performance depends on the full sensing-to-action chain. A detector can work well on individual frames but still miss the block if calibration, timing, or servo response is off.",
          "A practical next version would add a Kalman filter or similar state estimator, dynamic frame-rate handling, better bounce detection, more robust lighting tests, and improved depth estimation through stereo vision or stronger calibration.",
        ],
        bullets: [
          "Improve trajectory tracking with a Kalman filter instead of a simple moving average.",
          "Handle variable frame timing rather than assuming fixed 60 FPS.",
          "Upgrade depth estimation using stereo vision or a more reliable calibration model.",
          "Test under varied lighting and backgrounds for robustness.",
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
