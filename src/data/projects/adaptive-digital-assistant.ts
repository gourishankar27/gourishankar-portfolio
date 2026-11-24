import type { Project } from "@/types/project";

export const adaptiveDigitalAssistant: Project = {
  id: "adaptive-digital-assistant",
  title: "Adaptive Digital Assistant (ADA) — Privacy-First Personal AI System",
  year: 2026,
  category: "AI Systems Engineering",
  featured: true,
  order: 3,
  summary:
    "A privately hosted personal AI system connecting local LLM inference, source-linked memory, document retrieval, and an encrypted Kotlin Android client. I built explicit review, consent, and recovery boundaries across the stack, with separately recorded host validation and remaining physical-device voice acceptance gates.",
  role: "AI Systems, Backend & Android Engineering",
  tags: ["Local LLMs", "Self-Hosted AI", "Retrieval-Augmented Generation", "Android", "AI Evaluation", "Privacy"],
  tech: ["Python", "FastAPI", "Ollama", "PostgreSQL", "SQLAlchemy", "Kotlin", "Jetpack Compose", "Android Keystore", "TypeScript", "Tailscale", "Caddy"],
  highlights: [
    "Built authenticated Python APIs, PostgreSQL persistence, a Kotlin Android client, and read-only web monitoring around a server-hosted local LLM.",
    "Implemented scoped memory and document retrieval with exact source spans, trust labels, bounded context assembly, and immutable request replay.",
    "Designed encrypted Android journals that record reviewed operations before HTTP and reconcile restored state without silently resubmitting writes.",
    "Integrated reviewed speech input, independent playback, and an optional local continuous-speech evaluation build; native wake and extended device acceptance remain open.",
  ],
  coverImage: "/projects/adaptive-digital-assistant/cover.svg",
  coverAlt: "ADA technical illustration of an Android client, scoped memory, and local inference; not an application screenshot",
  links: [
    { type: "github", label: "GitHub source", href: "https://github.com/gourishankar27/adaptive-digital-assistant" },
    { type: "docs", label: "Architecture", href: "https://github.com/gourishankar27/adaptive-digital-assistant/blob/34f3c1028e167a033f8912211ca0be5e303cae1d/docs/ARCHITECTURE.md" },
    { type: "docs", label: "Validation & release gates", href: "https://github.com/gourishankar27/adaptive-digital-assistant/blob/34f3c1028e167a033f8912211ca0be5e303cae1d/plans/STATUS.md" },
  ],
  metrics: [
    { label: "Android unit tests", value: "336", context: "Recorded per PersonalVoice / CoreRelease host build; not 672 independent tests or device acceptance." },
    { label: "Web unit tests", value: "72", context: "Private 1.0 preparation: units, lint, types, contracts, and production build passed." },
    { label: "OpenAPI paths", value: "166", context: "1.0 contract check; application version changed while existing paths stayed compatible." },
    { label: "API schemas", value: "220", context: "Same release-preparation contract snapshot as the 166 paths." },
    { label: "Database tables", value: "77", context: "Schema 0022 inventory, including metadata; a structural count, not a performance result." },
  ],
  media: [
    { type: "image", src: "/projects/adaptive-digital-assistant/cover.svg", alt: "ADA privacy and data-flow technical illustration", caption: "Technical illustration. Private personal release candidate; no application screen or conversation is depicted." },
    { type: "image", src: "/projects/adaptive-digital-assistant/architecture.svg", alt: "ADA architecture: Android and admin clients, authenticated API, scoped retrieval, local Ollama, and PostgreSQL", caption: "Source-based architecture diagram. Android reaches authenticated ADA APIs; it does not connect directly to Ollama or PostgreSQL. Optional speech runs locally on Android." },
  ],
  sections: [
    {
      id: "overview", title: "Project overview",
      paragraphs: ["ADA is a personal AI system built around control over data, evidence, and execution. The application combines a server-hosted LLM with persistent memory, document context, Android interaction, and explicit user review. The 1.0 milestone is a private personal release candidate, prepared for the owner's own devices rather than public distribution.", "My contribution spans the API and persistence model, source-aware retrieval, client workflows, consent rules, recovery protocols, and evaluation tooling. Ollama supplies model inference, PostgreSQL supplies storage, and Android supplies device services; the engineering work connects those components through explicit contracts."],
    },
    {
      id: "problem", title: "Motivation and problem",
      paragraphs: ["A useful personal assistant needs continuity without silently converting every conversation or generated summary into a trusted fact. It also needs to recover from interrupted requests without duplicating actions or changing the evidence behind an earlier answer. I designed ADA around scoped ownership, reviewed memory changes, and traceable context so these behaviors can be inspected."],
    },
    {
      id: "architecture", title: "System architecture",
      paragraphs: ["A Kotlin/Jetpack Compose client talks to authenticated FastAPI endpoints over private HTTPS. The backend owns authorization, conversation state, retrieval, request reservation, and local Ollama calls. PostgreSQL stores versioned sources, claims, requests, and receipts. Read-only web monitoring exposes bounded operational metadata."],
      bullets: ["Clients use ADA HTTP contracts; database credentials and the inference provider remain server-side.", "The documented deployment uses one API worker and shared model admission. Inference runs outside database transactions; short transactions reserve and publish durable results.", "Tailscale and Caddy provide the private remote connection path. No private network address is needed to explain the architecture."],
    },
    {
      id: "local-inference", title: "Self-hosted LLM infrastructure",
      paragraphs: ["The Ollama adapter exposes bounded completion and streaming paths, configured context/output limits, model identity, timeouts, and explicit provider failures. Server-side token settings and conservative prompt-byte budgets constrain context before inference. The client receives the canonical saved response rather than treating streamed fragments as completed evidence.", "Model and application evaluation are separate concerns. Deterministic fixtures check ownership, exact citations, and recovery; opt-in real-model probes assess behavior under their recorded conditions. Neither a successful API call nor an exact source span establishes that an answer is semantically useful."],
    },
    {
      id: "retrieval-memory", title: "Retrieval and persistent memory",
      paragraphs: ["Retrieval filters ownership, scope, valid time, source availability, and ambiguity before ranking. Lexical, subject, and entity signals select complete evidence groups within a shared context budget. Claim cards and document cards retain original source versions and exact spans, so a saved answer remains explainable after later edits.", "Document context is explicitly selected. Reviewed proposals can create endorsed memory with provenance, while imported documents and model-generated suggestions retain their trust labels. An optional exact-cosine semantic channel exists, with lexical degradation on incompatible or missing entries; it remains disabled by default and has no validated production relevance claim."],
    },
    {
      id: "android", title: "Android application",
      paragraphs: ["The native app supports chat, memory review, documents, projects/tasks, preferences, and consent controls. Its encrypted session store uses Android Keystore and versioned journals. An operation's exact payload and key are saved before submission; restoration checks receipts with reads before offering an explicit retry.", "Journal version 19 retains readers for earlier formats. Same-owner session renewal preserves an active continuous-capture lease while other private reads are fenced until identity is verified. Logout, expiry, revocation, or an identity change stops the relevant private activity."],
    },
    {
      id: "voice", title: "Reviewed voice interaction",
      paragraphs: ["Speech becomes an editable draft. Explicit Send endorses the chosen wording, retaining the original generated transcript as separate provenance. Playback has its own Stop and audio lifecycle; stopping playback does not silently cancel server generation.", "Ordinary builds use Android's on-device speech facilities and retain pause-sensitive recognition with the legacy 60-second route. The optional PersonalVoice build adds pinned local streaming recognition and neural playback. Longer narratives retain a separately reviewed excerpt for model context rather than automatically indexing the entire story as memory."],
      bullets: ["Experimental wake service: explicitly armed from a verified visible conversation; a wake cues or opens ADA and does not authorize locked private speech or automatic Send.", "Accelerated decoder streams and small native wake fixtures are recorded separately from real-time microphone, human locked-wake, battery, accessibility, and route-interruption acceptance."],
    },
    {
      id: "privacy", title: "Privacy, security, and data ownership",
      paragraphs: ["Password sessions, revocable credentials, owner/scope checks, source trust, and content epochs protect private operations. Versioned encrypted backups include restoration verification and credential quarantine. Explicit erasure has its own preview, confirmation, and recovery implications; historical copies and backups are accounted for rather than implying instantaneous deletion everywhere."],
      bullets: ["Scheduling requires both the server switch and owner consent, which are off by default. Reviewed reminders enter a durable inbox; an offline laptop cannot dispatch and an offline phone has no timely-notification guarantee.", "Bounded tools and optional isolated public research have separate authorization contracts. Model output cannot grant itself new permissions or promote untrusted material into endorsed facts."],
    },
    {
      id: "reliability", title: "Reliability and recovery",
      paragraphs: ["Request fingerprints, immutable source snapshots, attempt/lease fences, and durable receipts distinguish a retry from a new request. Streaming cancellation and final publication serialize against the same request state. A disconnect means observation was lost, while a completed replay returns its saved result without selecting newer evidence.", "Android journals, server receipts, backup formats, API versions, and schema versions evolve independently. PersonalVoice, CoreDebug, and unsigned CoreRelease profiles stage identifiable artifacts with hashes, avoiding an assumption that a changed version label establishes a device-ready build."],
    },
    {
      id: "results", title: "Validation and engineering results",
      paragraphs: ["The October 24 private 1.0 preparation records 336 Android unit tests for each selected host build profile and 72 web unit tests, with their accompanying lint/build checks. The contract snapshot has 166 paths and 220 schemas; the installed schema inventory is 0022 with 77 tables. These are different kinds of evidence, not an aggregate accuracy score.", "An earlier Phase 32 full backend regression records 1,268 passes and 80 skips. Its skips include optional PDF and Ollama probes, and it is not a new full-suite result from the later release-preparation run. Physical-device observations, host builds, deterministic checks, and model probes remain separately attributed."],
    },
    {
      id: "limitations", title: "Current limitations and future development",
      paragraphs: ["The private release still needs the remaining installation and physical voice acceptance checks. Native wake reliability, paced long microphone capture, permission/call/audio-route interruptions, accessibility, unplugged resource use, and native bundle redistribution review remain open. The native Release gate stays closed.", "On-device text generation failed the documented quality checks and stays disabled; OCR is off. Watch integration and physiological-state inference are outside the supported implementation. The next useful milestone is bounded device acceptance and representative answer/retrieval evaluation before broader distribution."],
    },
  ],
};
