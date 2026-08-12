import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "Keen David Aguro — Full-Stack Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#fafaf8";
const INK = "#14161a";
const SLATE = "#6b7078";
const SIGNAL = "#3454d1";
const SIGNAL_DIM = "#eef1fc";

export default function Image() {
  const photoPath = path.join(process.cwd(), "public/formal_pic.jpg");
  const photoBase64 = fs.readFileSync(photoPath).toString("base64");
  const photoSrc = `data:image/jpeg;base64,${photoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: PAPER,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 64, padding: "0 80px" }}>
          <div
            style={{
              display: "flex",
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: SIGNAL_DIM,
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse (Satori) requires a plain <img>, not next/image */}
            <img
              src={photoSrc}
              alt=""
              width={256}
              height={256}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: `6px solid ${PAPER}`,
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 640 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: SIGNAL_DIM,
                color: SIGNAL,
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                padding: "8px 18px",
                borderRadius: 999,
                alignSelf: "flex-start",
              }}
            >
              Available — Remote / Worldwide
            </div>

            <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: INK, letterSpacing: -1 }}>
              Keen David Aguro
            </div>

            <div style={{ display: "flex", fontSize: 28, color: SLATE, lineHeight: 1.4 }}>
              Full-stack engineer — 7+ years building production systems for
              government, energy, and fintech.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 12,
            background: SIGNAL,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
