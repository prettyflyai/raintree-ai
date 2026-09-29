/* @ds-bundle: {"format":3,"namespace":"PraxisIQDesignSystem_019df9","components":[],"sourceHashes":{"ui_kits/contractsiq/Dashboard.jsx":"50cbaf8161b1","ui_kits/contractsiq/Repository.jsx":"9785040d4d0e","ui_kits/contractsiq/Sidebar.jsx":"53d0eda94429","ui_kits/contractsiq/TopBar.jsx":"7595334e0775","ui_kits/praxisiq-marketing/Hero.jsx":"9d339ddf7b8e","ui_kits/praxisiq-marketing/Metrics.jsx":"9e88b550b9c7","ui_kits/praxisiq-marketing/Nav.jsx":"d707d8deb4fe","ui_kits/praxisiq-marketing/UseCases.jsx":"72fe94458f10"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PraxisIQDesignSystem_019df9 = window.PraxisIQDesignSystem_019df9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/contractsiq/Dashboard.jsx
try { (() => {
// node: contractsiq-dashboard
function Dashboard() {
  const Card = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid rgba(10,22,32,0.10)",
      borderRadius: 12,
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
      ...style
    }
  }, children);
  const KPI = ({
    lbl,
    val,
    delta,
    deltaDir
  }) => /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/1.3 Inter",
      color: "#5A5F66",
      marginBottom: 6
    }
  }, lbl), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 24px/1.1 Inter",
      color: "#030C26",
      letterSpacing: "-0.012em"
    }
  }, val), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 12px/1 Inter",
      color: deltaDir === "up" ? "#136C2E" : "#B91C1C"
    }
  }, deltaDir === "up" ? "▴" : "▾", " ", delta)));
  const Stat = ({
    bg,
    color,
    l,
    n
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color,
      padding: "12px 14px",
      borderRadius: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 12px/1 Inter",
      marginBottom: 6,
      opacity: 0.85
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 22px/1 Inter"
    }
  }, n));
  const renewals = [{
    co: "Northbeam Logistics",
    value: "$ 1.2 M",
    days: 12,
    status: "Negotiation"
  }, {
    co: "Ferro Manufacturing",
    value: "$ 880 K",
    days: 24,
    status: "Review"
  }, {
    co: "Helix Diagnostics",
    value: "$ 640 K",
    days: 31,
    status: "Active"
  }, {
    co: "Quill & Webb LLP",
    value: "$ 410 K",
    days: 38,
    status: "Active"
  }, {
    co: "Atlas Foundry Group",
    value: "$ 1.6 M",
    days: 47,
    status: "Review"
  }];
  const pillFor = s => {
    const map = {
      Active: {
        bg: "#EAF7EE",
        fg: "#136C2E"
      },
      Review: {
        bg: "#E3E9FA",
        fg: "#1C378A"
      },
      Negotiation: {
        bg: "#FFF4E0",
        fg: "#815500"
      },
      Expiring: {
        bg: "#FDECEC",
        fg: "#991B1B"
      }
    };
    const c = map[s] || {
      bg: "#EDEFF2",
      fg: "#5A5F66"
    };
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        padding: "3px 9px",
        borderRadius: 999,
        background: c.bg,
        color: c.fg,
        font: "700 11px/1.2 Inter"
      }
    }, s);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "#F5F6F7",
      flex: 1,
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 11px/1 'IBM Plex Mono', monospace",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#5A5F66",
      marginBottom: 8
    }
  }, "Q1 \xB7 Portfolio overview"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "700 24px/1.2 Inter",
      color: "#030C26",
      letterSpacing: "-0.012em",
      margin: 0
    }
  }, "Active contracts across 12 portfolio companies.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      padding: "8px 14px",
      border: "1px solid #D3D6DB",
      background: "#fff",
      borderRadius: 8,
      font: "600 13px/1 Inter",
      color: "#1F2229",
      cursor: "pointer"
    }
  }, "Export CSV"), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: "8px 14px",
      border: 0,
      background: "#1C378A",
      color: "#fff",
      borderRadius: 8,
      font: "600 13px/1 Inter",
      cursor: "pointer"
    }
  }, "Add diligence"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    lbl: "Total contracts value",
    val: "$ 15.4 M"
  }), /*#__PURE__*/React.createElement(KPI, {
    lbl: "Active value",
    val: "$ 12.4 M",
    delta: "8.2%",
    deltaDir: "down"
  }), /*#__PURE__*/React.createElement(KPI, {
    lbl: "Revenue at risk",
    val: "$ 2.1 M",
    delta: "3.1%",
    deltaDir: "up"
  }), /*#__PURE__*/React.createElement(KPI, {
    lbl: "Active customers",
    val: "87"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    bg: "#EDEFF2",
    color: "#5A5F66",
    l: "Draft",
    n: "2"
  }), /*#__PURE__*/React.createElement(Stat, {
    bg: "#E3E9FA",
    color: "#1C378A",
    l: "Review",
    n: "24"
  }), /*#__PURE__*/React.createElement(Stat, {
    bg: "#FFF4E0",
    color: "#815500",
    l: "Negotiation",
    n: "32"
  }), /*#__PURE__*/React.createElement(Stat, {
    bg: "#EAF7EE",
    color: "#136C2E",
    l: "Executed",
    n: "56"
  }), /*#__PURE__*/React.createElement(Stat, {
    bg: "#FDECEC",
    color: "#991B1B",
    l: "Expiring < 30d",
    n: "4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: "1px solid #E1E4E8",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "700 16px/1.2 Inter",
      color: "#030C26",
      margin: 0
    }
  }, "Upcoming renewals"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "600 12px/1 Inter",
      color: "#1C378A",
      textDecoration: "none"
    }
  }, "View all 24 \u2192")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "#F5F6F7"
    }
  }, ["Counterparty", "Value", "Days", "Status"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      font: "500 10px/1 'IBM Plex Mono', monospace",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#5A5F66",
      textAlign: "left",
      padding: "9px 16px"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, renewals.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderTop: "1px solid #E1E4E8"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 16px",
      font: "500 13px/1.2 Inter",
      color: "#030C26"
    }
  }, r.co), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 16px",
      font: "500 13px/1.2 'IBM Plex Mono', monospace",
      color: "#1F2229"
    }
  }, r.value), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 16px",
      font: "400 13px/1.2 Inter",
      color: "#5A5F66"
    }
  }, r.days, "d"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 16px"
    }
  }, pillFor(r.status))))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "700 16px/1.2 Inter",
      color: "#030C26",
      margin: "0 0 4px"
    }
  }, "Ask IQ"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/1.4 Inter",
      color: "#5A5F66",
      marginBottom: 14
    }
  }, "Natural-language queries across the contract repository."), ["Which contracts auto-renew in Q2 above $500K?", "List all MSAs with non-standard liability caps.", "Counterparties with payment terms > 60 days."].map((q, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    style: {
      display: "block",
      width: "100%",
      textAlign: "left",
      padding: "10px 12px",
      marginBottom: 8,
      background: "#F5F6F7",
      border: "1px solid #E1E4E8",
      borderRadius: 8,
      font: "500 13px/1.4 Inter",
      color: "#1F2229",
      cursor: "pointer"
    }
  }, q)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 8,
      padding: 8,
      border: "1px solid #D3D6DB",
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Ask anything about your portfolio\u2026",
    style: {
      flex: 1,
      border: 0,
      outline: 0,
      font: "400 13px/1 Inter",
      padding: "0 8px",
      background: "transparent"
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: "6px 14px",
      borderRadius: 999,
      border: 0,
      background: "#1C378A",
      color: "#fff",
      font: "600 12px/1 Inter",
      cursor: "pointer"
    }
  }, "Ask")))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contractsiq/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contractsiq/Repository.jsx
try { (() => {
// node: contractsiq-repository
function Repository() {
  const tabs = [{
    id: "all",
    l: "All contracts",
    n: 560,
    active: true
  }, {
    id: "active",
    l: "Active",
    n: 87
  }, {
    id: "review",
    l: "Review",
    n: 32
  }, {
    id: "negotiation",
    l: "Negotiation",
    n: 32
  }, {
    id: "executed",
    l: "Executed",
    n: 56
  }, {
    id: "expiring",
    l: "Expiring",
    n: 24
  }];
  const rows = [{
    id: "MSA-2024-014",
    co: "Northbeam Logistics",
    type: "MSA",
    owner: "E. Marsh",
    value: "$ 1.20 M",
    renews: "May 14, 2026",
    status: "Negotiation"
  }, {
    id: "SOW-2025-088",
    co: "Ferro Manufacturing",
    type: "SOW",
    owner: "J. Holt",
    value: "$ 880 K",
    renews: "May 26, 2026",
    status: "Review"
  }, {
    id: "MSA-2023-201",
    co: "Helix Diagnostics",
    type: "MSA",
    owner: "P. Vega",
    value: "$ 640 K",
    renews: "Jun 02, 2026",
    status: "Active"
  }, {
    id: "DPA-2025-031",
    co: "Quill & Webb LLP",
    type: "DPA",
    owner: "E. Marsh",
    value: "$ 410 K",
    renews: "Jun 09, 2026",
    status: "Active"
  }, {
    id: "MSA-2024-117",
    co: "Atlas Foundry Group",
    type: "MSA",
    owner: "S. Park",
    value: "$ 1.60 M",
    renews: "Jun 18, 2026",
    status: "Review"
  }, {
    id: "NDA-2025-244",
    co: "Verity Technical",
    type: "NDA",
    owner: "P. Vega",
    value: "—",
    renews: "Jul 03, 2026",
    status: "Executed"
  }, {
    id: "MSA-2022-009",
    co: "Brixton Holdings",
    type: "MSA",
    owner: "J. Holt",
    value: "$ 2.40 M",
    renews: "Jul 21, 2026",
    status: "Expiring"
  }, {
    id: "SOW-2025-301",
    co: "Halcyon Robotics",
    type: "SOW",
    owner: "S. Park",
    value: "$ 320 K",
    renews: "Aug 04, 2026",
    status: "Active"
  }];
  const pillFor = s => {
    const map = {
      Active: {
        bg: "#EAF7EE",
        fg: "#136C2E"
      },
      Review: {
        bg: "#E3E9FA",
        fg: "#1C378A"
      },
      Negotiation: {
        bg: "#FFF4E0",
        fg: "#815500"
      },
      Executed: {
        bg: "#EDEFF2",
        fg: "#5A5F66"
      },
      Expiring: {
        bg: "#FDECEC",
        fg: "#991B1B"
      }
    };
    const c = map[s];
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        padding: "3px 9px",
        borderRadius: 999,
        background: c.bg,
        color: c.fg,
        font: "700 11px/1.2 Inter"
      }
    }, s);
  };
  const filterChip = (label, active) => /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "7px 12px",
      borderRadius: 999,
      border: `1px solid ${active ? "#1C378A" : "#D3D6DB"}`,
      background: active ? "#E3E9FA" : "#fff",
      color: active ? "#1C378A" : "#1F2229",
      font: "500 12px/1 Inter",
      cursor: "pointer"
    }
  }, label, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "#F5F6F7",
      flex: 1,
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      marginBottom: 16,
      flexWrap: "wrap"
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "6px 12px",
      borderRadius: 6,
      border: 0,
      background: t.active ? "#E3E9FA" : "transparent",
      color: t.active ? "#1C378A" : "#5A5F66",
      font: "600 13px/1.3 Inter",
      cursor: "pointer"
    }
  }, t.l, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 12px/1 Inter",
      opacity: 0.7,
      marginLeft: 4
    }
  }, t.n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid rgba(10,22,32,0.10)",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 20px",
      borderBottom: "1px solid #E1E4E8",
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 12px",
      border: "1px solid #D3D6DB",
      borderRadius: 999,
      width: 280
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#5A5F66",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Filter contracts\u2026",
    style: {
      border: 0,
      outline: 0,
      flex: 1,
      font: "400 13px/1 Inter",
      background: "transparent"
    }
  })), filterChip("Counterparty"), filterChip("Type"), filterChip("Owner"), filterChip("Renewal", true), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: "7px 12px",
      border: "1px solid #D3D6DB",
      background: "#fff",
      borderRadius: 6,
      font: "600 12px/1 Inter",
      color: "#1F2229",
      cursor: "pointer"
    }
  }, "Columns"), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: "7px 12px",
      border: "1px solid #D3D6DB",
      background: "#fff",
      borderRadius: 6,
      font: "600 12px/1 Inter",
      color: "#1F2229",
      cursor: "pointer"
    }
  }, "Export")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "#F5F6F7"
    }
  }, ["Contract ID", "Counterparty", "Type", "Owner", "Value", "Renews", "Status"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      font: "500 10px/1 'IBM Plex Mono', monospace",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#5A5F66",
      textAlign: "left",
      padding: "10px 16px"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderTop: "1px solid #E1E4E8"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 16px",
      font: "500 12px/1.2 'IBM Plex Mono', monospace",
      color: "#1C378A"
    }
  }, r.id), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 16px",
      font: "500 13px/1.2 Inter",
      color: "#030C26"
    }
  }, r.co), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 16px",
      font: "400 13px/1.2 Inter",
      color: "#5A5F66"
    }
  }, r.type), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 16px",
      font: "400 13px/1.2 Inter",
      color: "#5A5F66"
    }
  }, r.owner), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 16px",
      font: "500 13px/1.2 'IBM Plex Mono', monospace",
      color: "#1F2229"
    }
  }, r.value), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 16px",
      font: "400 13px/1.2 Inter",
      color: "#5A5F66"
    }
  }, r.renews), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 16px"
    }
  }, pillFor(r.status)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px",
      borderTop: "1px solid #E1E4E8",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      font: "400 12px/1 Inter",
      color: "#5A5F66"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Showing 1\u20138 of 560"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, ["←", "1", "2", "3", "…", "70", "→"].map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    style: {
      padding: "5px 10px",
      border: "1px solid #D3D6DB",
      background: p === "1" ? "#1C378A" : "#fff",
      color: p === "1" ? "#fff" : "#1F2229",
      borderRadius: 4,
      font: "500 12px/1 Inter",
      cursor: "pointer"
    }
  }, p))))));
}
window.Repository = Repository;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contractsiq/Repository.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contractsiq/Sidebar.jsx
try { (() => {
// node: contractsiq-sidebar
// Mirrors the Figma /Main navigation pattern: dark Midnight surface,
// Inter, hairline dividers, current item highlighted with subtle blue tint.
function Sidebar({
  active = "dashboard",
  onNav
}) {
  const item = (id, label, icon) => {
    const on = active === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onNav && onNav(id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        textAlign: "left",
        padding: "9px 12px",
        borderRadius: 8,
        border: 0,
        background: on ? "rgba(94,120,200,0.18)" : "transparent",
        color: on ? "#fff" : "#9AA3AB",
        font: "500 13px/1.2 Inter, sans-serif",
        cursor: "pointer",
        transition: "background 0.15s ease, color 0.15s ease"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        display: "inline-flex"
      }
    }, icon), label);
  };
  const I = ({
    d
  }) => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      background: "#0A1620",
      color: "#E8ECEE",
      padding: "18px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      borderRight: "1px solid rgba(255,255,255,0.06)",
      height: "100%",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "4px 6px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 6,
      background: "#1D7B99",
      display: "grid",
      placeItems: "center",
      color: "#fff",
      font: "700 13px/1 Inter"
    }
  }, "C"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px/1 Inter",
      letterSpacing: "-0.01em",
      color: "#fff"
    }
  }, "Contracts", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#5FE2D6"
    }
  }, "IQ"))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 10px/1.2 'IBM Plex Mono', monospace",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "#6B7480",
      padding: "10px 12px 6px"
    }
  }, "Workspace"), item("dashboard", "Dashboard", /*#__PURE__*/React.createElement(I, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "9"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "12",
      width: "7",
      height: "9"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "16",
      width: "7",
      height: "5"
    }))
  })), item("repository", "Repository", /*#__PURE__*/React.createElement(I, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 7h18v13H3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 7l3-4h12l3 4"
    }))
  })), item("customers", "Customers", /*#__PURE__*/React.createElement(I, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 20c0-3 3-5 6-5s6 2 6 5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "9",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 20c0-2 2-3 4-3"
    }))
  })), item("clauses", "Clause library", /*#__PURE__*/React.createElement(I, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 4h11l4 4v12H5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 11h7M9 15h7"
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 10px/1.2 'IBM Plex Mono', monospace",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "#6B7480",
      padding: "16px 12px 6px"
    }
  }, "Tools"), item("upload", "Upload contract", /*#__PURE__*/React.createElement(I, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3v12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m7 8 5-5 5 5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 21h14"
    }))
  })), item("chat", "Ask IQ", /*#__PURE__*/React.createElement(I, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 12a8 8 0 1 1-3-6.2L21 4l-1 4z"
    }))
  })), item("reports", "Reports", /*#__PURE__*/React.createElement(I, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 20V8M10 20V4M16 20v-8M22 20H2"
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "12px 8px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      background: "#1C378A",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      font: "600 12px/1 Inter"
    }
  }, "EM"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/1.3 Inter",
      color: "#fff"
    }
  }, "Elena Marsh", /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#6B7480",
      font: "400 11px/1.2 Inter"
    }
  }, "Operating partner"))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contractsiq/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contractsiq/TopBar.jsx
try { (() => {
// node: contractsiq-topbar
function TopBar({
  title = "Dashboard",
  subtitle,
  onSearch
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 28px",
      borderBottom: "1px solid #E1E4E8",
      background: "#fff",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 22px/1.2 Inter, sans-serif",
      color: "#030C26",
      letterSpacing: "-0.012em"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/1.4 Inter",
      color: "#5A5F66",
      marginTop: 2
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      border: "1px solid #D3D6DB",
      borderRadius: 999,
      width: 280,
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#5A5F66",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search contracts, clauses, customers\u2026",
    onChange: e => onSearch && onSearch(e.target.value),
    style: {
      border: 0,
      outline: 0,
      flex: 1,
      font: "400 13px/1 Inter",
      background: "transparent"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 10px/1 'IBM Plex Mono', monospace",
      color: "#A4A9B0",
      border: "1px solid #E1E4E8",
      padding: "2px 5px",
      borderRadius: 4
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      border: "1px solid #D3D6DB",
      background: "#fff",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#1F2229",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 1 1 12 0c0 4 2 5 2 7H4c0-2 2-3 2-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 19a2 2 0 0 0 4 0"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 6,
      right: 7,
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "#B91C1C",
      border: "1.5px solid #fff"
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: "8px 14px",
      borderRadius: 8,
      border: 0,
      background: "#1C378A",
      color: "#fff",
      font: "600 13px/1 Inter",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })), "New contract")));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contractsiq/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/praxisiq-marketing/Hero.jsx
try { (() => {
// node: marketing-hero
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 0 80px",
      borderBottom: "1px solid rgba(10,22,32,0.10)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 clamp(20px, 5vw, 64px)",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 48,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 11px/1 'IBM Plex Mono', monospace",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#5A5F66",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "#1D7B99"
    }
  }), " AI for operators"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "400 clamp(40px, 5.6vw, 72px)/1.04 'Source Serif 4', serif",
      letterSpacing: "-0.022em",
      color: "#0A1620",
      margin: 0
    }
  }, "Translate the AI thesis ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#1D7B99",
      fontStyle: "italic"
    }
  }, "into operating reality.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      background: "#0A1620",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: 999,
      font: "500 14px/1 Inter",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, "Plan your roadmap \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      background: "transparent",
      color: "#0A1620",
      padding: "11px 18px",
      borderRadius: 999,
      border: "1px solid rgba(10,22,32,0.18)",
      font: "500 14px/1 Inter",
      textDecoration: "none"
    }
  }, "Request a diligence brief"))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 17px/1.55 Inter",
      color: "#4B5563",
      maxWidth: 480,
      margin: 0
    }
  }, "PraxisIQ is the AI execution layer for private equity. We design, build, and embed agentic systems inside portfolio companies \u2014 measured against EBITDA, adoption, and speed.")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/praxisiq-marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/praxisiq-marketing/Metrics.jsx
try { (() => {
// node: marketing-metrics
function Metrics() {
  const items = [{
    tag: "ROI velocity",
    val: "85",
    unit: "%",
    desc: "Portfolio companies see ROI within 6 months."
  }, {
    tag: "Operational efficiency",
    val: "3",
    unit: "×",
    desc: "Average operational efficiency gains."
  }, {
    tag: "Cost reduction",
    val: "40",
    unit: "%",
    desc: "Cost reduction through AI implementation."
  }, {
    tag: "PE partnerships",
    val: "25",
    unit: "+",
    desc: "PE firms successfully partnered with."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0",
      borderBottom: "1px solid rgba(10,22,32,0.10)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 clamp(20px, 5vw, 64px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 11px/1 'IBM Plex Mono', monospace",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#5A5F66",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "#1D7B99"
    }
  }), " By the numbers"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "400 clamp(28px, 3.4vw, 42px)/1.1 'Source Serif 4', serif",
      letterSpacing: "-0.018em",
      color: "#0A1620",
      margin: 0
    }
  }, "Results, not ideas."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 17px/1.55 Inter",
      color: "#4B5563",
      maxWidth: 640,
      margin: "12px 0 0"
    }
  }, "Every initiative is measured against EBITDA impact, adoption, and speed \u2014 not vanity metrics.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 1,
      background: "rgba(10,22,32,0.10)",
      border: "1px solid rgba(10,22,32,0.10)",
      borderRadius: 12,
      overflow: "hidden"
    }
  }, items.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#F4F1EA",
      padding: "28px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 11px/1 'IBM Plex Mono', monospace",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#4B5563",
      marginBottom: 10
    }
  }, m.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 64px/1 'IBM Plex Mono', monospace",
      letterSpacing: "-0.04em",
      color: "#0A1620",
      fontFeatureSettings: '"tnum" 1',
      marginBottom: 10
    }
  }, m.val, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      color: "#1D7B99",
      marginLeft: 3
    }
  }, m.unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/1.5 Inter",
      color: "#4B5563",
      maxWidth: 220
    }
  }, m.desc))))));
}
window.Metrics = Metrics;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/praxisiq-marketing/Metrics.jsx", error: String((e && e.message) || e) }); }

// ui_kits/praxisiq-marketing/Nav.jsx
try { (() => {
// node: marketing-nav
function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      backdropFilter: "blur(14px) saturate(140%)",
      background: "rgba(255,255,255,0.78)",
      borderBottom: "1px solid rgba(10,22,32,0.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 clamp(20px, 5vw, 64px)",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none",
      color: "#0A1620",
      font: "600 17px/1 Inter",
      letterSpacing: "-0.01em"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/praxisiq-logo.png",
    alt: "",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("span", null, "Praxis", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#1D7B99"
    }
  }, "IQ"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      font: "500 14px/1 Inter",
      color: "#1F2937"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Approach"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Use cases"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Insights"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "About")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      background: "#0A1620",
      color: "#fff",
      padding: "9px 16px",
      borderRadius: 999,
      font: "500 13px/1 Inter",
      textDecoration: "none"
    }
  }, "Schedule a call \u2192")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/praxisiq-marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/praxisiq-marketing/UseCases.jsx
try { (() => {
// node: marketing-usecases
function UseCases() {
  const items = [{
    tag: "01 / Pre-investment",
    t: "AI Diligence for investment decisions.",
    s: "Evaluate AI risk, maturity, and upside before investing.",
    c: "#1D7B99"
  }, {
    tag: "02 / Post-acquisition",
    t: "AI Value Creation Planning.",
    s: "Turn AI insights into a clear value-creation roadmap.",
    c: "#5FE2D6"
  }, {
    tag: "03 / In production",
    t: "AI Execution & Operational Systems.",
    s: "Deploy AI inside portfolio companies to deliver real outcomes.",
    c: "#C9B58A"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0",
      borderBottom: "1px solid rgba(10,22,32,0.10)",
      background: "#F4F1EA"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 clamp(20px, 5vw, 64px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 11px/1 'IBM Plex Mono', monospace",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#4B5563",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "#1D7B99"
    }
  }), " Use cases"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "400 clamp(28px, 3.4vw, 42px)/1.1 'Source Serif 4', serif",
      letterSpacing: "-0.018em",
      color: "#0A1620",
      margin: 0
    }
  }, "From thesis to production.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, items.map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#fff",
      border: "1px solid rgba(10,22,32,0.10)",
      borderRadius: 14,
      padding: "22px 22px 20px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: u.c
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      font: "500 11px/1 'IBM Plex Mono', monospace",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "#4B5563",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 999,
      background: u.c
    }
  }), " ", u.tag), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: "400 20px/1.18 'Source Serif 4', serif",
      color: "#0A1620",
      letterSpacing: "-0.008em",
      margin: "0 0 6px"
    }
  }, u.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "italic 400 14px/1.4 'Source Serif 4', serif",
      color: "#4B5563",
      margin: 0
    }
  }, u.s))))));
}
window.UseCases = UseCases;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/praxisiq-marketing/UseCases.jsx", error: String((e && e.message) || e) }); }

})();
