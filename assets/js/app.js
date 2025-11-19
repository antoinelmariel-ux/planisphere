const APP_VERSION = "0.3.0";

document.getElementById("versionLabel").textContent = APP_VERSION;

const COUNTRY_SHAPES = [
  { id: "USA", name: "États-Unis", bounds: [-125, 24, -66, 49] },
  { id: "CAN", name: "Canada", bounds: [-140, 50, -60, 83] },
  { id: "MEX", name: "Mexique", bounds: [-117, 14, -86, 33] },
  { id: "BRA", name: "Brésil", bounds: [-74, -34, -34, 5] },
  { id: "ARG", name: "Argentine", bounds: [-73, -55, -53, -22] },
  { id: "COL", name: "Colombie", bounds: [-79, -4, -66, 13] },
  { id: "PER", name: "Pérou", bounds: [-82, -18, -68, -2] },
  { id: "GBR", name: "Royaume-Uni", bounds: [-8, 50, 2, 59] },
  { id: "FRA", name: "France", bounds: [-5, 42, 7, 51] },
  { id: "DEU", name: "Allemagne", bounds: [5, 47, 15, 55] },
  { id: "ESP", name: "Espagne", bounds: [-9, 36, 3, 44] },
  { id: "ITA", name: "Italie", bounds: [7, 37, 18, 47] },
  { id: "NOR", name: "Norvège", bounds: [4, 58, 31, 71] },
  { id: "SWE", name: "Suède", bounds: [11, 55, 23, 69] },
  { id: "DZA", name: "Algérie", bounds: [-9, 19, 12, 37] },
  { id: "MAR", name: "Maroc", bounds: [-13, 27, -1, 36] },
  { id: "NGA", name: "Nigéria", bounds: [2, 4, 14, 14] },
  { id: "ZAF", name: "Afrique du Sud", bounds: [16, -35, 33, -22] },
  { id: "EGY", name: "Égypte", bounds: [25, 22, 36, 32] },
  { id: "TUR", name: "Turquie", bounds: [26, 36, 45, 42] },
  { id: "SAU", name: "Arabie Saoudite", bounds: [35, 16, 56, 32] },
  { id: "ARE", name: "Émirats arabes unis", bounds: [51, 22, 56, 27] },
  { id: "IND", name: "Inde", bounds: [68, 8, 97, 33] },
  { id: "CHN", name: "Chine", bounds: [73, 18, 135, 53] },
  { id: "JPN", name: "Japon", bounds: [130, 31, 145, 45] },
  { id: "KOR", name: "Corée du Sud", bounds: [126, 34, 130, 39] },
  { id: "AUS", name: "Australie", bounds: [113, -44, 154, -10] },
  { id: "NZL", name: "Nouvelle-Zélande", bounds: [166, -47, 179, -34] },
  { id: "SGP", name: "Singapour", bounds: [103, 1, 104, 2] },
  { id: "IDN", name: "Indonésie", bounds: [95, -11, 141, 6] }
];

const DEFAULT_THEMES = {
  countryProfile: {
    label: "Fiche pays",
    mode: "tooltip",
    color: "#ff9f3f",
    description: "Carte des fiches pays avec les données sociales, business et compliance.",
    data: {
      FRA: {
        employees: 1200,
        revenue: "820 M€",
        activity: "Siège, promotion et collecte",
        country: "France",
        complianceLead: "Jeanne Durand (Sponsor : CFO Groupe)",
        legal: "Protection données, anti-corruption, concurrence"
      },
      USA: {
        employees: 480,
        revenue: "410 M$",
        activity: "Collecte et distribution digitale",
        country: "États-Unis",
        complianceLead: "Elena Walsh (Sponsor : CEO US)",
        legal: "FCPA, privacy state laws, export control"
      },
      BRA: {
        employees: 220,
        revenue: "125 M$",
        activity: "Promotion et collecte",
        country: "Brésil",
        complianceLead: "Paulo Mendes (Sponsor : COO LatAm)",
        legal: "LGPD, anti-corruption, concurrence"
      },
      NGA: {
        employees: 160,
        revenue: "65 M$",
        activity: "Collecte et distribution locale",
        country: "Nigéria",
        complianceLead: "Adaeze Okafor (Sponsor : Area Manager 2)",
        legal: "Donnees, sanctions locales, diligence tiers"
      },
      IND: {
        employees: 350,
        revenue: "190 M$",
        activity: "Promotion & collecte",
        country: "Inde",
        complianceLead: "Amit Sharma (Sponsor : CTO Groupe)",
        legal: "IT Rules, prévention fraude, concurrence"
      },
      CAN: {
        employees: 260,
        revenue: "220 M$",
        activity: "Distribution et support régional",
        country: "Canada",
        complianceLead: "Sophie Tremblay (Sponsor : CRO Amériques)",
        legal: "LPRPDE, lutte anticorruption, obligations export"
      },
      DEU: {
        employees: 310,
        revenue: "275 M€",
        activity: "Promotion et opérations industrielles",
        country: "Allemagne",
        complianceLead: "Karl Hoffmann (Sponsor : COO Europe)",
        legal: "BAFA export control, concurrence, RGPD"
      },
      ESP: {
        employees: 140,
        revenue: "95 M€",
        activity: "Promotion & collecte",
        country: "Espagne",
        complianceLead: "Lucía Ramos (Sponsor : Directeur Europe Sud)",
        legal: "RGPD, Sapin II local, obligations CNMC"
      },
      ARE: {
        employees: 120,
        revenue: "70 M$",
        activity: "Hub régional et support partenaires",
        country: "Émirats arabes unis",
        complianceLead: "Yara Al Nahyan (Sponsor : Area Manager 2)",
        legal: "Lutte anti-blanchiment, obligations Emirats, données sensibles"
      },
      AUS: {
        employees: 150,
        revenue: "110 M$",
        activity: "Distribution, support et R&D locale",
        country: "Australie",
        complianceLead: "Oliver Grant (Sponsor : CTO APAC)",
        legal: "Privacy Act, lois anticorruption, sécurité produits"
      }
    }
  },
  corruptionIndex: {
    label: "Indice de corruption",
    mode: "numeric",
    palette: ["#a8f0ff", "#ffd072", "#ff6b6b"],
    domain: [0, 100],
    description: "Indice Transparency International (0 = fort risque, 100 = risque faible).",
    data: {
      CAN: 74,
      FRA: 72,
      DEU: 79,
      USA: 69,
      GBR: 73,
      ESP: 60,
      BRA: 38,
      ARG: 37,
      NGA: 24,
      ZAF: 43,
      IND: 40,
      CHN: 45,
      JPN: 73,
      AUS: 75,
      MEX: 31,
      TUR: 36,
      ARE: 68,
      MAR: 38,
      EGY: 29,
      KOR: 63
    }
  },
  revenueShare: {
    label: "% du chiffre d'affaires du Groupe",
    mode: "numeric",
    palette: ["#d6f5ff", "#64d4ff", "#0b95ff"],
    domain: [0, 20],
    description: "Répartition du chiffre d'affaires consolidé.",
    data: {
      FRA: 18,
      USA: 14,
      DEU: 8,
      GBR: 6,
      IND: 5,
      BRA: 4,
      AUS: 4,
      CHN: 6,
      NGA: 2,
      ARE: 3,
      JPN: 3,
      MEX: 2,
      CAN: 5,
      ESP: 3,
      ITA: 2
    }
  },
  subsidiaryType: {
    label: "Type de filiale",
    mode: "category",
    description: "Typologie juridique ou opérationnelle de la filiale.",
    legend: {
      Collecte: "#5ad487",
      Promotion: "#ff9f3f",
      "Promotion & Collecte": "#7f8cff",
      Distributeur: "#ffd66b"
    },
    data: {
      FRA: "Promotion & Collecte",
      USA: "Collecte",
      DEU: "Promotion",
      GBR: "Promotion",
      BRA: "Promotion & Collecte",
      NGA: "Collecte",
      ARE: "Distributeur",
      AUS: "Distributeur",
      IND: "Promotion & Collecte",
      JPN: "Promotion",
      ESP: "Promotion",
      TUR: "Collecte",
      MAR: "Promotion",
      CAN: "Promotion & Collecte"
    }
  },
  products: {
    label: "Produits vendus",
    mode: "tooltip",
    color: "#64d4ff",
    description: "Portefeuille produits par marché (multi-produits autorisés).",
    data: {
      FRA: { products: ["Suite data", "API open compliance", "Monitoring IA"] },
      USA: { products: ["Suite data", "Monitoring IA"] },
      DEU: { products: ["API open compliance", "Tableaux M&A"] },
      GBR: { products: ["Suite data", "Screening tiers"] },
      NGA: { products: ["Screening tiers", "KYC mobile"] },
      IND: { products: ["Suite data", "KYC mobile", "Monitoring IA"] },
      BRA: { products: ["Suite data", "Screening tiers"] },
      ESP: { products: ["API open compliance", "Monitoring IA"] },
      CAN: { products: ["Suite data", "Tableaux M&A"] },
      AUS: { products: ["Screening tiers", "KYC mobile"] }
    }
  },
  areaManager: {
    label: "Zones Area Manager",
    mode: "category",
    description: "Répartition des zones de responsabilité.",
    legend: {
      "Area Manager 1": "#64d4ff",
      "Area Manager 2": "#ff9f3f",
      "Area Manager 3": "#7f8cff"
    },
    data: {
      FRA: "Area Manager 1",
      GBR: "Area Manager 1",
      DEU: "Area Manager 1",
      CAN: "Area Manager 1",
      USA: "Area Manager 2",
      MEX: "Area Manager 2",
      BRA: "Area Manager 2",
      NGA: "Area Manager 2",
      ESP: "Area Manager 2",
      ARE: "Area Manager 2",
      IND: "Area Manager 3",
      CHN: "Area Manager 3",
      JPN: "Area Manager 3",
      AUS: "Area Manager 3"
    }
  }
};

const state = {
  currentTheme: "countryProfile",
  themes: loadThemes(),
  map: null,
  countryLayers: {}
};

function boundsToLatLng(bounds) {
  const [minLon, minLat, maxLon, maxLat] = bounds;
  return [
    [minLat, minLon],
    [maxLat, maxLon]
  ];
}

function loadThemes() {
  try {
    const cached = localStorage.getItem("complianceThemes");
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (error) {
    console.warn("Impossible de charger le cache", error);
  }
  return structuredClone(DEFAULT_THEMES);
}

function persistThemes() {
  try {
    localStorage.setItem("complianceThemes", JSON.stringify(state.themes));
  } catch (error) {
    console.warn("Impossible de sauvegarder", error);
  }
}

function buildMenu() {
  const list = document.getElementById("themeList");
  list.innerHTML = "";
  Object.entries(state.themes).forEach(([key, theme]) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = theme.label;
    btn.addEventListener("click", () => selectTheme(key));
    btn.id = `btn-${key}`;
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function selectTheme(key) {
  state.currentTheme = key;
  document.querySelectorAll(".theme-menu button").forEach((btn) =>
    btn.classList.toggle("is-active", btn.id === `btn-${key}`)
  );
  refreshMap();
  buildLegend();
  updateInsights();
}

function hideTooltip() {
  document.getElementById("tooltip").classList.remove("visible");
}

function showTooltipForCountry(id, event) {
  const tooltip = document.getElementById("tooltip");
  const theme = state.themes[state.currentTheme];
  const content = buildTooltipContent(id, theme);
  if (!content) {
    hideTooltip();
    return;
  }

  const point = event.containerPoint;
  tooltip.innerHTML = content;
  tooltip.style.left = `${point.x + 16}px`;
  tooltip.style.top = `${point.y + 16}px`;
  tooltip.classList.add("visible");
}

function createMap() {
  const container = document.getElementById("map");
  container.innerHTML = "";
  state.map = L.map(container, { worldCopyJump: true });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 6,
    minZoom: 2,
    attribution: "© OpenStreetMap contributeurs"
  }).addTo(state.map);

  const bounds = L.latLngBounds([]);
  COUNTRY_SHAPES.forEach((country) => {
    const rectangle = L.rectangle(boundsToLatLng(country.bounds), {
      color: "#cbd5e1",
      weight: 1,
      fillColor: "#e6edf7",
      fillOpacity: 1
    });
    rectangle.addTo(state.map);
    rectangle.on("mousemove", (e) => showTooltipForCountry(country.id, e));
    rectangle.on("mouseout", hideTooltip);
    state.countryLayers[country.id] = rectangle;
    bounds.extend(boundsToLatLng(country.bounds));
  });

  state.map.fitBounds(bounds, { padding: [20, 20] });
  refreshColors();
}

function colorForCountry(id, theme) {
  const value = theme.data?.[id];
  if (value === undefined) return "#0d1f3a";
  if (theme.mode === "tooltip") {
    return theme.color || "#64d4ff";
  }
  if (theme.mode === "category") {
    return theme.legend[value] || "#7f8cff";
  }
  if (theme.mode === "numeric") {
    const [min, max] = theme.domain || [0, 100];
    const ratio = Math.max(0, Math.min(1, (value - min) / (max - min)));
    const colors = theme.palette || ["#d6f5ff", "#64d4ff", "#0b95ff"];
    if (colors.length === 2) {
      return mix(colors[0], colors[1], ratio);
    }
    return ratio < 0.5
      ? mix(colors[0], colors[1], ratio * 2)
      : mix(colors[1], colors[2] || colors[1], (ratio - 0.5) * 2);
  }
  return "#0d1f3a";
}

function refreshColors() {
  const theme = state.themes[state.currentTheme];
  Object.entries(state.countryLayers).forEach(([id, layer]) => {
    const fill = colorForCountry(id, theme);
    const hasData = theme.data[id] !== undefined;
    layer.setStyle({
      fillColor: fill,
      fillOpacity: hasData ? 1 : 0.35,
      color: "#cbd5e1",
      weight: 1
    });
  });
}

function buildLegend() {
  const container = document.getElementById("legend");
  const theme = state.themes[state.currentTheme];
  container.innerHTML = "";
  if (theme.mode === "numeric") {
    const gradient = document.createElement("div");
    gradient.className = "gradient-bar";
    const colors = theme.palette.join(", ");
    gradient.style.background = `linear-gradient(90deg, ${colors})`;
    const item = document.createElement("div");
    item.className = "legend-item";
    item.appendChild(gradient);
    const label = document.createElement("span");
    label.textContent = `${theme.domain[0]} → ${theme.domain[1]}`;
    item.appendChild(label);
    container.appendChild(item);
  } else if (theme.mode === "category") {
    Object.entries(theme.legend).forEach(([label, color]) => {
      const item = document.createElement("div");
      item.className = "legend-item";
      const swatch = document.createElement("span");
      swatch.className = "swatch";
      swatch.style.background = color;
      item.appendChild(swatch);
      item.appendChild(document.createTextNode(label));
      container.appendChild(item);
    });
  } else {
    const item = document.createElement("div");
    item.className = "legend-item";
    const swatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.style.background = theme.color || "#64d4ff";
    item.appendChild(swatch);
    const label = document.createElement("span");
    label.textContent = "Infos-bulles disponibles";
    item.appendChild(label);
    container.appendChild(item);
  }
}

function buildTooltipContent(id, theme) {
  const country = COUNTRY_SHAPES.find((c) => c.id === id);
  const value = theme.data[id];
  if (!value || !country) return "";
  if (theme === state.themes.countryProfile) {
    return `<h4>${country.name}</h4>
      <div class="info-grid">
        <div class="info-card"><div class="eyebrow">Salariés</div><strong>${value.employees}</strong></div>
        <div class="info-card"><div class="eyebrow">CA</div><strong>${value.revenue}</strong></div>
        <div class="info-card"><div class="eyebrow">Activité</div><span>${value.activity}</span></div>
        <div class="info-card"><div class="eyebrow">Compliance</div><span>${value.complianceLead}</span></div>
      </div>
      <p class="helper">Cadre légal : ${value.legal}</p>`;
  }
  if (theme === state.themes.products) {
    return `<h4>${country.name}</h4><p>Produits : ${value.products.join(", ")}</p>`;
  }
  if (theme === state.themes.corruptionIndex) {
    return `<h4>${country.name}</h4><p>Indice de corruption : <strong>${value}</strong></p>`;
  }
  if (theme === state.themes.revenueShare) {
    return `<h4>${country.name}</h4><p>Part du chiffre d'affaires : <strong>${value}%</strong></p>`;
  }
  if (theme === state.themes.subsidiaryType) {
    return `<h4>${country.name}</h4><p>Type de filiale : <strong>${value}</strong></p>`;
  }
  if (theme === state.themes.areaManager) {
    return `<h4>${country.name}</h4><p>Zone : <strong>${value}</strong></p>`;
  }
  return "";
}

function mix(a, b, t) {
  const colorToRgb = (c) =>
    c
      .replace("#", "")
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));
  const [r1, g1, b1] = colorToRgb(a);
  const [r2, g2, b2] = colorToRgb(b);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const bVal = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r}, ${g}, ${bVal})`;
}

function updateInsights() {
  const theme = state.themes[state.currentTheme];
  document.getElementById("insightTitle").textContent = theme.label;
  document.getElementById("themeMode").textContent = theme.mode === "numeric" ? "Zone colorée" : "Infos-bulles";
  const body = document.getElementById("insightBody");
  body.innerHTML = "";
  const desc = document.createElement("p");
  desc.textContent = theme.description;
  body.appendChild(desc);

  const cards = document.createElement("div");
  cards.className = "info-grid";
  const activeCountries = Object.keys(theme.data || {}).length;
  const cardA = document.createElement("div");
  cardA.className = "info-card";
  cardA.innerHTML = `<div class="eyebrow">Pays couverts</div><strong>${activeCountries}</strong>`;
  cards.appendChild(cardA);

  if (theme.mode === "numeric") {
    const values = Object.values(theme.data || {});
    const min = Math.min(...values);
    const max = Math.max(...values);
    const cardB = document.createElement("div");
    cardB.className = "info-card";
    cardB.innerHTML = `<div class="eyebrow">Amplitude</div><strong>${min} → ${max}</strong>`;
    cards.appendChild(cardB);
  } else {
    const cardB = document.createElement("div");
    cardB.className = "info-card";
    cardB.innerHTML = `<div class="eyebrow">Mode</div><strong>${theme.mode === "category" ? "Zone colorée" : "Infos-bulles"}</strong>`;
    cards.appendChild(cardB);
  }

  body.appendChild(cards);
}

function refreshMap() {
  refreshColors();
  hideTooltip();
}

function setupBurger() {
  const burger = document.getElementById("burgerButton");
  const menu = document.getElementById("themeMenu");
  burger.addEventListener("click", () => menu.classList.toggle("is-open"));
}

function buildBackOffice() {
  const themeSelect = document.getElementById("themeSelect");
  themeSelect.innerHTML = "";
  Object.entries(state.themes).forEach(([key, theme]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = theme.label;
    themeSelect.appendChild(option);
  });

  const countrySelect = document.getElementById("countrySelect");
  countrySelect.innerHTML = "";
  COUNTRY_SHAPES.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.id;
    option.textContent = country.name;
    countrySelect.appendChild(option);
  });

  themeSelect.value = state.currentTheme;
  renderDynamicFields();
  themeSelect.addEventListener("change", renderDynamicFields);
}

function renderDynamicFields() {
  const themeKey = document.getElementById("themeSelect").value;
  const theme = state.themes[themeKey];
  const dynamic = document.getElementById("dynamicFields");
  dynamic.innerHTML = "";

  if (themeKey === "countryProfile") {
    dynamic.innerHTML = `
      <label>Nombre de salariés<input id="field-employees" type="number" min="0" /></label>
      <label>Chiffre d'affaires<input id="field-revenue" type="text" /></label>
      <label>Typologie d'activité<input id="field-activity" type="text" /></label>
      <label>Personne en charge / Sponsor<input id="field-complianceLead" type="text" /></label>
      <label>Legal Framework<textarea id="field-legal"></textarea></label>
    `;
  } else if (theme.mode === "numeric") {
    dynamic.innerHTML = `<label>Valeur numérique<input id="field-numeric" type="number" step="0.1" /></label>`;
  } else if (themeKey === "products") {
    dynamic.innerHTML = `<label>Produits (séparés par des virgules)<textarea id="field-products"></textarea></label>`;
  } else if (themeKey === "subsidiaryType") {
    dynamic.innerHTML = `
      <label>Type de filiale
        <select id="field-category">
          <option>Collecte</option>
          <option>Promotion</option>
          <option>Promotion & Collecte</option>
          <option>Distributeur</option>
        </select>
      </label>`;
  } else if (themeKey === "areaManager") {
    dynamic.innerHTML = `
      <label>Zone
        <select id="field-category">
          <option>Area Manager 1</option>
          <option>Area Manager 2</option>
          <option>Area Manager 3</option>
        </select>
      </label>`;
  }
}

function handleBackOfficeSubmit(e) {
  e.preventDefault();
  const themeKey = document.getElementById("themeSelect").value;
  const countryId = document.getElementById("countrySelect").value;
  const theme = state.themes[themeKey];

  if (themeKey === "countryProfile") {
    theme.data[countryId] = {
      employees: Number(document.getElementById("field-employees").value || 0),
      revenue: document.getElementById("field-revenue").value || "N/A",
      activity: document.getElementById("field-activity").value || "",
      country: COUNTRY_SHAPES.find((c) => c.id === countryId)?.name || countryId,
      complianceLead: document.getElementById("field-complianceLead").value || "",
      legal: document.getElementById("field-legal").value || ""
    };
  } else if (theme.mode === "numeric") {
    const val = Number(document.getElementById("field-numeric").value);
    if (!Number.isFinite(val)) return alert("Merci de saisir une valeur numérique valide");
    theme.data[countryId] = val;
  } else if (themeKey === "products") {
    const raw = document.getElementById("field-products").value;
    theme.data[countryId] = { products: raw.split(",").map((p) => p.trim()).filter(Boolean) };
  } else if (theme.mode === "category") {
    const category = document.getElementById("field-category").value;
    theme.data[countryId] = category;
  }

  state.themes = { ...state.themes, [themeKey]: { ...theme, data: { ...theme.data } } };
  persistThemes();
  selectTheme(themeKey);
}

function setupBackOffice() {
  const toggle = document.getElementById("toggleBackOffice");
  const close = document.getElementById("closeBackOffice");
  const panel = document.getElementById("backOffice");
  toggle.addEventListener("click", () => panel.classList.toggle("is-open"));
  close.addEventListener("click", () => panel.classList.remove("is-open"));
  document.getElementById("backOfficeForm").addEventListener("submit", handleBackOfficeSubmit);
  document.getElementById("resetData").addEventListener("click", () => {
    state.themes = structuredClone(DEFAULT_THEMES);
    persistThemes();
    buildMenu();
    buildBackOffice();
    selectTheme(state.currentTheme);
  });
}

function init() {
  buildMenu();
  createMap();
  buildLegend();
  updateInsights();
  setupBurger();
  buildBackOffice();
  setupBackOffice();
  selectTheme(state.currentTheme);
}

window.addEventListener("DOMContentLoaded", init);
