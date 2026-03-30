import React, { useState } from "react";

const cats = ["Public Health", "Public Finance", "Local Governance", "Water & Sanitations"];

const cards = [
  { num: "210+", label: "Unique modules and services on the platform", bg: "linear-gradient(135deg,#1565c0,#1a73e8)", img: "https://placehold.co/300x140/1565c0/fff?text=Health+Platform" },
  { num: "2 Bn", label: "Citizen services delivered through our platform", bg: "linear-gradient(135deg,#00838f,#00bcd4)", img: "https://placehold.co/300x140/00838f/fff?text=Citizens+Served" },
];

const s = {
  section: { padding: "80px 24px", background: "#fff" },
  inner: { maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "48px", flexWrap: "wrap", alignItems: "flex-start" },
  left: { flex: "0 0 300px" },
  right: { flex: "1 1 400px" },
  label: { fontSize: "0.75rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#5f6368", marginBottom: "10px" },
  title: { fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, color: "#1a1a2e", marginBottom: "12px", lineHeight: 1.3 },
  titleSpan: { color: "#1a73e8" },
  desc: { color: "#5f6368", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "20px" },
  pill: (active) => ({
    display: "block", width: "100%", textAlign: "left",
    padding: "12px 18px", borderRadius: "8px", border: "none",
    fontFamily: '"DM Sans", sans-serif', fontSize: "0.9rem", fontWeight: 500,
    cursor: "pointer", marginBottom: "4px",
    background: active ? "#1a73e8" : "transparent",
    color: active ? "#fff" : "#444",
    transition: "all .2s",
  }),
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" },
  card: (bg) => ({
    background: bg, borderRadius: "16px", padding: "28px", color: "#fff",
    transition: "transform .3s",
  }),
  cardNum: { fontSize: "2.8rem", fontWeight: 800, lineHeight: 1 },
  cardLabel: { fontSize: "0.82rem", opacity: .85, lineHeight: 1.5, marginTop: "6px" },
  cardImg: { width: "100%", borderRadius: "8px", marginTop: "16px", opacity: .9 },
};

export default function Features() {
  const [active, setActive] = useState(0);
  return (
    <section style={s.section}>
      <div style={s.inner}>
        <div style={s.left}>
          <div style={s.label}>Focus Areas</div>
          <h2 style={s.title}>Big problems need <span style={s.titleSpan}>bold approaches</span></h2>
          <p style={s.desc}>We tackle systemic challenges across health, finance, governance and sanitation.</p>
          {cats.map((c, i) => (
            <button key={c} style={s.pill(active === i)} onClick={() => setActive(i)}
              onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = "#e8f4fd"; }}
              onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = "transparent"; }}
            >{c}</button>
          ))}
        </div>
        <div style={s.right}>
          <div style={s.grid}>
            {cards.map(c => (
              <div key={c.num} style={s.card(c.bg)}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={s.cardNum}>{c.num}</div>
                <div style={s.cardLabel}>{c.label}</div>
                <img src={c.img} alt="" style={s.cardImg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
