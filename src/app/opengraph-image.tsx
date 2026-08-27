import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#121314",
          color: "#f1f0ec",
        }}
      >
        <div style={{ fontSize: 32, color: "#9fa3a0", marginBottom: 24 }}>
          Independent Motorsports Team
        </div>
        <div
          style={{
            fontSize: 72,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          Two people, two race programs, no school behind either one.
        </div>
      </div>
    ),
    { ...size }
  );
}
