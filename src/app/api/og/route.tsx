import { ImageResponse } from "next/og";

export const runtime = "edge";

function clampText(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = clampText(searchParams.get("title") ?? "Gourishankar Bansode", 72);
  const subtitle = clampText(
    searchParams.get("subtitle") ?? "Robotics & AI Engineer",
    96
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(1200px circle at 25% 20%, rgba(77,163,255,0.35), transparent 55%), linear-gradient(135deg, #0B1020 0%, #111C3A 45%, #1E3A8A 100%)",
          color: "#EAF2FF",
          padding: 64,
          boxSizing: "border-box",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 54,
            borderRadius: 28,
            background: "rgba(11,16,32,0.45)",
            border: "1px solid rgba(77,163,255,0.28)",
            boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.05 }}>
              {title}
            </div>
            <div style={{ fontSize: 28, opacity: 0.85, lineHeight: 1.25 }}>
              {subtitle}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              fontSize: 20,
              opacity: 0.9,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontWeight: 700 }}>Robotics / Autonomy Portfolio</div>
              <div style={{ opacity: 0.85 }}>gshankar.me</div>
            </div>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(77,163,255,0.16)",
                border: "1px solid rgba(77,163,255,0.28)",
                fontWeight: 600,
              }}
            >
              Case Study
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
