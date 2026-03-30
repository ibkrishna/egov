import React from "react";

const s = {
  section: {
    background: "linear-gradient(135deg, #003366 0%, #1a2a4a 100%)",
    padding: "80px 24px", color: "#fff",
  },
  inner: { maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "48px", flexWrap: "wrap" },
  left: { flex: "1 1 400px" },
  right: { flex: "1 1 320px", textAlign: "center" },
  digitLogo: { fontSize: "1.8rem", fontWeight: 900, letterSpacing: "-1px", marginBottom: "6px" },
  digitSpan: { color: "#00bcd4" },
  tag: { fontSize: "0.75rem", color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" },
  openSource: { fontSize: "0.8rem", color: "rgba(255,255,255,.5)", marginBottom: "14px" },
  h2: { fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, lineHeight: 1.3, marginBottom: "14px" },
  p: { color: "rgba(255,255,255,.75)", fontSize: "0.9rem", lineHeight: 1.7 },
  btn: {
    display: "inline-block", marginTop: "24px",
    background: "#00bcd4", color: "#fff", border: "none",
    borderRadius: "6px", padding: "12px 28px",
    fontWeight: 600, fontSize: "0.9rem", cursor: "pointer",
    fontFamily: '"DM Sans", sans-serif',
    transition: "background .2s, transform .2s",
  },
  img: { width: "100%", maxWidth: "360px", borderRadius: "12px" },
};

export default function DigitCTA() {
  return (
    <section style={s.section}>
      <div style={s.inner}>
        <div style={s.left}>
          <div style={s.digitLogo}>⚙ <span style={s.digitSpan}>DIGIT</span></div>
          <div style={s.tag}>by eGov Foundation</div>
          <div style={s.openSource}>Our open source</div>
          <h2 style={s.h2}>technology-for-good<br />platform</h2>
          <p style={s.p}>
            DIGIT is the Digital Infrastructure for Governance, Impact & Transformation. An open source platform
            built for governments, built for scale — with tools and building blocks that can be used as-is or
            reimagined for any use.
          </p>
          <button style={s.btn}
            onMouseEnter={e => { e.target.style.background = "#00838f"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.background = "#00bcd4"; e.target.style.transform = "translateY(0)"; }}
          >Explore the platform</button>
        </div>
        <div style={s.right}>
          <img src="https://placehold.co/380x440/1a3a6a/00bcd4?text=DIGIT+Platform" alt="DIGIT" style={s.img} />
        </div>
      </div>
    </section>
  );
}
