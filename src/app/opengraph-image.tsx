import { ImageResponse } from "next/og";

export const alt = "Vackerbackens Medicinska Fotvård – Fotvård i Luleå";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #00476d 0%, #002c4a 60%, #001a2e 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle at center, rgba(0,146,165,0.35) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#0092a5",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: 22,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#00b2c8",
              fontWeight: 600,
            }}
          >
            Vackerbackens Medicinska Fotvård
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.05,
              margin: 0,
              maxWidth: 900,
              fontFamily: "Georgia, serif",
              letterSpacing: "-0.02em",
            }}
          >
            Medicinsk fotvård
            <br />i Luleå
          </h1>
          <p
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Diplomerad fotterapeut · Vackerbacken · Fri parkering · Boka via
            Bokadirekt
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <span style={{ fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
            vackerbackensmedisinskfotvard.se
          </span>
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#00b2c8",
            }}
          >
            070-300 19 19
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
