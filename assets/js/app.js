const APP_VERSION = "0.3.4";
const WORLD_SVG_PATH = "assets/world.svg";
const COUNTRY_ID_MAPPINGS = {
  US: "US",
  CA: "CA",
  MX: "MX",
  BR: "BR",
  AR: "AR",
  CO: "CO",
  PE: "PE",
  GB: "GB",
  FR: "FR",
  DE: "DE",
  ES: "ES",
  IT: "IT",
  NO: "NO",
  SE: "SE",
  DZ: "DZ",
  MA: "MA",
  NG: "NG",
  ZA: "ZA",
  EG: "EG",
  TR: "TR",
  SA: "SA",
  AE: "AE",
  IN: "IN",
  CN: "CN",
  JP: "JP",
  KR: "KR",
  AU: "AU",
  NZ: "NZ",
  SG: "SG",
  ID: "ID"
};

document.getElementById("versionLabel").textContent = APP_VERSION;

const COUNTRIES = [
  { id: "US", name: "États-Unis", svgKeys: ["United States"] },
  { id: "CA", name: "Canada", svgKeys: ["Canada"] },
  { id: "MX", name: "Mexique", svgKeys: ["Mexico", "MX"] },
  { id: "BR", name: "Brésil", svgKeys: ["Brazil", "BR"] },
  { id: "AR", name: "Argentine", svgKeys: ["Argentina", "AR"] },
  { id: "CO", name: "Colombie", svgKeys: ["Colombia", "CO"] },
  { id: "PE", name: "Pérou", svgKeys: ["Peru", "PE"] },
  { id: "GB", name: "Royaume-Uni", svgKeys: ["United Kingdom", "GB", "England", "Scotland", "Wales", "Northern Ireland"] },
  { id: "FR", name: "France", svgKeys: ["France", "FR"] },
  { id: "DE", name: "Allemagne", svgKeys: ["Germany", "DE"] },
  { id: "ES", name: "Espagne", svgKeys: ["Spain", "ES"] },
  { id: "IT", name: "Italie", svgKeys: ["Italy", "IT"] },
  { id: "NO", name: "Norvège", svgKeys: ["Norway", "NO"] },
  { id: "SE", name: "Suède", svgKeys: ["Sweden", "SE"] },
  { id: "DZ", name: "Algérie", svgKeys: ["Algeria", "DZ"] },
  { id: "MA", name: "Maroc", svgKeys: ["Morocco", "MA"] },
  { id: "NG", name: "Nigéria", svgKeys: ["Nigeria", "NG"] },
  { id: "ZA", name: "Afrique du Sud", svgKeys: ["South Africa", "ZA"] },
  { id: "EG", name: "Égypte", svgKeys: ["Egypt", "EG"] },
  { id: "TR", name: "Turquie", svgKeys: ["Turkey", "TR"] },
  { id: "SA", name: "Arabie Saoudite", svgKeys: ["Saudi Arabia", "SA"] },
  { id: "AE", name: "Émirats arabes unis", svgKeys: ["United Arab Emirates", "AE"] },
  { id: "IN", name: "Inde", svgKeys: ["India", "IN"] },
  { id: "CN", name: "Chine", svgKeys: ["China", "CN"] },
  { id: "JP", name: "Japon", svgKeys: ["Japan", "JP"] },
  { id: "KR", name: "Corée du Sud", svgKeys: ["South Korea", "Korea", "KR"] },
  { id: "AU", name: "Australie", svgKeys: ["Australia", "AU"] },
  { id: "NZ", name: "Nouvelle-Zélande", svgKeys: ["New Zealand", "NZ"] },
  { id: "SG", name: "Singapour", svgKeys: ["Singapore", "SG"] },
  { id: "ID", name: "Indonésie", svgKeys: ["Indonesia", "ID"] }
];

const DEFAULT_THEMES = {

  countryProfile: {
    label: "Fiche pays",
    mode: "tooltip",
    color: "#ff9f3f",
    description: "Carte des fiches pays avec les données sociales, business et compliance.",
    data: {
      FR: {
        employees: 1200,
        revenue: "820 M€",
        activity: "Siège, promotion et collecte",
        country: "France",
        complianceLead: "Jeanne Durand (Sponsor : CFO Groupe)",
        legal: "Protection données, anti-corruption, concurrence"
      },
      US: {
        employees: 480,
        revenue: "410 M$",
        activity: "Collecte et distribution digitale",
        country: "États-Unis",
        complianceLead: "Elena Walsh (Sponsor : CEO US)",
        legal: "FCPA, privacy state laws, export control"
      },
      BR: {
        employees: 220,
        revenue: "125 M$",
        activity: "Promotion et collecte",
        country: "Brésil",
        complianceLead: "Paulo Mendes (Sponsor : COO LatAm)",
        legal: "LGPD, anti-corruption, concurrence"
      },
      NG: {
        employees: 160,
        revenue: "65 M$",
        activity: "Collecte et distribution locale",
        country: "Nigéria",
        complianceLead: "Adaeze Okafor (Sponsor : Area Manager 2)",
        legal: "Donnees, sanctions locales, diligence tiers"
      },
      IN: {
        employees: 350,
        revenue: "190 M$",
        activity: "Promotion & collecte",
        country: "Inde",
        complianceLead: "Amit Sharma (Sponsor : CTO Groupe)",
        legal: "IT Rules, prévention fraude, concurrence"
      },
      CA: {
        employees: 260,
        revenue: "220 M$",
        activity: "Distribution et support régional",
        country: "Canada",
        complianceLead: "Sophie Tremblay (Sponsor : CRO Amériques)",
        legal: "LPRPDE, lutte anticorruption, obligations export"
      },
      DE: {
        employees: 310,
        revenue: "275 M€",
        activity: "Promotion et opérations industrielles",
        country: "Allemagne",
        complianceLead: "Karl Hoffmann (Sponsor : COO Europe)",
        legal: "BAFA export control, concurrence, RGPD"
      },
      ES: {
        employees: 140,
        revenue: "95 M€",
        activity: "Promotion & collecte",
        country: "Espagne",
        complianceLead: "Lucía Ramos (Sponsor : Directeur Europe Sud)",
        legal: "RGPD, Sapin II local, obligations CNMC"
      },
      AE: {
        employees: 120,
        revenue: "70 M$",
        activity: "Hub régional et support partenaires",
        country: "Émirats arabes unis",
        complianceLead: "Yara Al Nahyan (Sponsor : Area Manager 2)",
        legal: "Lutte anti-blanchiment, obligations Emirats, données sensibles"
      },
      AU: {
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
      CA: 74,
      FR: 72,
      DE: 79,
      US: 69,
      GB: 73,
      ES: 60,
      BR: 38,
      AR: 37,
      NG: 24,
      ZA: 43,
      IN: 40,
      CN: 45,
      JP: 73,
      AU: 75,
      MX: 31,
      TR: 36,
      AE: 68,
      MA: 38,
      EG: 29,
      KR: 63
    }
  },
  revenueShare: {
    label: "% du chiffre d'affaires du Groupe",
    mode: "numeric",
    palette: ["#d6f5ff", "#64d4ff", "#0b95ff"],
    domain: [0, 20],
    description: "Répartition du chiffre d'affaires consolidé.",
    data: {
      FR: 18,
      US: 14,
      DE: 8,
      GB: 6,
      IN: 5,
      BR: 4,
      AU: 4,
      CN: 6,
      NG: 2,
      AE: 3,
      JP: 3,
      MX: 2,
      CA: 5,
      ES: 3,
      IT: 2
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
      FR: "Promotion & Collecte",
      US: "Collecte",
      DE: "Promotion",
      GB: "Promotion",
      BR: "Promotion & Collecte",
      NG: "Collecte",
      AE: "Distributeur",
      AU: "Distributeur",
      IN: "Promotion & Collecte",
      JP: "Promotion",
      ES: "Promotion",
      TR: "Collecte",
      MA: "Promotion",
      CA: "Promotion & Collecte"
    }
  },
  products: {
    label: "Produits vendus",
    mode: "tooltip",
    color: "#64d4ff",
    description: "Portefeuille produits par marché (multi-produits autorisés).",
    data: {
      FR: { products: ["Suite data", "API open compliance", "Monitoring IA"] },
      US: { products: ["Suite data", "Monitoring IA"] },
      DE: { products: ["API open compliance", "Tableaux M&A"] },
      GB: { products: ["Suite data", "Screening tiers"] },
      NG: { products: ["Screening tiers", "KYC mobile"] },
      IN: { products: ["Suite data", "KYC mobile", "Monitoring IA"] },
      BR: { products: ["Suite data", "Screening tiers"] },
      ES: { products: ["API open compliance", "Monitoring IA"] },
      CA: { products: ["Suite data", "Tableaux M&A"] },
      AU: { products: ["Screening tiers", "KYC mobile"] }
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
      FR: "Area Manager 1",
      GB: "Area Manager 1",
      DE: "Area Manager 1",
      CA: "Area Manager 1",
      US: "Area Manager 2",
      MX: "Area Manager 2",
      BR: "Area Manager 2",
      NG: "Area Manager 2",
      ES: "Area Manager 2",
      AE: "Area Manager 2",
      IN: "Area Manager 3",
      CN: "Area Manager 3",
      JP: "Area Manager 3",
      AU: "Area Manager 3"
    }
  }
};

const state = {
  currentTheme: "countryProfile",
  themes: loadThemes(),
  map: null,
  countryLayers: {}
};

function showResourceNotice(message) {
  const notice = document.getElementById("resourceNotice");
  if (!notice) return;
  notice.textContent = message;
  notice.classList.add("is-visible");
}

function hideResourceNotice() {
  const notice = document.getElementById("resourceNotice");
  if (!notice) return;
  notice.classList.remove("is-visible");
}

function cloneThemes(data) {
  if (typeof structuredClone === "function") {
    return structuredClone(data);
  }
  return JSON.parse(JSON.stringify(data));
}

function normalizeThemeCountries(themes) {
  const mapped = cloneThemes(themes);
  Object.values(mapped).forEach((theme) => {
    if (!theme.data) return;
    const normalized = {};
    Object.entries(theme.data).forEach(([key, value]) => {
      const target = COUNTRY_ID_MAPPINGS[key] || key;
      normalized[target] = value;
    });
    theme.data = normalized;
  });
  return mapped;
}

function loadThemes() {
  try {
    const cached = localStorage.getItem("complianceThemes");
    if (cached) {
      return normalizeThemeCountries(JSON.parse(cached));
    }
  } catch (error) {
    console.warn("Impossible de charger le cache", error);
  }
  return normalizeThemeCountries(DEFAULT_THEMES);
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

  const rect = document.getElementById("map").getBoundingClientRect();
  const point = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
  tooltip.innerHTML = content;
  tooltip.style.left = `${point.x + 16}px`;
  tooltip.style.top = `${point.y + 16}px`;
  tooltip.classList.add("visible");
}

function findCountryShapes(container, country) {
  const elements = [];
  country.svgKeys.forEach((key) => {
    container.querySelectorAll(`#${key}, [name="${key}"]`).forEach((node) => {
      if (!elements.includes(node)) elements.push(node);
    });
    const classSelector = `.${key.replace(/\s+/g, ".")}`;
    container.querySelectorAll(classSelector).forEach((node) => {
      if (!elements.includes(node)) elements.push(node);
    });
  });
  return elements;
}

async function createMap() {
  const container = document.getElementById("map");
  container.innerHTML = "";
  hideResourceNotice();
  state.countryLayers = {};

  try {
    const response = await fetch(WORLD_SVG_PATH);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const svgMarkup = await response.text();
    container.innerHTML = svgMarkup;
    const svg = container.querySelector("svg");
    if (!svg) throw new Error("SVG introuvable");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    state.map = svg;

    COUNTRIES.forEach((country) => {
      const shapes = findCountryShapes(container, country);
      if (!shapes.length) return;
      state.countryLayers[country.id] = shapes;
      shapes.forEach((shape) => {
        shape.style.cursor = "pointer";
        shape.addEventListener("mousemove", (e) => showTooltipForCountry(country.id, e));
        shape.addEventListener("mouseleave", hideTooltip);
      });
    });

    refreshColors();
  } catch (error) {
    console.error("Impossible de charger la carte SVG", error);
    showResourceNotice("Impossible de charger la carte World.svg.");
  }
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
  Object.entries(state.countryLayers).forEach(([id, shapes]) => {
    const fill = colorForCountry(id, theme);
    const hasData = theme.data[id] !== undefined;
    shapes.forEach((shape) => {
      shape.style.fill = fill;
      shape.style.opacity = hasData ? 1 : 0.35;
      shape.style.stroke = "#cbd5e1";
      shape.style.strokeWidth = 0.5;
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
  const country = COUNTRIES.find((c) => c.id === id);
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
  COUNTRIES.forEach((country) => {
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
      country: COUNTRIES.find((c) => c.id === countryId)?.name || countryId,
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
    state.themes = cloneThemes(DEFAULT_THEMES);
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
