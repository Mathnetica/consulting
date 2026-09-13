import { ImageResponse } from "next/og";

export const alt = "Mathnetica — Data & AI Architecture";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          color: "#0A0A0A",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Mathnetica
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: 980,
            }}
          >
            Data & AI Architecture. Grounded in engineering.
          </div>
          <div style={{ fontSize: 28, color: "#5A5A5A", maxWidth: 820 }}>
            Solution Architecture · Data & AI Platforms · Amsterdam
          </div>
        </div>
      </div>
    ),
    size,
  );
}
