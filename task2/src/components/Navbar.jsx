import React, { useState } from "react";

const styles = {
  nav: {
    position: "sticky", top: 0, zIndex: 1000,
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0,0,0,.08)",
    padding: "0 24px",
  },
  inner: {
    maxWidth: "1200px", margin: "0 auto",
    display: "flex", alignItems: "center", justifyContent: "space-between",
  },
  logo: {
    fontWeight: 800, fontSize: "1.4rem", color: "#1a73e8",
    letterSpacing: "-0.5px", padding: "16px 0", cursor: "pointer",
  },
  logoSpan: { color: "#f97316" },
  links: { display: "flex", alignItems: "center", gap: "4px" },
  link: {
    padding: "8px 14px", fontSize: "0.875rem", fontWeight: 500,
    color: "#444", background: "none", border: "none", cursor: "pointer",
    fontFamily: '"DM Sans", sans-serif',
    transition: "color .2s",
    borderRadius: "6px",
  },
  ctaBtn: {
    background: "#1a73e8", color: "#fff", border: "none",
    borderRadius: "6px", padding: "9px 20px",
    fontWeight: 600, fontSize: "0.85rem", cursor: "pointer",
    fontFamily: '"DM Sans", sans-serif',
    transition: "background .2s",
    marginLeft: "8px",
  },
  hamburger: {
    display: "none", background: "none", border: "none",
    fontSize: "1.4rem", cursor: "pointer", padding: "8px",
  },
  mobileMenu: {
    background: "#fff",
    borderTop: "1px solid #e8eaed",
    padding: "12px 0",
  },
  mobileLink: {
    display: "block", padding: "10px 24px", fontSize: "0.9rem",
    color: "#444", background: "none", border: "none",
    cursor: "pointer", fontFamily: '"DM Sans", sans-serif',
    textAlign: "left", width: "100%",
  },
};

const NAV_LINKS = ["About Us", "Areas of work", "Products & Solutions", "Our Platform", "Ecosystem", "Resources"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <div style={styles.logo}>e<span style={styles.logoSpan}>GOV</span></div>
        {/* Desktop links */}
        <div style={{ ...styles.links, "@media(max-width:768px)": { display: "none" } }} className="nav-desktop">
          {NAV_LINKS.map(l => (
            <button key={l} style={styles.link}
              onMouseEnter={e => e.target.style.color = "#1a73e8"}
              onMouseLeave={e => e.target.style.color = "#444"}
            >{l}</button>
          ))}
          <button style={styles.ctaBtn}
            onMouseEnter={e => e.target.style.background = "#1557b0"}
            onMouseLeave={e => e.target.style.background = "#1a73e8"}
          >Contact us</button>
        </div>
        {/* Hamburger */}
        <button style={styles.hamburger} className="nav-hamburger" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div style={styles.mobileMenu} className="nav-mobile">
          {NAV_LINKS.map(l => <button key={l} style={styles.mobileLink}>{l}</button>)}
          <button style={{ ...styles.mobileLink, color: "#1a73e8", fontWeight: 600 }}>Contact us</button>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
