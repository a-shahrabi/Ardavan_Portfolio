import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

// Generates the preview image shown when the site is shared on LinkedIn, X, Slack, etc.
export const alt = `${profile.name} — ${profile.title}`;
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
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#93c5fd" }}>{profile.title}</div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#cbd5e1" }}>
          {profile.siteUrl.replace("https://", "")}
        </div>
      </div>
    ),
    size,
  );
}
