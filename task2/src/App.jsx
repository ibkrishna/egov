import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import Features from "./components/Features";
import DigitCTA from "./components/DigitCTA";
import LatestSection from "./components/LatestSection";
import Footer from "./components/Footer";

// Sustaining Change section (inline — small enough)
function SustainingChange() {
  const cards = [
    { img: "https://placehold.co/300x180/c8e6c9/388e3c?text=Urban+Story", title: "State-led Urban Digital Transformation", desc: "How platforms scale governance across 1.4B citizens" },
    { img: "https://placehold.co/300x180/bbdefb/1565c0?text=Health+Story", title: "Building Community Health Systems", desc: "Rural health delivery powered by open source tools" },
  ];

  return (
    <section style={{ padding: "80px 24px", background: "#f8f9fa" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#5f6368", fontSize: "0.9rem", marginBottom: "4px" }}>20 years of reimagining for citizens and</p>
        <h2 style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 700, color: "#1a1a2e", marginBottom: "16px" }}>
          sustaining <span style={{ color: "#1a73e8" }}>change</span>
        </h2>
        <p style={{ color: "#5f6368", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto 40px" }}>
          Technology is powerful, but so are the people at places where it enhances the quality of life for every citizen.
          With our partners living this collective energy to life, the ecosystem at eGov helps turn small steps into lasting,
          meaningful change so that no citizen is left behind.
        </p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          {cards.map((c, i) => (
            <div key={i} style={{
              background: "#fff", borderRadius: "12px", overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,.06)", maxWidth: "280px", width: "100%",
              transition: "transform .3s",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <img src={c.img} alt={c.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
              <div style={{ padding: "18px" }}>
                <div style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: "6px", color: "#1a1a2e" }}>{c.title}</div>
                <div style={{ fontSize: "0.78rem", color: "#5f6368" }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <button style={{
          marginTop: "32px", background: "transparent",
          border: "2px solid #1a73e8", color: "#1a73e8",
          borderRadius: "6px", padding: "10px 24px",
          fontWeight: 600, fontSize: "0.9rem", cursor: "pointer",
          fontFamily: '"DM Sans", sans-serif',
          transition: "all .2s",
        }}
          onMouseEnter={e => { e.target.style.background = "#1a73e8"; e.target.style.color = "#fff"; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#1a73e8"; }}
        >About Us</button>
      </div>
    </section>
  );
}

// Supporters
function Supporters() {
  const logos = ["Co Impact", "Omidyar", "Tata Trusts", "Bill & Melinda Gates", "Nilekani"];
  return (
    <section style={{ padding: "60px 24px", background: "#f8f9fa", borderTop: "1px solid #e8eaed" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h5 style={{ fontWeight: 700, color: "#1a1a2e", marginBottom: "36px" }}>Our Supporters</h5>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
          {logos.map(l => (
            <img key={l}
              src={`https://placehold.co/120x40/e8eaed/888?text=${encodeURIComponent(l)}`}
              alt={l}
              style={{ height: "36px", objectFit: "contain", filter: "grayscale(1)", opacity: .6, transition: "all .3s", cursor: "pointer" }}
              onMouseEnter={e => { e.target.style.filter = "grayscale(0)"; e.target.style.opacity = "1"; }}
              onMouseLeave={e => { e.target.style.filter = "grayscale(1)"; e.target.style.opacity = "0.6"; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBanner />
      <Features />
      <SustainingChange />
      <DigitCTA />
      <LatestSection />
      <Supporters />
      <Footer />
    </>
  );
}
