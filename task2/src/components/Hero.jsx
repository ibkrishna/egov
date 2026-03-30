import React from "react";

const s = {
  hero: {
    background: "linear-gradient(135deg, #e8f4fd 0%, #f0f7ff 40%, #e3f2fd 100%)",
    padding: "80px 24px 60px",
    position: "relative",
    overflow: "hidden",
    animation: "fadeUp .6s ease forwards",
  },
  inner: { maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "48px", flexWrap: "wrap" },
  left: { flex: "1 1 400px" },
  right: { flex: "1 1 360px", textAlign: "center" },
  badge: {
    display: "inline-block",
    background: "#fff3e0", color: "#f97316",
    fontSize: "0.75rem", fontWeight: 600,
    letterSpacing: "1px", textTransform: "uppercase",
    padding: "5px 14px", borderRadius: "20px", marginBottom: "20px",
  },
  h1: { fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a2e", marginBottom: "8px" },
  strong: { fontWeight: 800, display: "block" },
  p: { color: "#5f6368", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "480px", margin: "16px 0 28px" },
  btnRow: { display: "flex", gap: "12px", flexWrap: "wrap" },
  btnPrimary: {
    background: "#1a73e8", color: "#fff", border: "none",
    borderRadius: "6px", padding: "12px 28px",
    fontWeight: 600, fontSize: "0.9rem", cursor: "pointer",
    fontFamily: '"DM Sans", sans-serif',
    transition: "background .2s, transform .2s",
  },
  btnOutline: {
    background: "transparent", color: "#1a73e8",
    border: "2px solid #1a73e8", borderRadius: "6px",
    padding: "10px 24px", fontWeight: 600, fontSize: "0.9rem",
    cursor: "pointer", fontFamily: '"DM Sans", sans-serif',
    transition: "all .2s",
  },
  img: { width: "100%", maxWidth: "500px", borderRadius: "16px", boxShadow: "0 20px 60px rgba(0,0,0,.12)" },
};

export default function Hero() {
  return (
    <section style={s.hero}>
      <div style={s.inner}>
        <div style={s.left}>
          <div style={s.badge}>20 Years of Impact</div>
          <h1 style={s.h1}>
            20 years of digital transformation in public service delivery
            <strong style={s.strong}>It's possible.</strong>
          </h1>
          <p style={s.p}>
            Catalysts, ecosystem enablers, mission-driven. At eGov, we're driven by the power of open digital
            infrastructure and ecosystems to enable governments deliver accessible, inclusive and transparent
            services to every citizen.
          </p>
          <div style={s.btnRow}>
            <button style={s.btnPrimary}
              onMouseEnter={e => { e.target.style.background = "#1557b0"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.background = "#1a73e8"; e.target.style.transform = "translateY(0)"; }}
            >Our Approach</button>
            <button style={s.btnOutline}
              onMouseEnter={e => { e.target.style.background = "#1a73e8"; e.target.style.color = "#fff"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#1a73e8"; }}
            >Our Impact</button>
          </div>
        </div>
        <div style={s.right}>
          <img src="https://placehold.co/500x360/d0e8f8/1a73e8?text=Public+Service+Delivery" alt="Hero" style={s.img} />
        </div>
      </div>
    </section>
  );
}
