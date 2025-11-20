const APP_VERSION = "0.4.0";
const WORLD_SVG_PATH = "assets/world.svg";
const DEFAULT_MEDICINES = [
  "Antibiotiques",
  "Antalgiques",
  "Vaccins",
  "Antiviraux",
  "Anti-inflammatoires"
];
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
  // Amérique du Nord
  { id: "AG", name: "Antigua-et-Barbuda", continent: "north-america", svgKeys: ["AG"] },
  { id: "BS", name: "Bahamas", continent: "north-america", svgKeys: ["BS"] },
  { id: "BB", name: "Barbade", continent: "north-america", svgKeys: ["BB"] },
  { id: "BZ", name: "Belize", continent: "north-america", svgKeys: ["BZ"] },
  { id: "CA", name: "Canada", continent: "north-america", svgKeys: ["CA", "Canada"] },
  { id: "CR", name: "Costa Rica", continent: "north-america", svgKeys: ["CR"] },
  { id: "CU", name: "Cuba", continent: "north-america", svgKeys: ["CU"] },
  { id: "DM", name: "Dominique", continent: "north-america", svgKeys: ["DM"] },
  { id: "DO", name: "République dominicaine", continent: "north-america", svgKeys: ["DO"] },
  { id: "SV", name: "El Salvador", continent: "north-america", svgKeys: ["SV"] },
  { id: "GD", name: "Grenade", continent: "north-america", svgKeys: ["GD"] },
  { id: "GT", name: "Guatemala", continent: "north-america", svgKeys: ["GT"] },
  { id: "HT", name: "Haïti", continent: "north-america", svgKeys: ["HT"] },
  { id: "HN", name: "Honduras", continent: "north-america", svgKeys: ["HN"] },
  { id: "JM", name: "Jamaïque", continent: "north-america", svgKeys: ["JM"] },
  { id: "MX", name: "Mexique", continent: "north-america", svgKeys: ["MX", "Mexico"] },
  { id: "NI", name: "Nicaragua", continent: "north-america", svgKeys: ["NI"] },
  { id: "PA", name: "Panama", continent: "north-america", svgKeys: ["PA"] },
  { id: "KN", name: "Saint-Christophe-et-Niévès", continent: "north-america", svgKeys: ["KN"] },
  { id: "LC", name: "Sainte-Lucie", continent: "north-america", svgKeys: ["LC"] },
  { id: "VC", name: "Saint-Vincent-et-les-Grenadines", continent: "north-america", svgKeys: ["VC"] },
  { id: "TT", name: "Trinité-et-Tobago", continent: "north-america", svgKeys: ["TT"] },
  { id: "US", name: "États-Unis", continent: "north-america", svgKeys: ["US", "United States"] },

  // Amérique du Sud
  { id: "AR", name: "Argentine", continent: "south-america", svgKeys: ["AR", "Argentina"] },
  { id: "BO", name: "Bolivie", continent: "south-america", svgKeys: ["BO"] },
  { id: "BR", name: "Brésil", continent: "south-america", svgKeys: ["BR", "Brazil"] },
  { id: "CL", name: "Chili", continent: "south-america", svgKeys: ["CL"] },
  { id: "CO", name: "Colombie", continent: "south-america", svgKeys: ["CO", "Colombia"] },
  { id: "EC", name: "Équateur", continent: "south-america", svgKeys: ["EC"] },
  { id: "GY", name: "Guyana", continent: "south-america", svgKeys: ["GY"] },
  { id: "PY", name: "Paraguay", continent: "south-america", svgKeys: ["PY"] },
  { id: "PE", name: "Pérou", continent: "south-america", svgKeys: ["PE", "Peru"] },
  { id: "SR", name: "Suriname", continent: "south-america", svgKeys: ["SR"] },
  { id: "UY", name: "Uruguay", continent: "south-america", svgKeys: ["UY"] },
  { id: "VE", name: "Venezuela", continent: "south-america", svgKeys: ["VE"] },

  // Europe
  { id: "AL", name: "Albanie", continent: "europe", svgKeys: ["AL", "Albania"] },
  { id: "DE", name: "Allemagne", continent: "europe", svgKeys: ["DE", "Germany"] },
  { id: "AD", name: "Andorre", continent: "europe", svgKeys: ["AD"] },
  { id: "AT", name: "Autriche", continent: "europe", svgKeys: ["AT", "Austria"] },
  { id: "BE", name: "Belgique", continent: "europe", svgKeys: ["BE", "Belgium"] },
  { id: "BY", name: "Biélorussie", continent: "europe", svgKeys: ["BY", "Belarus"] },
  { id: "BA", name: "Bosnie-Herzégovine", continent: "europe", svgKeys: ["BA"] },
  { id: "BG", name: "Bulgarie", continent: "europe", svgKeys: ["BG"] },
  { id: "HR", name: "Croatie", continent: "europe", svgKeys: ["HR", "Croatia"] },
  { id: "CY", name: "Chypre", continent: "europe", svgKeys: ["CY"] },
  { id: "DK", name: "Danemark", continent: "europe", svgKeys: ["DK", "Denmark"] },
  { id: "ES", name: "Espagne", continent: "europe", svgKeys: ["ES", "Spain"] },
  { id: "EE", name: "Estonie", continent: "europe", svgKeys: ["EE", "Estonia"] },
  { id: "FI", name: "Finlande", continent: "europe", svgKeys: ["FI", "Finland"] },
  { id: "FR", name: "France", continent: "europe", svgKeys: ["FR", "France"] },
  { id: "GR", name: "Grèce", continent: "europe", svgKeys: ["GR", "Greece"] },
  { id: "HU", name: "Hongrie", continent: "europe", svgKeys: ["HU", "Hungary"] },
  { id: "IE", name: "Irlande", continent: "europe", svgKeys: ["IE", "Ireland"] },
  { id: "IS", name: "Islande", continent: "europe", svgKeys: ["IS", "Iceland"] },
  { id: "IT", name: "Italie", continent: "europe", svgKeys: ["IT", "Italy"] },
  { id: "LV", name: "Lettonie", continent: "europe", svgKeys: ["LV", "Latvia"] },
  { id: "LI", name: "Liechtenstein", continent: "europe", svgKeys: ["LI"] },
  { id: "LT", name: "Lituanie", continent: "europe", svgKeys: ["LT", "Lithuania"] },
  { id: "LU", name: "Luxembourg", continent: "europe", svgKeys: ["LU"] },
  { id: "MK", name: "Macédoine du Nord", continent: "europe", svgKeys: ["MK"] },
  { id: "MT", name: "Malte", continent: "europe", svgKeys: ["MT", "Malta"] },
  { id: "MD", name: "Moldavie", continent: "europe", svgKeys: ["MD"] },
  { id: "MC", name: "Monaco", continent: "europe", svgKeys: ["MC"] },
  { id: "ME", name: "Monténégro", continent: "europe", svgKeys: ["ME"] },
  { id: "NO", name: "Norvège", continent: "europe", svgKeys: ["NO", "Norway"] },
  { id: "NL", name: "Pays-Bas", continent: "europe", svgKeys: ["NL", "Netherlands"] },
  { id: "PL", name: "Pologne", continent: "europe", svgKeys: ["PL", "Poland"] },
  { id: "PT", name: "Portugal", continent: "europe", svgKeys: ["PT", "Portugal"] },
  { id: "CZ", name: "République tchèque", continent: "europe", svgKeys: ["CZ"] },
  { id: "RO", name: "Roumanie", continent: "europe", svgKeys: ["RO", "Romania"] },
  { id: "GB", name: "Royaume-Uni", continent: "europe", svgKeys: ["GB", "United Kingdom", "England", "Scotland", "Wales", "Northern Ireland"] },
  { id: "RU", name: "Russie", continent: "europe", svgKeys: ["RU", "Russia"] },
  { id: "SM", name: "Saint-Marin", continent: "europe", svgKeys: ["SM"] },
  { id: "RS", name: "Serbie", continent: "europe", svgKeys: ["RS"] },
  { id: "SK", name: "Slovaquie", continent: "europe", svgKeys: ["SK"] },
  { id: "SI", name: "Slovénie", continent: "europe", svgKeys: ["SI"] },
  { id: "SE", name: "Suède", continent: "europe", svgKeys: ["SE", "Sweden"] },
  { id: "CH", name: "Suisse", continent: "europe", svgKeys: ["CH", "Switzerland"] },
  { id: "UA", name: "Ukraine", continent: "europe", svgKeys: ["UA", "Ukraine"] },
  { id: "VA", name: "Vatican", continent: "europe", svgKeys: ["VA"] },
  { id: "XK", name: "Kosovo", continent: "europe", svgKeys: ["XK"] },

  // Asie
  { id: "AF", name: "Afghanistan", continent: "asia", svgKeys: ["AF"] },
  { id: "AM", name: "Arménie", continent: "asia", svgKeys: ["AM"] },
  { id: "SA", name: "Arabie saoudite", continent: "asia", svgKeys: ["SA", "Saudi Arabia"] },
  { id: "AZ", name: "Azerbaïdjan", continent: "asia", svgKeys: ["AZ"] },
  { id: "GE", name: "Géorgie", continent: "asia", svgKeys: ["GE"] },
  { id: "BH", name: "Bahreïn", continent: "asia", svgKeys: ["BH"] },
  { id: "BD", name: "Bangladesh", continent: "asia", svgKeys: ["BD"] },
  { id: "BT", name: "Bhoutan", continent: "asia", svgKeys: ["BT"] },
  { id: "MM", name: "Birmanie", continent: "asia", svgKeys: ["MM", "Myanmar"] },
  { id: "BN", name: "Brunei", continent: "asia", svgKeys: ["BN"] },
  { id: "KH", name: "Cambodge", continent: "asia", svgKeys: ["KH"] },
  { id: "CN", name: "Chine", continent: "asia", svgKeys: ["CN", "China"] },
  { id: "KP", name: "Corée du Nord", continent: "asia", svgKeys: ["KP"] },
  { id: "KR", name: "Corée du Sud", continent: "asia", svgKeys: ["KR", "Korea", "South Korea"] },
  { id: "AE", name: "Émirats arabes unis", continent: "asia", svgKeys: ["AE", "United Arab Emirates"] },
  { id: "PH", name: "Philippines", continent: "asia", svgKeys: ["PH", "Philippines"] },
  { id: "HK", name: "Hong Kong", continent: "asia", svgKeys: ["HK"] },
  { id: "IN", name: "Inde", continent: "asia", svgKeys: ["IN", "India"] },
  { id: "ID", name: "Indonésie", continent: "asia", svgKeys: ["ID", "Indonesia"] },
  { id: "IQ", name: "Irak", continent: "asia", svgKeys: ["IQ", "Iraq"] },
  { id: "IR", name: "Iran", continent: "asia", svgKeys: ["IR", "Iran"] },
  { id: "IL", name: "Israël", continent: "asia", svgKeys: ["IL", "Israel"] },
  { id: "JO", name: "Jordanie", continent: "asia", svgKeys: ["JO", "Jordan"] },
  { id: "KZ", name: "Kazakhstan", continent: "asia", svgKeys: ["KZ"] },
  { id: "KG", name: "Kirghizistan", continent: "asia", svgKeys: ["KG"] },
  { id: "KW", name: "Koweït", continent: "asia", svgKeys: ["KW"] },
  { id: "LA", name: "Laos", continent: "asia", svgKeys: ["LA"] },
  { id: "LB", name: "Liban", continent: "asia", svgKeys: ["LB", "Lebanon"] },
  { id: "MY", name: "Malaisie", continent: "asia", svgKeys: ["MY", "Malaysia"] },
  { id: "MV", name: "Maldives", continent: "asia", svgKeys: ["MV"] },
  { id: "MN", name: "Mongolie", continent: "asia", svgKeys: ["MN", "Mongolia"] },
  { id: "NP", name: "Népal", continent: "asia", svgKeys: ["NP"] },
  { id: "OM", name: "Oman", continent: "asia", svgKeys: ["OM"] },
  { id: "UZ", name: "Ouzbékistan", continent: "asia", svgKeys: ["UZ"] },
  { id: "PK", name: "Pakistan", continent: "asia", svgKeys: ["PK"] },
  { id: "PS", name: "Palestine", continent: "asia", svgKeys: ["PS"] },
  { id: "QA", name: "Qatar", continent: "asia", svgKeys: ["QA"] },
  { id: "SG", name: "Singapour", continent: "asia", svgKeys: ["SG", "Singapore"] },
  { id: "LK", name: "Sri Lanka", continent: "asia", svgKeys: ["LK"] },
  { id: "SY", name: "Syrie", continent: "asia", svgKeys: ["SY", "Syria"] },
  { id: "TW", name: "Taïwan", continent: "asia", svgKeys: ["TW", "Taiwan"] },
  { id: "TJ", name: "Tadjikistan", continent: "asia", svgKeys: ["TJ"] },
  { id: "TH", name: "Thaïlande", continent: "asia", svgKeys: ["TH", "Thailand"] },
  { id: "TL", name: "Timor oriental", continent: "asia", svgKeys: ["TL"] },
  { id: "TM", name: "Turkménistan", continent: "asia", svgKeys: ["TM"] },
  { id: "TR", name: "Turquie", continent: "asia", svgKeys: ["TR", "Turkey"] },
  { id: "VN", name: "Vietnam", continent: "asia", svgKeys: ["VN"] },
  { id: "YE", name: "Yémen", continent: "asia", svgKeys: ["YE", "Yemen"] },

// Afrique
  { id: "ZA", name: "Afrique du Sud", continent: "africa", svgKeys: ["ZA", "South Africa"] },
  { id: "DZ", name: "Algérie", continent: "africa", svgKeys: ["DZ", "Algeria"] },
  { id: "AO", name: "Angola", continent: "africa", svgKeys: ["AO"] },
  { id: "BJ", name: "Bénin", continent: "africa", svgKeys: ["BJ"] },
  { id: "BW", name: "Botswana", continent: "africa", svgKeys: ["BW"] },
  { id: "BF", name: "Burkina Faso", continent: "africa", svgKeys: ["BF"] },
  { id: "BI", name: "Burundi", continent: "africa", svgKeys: ["BI"] },
  { id: "CV", name: "Cap-Vert", continent: "africa", svgKeys: ["CV"] },
  { id: "CM", name: "Cameroun", continent: "africa", svgKeys: ["CM"] },
  { id: "CF", name: "République centrafricaine", continent: "africa", svgKeys: ["CF"] },
  { id: "KM", name: "Comores", continent: "africa", svgKeys: ["KM"] },
  { id: "CG", name: "Congo", continent: "africa", svgKeys: ["CG"] },
  { id: "CD", name: "République démocratique du Congo", continent: "africa", svgKeys: ["CD"] },
  { id: "CI", name: "Côte d'Ivoire", continent: "africa", svgKeys: ["CI", "Ivory Coast"] },
  { id: "DJ", name: "Djibouti", continent: "africa", svgKeys: ["DJ"] },
  { id: "EG", name: "Égypte", continent: "africa", svgKeys: ["EG", "Egypt"] },
  { id: "ER", name: "Érythrée", continent: "africa", svgKeys: ["ER"] },
  { id: "SZ", name: "Eswatini", continent: "africa", svgKeys: ["SZ"] },
  { id: "ET", name: "Éthiopie", continent: "africa", svgKeys: ["ET"] },
  { id: "GA", name: "Gabon", continent: "africa", svgKeys: ["GA"] },
  { id: "GM", name: "Gambie", continent: "africa", svgKeys: ["GM"] },
  { id: "GH", name: "Ghana", continent: "africa", svgKeys: ["GH"] },
  { id: "GN", name: "Guinée", continent: "africa", svgKeys: ["GN"] },
  { id: "GW", name: "Guinée-Bissau", continent: "africa", svgKeys: ["GW"] },
  { id: "GQ", name: "Guinée équatoriale", continent: "africa", svgKeys: ["GQ"] },
  { id: "KE", name: "Kenya", continent: "africa", svgKeys: ["KE"] },
  { id: "LS", name: "Lesotho", continent: "africa", svgKeys: ["LS"] },
  { id: "LR", name: "Liberia", continent: "africa", svgKeys: ["LR"] },
  { id: "LY", name: "Libye", continent: "africa", svgKeys: ["LY"] },
  { id: "MG", name: "Madagascar", continent: "africa", svgKeys: ["MG"] },
  { id: "MW", name: "Malawi", continent: "africa", svgKeys: ["MW"] },
  { id: "ML", name: "Mali", continent: "africa", svgKeys: ["ML"] },
  { id: "MA", name: "Maroc", continent: "africa", svgKeys: ["MA", "Morocco"] },
  { id: "MR", name: "Mauritanie", continent: "africa", svgKeys: ["MR"] },
  { id: "MU", name: "Maurice", continent: "africa", svgKeys: ["MU"] },
  { id: "MZ", name: "Mozambique", continent: "africa", svgKeys: ["MZ"] },
  { id: "NA", name: "Namibie", continent: "africa", svgKeys: ["NA"] },
  { id: "NE", name: "Niger", continent: "africa", svgKeys: ["NE"] },
  { id: "NG", name: "Nigéria", continent: "africa", svgKeys: ["NG", "Nigeria"] },
  { id: "UG", name: "Ouganda", continent: "africa", svgKeys: ["UG"] },
  { id: "RW", name: "Rwanda", continent: "africa", svgKeys: ["RW"] },
  { id: "EH", name: "Sahara occidental", continent: "africa", svgKeys: ["EH"] },
  { id: "ST", name: "Sao Tomé-et-Principe", continent: "africa", svgKeys: ["ST"] },
  { id: "SN", name: "Sénégal", continent: "africa", svgKeys: ["SN"] },
  { id: "SC", name: "Seychelles", continent: "africa", svgKeys: ["SC"] },
  { id: "SL", name: "Sierra Leone", continent: "africa", svgKeys: ["SL"] },
  { id: "SO", name: "Somalie", continent: "africa", svgKeys: ["SO"] },
  { id: "SD", name: "Soudan", continent: "africa", svgKeys: ["SD"] },
  { id: "SS", name: "Soudan du Sud", continent: "africa", svgKeys: ["SS"] },
  { id: "TZ", name: "Tanzanie", continent: "africa", svgKeys: ["TZ"] },
  { id: "TD", name: "Tchad", continent: "africa", svgKeys: ["TD"] },
  { id: "TG", name: "Togo", continent: "africa", svgKeys: ["TG"] },
  { id: "TN", name: "Tunisie", continent: "africa", svgKeys: ["TN"] },
  { id: "ZM", name: "Zambie", continent: "africa", svgKeys: ["ZM"] },
  { id: "ZW", name: "Zimbabwe", continent: "africa", svgKeys: ["ZW"] },

  // Océanie
  { id: "AU", name: "Australie", continent: "oceania", svgKeys: ["AU", "Australia"] },
  { id: "FJ", name: "Fidji", continent: "oceania", svgKeys: ["FJ"] },
  { id: "FM", name: "Micronésie", continent: "oceania", svgKeys: ["FM"] },
  { id: "KI", name: "Kiribati", continent: "oceania", svgKeys: ["KI"] },
  { id: "MH", name: "Îles Marshall", continent: "oceania", svgKeys: ["MH"] },
  { id: "NR", name: "Nauru", continent: "oceania", svgKeys: ["NR"] },
  { id: "NZ", name: "Nouvelle-Zélande", continent: "oceania", svgKeys: ["NZ", "New Zealand"] },
  { id: "PW", name: "Palaos", continent: "oceania", svgKeys: ["PW"] },
  { id: "PG", name: "Papouasie-Nouvelle-Guinée", continent: "oceania", svgKeys: ["PG"] },
  { id: "SB", name: "Îles Salomon", continent: "oceania", svgKeys: ["SB"] },
  { id: "WS", name: "Samoa", continent: "oceania", svgKeys: ["WS"] },
  { id: "TO", name: "Tonga", continent: "oceania", svgKeys: ["TO"] },
  { id: "TV", name: "Tuvalu", continent: "oceania", svgKeys: ["TV"] },
  { id: "VU", name: "Vanuatu", continent: "oceania", svgKeys: ["VU"] }
];

const CONTINENTS = [
  { id: "north-america", label: "Amérique du Nord" },
  { id: "south-america", label: "Amérique du Sud" },
  { id: "europe", label: "Europe" },
  { id: "asia", label: "Asie" },
  { id: "africa", label: "Afrique" },
  { id: "oceania", label: "Océanie" }
].map((continent) => ({
  ...continent,
  countries: COUNTRIES.filter((country) => country.continent === continent.id).map(
    (country) => country.id
  )
}));

const DEFAULT_THEMES = {

  countryProfile: {
    label: "Fiche Entitée",
    mode: "tooltip",
    color: "#ff9f3f",
    description: "Carte des fiches pays avec les données sociales, business et compliance.",
    data: {
      FR: {
        entityName: "Groupe Europe Ouest",
        employees: 1200,
        countryRevenue: 820,
        revenueCurrency: "M€",
        activity: "Siège, promotion et collecte",
        country: "France",
        complianceLead: "Jeanne Durand (Sponsor : CFO Groupe)",
        legal: "Protection données, anti-corruption, concurrence"
      },
      US: {
        entityName: "Digital Americas",
        employees: 480,
        countryRevenue: 410,
        revenueCurrency: "M$",
        activity: "Collecte et distribution digitale",
        country: "États-Unis",
        complianceLead: "Elena Walsh (Sponsor : CEO US)",
        legal: "FCPA, privacy state laws, export control"
      },
      BR: {
        entityName: "LatAm Sud",
        employees: 220,
        countryRevenue: 125,
        revenueCurrency: "M$",
        activity: "Promotion et collecte",
        country: "Brésil",
        complianceLead: "Paulo Mendes (Sponsor : COO LatAm)",
        legal: "LGPD, anti-corruption, concurrence"
      },
      NG: {
        entityName: "Africa Growth",
        employees: 160,
        countryRevenue: 65,
        revenueCurrency: "M$",
        activity: "Collecte et distribution locale",
        country: "Nigéria",
        complianceLead: "Adaeze Okafor (Sponsor : Area Manager 2)",
        legal: "Donnees, sanctions locales, diligence tiers"
      },
      IN: {
        entityName: "APAC Tech",
        employees: 350,
        countryRevenue: 190,
        revenueCurrency: "M$",
        activity: "Promotion & collecte",
        country: "Inde",
        complianceLead: "Amit Sharma (Sponsor : CTO Groupe)",
        legal: "IT Rules, prévention fraude, concurrence"
      },
      CA: {
        entityName: "Digital Americas",
        employees: 260,
        countryRevenue: 220,
        revenueCurrency: "M$",
        activity: "Distribution et support régional",
        country: "Canada",
        complianceLead: "Sophie Tremblay (Sponsor : CRO Amériques)",
        legal: "LPRPDE, lutte anticorruption, obligations export"
      },
      DE: {
        entityName: "Groupe Europe Ouest",
        employees: 310,
        countryRevenue: 275,
        revenueCurrency: "M€",
        activity: "Promotion et opérations industrielles",
        country: "Allemagne",
        complianceLead: "Karl Hoffmann (Sponsor : COO Europe)",
        legal: "BAFA export control, concurrence, RGPD"
      },
      ES: {
        entityName: "Europe Sud",
        employees: 140,
        countryRevenue: 95,
        revenueCurrency: "M€",
        activity: "Promotion & collecte",
        country: "Espagne",
        complianceLead: "Lucía Ramos (Sponsor : Directeur Europe Sud)",
        legal: "RGPD, Sapin II local, obligations CNMC"
      },
      AE: {
        entityName: "Middle East Hub",
        employees: 120,
        countryRevenue: 70,
        revenueCurrency: "M$",
        activity: "Hub régional et support partenaires",
        country: "Émirats arabes unis",
        complianceLead: "Yara Al Nahyan (Sponsor : Area Manager 2)",
        legal: "Lutte anti-blanchiment, obligations Emirats, données sensibles"
      },
      AU: {
        entityName: "APAC Tech",
        employees: 150,
        countryRevenue: 110,
        revenueCurrency: "M$",
        activity: "Distribution, support et R&D locale",
        country: "Australie",
        complianceLead: "Oliver Grant (Sponsor : CTO APAC)",
        legal: "Privacy Act, lois anticorruption, sécurité produits"
      }
    }
  },
  embargoLists: {
    label: "Pays sous embargo",
    mode: "category",
    allowCustomLegend: true,
    description:
      "Cartographie des listes d'embargo (ONU, UE, OFAC...) avec couleurs personnalisables.",
    legend: {
      "Sanctions complètes": "#ef4444",
      "Restriction partielle": "#f97316",
      "Surveillance renforcée": "#6366f1"
    },
    data: {
      RU: "Sanctions complètes",
      IR: "Sanctions complètes",
      KP: "Sanctions complètes",
      SY: "Restriction partielle",
      CU: "Restriction partielle",
      BY: "Surveillance renforcée",
      VE: "Surveillance renforcée"
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

const VIEWBOX_FALLBACK = "0 0 2000 857";
const EUROPE_VIEWBOX = "880 40 420 520";

const state = {
  currentTheme: "countryProfile",
  themes: loadThemes(),
  medicines: loadMedicines(),
  map: null,
  countryLayers: {},
  defaultViewBox: VIEWBOX_FALLBACK
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

function loadMedicines() {
  try {
    const cached = localStorage.getItem("medicineCatalog");
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (error) {
    console.warn("Impossible de charger les médicaments", error);
  }
  return [...DEFAULT_MEDICINES];
}

function persistMedicines() {
  try {
    localStorage.setItem("medicineCatalog", JSON.stringify(state.medicines));
  } catch (error) {
    console.warn("Impossible de sauvegarder les médicaments", error);
  }
}

function extractRevenueValue(profile) {
  const candidate = profile?.countryRevenue ?? profile?.revenue;
  const value = typeof candidate === "string" ? parseFloat(candidate) : Number(candidate);
  return Number.isFinite(value) ? value : 0;
}

function getProfileEntityKey(profile) {
  if (!profile) return "";
  return profile.entityName || profile.country || "";
}

function getProfileCurrency(profile) {
  if (!profile) return "M€";
  if (profile.revenueCurrency) return profile.revenueCurrency;
  if (typeof profile.revenue === "string" && profile.revenue.includes("$")) return "M$";
  return "M€";
}

function formatRevenue(value, currency = "M€") {
  if (!Number.isFinite(value)) return "N/A";
  return `${value.toLocaleString("fr-FR")} ${currency}`;
}

function sumEntityRevenue(entityName, data = state.themes.countryProfile.data) {
  if (!entityName) return 0;
  return Object.values(data || {}).reduce((total, profile) => {
    if (getProfileEntityKey(profile) !== entityName) return total;
    const revenue = extractRevenueValue(profile);
    return total + revenue;
  }, 0);
}

function computeEntityProjection(entityName, countryRevenue, selectedCountries) {
  if (!entityName) return 0;
  const data = state.themes.countryProfile.data || {};
  let total = 0;

  Object.entries(data).forEach(([countryId, profile]) => {
    if (getProfileEntityKey(profile) !== entityName) return;
    const nextValue =
      selectedCountries.includes(countryId) && Number.isFinite(countryRevenue)
        ? countryRevenue
        : extractRevenueValue(profile);
    total += nextValue;
  });

  const missingCountries = selectedCountries.filter(
    (countryId) => !(data[countryId] && data[countryId].entityName === entityName)
  );

  if (Number.isFinite(countryRevenue) && missingCountries.length) {
    total += missingCountries.length * countryRevenue;
  }

  return total;
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
    const baseViewBox =
      svg.getAttribute("viewBox") || svg.getAttribute("viewbox") || VIEWBOX_FALLBACK;
    svg.setAttribute("viewBox", baseViewBox);
    state.defaultViewBox = baseViewBox;
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
    const currency = getProfileCurrency(value);
    const entityLabel = value.entityName || country.name;
    const localRevenue = extractRevenueValue(value);
    const globalRevenue = sumEntityRevenue(entityLabel);
    return `<h4>${entityLabel}</h4>
      <p class="helper">Pays : ${country.name}</p>
      <div class="info-grid">
        <div class="info-card"><div class="eyebrow">Salariés</div><strong>${value.employees}</strong></div>
        <div class="info-card"><div class="eyebrow">CA pays</div><strong>${formatRevenue(localRevenue, currency)}</strong></div>
        <div class="info-card"><div class="eyebrow">CA global entité</div><strong>${formatRevenue(globalRevenue, currency)}</strong></div>
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
  if (theme.mode === "category") {
    return `<h4>${country.name}</h4><p>Liste : <strong>${value}</strong></p>`;
  }
  if (theme.mode === "numeric") {
    return `<h4>${country.name}</h4><p>Valeur : <strong>${value}</strong></p>`;
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

  buildCountrySelector();

  themeSelect.value = state.currentTheme;
  renderDynamicFields();
  themeSelect.addEventListener("change", renderDynamicFields);
}

function buildMedicineCatalog() {
  const list = document.getElementById("medicineList");
  if (!list) return;
  list.innerHTML = "";

  if (!state.medicines.length) {
    const empty = document.createElement("p");
    empty.className = "helper";
    empty.textContent = "Aucun médicament référencé.";
    list.appendChild(empty);
    return;
  }

  state.medicines.forEach((medicine) => {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = medicine;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.setAttribute("aria-label", `Retirer ${medicine}`);
    removeButton.textContent = "×";
    removeButton.addEventListener("click", () => removeMedicine(medicine));

    pill.appendChild(removeButton);
    list.appendChild(pill);
  });
}

function addMedicine(name) {
  const label = name.trim();
  if (!label) {
    alert("Merci d'indiquer un médicament à ajouter");
    return;
  }
  if (state.medicines.includes(label)) {
    alert("Ce médicament est déjà présent dans la liste");
    return;
  }
  state.medicines = [...state.medicines, label].sort((a, b) => a.localeCompare(b));
  persistMedicines();
  buildMedicineCatalog();
}

function removeMedicine(name) {
  state.medicines = state.medicines.filter((medicine) => medicine !== name);
  persistMedicines();
  buildMedicineCatalog();
}

function setupMedicineCatalog() {
  const input = document.getElementById("medicineInput");
  const addButton = document.getElementById("addMedicine");
  if (!input || !addButton) return;

  const submit = () => {
    addMedicine(input.value);
    input.value = "";
    input.focus();
  };

  addButton.addEventListener("click", submit);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    }
  });

  buildMedicineCatalog();
}

const LEGEND_COLORS = ["#ef4444", "#f97316", "#6366f1", "#0ea5e9", "#22c55e", "#facc15"];

function getNextLegendColor(theme) {
  const used = new Set(Object.values(theme.legend || {}));
  const available = LEGEND_COLORS.find((color) => !used.has(color));
  if (available) return available;
  return LEGEND_COLORS[used.size % LEGEND_COLORS.length];
}

function updateLegendEntry(themeKey, previousLabel, nextLabel, color) {
  const theme = state.themes[themeKey];
  if (!theme || !previousLabel) return;
  const legend = { ...(theme.legend || {}) };
  const data = { ...(theme.data || {}) };

  if (legend[nextLabel] && previousLabel !== nextLabel) {
    alert("Une liste avec ce nom existe déjà");
    return;
  }

  delete legend[previousLabel];
  legend[nextLabel] = color;

  if (previousLabel !== nextLabel) {
    Object.entries(data).forEach(([countryId, value]) => {
      if (value === previousLabel) data[countryId] = nextLabel;
    });
  }

  const updatedTheme = { ...theme, legend, data };
  state.themes = { ...state.themes, [themeKey]: updatedTheme };
  persistThemes();
  if (state.currentTheme === themeKey) {
    refreshColors();
    buildLegend();
  }
  if (previousLabel !== nextLabel) {
    renderDynamicFields();
  }
}

function addLegendEntry(themeKey, label, color) {
  const theme = state.themes[themeKey];
  if (!theme) return;
  const legend = { ...(theme.legend || {}) };
  if (legend[label]) {
    alert("Cette liste existe déjà");
    return;
  }

  legend[label] = color || getNextLegendColor(theme);
  const updatedTheme = { ...theme, legend };
  state.themes = { ...state.themes, [themeKey]: updatedTheme };
  persistThemes();
  if (state.currentTheme === themeKey) {
    refreshColors();
    buildLegend();
  }
  renderDynamicFields();
}

function buildLegendEditor(themeKey, theme) {
  const container = document.createElement("div");
  container.className = "legend-editor";

  const header = document.createElement("div");
  header.className = "legend-editor__header";
  header.innerHTML =
    "<div><div class=\"eyebrow\">Listes</div><strong>Gérer les légendes</strong></div><p class=\"helper\">Ajoutez des listes d'embargo et ajustez leur couleur.</p>";
  container.appendChild(header);

  const listContainer = document.createElement("div");
  listContainer.className = "legend-editor__list";

  Object.entries(theme.legend || {}).forEach(([label, color]) => {
    const row = document.createElement("div");
    row.className = "legend-row";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = label;
    nameInput.placeholder = "Nom de la liste";

    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = color;

    nameInput.addEventListener("blur", () => {
      const nextLabel = nameInput.value.trim();
      if (!nextLabel) {
        nameInput.value = label;
        return;
      }
      updateLegendEntry(themeKey, label, nextLabel, colorInput.value);
    });

    colorInput.addEventListener("input", () => {
      const nextLabel = nameInput.value.trim() || label;
      updateLegendEntry(themeKey, label, nextLabel, colorInput.value);
    });

    row.appendChild(nameInput);
    row.appendChild(colorInput);
    listContainer.appendChild(row);
  });

  container.appendChild(listContainer);

  const form = document.createElement("div");
  form.className = "legend-editor__form";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Nom de la nouvelle liste";

  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.value = getNextLegendColor(theme);

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.textContent = "Ajouter une liste";
  addButton.addEventListener("click", () => {
    const label = nameInput.value.trim();
    if (!label) return alert("Merci d'indiquer un nom de liste");
    addLegendEntry(themeKey, label, colorInput.value);
    nameInput.value = "";
    colorInput.value = getNextLegendColor(state.themes[themeKey]);
  });

  form.appendChild(nameInput);
  form.appendChild(colorInput);
  form.appendChild(addButton);
  container.appendChild(form);

  return container;
}

function buildCategoryField(themeKey, theme) {
  const container = document.createElement("div");
  container.className = "category-field";
  const legendEntries = Object.keys(theme.legend || {});

  if (!legendEntries.length) {
    const message = document.createElement("p");
    message.className = "helper";
    message.textContent = "Ajoutez au moins une liste pour attribuer les pays.";
    container.appendChild(message);
    return container;
  }

  const label = document.createElement("label");
  label.textContent = theme.allowCustomLegend ? "Liste d'embargo" : "Catégorie";

  const select = document.createElement("select");
  select.id = "field-category";
  legendEntries.forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry;
    option.textContent = entry;
    select.appendChild(option);
  });

  label.appendChild(select);
  container.appendChild(label);
  return container;
}

function getSelectedCountries() {
  return Array.from(document.querySelectorAll(".country-checkbox:checked")).map(
    (input) => input.value
  );
}

function updateContinentToggle(toggle, group) {
  const checkboxes = Array.from(group.querySelectorAll(".country-checkbox"));
  const checkedCount = checkboxes.filter((box) => box.checked).length;
  toggle.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
  toggle.checked = checkedCount === checkboxes.length;
}

function buildCountrySelector() {
  const container = document.getElementById("countrySelection");
  if (!container) return;
  container.innerHTML = "";

  CONTINENTS.forEach((continent) => {
    const group = document.createElement("div");
    group.className = "continent-group";

    const header = document.createElement("div");
    header.className = "continent-header";

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.id = `continent-${continent.id}`;

    toggle.addEventListener("change", () => {
      const checked = toggle.checked;
      group.querySelectorAll(".country-checkbox").forEach((box) => {
        box.checked = checked;
      });
      toggle.indeterminate = false;
    });

    const headerLabel = document.createElement("label");
    headerLabel.setAttribute("for", toggle.id);
    headerLabel.textContent = `${continent.label} – tout sélectionner`;

    header.appendChild(headerLabel);
    header.appendChild(toggle);
    group.appendChild(header);

    const list = document.createElement("div");
    list.className = "country-list";

    continent.countries.forEach((countryId) => {
      const country = COUNTRIES.find((c) => c.id === countryId);
      const countryLabel = document.createElement("label");
      countryLabel.className = "country-option";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = countryId;
      checkbox.className = "country-checkbox";
      checkbox.addEventListener("change", () => updateContinentToggle(toggle, group));

      const name = document.createElement("span");
      name.textContent = country?.name || countryId;

      countryLabel.appendChild(checkbox);
      countryLabel.appendChild(name);
      list.appendChild(countryLabel);
    });

    group.appendChild(list);
    container.appendChild(group);
  });
}

function renderDynamicFields() {
  const themeKey = document.getElementById("themeSelect").value;
  const theme = state.themes[themeKey];
  const dynamic = document.getElementById("dynamicFields");
  dynamic.innerHTML = "";

  if (themeKey === "countryProfile") {
    dynamic.innerHTML = `
      <label>Nom de l'entité<input id="field-entityName" type="text" /></label>
      <label>Nombre de salariés<input id="field-employees" type="number" min="0" /></label>
      <div class="inline-fields">
        <label>Chiffre d'affaires par pays<input id="field-countryRevenue" type="number" min="0" step="0.1" /></label>
        <label>Unité<input id="field-revenueCurrency" type="text" value="M€" /></label>
      </div>
      <label>Typologie d'activité<input id="field-activity" type="text" /></label>
      <label>Personne en charge / Sponsor<input id="field-complianceLead" type="text" /></label>
      <label>Legal Framework<textarea id="field-legal"></textarea></label>
      <p class="helper">CA global estimé pour l'entité : <strong id="field-entityTotal">—</strong></p>
    `;
    setupEntityRevenuePreview();
  } else if (theme.mode === "numeric") {
    dynamic.innerHTML = `<label>Valeur numérique<input id="field-numeric" type="number" step="0.1" /></label>`;
  } else if (themeKey === "products") {
    dynamic.innerHTML = `<label>Produits (séparés par des virgules)<textarea id="field-products"></textarea></label>`;
  } else if (theme.mode === "category") {
    if (theme.allowCustomLegend) {
      dynamic.appendChild(buildLegendEditor(themeKey, theme));
    }
    const categoryField = buildCategoryField(themeKey, theme);
    dynamic.appendChild(categoryField);
  }
}

function setupEntityRevenuePreview() {
  const entityInput = document.getElementById("field-entityName");
  const revenueInput = document.getElementById("field-countryRevenue");
  const currencyInput = document.getElementById("field-revenueCurrency");
  const totalLabel = document.getElementById("field-entityTotal");

  if (!entityInput || !revenueInput || !totalLabel || !currencyInput) return;

  const updateTotal = () => {
    const entityName = entityInput.value.trim();
    const revenue = Number(revenueInput.value);
    if (!entityName || !Number.isFinite(revenue)) {
      totalLabel.textContent = "—";
      return;
    }
    const total = computeEntityProjection(entityName, revenue, getSelectedCountries());
    totalLabel.textContent = formatRevenue(total, currencyInput.value || "M€");
  };

  [entityInput, revenueInput, currencyInput].forEach((input) => {
    input.addEventListener("input", updateTotal);
  });

  document.querySelectorAll(".country-checkbox").forEach((box) => {
    box.addEventListener("change", updateTotal);
  });

  updateTotal();
}

function handleBackOfficeSubmit(e) {
  e.preventDefault();
  const themeKey = document.getElementById("themeSelect").value;
  const selectedCountries = getSelectedCountries();
  const theme = state.themes[themeKey];
  let entityName;
  let countryRevenue;
  let revenueCurrency;

  if (!selectedCountries.length) {
    alert("Merci de sélectionner au moins un pays");
    return;
  }

  if (themeKey === "countryProfile") {
    entityName = document.getElementById("field-entityName").value.trim();
    countryRevenue = Number(document.getElementById("field-countryRevenue").value);
    revenueCurrency = document.getElementById("field-revenueCurrency").value.trim() || "M€";

    if (!entityName) {
      alert("Merci de renseigner le nom de l'entité");
      return;
    }

    if (!Number.isFinite(countryRevenue)) {
      alert("Merci de saisir un chiffre d'affaires par pays valide");
      return;
    }
  }

  selectedCountries.forEach((countryId) => {
    if (themeKey === "countryProfile") {
      theme.data[countryId] = {
        entityName,
        employees: Number(document.getElementById("field-employees").value || 0),
        countryRevenue,
        revenueCurrency,
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
      const categoryField = document.getElementById("field-category");
      if (!categoryField) {
        return alert("Merci d'ajouter au moins une liste pour continuer");
      }
      const category = categoryField.value;
      theme.data[countryId] = category;
    }
  });

  state.themes = { ...state.themes, [themeKey]: { ...theme, data: { ...theme.data } } };
  persistThemes();
  selectTheme(themeKey);
}

function exportThemes() {
  const payload = {
    version: APP_VERSION,
    exportedAt: new Date().toISOString(),
    themes: state.themes,
    medicines: state.medicines
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "planisphere-data.json";
  a.click();
  URL.revokeObjectURL(url);
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
    state.medicines = [...DEFAULT_MEDICINES];
    persistThemes();
    persistMedicines();
    buildMenu();
    buildBackOffice();
    buildMedicineCatalog();
    selectTheme(state.currentTheme);
  });
  const exportButton = document.getElementById("exportData");
  exportButton.addEventListener("click", exportThemes);
  setupMedicineCatalog();
}

function applyViewBox(value) {
  if (!state.map) return;
  state.map.setAttribute("viewBox", value);
}

function setupZoomControls() {
  const zoomEurope = document.getElementById("zoomEurope");
  const resetZoom = document.getElementById("resetZoom");
  if (zoomEurope) {
    zoomEurope.addEventListener("click", () => applyViewBox(EUROPE_VIEWBOX));
  }
  if (resetZoom) {
    resetZoom.addEventListener("click", () => applyViewBox(state.defaultViewBox));
  }
}

function init() {
  buildMenu();
  createMap();
  buildLegend();
  setupBurger();
  buildBackOffice();
  setupBackOffice();
  setupZoomControls();
  selectTheme(state.currentTheme);
}

window.addEventListener("DOMContentLoaded", init);
