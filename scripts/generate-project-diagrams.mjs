// Source-based technical illustrations. No screenshots, measurements, or external assets.
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const escape = (s) => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const text = (x, y, s, size = 25, fill = "#cbd5e1", extra = "") =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" ${extra}>${escape(s)}</text>`;

function frame(title, description, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title description">
<title id="title">${escape(title)}</title><desc id="description">${escape(description)}</desc>
<defs>
  <linearGradient id="bg" x2="1" y2="1"><stop stop-color="#0b1020"/><stop offset="1" stop-color="#14233a"/></linearGradient>
  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0V50" fill="none" stroke="#4da3ff" stroke-opacity=".08"/></pattern>
  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#4da3ff"/></marker>
  <marker id="proposal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#ff6b6b"/></marker>
</defs>
<rect width="1600" height="900" rx="30" fill="url(#bg)"/><rect width="1600" height="900" rx="30" fill="url(#grid)"/>
<g font-family="Arial, Helvetica, sans-serif">${body}</g></svg>\n`;
}

const projects = [
  {
    id: "adaptive-digital-assistant", name: "Adaptive Digital Assistant", eyebrow: "PRIVATE PERSONAL AI · RELEASE CANDIDATE",
    subtitle: "Local inference. Source-linked memory. Reviewed interaction.",
    cover: ["Authenticated APIs", "Scoped retrieval", "Encrypted Android", "Local Ollama"],
    architecture: "architecture.svg",
    nodes: [
      ["Android + admin clients", "Compose interaction / web monitoring", "HTTPS sessions; no direct DB access"],
      ["Authenticated FastAPI", "Owner, scope, consent and request fences", "Reserve / publish durable receipts"],
      ["Context + retrieval", "Claims and selected document excerpts", "Source spans, trust and bounded context"],
      ["Android encrypted journal", "Keystore-backed exact pending operations", "Restore by read; explicit Send / retry"],
      ["PostgreSQL persistence", "Sources, versions, requests and memory", "Replay, erasure and versioned recovery"],
      ["Local Ollama inference", "Server-side generation and streaming", "Shared admission, timeout, cancellation"],
    ],
    edges: ["M520 330H580", "M1020 330H1080", "M1300 410V550", "M300 550V410", "M800 550V410", "M1080 630H1050V480H800V410"],
    footer: ["Solid arrows: request/data interfaces; model response returns through the API.", "Optional Android local speech is reviewed before Send. Native wake/device acceptance remains open."],
  },
  {
    id: "mission-x-citycar", name: "Mission-X CityCar", eyebrow: "ROS 2 MOBILE ROBOTICS · SOURCE-VERIFIED INTERFACES",
    subtitle: "Navigation, supervision and drive backends on common ROS topics.",
    cover: ["A* graph planning", "Command supervision", "Mecanum kinematics", "Simulation / Pi"],
    architecture: "architecture.svg",
    nodes: [
      ["GUI + mission goals", "React / rosbridge; named goal manager", "Mission pause, resume and cancel"],
      ["Planner + path follower", "A* waypoint graph; TF pose feedback", "Corner handling, recovery and replan"],
      ["Command mux + limiter", "Manual / auto source selection", "Fresh input, mode-stop, velocity limits"],
      ["Sensors + state feedback", "Camera, LiDAR, IMU, range and TF", "ORB-SLAM3 relay: experimental"],
      ["Base driver + backends", "Body Twist → four wheel speeds", "Gazebo plugin OR Pi GPIO/PWM driver"],
      ["Robot-side supervision", "Arm, E-stop and optional heartbeat", "Ultrasonic gate with explicit policy"],
    ],
    edges: ["M520 330H580", "M1020 330H1080", "M1300 410V550", "M1080 630H1020", "M580 630H520"],
    feedback: "M300 550V480H800V410",
    footer: ["Dashed feedback: sensor/TF state into navigation. Autonomous following currently uses no lateral strafe.", "Hardware adapters are implemented. Physical autonomy and quantitative mapping quality require validation."],
  },
  {
    id: "vision-guided-diff-physics", name: "Vision-Guided Manipulation", eyebrow: "SIMULATION RESEARCH · ROS 2 / GAZEBO / DIFFERENTIABLE MODELS",
    subtitle: "Perception, independent execution authority and contact experiments.",
    cover: ["RGB-D perception", "C++ motion authority", "Sliding surrogate", "Contact diagnosis"],
    architecture: "architecture-current.svg",
    nodes: [
      ["RGB-D + acquisition TF", "Camera model, known-cube geometry", "Observation source / time / covariance"],
      ["State + uncertainty", "CV estimator and validity diagnostics", "Conservative bounds; stale-data guards"],
      ["C++ planning / authority", "MoveIt checks; versioned prepare/commit", "Independent collision and state guards"],
      ["Independent Warp surrogate", "Release model + global friction fitting", "Offline gradients; opt-in Push5 proposals"],
      ["Observation + experiment log", "Contact / release / object motion", "Native state labeled safety/evaluation"],
      ["Gazebo + trajectory control", "Simulated Panda / ros2_control / JTC", "Measured joint feedback and contact"],
    ],
    edges: ["M520 330H580", "M1020 330H1080", "M1300 410V550", "M1080 630H1020", "M580 630H520"],
    feedback: "M300 550V480H1300V410",
    footer: ["Dashed red: bounded model proposals in selected experiments. Live per-object friction adaptation remains gated.", "Historical Isaac Sim: CNN → temporal Transformer → offline rollout losses; separate from this Gazebo stack."],
  },
  {
    id: "ownerpilot-ai-operating-copilot", name: "OwnerPilot", eyebrow: "BUSINESS + PROCUREMENT INTELLIGENCE · HUMAN REVIEW",
    subtitle: "From source documents to evidence-backed internal decisions.",
    cover: ["Reviewed extraction", "Hybrid catalog retrieval", "Native tool research", "Verified internal quotes"],
    coverFile: "cover-procurement.svg", architecture: "architecture-procurement.svg",
    nodes: [
      ["RFQ upload / API admission", "Next.js session + signed workspace proxy", "PDF, CSV, XLSX and UTF-8 text"],
      ["Parse / OCR / extraction", "Celery + Redis; Tesseract / local Ollama", "Schema and source-association checks"],
      ["Human RFQ review", "Correct fields and approve a revision", "Approval is separate from parsing"],
      ["Verified facts + internal quote", "Backend materialization / Decimal math", "Explicit human quote review / approval"],
      ["Bounded procurement research", "Native Ollama tools + coverage planner", "Immutable receipts; origin attribution"],
      ["Catalog retrieval + review", "BM25 / embeddings / pgvector / RRF", "Specs, reviewed selection, attested offers"],
    ],
    edges: ["M520 330H580", "M1020 330H1080", "M1300 410V550", "M1080 630H1020", "M580 630H520"],
    footer: ["PostgreSQL stores versioned RFQs, catalogs, source receipts, research and immutable approved quotes.", "Source inspection ≠ verified research completion ≠ quote readiness. No orders, payments or external delivery."],
  },
];

for (const p of projects) {
  const dir = join(root, "public", "projects", p.id);
  mkdirSync(dir, { recursive: true });
  let body = text(80, 85, p.eyebrow, 20, "#4da3ff", 'letter-spacing="2"');
  body += text(80, 155, p.name, 48, "#e7eaf0", 'font-weight="700"');
  body += text(80, 205, p.subtitle, 25);
  p.edges.forEach((d) => { body += `<path d="${d}" fill="none" stroke="#4da3ff" stroke-width="3" marker-end="url(#arrow)"/>`; });
  if (p.feedback) body += `<path d="${p.feedback}" fill="none" stroke="${p.id === "vision-guided-diff-physics" ? "#ff6b6b" : "#4da3ff"}" stroke-width="3" stroke-dasharray="9 7" marker-end="url(#${p.id === "vision-guided-diff-physics" ? "proposal" : "arrow"})"/>`;
  p.nodes.forEach((lines, i) => {
    const x = 80 + (i % 3) * 500, y = i < 3 ? 250 : 550;
    body += `<rect x="${x}" y="${y}" width="440" height="160" rx="18" fill="#121827" stroke="#4da3ff" stroke-opacity=".45"/>`;
    body += text(x + 22, y + 43, lines[0], lines[0].length > 27 ? 24 : 27, "#e7eaf0", 'font-weight="700"');
    body += text(x + 22, y + 86, lines[1], 20);
    body += text(x + 22, y + 119, lines[2], 20);
  });
  body += `<path d="M80 765H1520" stroke="#4da3ff" stroke-opacity=".3"/>`;
  p.footer.forEach((line, i) => { body += text(80, 810 + i * 38, line, 22); });
  writeFileSync(join(dir, p.architecture), frame(`${p.name}: system architecture diagram`, `${p.subtitle} ${p.footer.join(" ")}`, body));

  let cover = text(90, 100, "ENGINEERING CASE STUDY / TECHNICAL ILLUSTRATION", 21, "#4da3ff", 'letter-spacing="2"');
  cover += text(90, 220, p.name, 68, "#e7eaf0", 'font-weight="700"');
  cover += text(90, 280, p.subtitle, 29);
  p.cover.forEach((label, i) => {
    const x = 90 + (i % 2) * 730, y = 370 + Math.floor(i / 2) * 160;
    cover += `<rect x="${x}" y="${y}" width="660" height="125" rx="20" fill="#121827" stroke="#4da3ff" stroke-opacity=".4"/>`;
    cover += text(x + 30, y + 52, `0${i + 1}`, 22, "#ff6b6b");
    cover += text(x + 30, y + 91, label, 33, "#e7eaf0");
  });
  cover += text(90, 815, p.eyebrow, 22, "#9aa4b2");
  // The original manipulation cover remains the public cover; keep this as an optional current illustration.
  writeFileSync(join(dir, p.id === "vision-guided-diff-physics" ? "cover-current.svg" : (p.coverFile ?? "cover.svg")), frame(`${p.name}: technical illustration`, "A source-based engineering illustration, not an application screenshot or hardware photograph.", cover));
}

const kinematics = `
${text(80, 90, "MISSION-X / IMPLEMENTED INVERSE KINEMATICS", 23, "#4da3ff")}
${text(80, 160, "Body velocity → wheel angular velocity", 48, "#e7eaf0", 'font-weight="700"')}
<rect x="190" y="280" width="440" height="390" rx="35" fill="#121827" stroke="#4da3ff" stroke-width="3"/>
<g fill="#243651" stroke="#4da3ff" stroke-width="3"><rect x="145" y="300" width="85" height="130" rx="25"/><rect x="590" y="300" width="85" height="130" rx="25"/><rect x="145" y="520" width="85" height="130" rx="25"/><rect x="590" y="520" width="85" height="130" rx="25"/></g>
${text(100, 275, "FL", 28)}${text(640, 275, "FR", 28)}${text(100, 710, "RL", 28)}${text(640, 710, "RR", 28)}
<path d="M410 510V345M410 510H290" stroke="#4da3ff" stroke-width="4" marker-end="url(#arrow)"/>
${text(430, 370, "vx", 30)}${text(270, 490, "vy", 30)}${text(365, 580, "yaw ω", 27)}
${text(790, 305, "k = wheelbase / 2 + separation / 2", 29, "#4da3ff")}
${text(790, 385, "ωFL = (vx − vy − kω) / r", 34, "#e7eaf0")}
${text(790, 455, "ωFR = (vx + vy + kω) / r", 34, "#e7eaf0")}
${text(790, 525, "ωRL = (vx + vy − kω) / r", 34, "#e7eaf0")}
${text(790, 595, "ωRR = (vx − vy + kω) / r", 34, "#e7eaf0")}
${text(790, 675, "vx, vy: m/s · yaw rate: rad/s · r: m", 25)}
${text(80, 805, "Kinematic diagram derived from base_driver.py. Graph following currently sets vy = 0.", 25)}
${text(80, 850, "Wheel-speed interfaces do not establish encoder feedback, calibrated motor speed or physical accuracy.", 23)}
`;
writeFileSync(join(root, "public/projects/mission-x-citycar/mecanum.svg"), frame("Mission-X mecanum inverse kinematics", "Body-frame velocity and yaw map to four wheel angular velocities using half dimensions. This diagram represents code, not measured hardware behavior.", kinematics));
console.log("Generated four architecture diagrams, four technical covers, and one kinematics diagram.");
