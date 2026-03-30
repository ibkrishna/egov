import React, { useState } from "react";

const s = {
  footer: { background: "#fff", borderTop: "1px solid #e8eaed", padding: "50px 24px 24px" },
  inner: { maxWidth: "1200px", margin: "0 auto" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px", marginBottom: "32px" },
  brand: { fontWeight: 800, fontSize: "1.3rem", color: "#1a73e8", letterSpacing: "-0.5px", marginBottom: "10px" },
  brandSpan: { color: "#f97316" },
  desc: { fontSize: "0.82rem", color: "#5f6368", lineHeight: 1.6, maxWidth: "200px" },
  socials: { display: "flex", gap: "8px", marginTop: "16px" },
  socialBtn: {
    width: "34px", height: "34px", borderRadius: "50%",
    border: "1.5px solid #e8eaed", background: "none",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", fontSize: "0.85rem", color: "#5f6368",
    transition: "all .2s",
  },
  heading: { fontWeight: 700, fontSize: "0.85rem", marginBottom: "14px", color: "#1a1a2e" },
  link: {
    display: "block", fontSize: "0.82rem", color: "#5f6368",
    marginBottom: "9px", cursor: "pointer", textDecoration: "none",
    transition: "color .2s",
  },
  subscribeDesc: { fontSize: "0.82rem", color: "#5f6368", lineHeight: 1.6, marginBottom: "14px" },
  subscribeRow: { display: "flex" },
  subInput: {
    flex: 1, border: "1.5px solid #e8eaed", borderRight: "none",
    borderRadius: "6px 0 0 6px", padding: "9px 13px",
    fontSize: "0.82rem", fontFamily: '"DM Sans", sans-serif',
    outline: "none",
  },
  subBtn: {
    background: "#1a73e8", color: "#fff", border: "none",
    borderRadius: "0 6px 6px 0", padding: "9px 16px",
    cursor: "pointer", fontSize: "0.82rem",
    fontFamily: '"DM Sans", sans-serif',
    transition: "background .2s",
  },
  bottom: {
    borderTop: "1px solid #e8eaed", paddingTop: "20px",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    flexWrap: "wrap", gap: "8px",
    fontSize: "0.78rem", color: "#5f6368",
  },
  bottomLinks: { display: "flex", gap: "20px" },
};

const NAV_LINKS = ["Home", "Our Impact", "Products", "Contact us", "DIGIT Sandbox"];
const SOCIALS = ["𝕏", "in", "▶", "f"];

export default function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        <div style={s.grid}>
          {/* Brand */}
          <div>
            <div style={s.brand}>e<span style={s.brandSpan}>GOV</span></div>
            <p style={s.desc}>Catalysing digital transformation to build transparent services locally.</p>
            <div style={s.socials}>
              {SOCIALS.map((ic, i) => (
                <button key={i} style={s.socialBtn}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a73e8"; e.currentTarget.style.color = "#1a73e8"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eaed"; e.currentTarget.style.color = "#5f6368"; }}
                >{ic}</button>
              ))}
            </div>
          </div>
          {/* Links */}
          <div>
            <div style={s.heading}>Useful Links</div>
            {NAV_LINKS.map(l => (
              <a key={l} href="#" style={s.link}
                onMouseEnter={e => e.target.style.color = "#1a73e8"}
                onMouseLeave={e => e.target.style.color = "#5f6368"}
              >{l}</a>
            ))}
          </div>
          {/* Subscribe */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={s.heading}>Subscribe Now</div>
            <p style={s.subscribeDesc}>Receive latest updates of our monthly newsletter DOT — in your inbox.</p>
            <div style={s.subscribeRow}>
              <input style={s.subInput} type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
              <button style={s.subBtn}
                onMouseEnter={e => e.target.style.background = "#1557b0"}
                onMouseLeave={e => e.target.style.background = "#1a73e8"}
              >→</button>
            </div>
          </div>
        </div>
        <div style={s.bottom}>
          <span>©2024, eGov. All Rights Reserved.</span>
          <div style={s.bottomLinks}>
            <a href="#" style={{ color: "#5f6368", textDecoration: "none" }}>Privacy Policy</a>
            <a href="#" style={{ color: "#5f6368", textDecoration: "none" }}>Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
