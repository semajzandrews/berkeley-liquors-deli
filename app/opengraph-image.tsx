import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Berkeley Liquors & Deli · bottle shop and sandwich counter, Bloomfield NJ";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f3ead8",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* ticket border */}
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "2px solid rgba(33,26,18,0.35)",
            borderRadius: 8,
            display: "flex",
          }}
        />
        {/* left: the words */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#c0392b",
              fontWeight: 700,
            }}
          >
            Bottle Shop · Sandwich Counter
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1,
              fontWeight: 800,
              color: "#211a12",
              marginTop: 24,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#1a2f4a" }}>The corner</span>
          </div>
          <div style={{ fontSize: 92, lineHeight: 1, fontWeight: 800, display: "flex" }}>
            <span style={{ color: "#1a2f4a" }}>pours</span>
            <span style={{ color: "#5b4f3e", margin: "0 16px" }}>&</span>
            <span style={{ color: "#c0392b" }}>stacks.</span>
          </div>
          <div style={{ fontSize: 28, color: "#5b4f3e", marginTop: 28 }}>
            129 Franklin St · Bloomfield, NJ · est. 1993
          </div>
        </div>
        {/* right: the glass mid-pour */}
        <div
          style={{
            width: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="240" height="380" viewBox="0 0 200 320">
            <defs>
              <clipPath id="b">
                <path d="M40 26 C40 110 70 156 100 156 C130 156 160 110 160 26 Z" />
              </clipPath>
            </defs>
            <rect x="97" y="-4" width="6" height="34" rx="3" fill="#8a2a39" />
            <g clipPath="url(#b)">
              <rect x="34" y="70" width="132" height="86" fill="#6e1f2b" />
              <ellipse cx="100" cy="70" rx="60" ry="5" fill="#8a2a39" />
            </g>
            <path
              d="M38 22 C38 112 68 160 100 160 C132 160 162 112 162 22 Z"
              fill="none"
              stroke="#1a2f4a"
              strokeWidth="3"
            />
            <rect x="96" y="160" width="8" height="118" fill="#1a2f4a" />
            <ellipse cx="100" cy="286" rx="44" ry="9" fill="#1a2f4a" />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
