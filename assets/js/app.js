const APP_VERSION = "0.4.4";
const WORLD_SVG_PATH = "assets/world.svg";
const DEFAULT_MEDICINES = [
  "Antibiotiques",
  "Antalgiques",
  "Vaccins",
  "Antiviraux",
  "Anti-inflammatoires"
];
const DEFAULT_PRIORITIES = [
  "Protection des données",
  "Conformité Anti-corruption",
  "Éthique fournisseurs",
  "Sécurité patient",
  "Conformité promotion"
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
const EUROPE_VIEWBOX = "860 0 360 420";

const state = {
  currentTheme: "countryProfile",
  themes: loadThemes(),
  medicines: loadMedicines(),
  priorities: loadPriorities(),
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

function loadPriorities() {
  try {
    const cached = localStorage.getItem("priorityCatalog");
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (error) {
    console.warn("Impossible de charger les priorités", error);
  }
  return [...DEFAULT_PRIORITIES];
}

function persistPriorities() {
  try {
    localStorage.setItem("priorityCatalog", JSON.stringify(state.priorities));
  } catch (error) {
    console.warn("Impossible de sauvegarder les priorités", error);
  }
}

function extractRevenueValue(profile, countryId) {
  if (!profile) return 0;
  const mapValue =
    countryId && profile.countryRevenues
      ? Number(profile.countryRevenues[countryId])
      : undefined;
  const candidate =
    (Number.isFinite(mapValue) ? mapValue : undefined) ??
    profile?.countryRevenue ??
    profile?.revenue ??
    profile?.globalRevenue;
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
  return Object.entries(data || {}).reduce((total, [countryId, profile]) => {
    if (getProfileEntityKey(profile) !== entityName) return total;
    const revenue = extractRevenueValue(profile, countryId);
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
        : extractRevenueValue(profile, countryId);
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

function setMenuOpen(isOpen) {
  const menu = document.getElementById("themeMenu");
  const burger = document.getElementById("burgerButton");
  if (menu) {
    menu.classList.toggle("is-open", isOpen);
  }
  if (burger) {
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
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
  setMenuOpen(false);
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
    const localRevenue = extractRevenueValue(value, id);
    const globalRevenue = value.globalRevenue ?? sumEntityRevenue(entityLabel);
    const activities = value.activities?.length
      ? value.activities.join(" / ")
      : value.activity || "—";
    const medicines = Array.isArray(value.medicines) && value.medicines.length
      ? value.medicines.join(", ")
      : "—";
    const priorities = Array.isArray(value.ethicsPriorities) && value.ethicsPriorities.length
      ? value.ethicsPriorities.join(", ")
      : "—";
    const entityType = value.entityType === "distributor" ? "Distributeur" : "Filiale / JV";
    const contacts = value.contacts || value.complianceContact || value.complianceLead || "—";
    const manager = value.generalManager || "—";
    const shareholding = value.shareholding || "100% LFB";
    const employeeCount = value.employees ?? "—";
    return `<h4>${entityLabel}</h4>
      <p class="helper">${entityType} – ${shareholding}</p>
      <div class="info-grid">
        <div class="info-card"><div class="eyebrow">CA pays</div><strong>${formatRevenue(localRevenue, currency)}</strong></div>
        <div class="info-card"><div class="eyebrow">CA global entité</div><strong>${formatRevenue(globalRevenue, currency)}</strong></div>
        <div class="info-card"><div class="eyebrow">Médicaments</div><span>${medicines}</span></div>
        <div class="info-card"><div class="eyebrow">Activités</div><span>${activities}</span></div>
        <div class="info-card"><div class="eyebrow">Salariés</div><strong>${employeeCount}</strong></div>
      </div>
      <p class="helper">General Manager : ${manager}</p>
      <p class="helper">Contacts : ${contacts}</p>
      <p class="helper">Priorités E&C : ${priorities}</p>`;
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
  if (!burger || !menu) return;

  setMenuOpen(false);
  burger.addEventListener("click", () => {
    const willOpen = !menu.classList.contains("is-open");
    setMenuOpen(willOpen);
  });
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
  buildMedicineChoices();
}

function removeMedicine(name) {
  state.medicines = state.medicines.filter((medicine) => medicine !== name);
  persistMedicines();
  buildMedicineCatalog();
  buildMedicineChoices();
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

function buildPriorityCatalog() {
  const list = document.getElementById("priorityList");
  if (!list) return;
  list.innerHTML = "";

  if (!state.priorities.length) {
    const empty = document.createElement("p");
    empty.className = "helper";
    empty.textContent = "Aucune priorité configurée.";
    list.appendChild(empty);
    return;
  }

  state.priorities.forEach((priority) => {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = priority;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.setAttribute("aria-label", `Retirer ${priority}`);
    removeButton.textContent = "×";
    removeButton.addEventListener("click", () => removePriority(priority));

    pill.appendChild(removeButton);
    list.appendChild(pill);
  });
}

function addPriority(name) {
  const label = name.trim();
  if (!label) {
    alert("Merci d'indiquer une priorité à ajouter");
    return;
  }
  if (state.priorities.includes(label)) {
    alert("Cette priorité est déjà présente dans la liste");
    return;
  }
  state.priorities = [...state.priorities, label].sort((a, b) => a.localeCompare(b));
  persistPriorities();
  buildPriorityCatalog();
  buildPriorityChoices();
}

function removePriority(name) {
  state.priorities = state.priorities.filter((priority) => priority !== name);
  persistPriorities();
  buildPriorityCatalog();
  buildPriorityChoices();
}

function setupPriorityCatalog() {
  const input = document.getElementById("priorityInput");
  const addButton = document.getElementById("addPriority");
  if (!input || !addButton) return;

  const submit = () => {
    addPriority(input.value);
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

  buildPriorityCatalog();
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
  const tagContainer = document.getElementById("countryTags");
  if (tagContainer) {
    const tags = Array.from(tagContainer.querySelectorAll(".tag"));
    if (tags.length) {
      return tags.map((tag) => tag.dataset.code);
    }
  }
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

function buildSelectablePills(containerId, values, prefix) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  values.forEach((value) => {
    const label = document.createElement("label");
    label.className = "pill-toggle";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = value;
    checkbox.id = `${prefix}-${value.replace(/\s+/g, "-").toLowerCase()}`;

    const text = document.createElement("span");
    text.textContent = value;

    label.appendChild(checkbox);
    label.appendChild(text);
    container.appendChild(label);
  });
}

function getCheckedValues(containerId) {
  return Array.from(
    document.querySelectorAll(`#${containerId} input[type="checkbox"]:checked`)
  ).map((input) => input.value);
}

function buildPriorityChoices() {
  buildSelectablePills("priorityChoices", state.priorities, "priority-choice");
}

function buildMedicineChoices() {
  buildSelectablePills("subsidiaryMedicines", state.medicines, "subsidiary-medicine");
  buildSelectablePills("distributorMedicines", state.medicines, "distributor-medicine");
}

function findCountryByQuery(query) {
  const normalized = query.trim().toLowerCase();
  return COUNTRIES.find(
    (country) =>
      country.id.toLowerCase() === normalized || country.name.toLowerCase() === normalized
  );
}

function renderCountryOptions() {
  const list = document.getElementById("countryOptions");
  if (!list) return;
  list.innerHTML = "";
  COUNTRIES.forEach((country) => {
    const option = document.createElement("option");
    option.value = `${country.name} (${country.id})`;
    option.dataset.code = country.id;
    list.appendChild(option);
  });
}

function updateCountryTags(selected) {
  const container = document.getElementById("countryTags");
  if (!container) return;
  container.innerHTML = "";
  selected.forEach((code) => {
    const country = COUNTRIES.find((item) => item.id === code);
    if (!country) return;
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.dataset.code = code;
    tag.textContent = country.name;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "×";
    button.setAttribute("aria-label", `Retirer ${country.name}`);
    button.addEventListener("click", () => {
      const remaining = getSelectedCountries().filter((item) => item !== code);
      updateCountryTags(remaining);
      renderCountryRevenueInputs(remaining);
      setupEntityRevenuePreview();
    });
    tag.appendChild(button);
    container.appendChild(tag);
  });
}

function renderCountryRevenueInputs(selectedCountries) {
  const container = document.getElementById("countryRevenueList");
  if (!container) return;
  const previousValues = {};
  container.querySelectorAll("input[data-country]").forEach((input) => {
    previousValues[input.dataset.country] = input.value;
  });
  container.innerHTML = "";
  selectedCountries.forEach((code) => {
    const country = COUNTRIES.find((c) => c.id === code);
    const wrapper = document.createElement("label");
    wrapper.className = "inline-label";
    wrapper.textContent = `CA – ${country?.name || code}`;
    const input = document.createElement("input");
    input.type = "number";
    input.step = "0.1";
    input.min = "0";
    input.dataset.country = code;
    input.value = previousValues[code] || "";
    input.addEventListener("input", setupEntityRevenuePreview);
    wrapper.appendChild(input);
    container.appendChild(wrapper);
  });
}

function setupCountrySearch() {
  renderCountryOptions();
  const input = document.getElementById("countrySearch");
  if (!input) return;
  const addCountry = () => {
    const value = input.value;
    const datalist = document.getElementById("countryOptions");
    const match = Array.from(datalist?.options || []).find(
      (option) => option.value.toLowerCase() === value.trim().toLowerCase()
    );
    const country = match
      ? COUNTRIES.find((c) => c.id === match.dataset.code)
      : findCountryByQuery(value.replace(/\s+\(.+\)/, ""));
    if (!country) {
      alert("Pays introuvable, merci de choisir dans la liste.");
      return;
    }
    const selected = new Set(getSelectedCountries());
    selected.add(country.id);
    input.value = "";
    updateCountryTags(Array.from(selected));
    renderCountryRevenueInputs(Array.from(selected));
    setupEntityRevenuePreview();
  };

  input.addEventListener("change", addCountry);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addCountry();
    }
  });

  updateCountryTags(getSelectedCountries());
  renderCountryRevenueInputs(getSelectedCountries());
}

function renderDynamicFields() {
  const themeKey = document.getElementById("themeSelect").value;
  const theme = state.themes[themeKey];
  const dynamic = document.getElementById("dynamicFields");
  dynamic.innerHTML = "";

  if (themeKey === "countryProfile") {
    dynamic.innerHTML = `
      <label>Nom de l'entité<input id="field-entityName" type="text" /></label>
      <label>Type d'entité
        <select id="field-entityType">
          <option value="subsidiary">Filiale / JV</option>
          <option value="distributor">Distributeur</option>
        </select>
      </label>
      <div class="inline-fields" data-entity="subsidiary">
        <label>General Manager<input id="field-generalManager" type="text" /></label>
        <label>Contact Compliance<input id="field-complianceContact" type="text" /></label>
      </div>
      <label data-entity="subsidiary">Actionnariat<input id="field-shareholding" type="text" value="100% LFB" /></label>
      <label data-entity="subsidiary">Nombre de salariés<input id="field-employees" type="number" min="0" /></label>
      <div class="country-chip-selector">
        <label for="countrySearch">Pays (recherche)</label>
        <input id="countrySearch" type="search" list="countryOptions" placeholder="Rechercher un pays" />
        <datalist id="countryOptions"></datalist>
        <div id="countryTags" class="tag-container" aria-live="polite"></div>
      </div>
      <fieldset id="activityGroup" class="stack" data-entity="subsidiary">
        <legend>Activités</legend>
        <label class="pill-toggle"><input type="checkbox" name="activity" value="collecte" />Collecte</label>
        <label class="pill-toggle"><input type="checkbox" name="activity" value="commercial" />Commercialisation</label>
      </fieldset>
      <div id="commercialFields" class="conditional-field" data-entity="subsidiary">
        <p class="eyebrow">Commercialisation</p>
        <p class="helper">Sélectionnez les médicaments concernés.</p>
        <div id="subsidiaryMedicines" class="pill-picker"></div>
        <div class="inline-fields">
          <label>Chiffre d'affaires global<input id="field-globalRevenue" type="number" min="0" step="0.1" /></label>
          <label>Unité<input id="field-revenueCurrency" type="text" value="M€" /></label>
        </div>
        <div id="countryRevenueList" class="stack"></div>
        <p class="helper">CA global estimé pour l'entité : <strong id="field-entityTotal">—</strong></p>
      </div>
      <div id="distributorFields" class="conditional-field" data-entity="distributor">
        <p class="helper">Informations spécifiques distributeur</p>
        <div id="distributorMedicines" class="pill-picker"></div>
        <label>Contacts<textarea id="field-contacts"></textarea></label>
        <div class="inline-fields">
          <label>Chiffre d'affaires<input id="field-distributorRevenue" type="number" min="0" step="0.1" /></label>
          <label>Unité<input id="field-distributorCurrency" type="text" value="M€" /></label>
        </div>
      </div>
      <div class="priority-selector">
        <p class="eyebrow">Priorités Éthique & Compliance</p>
        <div id="priorityChoices" class="pill-picker"></div>
      </div>
    `;
    setupCountrySearch();
    buildMedicineChoices();
    buildPriorityChoices();
    setupActivityToggles();
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

function isCommercializationSelected() {
  const toggle = document.querySelector("input[name='activity'][value='commercial']");
  return toggle?.checked;
}

function toggleCommercialFields() {
  const block = document.getElementById("commercialFields");
  const entityType = document.getElementById("field-entityType")?.value || "subsidiary";
  if (!block) return;
  block.style.display = entityType === "subsidiary" && isCommercializationSelected() ? "" : "none";
}

function toggleEntityTypeFields() {
  const type = document.getElementById("field-entityType")?.value || "subsidiary";
  document.querySelectorAll("[data-entity]").forEach((node) => {
    node.style.display = node.dataset.entity === type ? "" : "none";
  });
  const activityGroup = document.getElementById("activityGroup");
  if (activityGroup) {
    activityGroup.style.display = type === "subsidiary" ? "" : "none";
  }
  toggleCommercialFields();
}

function setupActivityToggles() {
  const activities = document.querySelectorAll("input[name='activity']");
  activities.forEach((input) => {
    input.addEventListener("change", () => {
      toggleCommercialFields();
      renderCountryRevenueInputs(getSelectedCountries());
      setupEntityRevenuePreview();
    });
  });
  const typeSelect = document.getElementById("field-entityType");
  if (typeSelect) {
    typeSelect.addEventListener("change", () => {
      toggleEntityTypeFields();
      setupEntityRevenuePreview();
    });
  }
  toggleEntityTypeFields();
}

function setupEntityRevenuePreview() {
  const entityInput = document.getElementById("field-entityName");
  const totalLabel = document.getElementById("field-entityTotal");
  const currencyInput =
    document.getElementById("field-revenueCurrency") ||
    document.getElementById("field-distributorCurrency");
  if (!totalLabel || !entityInput) return;

  const updateTotal = () => {
    const selectedCountries = getSelectedCountries();
    const entityName = entityInput.value.trim();
    const currency = currencyInput?.value || "M€";
    if (!entityName) {
      totalLabel.textContent = "—";
      return;
    }
    const perCountryValues = {};
    document.querySelectorAll("#countryRevenueList input[data-country]").forEach((input) => {
      const numeric = Number(input.value);
      if (Number.isFinite(numeric)) {
        perCountryValues[input.dataset.country] = numeric;
      }
    });
    const sumPerCountry = Object.values(perCountryValues).reduce((sum, val) => sum + val, 0);
    const globalRevenueInput = Number(document.getElementById("field-globalRevenue")?.value);
    const distributorRevenueInput = Number(
      document.getElementById("field-distributorRevenue")?.value
    );
    if (sumPerCountry > 0) {
      totalLabel.textContent = formatRevenue(sumPerCountry, currency);
      return;
    }
    if (Number.isFinite(globalRevenueInput)) {
      totalLabel.textContent = formatRevenue(globalRevenueInput, currency);
      return;
    }
    if (Number.isFinite(distributorRevenueInput)) {
      totalLabel.textContent = formatRevenue(distributorRevenueInput, currency);
      return;
    }
    const base = computeEntityProjection(entityName, 0, selectedCountries);
    totalLabel.textContent = base ? formatRevenue(base, currency) : "—";
  };

  const watchedInputs = [
    entityInput,
    currencyInput,
    document.getElementById("field-globalRevenue"),
    document.getElementById("field-distributorRevenue")
  ].filter(Boolean);

  watchedInputs.forEach((input) => input.addEventListener("input", updateTotal));
  document
    .querySelectorAll("#countryRevenueList input[data-country]")
    .forEach((input) => input.addEventListener("input", updateTotal));

  updateTotal();
}

function readCountryRevenues() {
  const map = {};
  document.querySelectorAll("#countryRevenueList input[data-country]").forEach((input) => {
    const value = Number(input.value);
    if (Number.isFinite(value)) {
      map[input.dataset.country] = value;
    }
  });
  return map;
}

function handleBackOfficeSubmit(e) {
  e.preventDefault();
  const themeKey = document.getElementById("themeSelect").value;
  const selectedCountries = getSelectedCountries();
  const theme = state.themes[themeKey];

  if (!selectedCountries.length) {
    alert("Merci de sélectionner au moins un pays");
    return;
  }

  if (themeKey === "countryProfile") {
    const entityName = document.getElementById("field-entityName").value.trim();
    const entityType = document.getElementById("field-entityType")?.value || "subsidiary";
    const shareholding =
      document.getElementById("field-shareholding")?.value.trim() || "100% LFB";
    const generalManager = document.getElementById("field-generalManager")?.value.trim() || "";
    const complianceContact =
      document.getElementById("field-complianceContact")?.value.trim() || "";
    const contacts = document.getElementById("field-contacts")?.value.trim() || "";
    const employees = Number(document.getElementById("field-employees")?.value || 0);
    const activities =
      entityType === "subsidiary" ? getCheckedValues("activityGroup") : ["Commercialisation"];
    const priorities = getCheckedValues("priorityChoices");
    const medicines =
      entityType === "subsidiary"
        ? getCheckedValues("subsidiaryMedicines")
        : getCheckedValues("distributorMedicines");
    const isCommercial = entityType === "subsidiary" && isCommercializationSelected();
    const revenueCurrency =
      (isCommercial
        ? document.getElementById("field-revenueCurrency")
        : document.getElementById("field-distributorCurrency"))?.value.trim() || "M€";
    const countryRevenueMap = isCommercial ? readCountryRevenues() : {};
    const globalRevenueRaw = isCommercial
      ? Number(document.getElementById("field-globalRevenue")?.value)
      : Number(document.getElementById("field-distributorRevenue")?.value);
    const perCountryTotal = Object.values(countryRevenueMap).reduce(
      (sum, value) => sum + Number(value || 0),
      0
    );
    const globalRevenue = Number.isFinite(globalRevenueRaw)
      ? globalRevenueRaw
      : perCountryTotal || undefined;

    if (!entityName) {
      alert("Merci de renseigner le nom de l'entité");
      return;
    }

    if (entityType === "subsidiary" && !activities.length) {
      alert("Merci de sélectionner au moins une activité");
      return;
    }

    if (entityType === "subsidiary" && isCommercial) {
      if (!Number.isFinite(globalRevenueRaw) && !perCountryTotal) {
        alert("Merci de saisir un chiffre d'affaires (global ou par pays)");
        return;
      }
    }

    if (entityType === "distributor" && !Number.isFinite(globalRevenueRaw)) {
      alert("Merci de renseigner le chiffre d'affaires du distributeur");
      return;
    }

    selectedCountries.forEach((countryId) => {
      const fallbackRevenue =
        Number.isFinite(globalRevenueRaw) && selectedCountries.length
          ? globalRevenueRaw / selectedCountries.length
          : undefined;
      const countryRevenue = Number.isFinite(countryRevenueMap[countryId])
        ? Number(countryRevenueMap[countryId])
        : fallbackRevenue;
      theme.data[countryId] = {
        entityName,
        entityType,
        shareholding,
        generalManager,
        complianceContact,
        contacts,
        employees: entityType === "subsidiary" ? employees : undefined,
        activities,
        medicines,
        globalRevenue,
        countryRevenues: { ...countryRevenueMap },
        countryRevenue,
        revenueCurrency,
        country: COUNTRIES.find((c) => c.id === countryId)?.name || countryId,
        ethicsPriorities: priorities
      };
    });
  } else if (theme.mode === "numeric") {
    const val = Number(document.getElementById("field-numeric").value);
    if (!Number.isFinite(val)) return alert("Merci de saisir une valeur numérique valide");
    selectedCountries.forEach((countryId) => {
      theme.data[countryId] = val;
    });
  } else if (themeKey === "products") {
    const raw = document.getElementById("field-products").value;
    selectedCountries.forEach((countryId) => {
      theme.data[countryId] = { products: raw.split(",").map((p) => p.trim()).filter(Boolean) };
    });
  } else if (theme.mode === "category") {
    const categoryField = document.getElementById("field-category");
    if (!categoryField) {
      return alert("Merci d'ajouter au moins une liste pour continuer");
    }
    const category = categoryField.value;
    selectedCountries.forEach((countryId) => {
      theme.data[countryId] = category;
    });
  }

  state.themes = { ...state.themes, [themeKey]: { ...theme, data: { ...theme.data } } };
  persistThemes();
  selectTheme(themeKey);
}

function exportThemes() {
  const payload = {
    version: APP_VERSION,
    exportedAt: new Date().toISOString(),
    themes: state.themes,
    medicines: state.medicines,
    priorities: state.priorities
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "planisphere-data.json";
  a.click();
  URL.revokeObjectURL(url);
}

function setupBackOfficeTabs() {
  const tabs = Array.from(document.querySelectorAll(".back-office__nav [role='tab']"));
  const panels = Array.from(document.querySelectorAll(".back-office__panel"));
  if (!tabs.length || !panels.length) return;

  const activate = (panelId) => {
    tabs.forEach((tab) => {
      const isActive = tab.getAttribute("aria-controls") === panelId;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive.toString());
      tab.tabIndex = isActive ? "0" : "-1";
    });

    panels.forEach((panel) => {
      const isActive = panel.id === panelId;
      panel.classList.toggle("is-active", isActive);
      if (isActive) {
        panel.removeAttribute("hidden");
        panel.setAttribute("aria-hidden", "false");
      } else {
        panel.setAttribute("hidden", "true");
        panel.setAttribute("aria-hidden", "true");
      }
    });
  };

  const initialTab = tabs.find((tab) => tab.classList.contains("is-active")) || tabs[0];
  if (initialTab) {
    activate(initialTab.getAttribute("aria-controls"));
  }

  tabs.forEach((tab) => {
    const targetId = tab.getAttribute("aria-controls");
    tab.addEventListener("click", () => activate(targetId));
    tab.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate(targetId);
      }
    });
  });
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
    state.priorities = [...DEFAULT_PRIORITIES];
    persistThemes();
    persistMedicines();
    persistPriorities();
    buildMenu();
    buildBackOffice();
    buildMedicineCatalog();
    buildPriorityCatalog();
    selectTheme(state.currentTheme);
  });
  const exportButton = document.getElementById("exportData");
  exportButton.addEventListener("click", exportThemes);
  setupMedicineCatalog();
  setupPriorityCatalog();
  setupBackOfficeTabs();
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
