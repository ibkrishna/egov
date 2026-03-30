import React, { useState, useEffect, useMemo } from "react";
import mockArticles, { CATEGORIES } from "../data/articles";

const s = {
  section: { padding: "80px 24px", background: "#fff" },
  inner: { maxWidth: "1200px", margin: "0 auto" },
  topRow: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "24px" },
  title: { fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#1a1a2e" },
  titleSpan: { color: "#1a73e8" },
  searchBox: {
    display: "flex", alignItems: "center",
    border: "1.5px solid #e8eaed", borderRadius: "8px",
    padding: "8px 14px", gap: "8px",
    background: "#fff", minWidth: "240px",
    transition: "border-color .2s",
  },
  searchInput: {
    border: "none", outline: "none", fontSize: "0.875rem",
    fontFamily: '"DM Sans", sans-serif', width: "100%", color: "#1a1a2e",
  },
  filterRow: { display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" },
  filterBtn: (active) => ({
    padding: "7px 18px", borderRadius: "20px",
    border: `1.5px solid ${active ? "#1a73e8" : "#e8eaed"}`,
    background: active ? "#1a73e8" : "transparent",
    color: active ? "#fff" : "#444",
    fontSize: "0.85rem", fontWeight: 500,
    cursor: "pointer", fontFamily: '"DM Sans", sans-serif',
    transition: "all .2s",
  }),
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "20px" },
  card: {
    border: "1px solid #e8eaed", borderRadius: "12px",
    overflow: "hidden", background: "#fff",
    transition: "transform .3s, box-shadow .3s",
    display: "flex", flexDirection: "column",
  },
  cardImg: { width: "100%", height: "180px", objectFit: "cover" },
  cardBody: { padding: "20px", flex: 1, display: "flex", flexDirection: "column" },
  meta: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" },
  tag: (cat) => {
    const colors = {
      "Case Study": ["#e3f2fd", "#1565c0"],
      "Newsletter": ["#e8f5e9", "#388e3c"],
      "News & Media": ["#fff3e0", "#f57c00"],
      "Whitepapers": ["#fce4ec", "#c62828"],
      "Articles": ["#ede7f6", "#4527a0"],
      "Strategy Papers": ["#e0f7fa", "#006064"],
    };
    const [bg, color] = colors[cat] || ["#f5f5f5", "#616161"];
    return { background: bg, color, padding: "2px 8px", borderRadius: "4px", fontSize: "0.7rem", fontWeight: 600 };
  },
  date: { fontSize: "0.75rem", color: "#5f6368" },
  readTime: { fontSize: "0.72rem", color: "#9aa0a6", marginLeft: "auto" },
  cardTitle: { fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.4, marginBottom: "8px", color: "#1a1a2e" },
  cardDesc: { fontSize: "0.8rem", color: "#5f6368", lineHeight: 1.6, flex: 1 },
  readLink: {
    display: "inline-block", marginTop: "14px",
    fontSize: "0.82rem", fontWeight: 600, color: "#1a73e8",
    cursor: "pointer", transition: "color .2s",
  },
  // Loading
  spinnerWrap: { textAlign: "center", padding: "80px 0" },
  spinner: {
    width: "36px", height: "36px",
    border: "3px solid #e8eaed",
    borderTop: "3px solid #1a73e8",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
    margin: "0 auto 16px",
  },
  spinnerText: { color: "#5f6368", fontSize: "0.9rem" },
  // Empty
  emptyWrap: { textAlign: "center", padding: "80px 0" },
  emptyIcon: { fontSize: "3rem", marginBottom: "16px" },
  emptyTitle: { fontWeight: 700, fontSize: "1.2rem", color: "#1a1a2e", marginBottom: "8px" },
  emptyDesc: { color: "#5f6368", fontSize: "0.9rem" },
  // See all btn
  seeAllWrap: { textAlign: "center", marginTop: "40px" },
  seeAllBtn: {
    background: "transparent", border: "2px solid #1a73e8",
    color: "#1a73e8", borderRadius: "6px", padding: "10px 28px",
    fontWeight: 600, fontSize: "0.9rem", cursor: "pointer",
    fontFamily: '"DM Sans", sans-serif',
    transition: "all .2s",
  },
};

// Simulate API fetch with loading state
function useFetchArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(mockArticles);
      setLoading(false);
    }, 1200); // simulate network delay
    return () => clearTimeout(timer);
  }, []);

  return { articles, loading };
}

function ArticleCard({ article }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...s.card, transform: hovered ? "translateY(-4px)" : "translateY(0)", boxShadow: hovered ? "0 8px 32px rgba(0,0,0,.1)" : "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={article.image} alt={article.title} style={s.cardImg} />
      <div style={s.cardBody}>
        <div style={s.meta}>
          <span style={s.tag(article.category)}>{article.category}</span>
          <span style={s.date}>{article.date}</span>
          <span style={s.readTime}>{article.readTime}</span>
        </div>
        <div style={s.cardTitle}>{article.title}</div>
        <div style={s.cardDesc}>{article.description}</div>
        <span style={{ ...s.readLink, color: hovered ? "#1557b0" : "#1a73e8" }}>Read more →</span>
      </div>
    </div>
  );
}

export default function LatestSection() {
  const { articles, loading } = useFetchArticles();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("What's New");
  const [searchFocus, setSearchFocus] = useState(false);

  const filtered = useMemo(() => {
    let result = articles;
    if (activeCategory !== "What's New") {
      result = result.filter(a => a.category === activeCategory);
    }
    if (search.trim()) {
      result = result.filter(a =>
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    return result;
  }, [articles, search, activeCategory]);

  return (
    <section style={s.section}>
      <div style={s.inner}>
        {/* Header Row */}
        <div style={s.topRow}>
          <h2 style={s.title}>Latest at <span style={s.titleSpan}>eGov</span></h2>
          {/* Search Bar */}
          <div style={{ ...s.searchBox, borderColor: searchFocus ? "#1a73e8" : "#e8eaed" }}>
            <span style={{ color: "#9aa0a6", fontSize: "1rem" }}>🔍</span>
            <input
              type="text"
              placeholder="Search articles..."
              style={s.searchInput}
              value={search}
              onChange={e => setSearch(e.target.value)}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
            {search && (
              <span style={{ cursor: "pointer", color: "#9aa0a6", fontSize: "1rem" }} onClick={() => setSearch("")}>✕</span>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div style={s.filterRow}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              style={s.filterBtn(activeCategory === cat)}
              onClick={() => setActiveCategory(cat)}
            >{cat}</button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div style={s.spinnerWrap}>
            <div style={s.spinner} />
            <div style={s.spinnerText}>Loading latest articles...</div>
          </div>
        ) : filtered.length === 0 ? (
          <div style={s.emptyWrap}>
            <div style={s.emptyIcon}>📭</div>
            <div style={s.emptyTitle}>No results found</div>
            <div style={s.emptyDesc}>
              {search ? `No articles match "${search}". Try a different search.` : "No articles in this category yet."}
            </div>
          </div>
        ) : (
          <div style={s.grid}>
            {filtered.map(a => <ArticleCard key={a.id} article={a} />)}
          </div>
        )}

        {/* See All Button */}
        {!loading && filtered.length > 0 && (
          <div style={s.seeAllWrap}>
            <button style={s.seeAllBtn}
              onMouseEnter={e => { e.target.style.background = "#1a73e8"; e.target.style.color = "#fff"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#1a73e8"; }}
            >See All</button>
          </div>
        )}
      </div>
    </section>
  );
}
