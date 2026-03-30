import React from "react";

const s = {
  section: { background: "#1a2a4a", color: "#fff", padding: "60px 24px" },
  inner: { maxWidth: "1200px", margin: "0 auto", textAlign: "center" },
  big: { fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1 },
  sub: { fontSize: "0.85rem", color: "rgba(255,255,255,.7)", marginTop: "8px", maxWidth: "400px", margin: "8px auto 0" },
  row: { display: "flex", justifyContent: "center", gap: "60px", marginTop: "40px", flexWrap: "wrap" },
  statNum: { fontSize: "2rem", fontWeight: 800 },
  statLabel: { fontSize: "0.8rem", color: "rgba(255,255,255,.65)", marginTop: "4px" },
};

const stats = [
  { num: "1.1 Billion+", label: "Public services delivered" },
  { num: "50+", label: "Partners — governments, technology companies and NGOs" },
];

export default function StatsBanner() {
  return (
    <section style={s.section}>
      <div style={s.inner}>
        <div style={s.big}>1,000,000,100+</div>
        <div style={s.sub}>Citizens making public services through eGov's Digital Public Goods (DPG)</div>
        <div style={s.row}>
          {stats.map(st => (
            <div key={st.num}>
              <div style={s.statNum}>{st.num}</div>
              <div style={s.statLabel}>{st.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
