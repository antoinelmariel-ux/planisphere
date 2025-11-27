const APP_VERSION = "0.24.0";
const WORLD_SVG_PATH = "assets/world.svg";
const CORRUPTION_INDEX_PATH = "assets/ICP2024.json";

const ISO3_TO_ISO2 = {
  AFG: "AF",
  AGO: "AO",
  ALB: "AL",
  ARE: "AE",
  ARG: "AR",
  ARM: "AM",
  AUS: "AU",
  AUT: "AT",
  AZE: "AZ",
  BDI: "BI",
  BEL: "BE",
  BEN: "BJ",
  BFA: "BF",
  BGD: "BD",
  BGR: "BG",
  BHR: "BH",
  BHS: "BS",
  BIH: "BA",
  BLR: "BY",
  BOL: "BO",
  BRA: "BR",
  BRB: "BB",
  BTN: "BT",
  BWA: "BW",
  CAF: "CF",
  CAN: "CA",
  CHE: "CH",
  CHL: "CL",
  CHN: "CN",
  CIV: "CI",
  CMR: "CM",
  COG: "CG",
  COD: "CD",
  COL: "CO",
  COM: "KM",
  CPV: "CV",
  CRI: "CR",
  CUB: "CU",
  CYP: "CY",
  CZE: "CZ",
  DEU: "DE",
  DJI: "DJ",
  DMA: "DM",
  DNK: "DK",
  DOM: "DO",
  DZA: "DZ",
  ECU: "EC",
  EGY: "EG",
  ERI: "ER",
  ESP: "ES",
  EST: "EE",
  ETH: "ET",
  FJI: "FJ",
  FIN: "FI",
  FRA: "FR",
  GAB: "GA",
  GBR: "GB",
  GEO: "GE",
  GHA: "GH",
  GIN: "GN",
  GMB: "GM",
  GNB: "GW",
  GNQ: "GQ",
  GRC: "GR",
  GRD: "GD",
  GTM: "GT",
  GUY: "GY",
  HKG: "HK",
  HND: "HN",
  HRV: "HR",
  HTI: "HT",
  HUN: "HU",
  IDN: "ID",
  IND: "IN",
  IRL: "IE",
  IRN: "IR",
  IRQ: "IQ",
  ISL: "IS",
  ISR: "IL",
  ITA: "IT",
  JAM: "JM",
  JOR: "JO",
  JPN: "JP",
  KAZ: "KZ",
  KEN: "KE",
  KGZ: "KG",
  KHM: "KH",
  KOR: "KR",
  KSV: "XK",
  KWT: "KW",
  LAO: "LA",
  LBN: "LB",
  LBR: "LR",
  LBY: "LY",
  LCA: "LC",
  LKA: "LK",
  LSO: "LS",
  LTU: "LT",
  LUX: "LU",
  LVA: "LV",
  MAR: "MA",
  MDA: "MD",
  MDG: "MG",
  MDV: "MV",
  MEX: "MX",
  MKD: "MK",
  MLI: "ML",
  MLT: "MT",
  MMR: "MM",
  MNE: "ME",
  MNG: "MN",
  MOZ: "MZ",
  MRT: "MR",
  MUS: "MU",
  MWI: "MW",
  MYS: "MY",
  NAM: "NA",
  NER: "NE",
  NGA: "NG",
  NIC: "NI",
  NLD: "NL",
  NOR: "NO",
  NPL: "NP",
  NZL: "NZ",
  OMN: "OM",
  PAK: "PK",
  PAN: "PA",
  PER: "PE",
  PHL: "PH",
  PNG: "PG",
  POL: "PL",
  PRT: "PT",
  PRK: "KP",
  PRY: "PY",
  QAT: "QA",
  ROU: "RO",
  RUS: "RU",
  RWA: "RW",
  SAU: "SA",
  SEN: "SN",
  SGP: "SG",
  SLB: "SB",
  SLE: "SL",
  SLV: "SV",
  SOM: "SO",
  STP: "ST",
  SSD: "SS",
  SDN: "SD",
  SRB: "RS",
  SUR: "SR",
  SVK: "SK",
  SVN: "SI",
  SWE: "SE",
  SWZ: "SZ",
  SYC: "SC",
  SYR: "SY",
  TCD: "TD",
  TGO: "TG",
  THA: "TH",
  TJK: "TJ",
  TKM: "TM",
  TLS: "TL",
  TTO: "TT",
  TUN: "TN",
  TUR: "TR",
  TWN: "TW",
  TZA: "TZ",
  UGA: "UG",
  UKR: "UA",
  URY: "UY",
  USA: "US",
  UZB: "UZ",
  VCT: "VC",
  VEN: "VE",
  VNM: "VN",
  VUT: "VU",
  YEM: "YE",
  ZAF: "ZA",
  ZMB: "ZM",
  ZWE: "ZW"
};
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

const COUNTRY_SELECTOR_STORAGE_KEY = "countrySelectorState";

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
    label: "Entités",
    mode: "tooltip",
    color: "#0ea5e9",
    data: {}
  },
  embargo: {
    label: "Embargo",
    mode: "category",
    allowCustomLegend: true,
    legend: { "Liste d'embargo A": "#ef4444" },
    data: {}
  },
  corruptionIndex: {
    label: "Indice de perception de la corruption",
    mode: "numeric",
    domain: [0, 100],
    palette: ["#dbeafe", "#3b82f6", "#1e3a8a"],
    data: {}
  },
  areaManager: {
    label: "Area Manager",
    mode: "category",
    allowCustomLegend: true,
    legend: {
      "Area Manager 1": "#0ea5e9",
      "Area Manager 2": "#6366f1",
      "Area Manager 3": "#22c55e"
    },
    data: {}
  },
  prospecting: {
    label: "En prospection",
    mode: "category",
    legend: { "En prospection": "#f97316" },
    data: {}
  }
};

const DEFAULT_THEME_KEYS = new Set(Object.keys(DEFAULT_THEMES));

const DEFAULT_TOOLTIP_FIELDS = [
  {
    id: "title",
    label: "Titre",
    type: "text",
    placeholder: "Titre affiché",
    defaultValue: ""
  },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Texte présenté dans l'infobulle",
    defaultValue: ""
  }
];

const initialThemes = loadThemes();
const initialThemeKey = Object.keys(initialThemes)[0] || null;

const VIEWBOX_FALLBACK = "0 0 2000 857";
const EUROPE_VIEWBOX = "910.643 125 241.714 280";

const state = {
  currentTheme: initialThemeKey,
  themes: initialThemes,
  medicines: loadMedicines(),
  priorities: loadPriorities(),
  countrySelector: loadCountrySelectorState(),
  selectedEntityId: null,
  map: null,
  countryLayers: {},
  defaultViewBox: VIEWBOX_FALLBACK,
  isSaving: false,
  currentTooltipDetail: null
};

let toastTimeout;
let activeModalContent = null;

function restoreModalSubmit() {
  const submitButton = document.getElementById("modalSubmit");
  if (!submitButton) return;
  const clone = submitButton.cloneNode(true);
  const defaultLabel = submitButton.dataset.defaultLabel || submitButton.textContent || "Valider";
  clone.textContent = defaultLabel;
  clone.type = "submit";
  clone.dataset.defaultLabel = defaultLabel;
  submitButton.replaceWith(clone);
}

function updateModalBodyState() {
  const hasOpenModal = document.querySelector(".modal.is-open");
  document.body.classList.toggle("has-modal", !!hasOpenModal);
}

const CATALOG_CONFIG = {
  medicine: {
    stateKey: "medicines",
    listId: "medicineList",
    statusId: "medicineStatus",
    label: "médicament",
    persist: persistMedicines,
    refresh: () => {
      buildMedicineCatalog();
      buildMedicineChoices();
    }
  },
  priority: {
    stateKey: "priorities",
    listId: "priorityList",
    statusId: "priorityStatus",
    label: "priorité",
    persist: persistPriorities,
    refresh: () => {
      buildPriorityCatalog();
      buildPriorityChoices();
    }
  }
};

function slugifyLabel(label) {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function ensureFieldId(label, fallback, existing = []) {
  const base = slugifyLabel(label) || fallback;
  let candidate = base;
  let counter = 1;
  while (existing.includes(candidate)) {
    counter += 1;
    candidate = `${base}-${counter}`;
  }
  return candidate;
}

function normalizeTooltipFields(theme) {
  const fields = Array.isArray(theme?.fields) ? theme.fields : [];
  if (!fields.length) return [...DEFAULT_TOOLTIP_FIELDS];
  const sanitized = [];
  fields.forEach((field, index) => {
    if (!field) return;
    const existingIds = sanitized.map((item) => item.id).filter(Boolean);
    const id =
      field.id || ensureFieldId(field.label || `field-${index + 1}`, `field-${index + 1}`, existingIds);
    sanitized.push({
      id,
      label: field.label || `Champ ${index + 1}`,
      type: field.type || "text",
      placeholder: field.placeholder || "",
      defaultValue: field.defaultValue || ""
    });
  });
  return sanitized.length ? sanitized : [...DEFAULT_TOOLTIP_FIELDS];
}

function getTooltipFields(theme) {
  return normalizeTooltipFields(theme);
}

function generateThemeKey(label) {
  const base = slugifyLabel(label) || "thematique";
  let candidate = base;
  let index = 2;
  while (state.themes[candidate]) {
    candidate = `${base}-${index}`;
    index += 1;
  }
  return candidate;
}

function isCustomTheme(themeKey) {
  return !DEFAULT_THEME_KEYS.has(themeKey);
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.className = "toast";
  toast.classList.add(`toast--${type}`, "is-visible");
  toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 4000);
}

function setSavingState(isSaving) {
  state.isSaving = isSaving;
  const saveButtons = document.querySelectorAll("[data-save-control]");
  saveButtons.forEach((button) => {
    button.disabled = isSaving;
    button.classList.toggle("is-loading", isSaving);
  });
}

function updateCategoryColorPreview(value) {
  const preview = document.getElementById("field-categoryColorValue");
  if (!preview || !value) return;
  const formatted = value.toUpperCase();
  preview.textContent = formatted;
  preview.style.setProperty("--preview-color", value);
}

function setCategoryColorValue(value) {
  const colorInput = document.getElementById("field-categoryColor");
  if (colorInput && value) {
    colorInput.value = value;
  }
  updateCategoryColorPreview(value || colorInput?.value);
}

function setupCategoryColorPreview() {
  const colorInput = document.getElementById("field-categoryColor");
  if (!colorInput) return;
  const sync = () => updateCategoryColorPreview(colorInput.value);
  colorInput.addEventListener("input", sync);
  sync();
}

function handleSaveError(message) {
  showToast(message, "error");
  setSavingState(false);
}

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

function applyThemeDefaults(themes) {
  const merged = {};
  const source = themes || {};

  Object.entries(DEFAULT_THEMES).forEach(([key, defaults]) => {
    const stored = source[key] || {};
    merged[key] = {
      ...defaults,
      ...stored,
      legend: { ...(defaults.legend || {}), ...(stored.legend || {}) },
      data: { ...(stored.data || {}) }
    };
  });

  Object.entries(source).forEach(([key, theme]) => {
    if (merged[key]) return;
    merged[key] = theme;
  });

  return merged;
}

function loadThemes() {
  try {
    const cached = localStorage.getItem("complianceThemes");
    if (cached) {
      const parsed = JSON.parse(cached);
      return applyThemeDefaults(normalizeThemeCountries(parsed));
    }
  } catch (error) {
    console.warn("Impossible de charger les thématiques", error);
  }
  return applyThemeDefaults(normalizeThemeCountries(DEFAULT_THEMES));
}

function persistThemes() {
  try {
    localStorage.setItem("complianceThemes", JSON.stringify(state.themes));
  } catch (error) {
    console.warn("Impossible de sauvegarder", error);
  }
}

function buildCorruptionIndexMap(entries) {
  const values = {};
  entries.forEach((entry) => {
    const iso3 = entry.ISO3;
    const iso2 = ISO3_TO_ISO2[iso3];
    const score = Number(entry["CPI 2024 score"]);
    if (!iso2) {
      console.warn(`Code ISO3 inconnu : ${iso3}`);
      return;
    }
    if (!Number.isFinite(score)) return;
    values[iso2] = score;
  });
  return values;
}

async function refreshCorruptionIndexData() {
  const corruptionTheme = state.themes?.corruptionIndex;
  if (!corruptionTheme) return;
  try {
    const response = await fetch(CORRUPTION_INDEX_PATH);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const entries = await response.json();
    const corruptionIndex = buildCorruptionIndexMap(entries);
    if (!Object.keys(corruptionIndex).length) return;
    corruptionTheme.data = corruptionIndex;
    persistThemes();
    refreshColors();
    buildLegend();
    if (state.currentTheme === "corruptionIndex") {
      buildCorruptionTable();
    }
  } catch (error) {
    console.error("Impossible de mettre à jour l'indice de corruption", error);
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

function getDefaultCountrySelectorState() {
  const continentFilters = {};
  CONTINENTS.forEach((continent) => {
    continentFilters[continent.id] = true;
  });
  return {
    search: "",
    continentFilters,
    selectedCountries: []
  };
}

function loadCountrySelectorState() {
  const fallback = getDefaultCountrySelectorState();
  try {
    const cached = localStorage.getItem(COUNTRY_SELECTOR_STORAGE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      return {
        ...fallback,
        ...parsed,
        continentFilters: { ...fallback.continentFilters, ...(parsed.continentFilters || {}) },
        selectedCountries: Array.isArray(parsed.selectedCountries)
          ? parsed.selectedCountries
          : fallback.selectedCountries
      };
    }
  } catch (error) {
    console.warn("Impossible de charger l'état du sélecteur de pays", error);
  }
  return fallback;
}

function persistCountrySelectorState() {
  try {
    localStorage.setItem(
      COUNTRY_SELECTOR_STORAGE_KEY,
      JSON.stringify(state.countrySelector)
    );
  } catch (error) {
    console.warn("Impossible de sauvegarder le sélecteur de pays", error);
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

function getCatalogConfig(catalogKey) {
  return CATALOG_CONFIG[catalogKey] || {};
}

function getCatalogEntries(catalogKey) {
  const config = getCatalogConfig(catalogKey);
  const entries = state[config.stateKey];
  return Array.isArray(entries) ? entries : [];
}

function setCatalogEntries(catalogKey, entries) {
  const config = getCatalogConfig(catalogKey);
  if (!config.stateKey) return;
  state[config.stateKey] = entries;
}

function refreshCatalogViews(catalogKey) {
  const config = getCatalogConfig(catalogKey);
  if (typeof config.persist === "function") config.persist();
  if (typeof config.refresh === "function") config.refresh();
}

function setCatalogStatus(catalogKey, type, message) {
  const config = getCatalogConfig(catalogKey);
  const status = document.getElementById(config.statusId);
  if (!status) return;
  status.textContent = message;
  status.className = `catalog-status is-${type}`;
}

function validateCatalogEntry(label, catalogKey, currentLabel = "") {
  const value = label.trim();
  const config = getCatalogConfig(catalogKey);
  const entries = getCatalogEntries(catalogKey);
  if (!value) {
    setCatalogStatus(catalogKey, "error", "Le champ ne peut pas être vide.");
    return null;
  }

  const normalizedList = entries
    .filter((entry) => entry !== currentLabel)
    .map((entry) => entry.toLowerCase());
  const normalized = value.toLowerCase();
  if (normalizedList.includes(normalized)) {
    setCatalogStatus(
      catalogKey,
      "error",
      `Ce ${config.label || "élément"} existe déjà dans le catalogue.`
    );
    return null;
  }

  return value;
}

function withProcessing(button, callback) {
  if (button) {
    button.disabled = true;
    button.classList.add("is-loading");
  }
  try {
    callback();
  } finally {
    if (button) {
      button.disabled = false;
      button.classList.remove("is-loading");
    }
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

function sumEntityRevenue(entityName, data) {
  const source = data ?? state.themes?.countryProfile?.data ?? {};
  if (!entityName) return 0;
  return Object.entries(source).reduce((total, [countryId, profile]) => {
    if (getProfileEntityKey(profile) !== entityName) return total;
    const revenue = extractRevenueValue(profile, countryId);
    return total + revenue;
  }, 0);
}

function computeEntityProjection(entityName, countryRevenue, selectedCountries) {
  if (!entityName) return 0;
  const data = state.themes?.countryProfile?.data || {};
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
  const entries = Object.entries(state.themes);
  if (!entries.length) {
    const placeholder = document.createElement("li");
    placeholder.className = "helper";
    placeholder.textContent = "Aucune thématique disponible.";
    list.appendChild(placeholder);
    return;
  }
  entries.forEach(([key, theme]) => {
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
  if (!key || !state.themes[key]) {
    state.currentTheme = null;
    document.querySelectorAll(".theme-menu button").forEach((btn) => {
      btn.classList.remove("is-active");
    });
    setMenuOpen(false);
    refreshMap();
    buildLegend();
    hideTooltip();
    return;
  }
  state.currentTheme = key;
  syncBackOfficeTabSelection(key);
  document.querySelectorAll(".theme-menu button").forEach((btn) =>
    btn.classList.toggle("is-active", btn.id === `btn-${key}`)
  );
  renderThemeChips();
  const themeSelect = document.getElementById("themeSelect");
  if (themeSelect) {
    themeSelect.value = key;
  }
  if (document.getElementById("panel-config")?.classList.contains("is-active")) {
    renderDynamicFields();
  }
  setMenuOpen(false);
  refreshMap();
  buildLegend();
}

function hideTooltip() {
  document.getElementById("tooltip").classList.remove("visible");
  state.currentTooltipDetail = null;
}

function showTooltipForCountry(id, event) {
  const tooltip = document.getElementById("tooltip");
  const theme = state.themes[state.currentTheme];
  if (!theme) {
    hideTooltip();
    return;
  }
  const content = buildTooltipContent(id, theme);
  if (!content) {
    hideTooltip();
    return;
  }
  state.currentTooltipDetail = { ...content, countryId: id };

  const rect = document.getElementById("map").getBoundingClientRect();
  const point = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
  tooltip.innerHTML = content.preview;
  tooltip.style.left = `${point.x + 16}px`;
  tooltip.style.top = `${point.y + 16}px`;
  tooltip.classList.add("visible");
}

function handleCountryClick(id) {
  const theme = state.themes[state.currentTheme];
  if (!theme) return;
  const detail =
    state.currentTooltipDetail?.countryId === id
      ? state.currentTooltipDetail
      : buildTooltipContent(id, theme);
  if (!detail) return;
  state.currentTooltipDetail = { ...detail, countryId: id };
  if (detail.hasOverflow) {
    openInfoModal(detail.title, detail.full);
  }
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
        shape.addEventListener("click", () => handleCountryClick(country.id));
      });
    });

    refreshColors();
  } catch (error) {
    console.error("Impossible de charger la carte SVG", error);
    showResourceNotice("Impossible de charger la carte World.svg.");
  }
}

function colorForCountry(id, theme) {
  if (!theme) return "#0d1f3a";
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
    const hasData = theme?.data?.[id] !== undefined;
    shapes.forEach((shape) => {
      shape.style.fill = fill;
      shape.style.opacity = theme ? (hasData ? 1 : 0.35) : 0.2;
      shape.style.stroke = "#cbd5e1";
      shape.style.strokeWidth = 0.5;
    });
  });
}

function buildLegend() {
  const container = document.getElementById("legend");
  const theme = state.themes[state.currentTheme];
  container.innerHTML = "";
  if (!theme) {
    const message = document.createElement("p");
    message.className = "helper";
    message.textContent = "Aucune thématique disponible.";
    container.appendChild(message);
    return;
  }
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

function buildCountryProfileContent(value, country) {
  const currency = getProfileCurrency(value);
  const entityLabel = value.entityName || country.name;
  const localRevenue = extractRevenueValue(value, country.id);
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

  const header = `<h4>${entityLabel}</h4>
    <p class="helper">${entityType} – ${shareholding}</p>`;
  const dataPoints = [
    { label: "CA pays", value: formatRevenue(localRevenue, currency) },
    { label: "CA global entité", value: formatRevenue(globalRevenue, currency) },
    { label: "Médicaments", value: medicines },
    { label: "Activités", value: activities },
    { label: "Salariés", value: employeeCount }
  ];
  const metaItems = [
    `General Manager : ${manager}`,
    `Contacts : ${contacts}`,
    `Priorités E&C : ${priorities}`
  ];

  const cardsHtml = dataPoints
    .map(
      (item) =>
        `<div class="info-card"><div class="eyebrow">${item.label}</div><strong>${item.value}</strong></div>`
    )
    .join("");
  const metaHtml = metaItems.map((text) => `<p class="helper">${text}</p>`).join("");
  const fullContent = `${header}<div class="info-grid">${cardsHtml}</div>${metaHtml}`;

  const hasOverflow = dataPoints.length + metaItems.length > 3;
  const primaryCard = dataPoints[0];
  const previewContent = hasOverflow
    ? `${header}<div class="info-grid"><div class="info-card"><div class="eyebrow">${primaryCard.label}</div><strong>${primaryCard.value}</strong></div></div><p class="helper tooltip__cta">Cliquez pour en savoir plus</p>`
    : fullContent;

  return {
    title: entityLabel,
    preview: previewContent,
    full: fullContent,
    hasOverflow
  };
}

function buildTooltipContent(id, theme) {
  if (!theme) return null;
  const country = COUNTRIES.find((c) => c.id === id);
  const value = theme.data?.[id];
  if (!value || !country) return null;
  if (theme === state.themes.countryProfile) {
    return buildCountryProfileContent(value, country);
  }
  if (theme === state.themes.products) {
    const preview = `<h4>${country.name}</h4><p>Produits : ${value.products.join(", ")}</p>`;
    return { preview, full: preview, title: country.name, hasOverflow: false };
  }
  if (theme === state.themes.corruptionIndex) {
    const preview = `<h4>${country.name}</h4><p>Indice de corruption : <strong>${value}</strong></p>`;
    return { preview, full: preview, title: country.name, hasOverflow: false };
  }
  if (theme === state.themes.revenueShare) {
    const preview = `<h4>${country.name}</h4><p>Part du chiffre d'affaires : <strong>${value}%</strong></p>`;
    return { preview, full: preview, title: country.name, hasOverflow: false };
  }
  if (theme === state.themes.subsidiaryType) {
    const preview = `<h4>${country.name}</h4><p>Type de filiale : <strong>${value}</strong></p>`;
    return { preview, full: preview, title: country.name, hasOverflow: false };
  }
  if (theme === state.themes.areaManager) {
    const preview = `<h4>${country.name}</h4><p>Zone : <strong>${value}</strong></p>`;
    return { preview, full: preview, title: country.name, hasOverflow: false };
  }
  if (theme.mode === "tooltip") {
    const payload = typeof value === "string" ? { description: value } : value;
    const fields = getTooltipFields(theme);
    const data = payload?.fields || {};
    const values = fields.map((field) => ({
      field,
      value:
        data[field.id] ??
        payload?.[field.id] ??
        (field.id === "title" ? payload?.title : field.id === "description" ? payload?.description : "")
    }));
    const title =
      values.find((item) => item.field.id === "title")?.value ||
      values[0]?.value ||
      payload.title ||
      country.name;
    const description =
      values.find((item) => item.field.id === "description")?.value ||
      payload.description ||
      payload.text ||
      "Informations disponibles";
    const previewFields = values.filter((item) => (item.value || "").toString().trim()).slice(0, 2);
    const previewContent = previewFields
      .map((item) => `<p>${item.value}</p>`)
      .join("") || `<p>${description}</p>`;
    const details = values
      .filter((item) => (item.value || "").toString().trim())
      .map(
        (item) =>
          `<p class="helper"><strong>${item.field.label} :</strong> ${item.value || "—"}</p>`
      )
      .join("") || `<p class="helper">Aucune information fournie.</p>`;
    const full = `<h4>${title}</h4>${details}`;
    const preview = `<h4>${title}</h4>${previewContent}`;
    const hasOverflow = previewFields.length < values.length;
    return { preview, full, title, hasOverflow };
  }
  if (theme.mode === "category") {
    const preview = `<h4>${country.name}</h4><p>Liste : <strong>${value}</strong></p>`;
    return { preview, full: preview, title: country.name, hasOverflow: false };
  }
  if (theme.mode === "numeric") {
    const preview = `<h4>${country.name}</h4><p>Valeur : <strong>${value}</strong></p>`;
    return { preview, full: preview, title: country.name, hasOverflow: false };
  }
  return null;
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

function syncBackOfficeTabSelection(themeKey) {
  const tabs = Array.from(
    document.querySelectorAll(".back-office__nav [role='tab'][data-theme]")
  );
  const targetTab = tabs.find((tab) => tab.dataset.theme === themeKey);
  if (!targetTab) return;

  const panelId = targetTab.getAttribute("aria-controls");

  tabs.forEach((tab) => {
    const isActive = tab === targetTab;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", isActive.toString());
    tab.tabIndex = isActive ? "0" : "-1";
  });

  document.querySelectorAll(".back-office__panel").forEach((panel) => {
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
}

function handleThemeSelectChange(event) {
  const themeKey = event.target.value;
  state.currentTheme = themeKey;
  selectTheme(themeKey);
  renderDynamicFields();
}

function setupThemeSelectListener() {
  const themeSelect = document.getElementById("themeSelect");
  if (!themeSelect) return;
  themeSelect.removeEventListener("change", handleThemeSelectChange);
  themeSelect.addEventListener("change", handleThemeSelectChange);
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

function buildBackOfficeNav() {
  const nav = document.getElementById("backOfficeNav");
  if (!nav) return;

  const activePanel = document.querySelector(".back-office__panel.is-active")?.id;

  const createTab = (config) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab${config.isActive ? " is-active" : ""}`;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", config.isActive ? "true" : "false");
    button.setAttribute("aria-controls", config.panelId);
    button.tabIndex = config.isActive ? "0" : "-1";
    if (config.themeKey) {
      button.dataset.theme = config.themeKey;
    }
    button.textContent = config.label;
    return button;
  };

  nav.innerHTML = "";
  const themeTab = createTab({
    label: "Thématiques",
    panelId: "panel-themes",
    isActive: activePanel === "panel-themes"
  });
  nav.appendChild(themeTab);

  const entries = Object.entries(state.themes);
  entries.forEach(([key, theme], index) => {
    const isActive = activePanel
      ? activePanel === "panel-config" && state.currentTheme === key
      : state.currentTheme === key || (!state.currentTheme && index === 0);
    const tab = createTab({
      label: theme.label,
      panelId: "panel-config",
      themeKey: key,
      isActive
    });
    nav.appendChild(tab);
  });

  const catalogsTab = createTab({
    label: "Catalogues transverses",
    panelId: "panel-catalogs",
    isActive: activePanel === "panel-catalogs"
  });
  nav.appendChild(catalogsTab);
}

function buildBackOffice() {
  const themeSelect = document.getElementById("themeSelect");
  if (!themeSelect) return;
  themeSelect.removeEventListener("change", handleThemeSelectChange);
  populateThemeSelect();
  renderThemeChips();
  renderDynamicFields();
  setupThemeSelectListener();
  buildBackOfficeNav();
  setupBackOfficeTabs();

  const createThemeButton = document.getElementById("createTheme");
  if (createThemeButton) {
    createThemeButton.onclick = openThemeCreationModal;
  }
}

function createCatalogRow(label, catalogKey) {
  const row = document.createElement("div");
  row.className = "catalog-row";

  const text = document.createElement("span");
  text.className = "catalog-row__label";
  text.textContent = label;

  const actions = document.createElement("div");
  actions.className = "catalog-row__actions";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "ghost catalog-row__action";
  editButton.textContent = "Éditer";
  editButton.addEventListener("click", () => editCatalogEntry(catalogKey, label));

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "ghost catalog-row__action catalog-row__action--delete";
  removeButton.textContent = "Supprimer";
  removeButton.addEventListener("click", () => removeCatalogEntry(catalogKey, label));

  actions.appendChild(editButton);
  actions.appendChild(removeButton);

  row.appendChild(text);
  row.appendChild(actions);

  return row;
}

function buildCatalogList(catalogKey) {
  const config = getCatalogConfig(catalogKey);
  const list = document.getElementById(config.listId);
  if (!list) return;
  const entries = getCatalogEntries(catalogKey);
  list.innerHTML = "";

  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "helper";
    empty.textContent = "Aucun élément pour le moment.";
    list.appendChild(empty);
    return;
  }

  entries.forEach((entry) => {
    list.appendChild(createCatalogRow(entry, catalogKey));
  });
}

function addCatalogEntry(catalogKey, value) {
  const config = getCatalogConfig(catalogKey);
  const label = validateCatalogEntry(value, catalogKey);
  if (!label) return;

  const entries = [...getCatalogEntries(catalogKey), label].sort((a, b) =>
    a.localeCompare(b)
  );
  setCatalogEntries(catalogKey, entries);
  refreshCatalogViews(catalogKey);
  setCatalogStatus(
    catalogKey,
    "success",
    `${config.label || "Entrée"} ajouté(e). Sauvegarde locale mise à jour.`
  );
}

function editCatalogEntry(catalogKey, currentLabel) {
  const config = getCatalogConfig(catalogKey);
  const nextValue = prompt(
    `Modifier le ${config.label || "élément"} :`,
    currentLabel
  );
  if (nextValue === null) return;

  const label = validateCatalogEntry(nextValue, catalogKey, currentLabel);
  if (!label) return;

  if (label === currentLabel) {
    setCatalogStatus(catalogKey, "info", "Aucun changement détecté.");
    return;
  }

  if (
    !confirm(
      `Confirmez-vous la modification de "${currentLabel}" en "${label}" ?`
    )
  ) {
    return;
  }

  const entries = getCatalogEntries(catalogKey)
    .map((entry) => (entry === currentLabel ? label : entry))
    .sort((a, b) => a.localeCompare(b));

  setCatalogEntries(catalogKey, entries);
  refreshCatalogViews(catalogKey);
  setCatalogStatus(
    catalogKey,
    "success",
    `${config.label || "Entrée"} mise à jour. Sauvegarde locale mise à jour.`
  );
}

function removeCatalogEntry(catalogKey, name) {
  const config = getCatalogConfig(catalogKey);
  if (!confirm(`Supprimer "${name}" du catalogue ?`)) return;

  const entries = getCatalogEntries(catalogKey).filter((entry) => entry !== name);
  setCatalogEntries(catalogKey, entries);
  refreshCatalogViews(catalogKey);
  setCatalogStatus(
    catalogKey,
    "success",
    `${config.label || "Entrée"} supprimé(e). Sauvegarde locale mise à jour.`
  );
}

function buildMedicineCatalog() {
  buildCatalogList("medicine");
}

function setupMedicineCatalog() {
  const input = document.getElementById("medicineInput");
  const addButton = document.getElementById("addMedicine");
  if (!input || !addButton) return;

  const submit = () =>
    withProcessing(addButton, () => {
      addCatalogEntry("medicine", input.value);
      input.value = "";
      input.focus();
    });

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
  buildCatalogList("priority");
}

function setupPriorityCatalog() {
  const input = document.getElementById("priorityInput");
  const addButton = document.getElementById("addPriority");
  if (!input || !addButton) return;

  const submit = () =>
    withProcessing(addButton, () => {
      addCatalogEntry("priority", input.value);
      input.value = "";
      input.focus();
    });

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

function removeLegendEntry(themeKey, label) {
  const theme = state.themes[themeKey];
  if (!theme || !label) return;
  const legend = { ...(theme.legend || {}) };
  const data = { ...(theme.data || {}) };

  if (!legend[label]) return;

  delete legend[label];
  Object.entries(data).forEach(([countryId, value]) => {
    if (value === label) {
      delete data[countryId];
    }
  });

  const updatedTheme = { ...theme, legend, data };
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
  const helperText =
    themeKey === "embargo"
      ? "Ajoutez des listes d'embargo et ajustez leur couleur."
      : "Renommez, réorganisez et supprimez facilement les zones colorées.";
  header.innerHTML = `
    <div>
      <div class="eyebrow">Légende de la carte</div>
      <strong>Organisation des catégories</strong>
      <p class="helper">${helperText}</p>
    </div>
    <div class="legend-editor__badge">${Object.keys(theme.legend || {}).length} catégorie(s)</div>
  `;
  container.appendChild(header);

  const guidance = document.createElement("ul");
  guidance.className = "legend-editor__hints";
  guidance.innerHTML = `
    <li>Nom et couleur doivent rester uniques pour garder la carte lisible.</li>
    <li>Supprimer une catégorie efface aussi son attribution sur les pays.</li>
    <li>Les modifications sont appliquées immédiatement et visibles sur la carte.</li>
  `;
  container.appendChild(guidance);

  const listContainer = document.createElement("div");
  listContainer.className = "legend-editor__list";

  const renderRows = () => {
    listContainer.innerHTML = "";
    const currentTheme = state.themes[themeKey] || theme;
    const entries = Object.entries(currentTheme.legend || {});

    if (!entries.length) {
      const empty = document.createElement("p");
      empty.className = "legend-editor__empty";
      empty.textContent = "Aucune catégorie définie pour le moment.";
      listContainer.appendChild(empty);
      return;
    }

    entries.forEach(([label, color]) => {
      const row = document.createElement("div");
      row.className = "legend-row legend-row--editable";
      row.dataset.initialLabel = label;

      const nameField = document.createElement("label");
      nameField.className = "legend-row__field";
      nameField.textContent = "Nom";
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.value = label;
      nameInput.placeholder = "Ex. Zone prioritaire";
      nameField.appendChild(nameInput);

      const colorField = document.createElement("label");
      colorField.className = "legend-row__field";
      colorField.textContent = "Couleur";
      const colorInput = document.createElement("input");
      colorInput.type = "color";
      colorInput.value = color;
      colorField.appendChild(colorInput);

      const actions = document.createElement("div");
      actions.className = "legend-row__actions";

      const saveButton = document.createElement("button");
      saveButton.type = "button";
      saveButton.className = "primary";
      saveButton.textContent = "Mettre à jour";
      saveButton.addEventListener("click", () => {
        const previousLabel = row.dataset.initialLabel;
        const nextLabel = nameInput.value.trim();
        if (!nextLabel) {
          alert("Merci d'indiquer un nom de catégorie");
          nameInput.focus();
          return;
        }
        updateLegendEntry(themeKey, previousLabel, nextLabel, colorInput.value);
        row.dataset.initialLabel = nextLabel;
        renderRows();
      });

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "ghost danger";
      deleteButton.textContent = "Supprimer";
      deleteButton.addEventListener("click", () => {
        const confirmed = confirm(
          `Supprimer "${row.dataset.initialLabel}" et retirer son attribution sur les pays ?`
        );
        if (!confirmed) return;
        removeLegendEntry(themeKey, row.dataset.initialLabel);
        renderRows();
      });

      actions.appendChild(saveButton);
      actions.appendChild(deleteButton);

      row.appendChild(nameField);
      row.appendChild(colorField);
      row.appendChild(actions);
      listContainer.appendChild(row);
    });
  };

  renderRows();
  container.appendChild(listContainer);

  const form = document.createElement("div");
  form.className = "legend-editor__form";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Nom de la nouvelle catégorie";

  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.value = getNextLegendColor(theme);

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "ghost";
  addButton.textContent =
    themeKey === "embargo" ? "Créer une liste d'embargo" : "Ajouter à la légende";
  addButton.addEventListener("click", () => {
    const label = nameInput.value.trim();
    if (!label) {
      alert("Merci d'indiquer un nom de catégorie");
      nameInput.focus();
      return;
    }
    addLegendEntry(themeKey, label, colorInput.value);
    nameInput.value = "";
    colorInput.value = getNextLegendColor(state.themes[themeKey]);
    renderRows();
  });

  form.appendChild(nameInput);
  form.appendChild(colorInput);
  form.appendChild(addButton);
  container.appendChild(form);

  return container;
}

function setFieldValue(id, value) {
  const input = document.getElementById(id);
  if (!input) return;
  input.value = value ?? "";
}

function applyTooltipValues(fields, payload = {}) {
  fields.forEach((field) => {
    const input = document.getElementById(`field-${field.id}`);
    if (!input) return;
    const values = payload.fields || {};
    const fallback = field.defaultValue || "";
    const storedValue =
      values[field.id] ??
      payload[field.id] ??
      (field.id === "title" ? payload.title : undefined) ??
      (field.id === "description" ? payload.description : undefined) ??
      fallback;
    input.value = storedValue;
  });
}

function setCheckedValues(containerId, values) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const allowed = new Set(values || []);
  container.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = allowed.has(input.value);
  });
}

function setCountrySelection(countryIds = []) {
  updateCountryTags(countryIds);
  renderCountryRevenueInputs(countryIds);
}

function resetCountryProfileForm() {
  setFieldValue("field-entityName", "");
  setFieldValue("field-entityType", "subsidiary");
  setFieldValue("field-shareholding", "100% LFB");
  setFieldValue("field-generalManager", "");
  setFieldValue("field-complianceContact", "");
  setFieldValue("field-contacts", "");
  setFieldValue("field-employees", "");
  setFieldValue("field-globalRevenue", "");
  setFieldValue("field-revenueCurrency", "M€");
  setFieldValue("field-distributorRevenue", "");
  setFieldValue("field-distributorCurrency", "M€");
  setCheckedValues("activityGroup", []);
  setCheckedValues("priorityChoices", []);
  setCheckedValues("subsidiaryMedicines", []);
  setCheckedValues("distributorMedicines", []);
  setCountrySelection([]);
  toggleEntityTypeFields();
  setupEntityRevenuePreview();
}

function closeModal() {
  const modal = document.getElementById("modalOverlay");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  updateModalBodyState();
  restoreModalSubmit();
  if (activeModalContent) {
    activeModalContent.classList.remove("is-visible");
  }
  activeModalContent = null;
}

function openModal(content, title = "Configuration") {
  const modal = document.getElementById("modalOverlay");
  const modalBody = document.getElementById("modalBody");
  const modalTitle = document.getElementById("modalTitle");
  if (!modal || !modalBody) return;
  modalBody.innerHTML = "";
  if (content) {
    modalBody.appendChild(content);
    activeModalContent = content;
  }
  if (modalTitle) {
    modalTitle.textContent = title || content?.dataset.modalTitle || "Configuration";
  }
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  updateModalBodyState();
}

function bindModalSubmit(label, handler) {
  const submitButton = document.getElementById("modalSubmit");
  if (!submitButton) return;
  submitButton.dataset.defaultLabel = submitButton.dataset.defaultLabel || submitButton.textContent;
  const clone = submitButton.cloneNode(true);
  clone.textContent = label || submitButton.textContent;
  clone.type = "button";
  clone.addEventListener("click", (event) => {
    event.preventDefault();
    handler?.();
  });
  submitButton.replaceWith(clone);
}

function attachCreationPanel(panel, title) {
  if (!panel) return;
  panel.dataset.modalTitle = title || panel.dataset.modalTitle || "Configuration";
  const modalBody = document.getElementById("modalBody");
  if (modalBody && panel.parentElement !== modalBody) {
    modalBody.innerHTML = "";
    modalBody.appendChild(panel);
  }
}

function setCreationPanelVisibility(panel, isVisible) {
  if (!panel) return;
  panel.classList.toggle("is-visible", !!isVisible);
  if (isVisible) {
    openModal(panel, panel.dataset.modalTitle);
  } else if (activeModalContent === panel) {
    closeModal();
  }
}

function closeInfoModal() {
  const modal = document.getElementById("infoModal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  updateModalBodyState();
}

function openInfoModal(title, content) {
  const modal = document.getElementById("infoModal");
  const modalBody = document.getElementById("infoModalBody");
  const modalTitle = document.getElementById("infoModalTitle");
  if (!modal || !modalBody) return;
  modalBody.innerHTML = content || "";
  if (modalTitle) {
    modalTitle.textContent = title || "Détails";
  }
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  updateModalBodyState();
}

function setupInfoModal() {
  const modal = document.getElementById("infoModal");
  const closeButton = document.getElementById("closeInfoModal");
  if (closeButton) {
    closeButton.addEventListener("click", closeInfoModal);
  }
  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.classList.contains("modal__backdrop")) {
        closeInfoModal();
      }
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("is-open")) {
      closeInfoModal();
    }
  });
}

function showCreationPanel() {
  const panel = document.getElementById("creationPanel");
  setCreationPanelVisibility(panel, true);
}

function createSaveActions(label = "Enregistrer") {
  const container = document.createElement("div");
  container.className = "save-actions";

  const button = document.createElement("button");
  button.type = "submit";
  button.className = "primary";
  button.dataset.saveControl = "true";
  button.textContent = label;

  container.appendChild(button);
  return container;
}

function buildCreationButton(label, onClick) {
  const container = document.createElement("div");
  container.className = "theme-actions";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "primary";
  button.textContent = label;
  button.addEventListener("click", () => {
    onClick?.();
    showCreationPanel();
  });

  container.appendChild(button);
  return container;
}

function removeTheme(themeKey) {
  if (!isCustomTheme(themeKey)) {
    alert("Les thématiques par défaut ne peuvent pas être supprimées.");
    return;
  }
  if (!confirm("Supprimer cette thématique et ses données ?")) return;
  const nextThemes = { ...state.themes };
  delete nextThemes[themeKey];
  state.themes = nextThemes;
  persistThemes();
  const nextKey = Object.keys(state.themes)[0] || null;
  selectTheme(nextKey);
  buildMenu();
  buildBackOffice();
  showToast("Thématique supprimée", "success");
}

function renderThemeChips() {
  const container = document.getElementById("themeChips");
  if (!container) return;
  container.innerHTML = "";

  const entries = Object.entries(state.themes);
  if (!entries.length) {
    const helper = document.createElement("p");
    helper.className = "helper";
    helper.textContent = "Aucune thématique pour le moment. Créez-en une pour commencer.";
    container.appendChild(helper);
    return;
  }

  entries.forEach(([key, theme]) => {
    const chip = document.createElement("div");
    chip.className = "theme-chip";
    if (state.currentTheme === key) {
      chip.classList.add("is-active");
    }

    const labelButton = document.createElement("button");
    labelButton.type = "button";
    labelButton.textContent = theme.label;
    labelButton.title = "Afficher cette thématique";
    labelButton.addEventListener("click", () => selectTheme(key));

    const typeBadge = document.createElement("span");
    typeBadge.className = "theme-chip__type";
    const typeLabel =
      theme.mode === "category"
        ? "Zones"
        : theme.mode === "numeric"
          ? "Indice"
          : "Infobulle";
    typeBadge.textContent = typeLabel;

    chip.appendChild(labelButton);
    chip.appendChild(typeBadge);

    const actions = document.createElement("div");
    actions.className = "theme-chip__actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.title = "Modifier la thématique";
    editButton.textContent = "✎";
    editButton.addEventListener("click", () => openThemeEditModal(key));
    actions.appendChild(editButton);

    if (isCustomTheme(key)) {
      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.title = "Supprimer la thématique";
      deleteButton.textContent = "✕";
      deleteButton.addEventListener("click", () => removeTheme(key));
      actions.appendChild(deleteButton);
    }

    chip.appendChild(actions);

    container.appendChild(chip);
  });
}

function populateThemeSelect() {
  const themeSelect = document.getElementById("themeSelect");
  if (!themeSelect) return;
  themeSelect.innerHTML = "";

  const hasThemes = Object.keys(state.themes).length > 0;
  if (!hasThemes) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Aucune thématique disponible";
    themeSelect.appendChild(option);
    themeSelect.disabled = true;
    return;
  }

  themeSelect.disabled = false;
  Object.entries(state.themes).forEach(([key, theme]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = theme.label;
    themeSelect.appendChild(option);
  });

  state.currentTheme = state.currentTheme ?? Object.keys(state.themes)[0];
  themeSelect.value = state.currentTheme;
}

function buildLegendRows(container, onChange, initial = {}) {
  const row = document.createElement("div");
  row.className = "legend-row";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Nom de la zone";
  nameInput.value = initial.name || "";

  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.value =
    initial.color || getNextLegendColor({ legend: collectLegendValues(container) });

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Supprimer";
  removeButton.className = "ghost";
  removeButton.addEventListener("click", () => {
    row.remove();
    onChange?.();
  });

  [nameInput, colorInput].forEach((input) => input.addEventListener("input", () => onChange?.()));

  row.appendChild(nameInput);
  row.appendChild(colorInput);
  row.appendChild(removeButton);
  container.appendChild(row);
}

function collectLegendValues(container) {
  const legend = {};
  container
    .querySelectorAll(".legend-row")
    .forEach((row) => {
      const name = row.querySelector("input[type='text']")?.value.trim();
      const color = row.querySelector("input[type='color']")?.value;
      if (name && color) {
        legend[name] = color;
      }
    });
  return legend;
}

function createTooltipFieldConfigurator(initialFields = []) {
  let fields = normalizeTooltipFields({ fields: initialFields });
  const wrapper = document.createElement("div");
  wrapper.className = "tooltip-field-editor stack";

  const helper = document.createElement("p");
  helper.className = "helper";
  helper.textContent =
    "Définissez l'ordre et les libellés des champs proposés lors de la création d'une infobulle.";
  wrapper.appendChild(helper);

  const list = document.createElement("div");
  list.className = "tooltip-field-editor__list";
  wrapper.appendChild(list);

  const render = () => {
    list.innerHTML = "";
    if (!fields.length) {
      const empty = document.createElement("p");
      empty.className = "helper";
      empty.textContent = "Ajoutez au moins un champ pour compléter l'infobulle.";
      list.appendChild(empty);
      return;
    }

    fields.forEach((field, index) => {
      const row = document.createElement("div");
      row.className = "tooltip-field-editor__row";
      row.draggable = true;
      row.dataset.index = index;

      row.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", String(index));
        row.classList.add("is-dragging");
      });
      row.addEventListener("dragend", () => row.classList.remove("is-dragging"));
      row.addEventListener("dragover", (event) => {
        event.preventDefault();
        row.classList.add("is-drop-target");
      });
      row.addEventListener("dragleave", () => row.classList.remove("is-drop-target"));
      row.addEventListener("drop", (event) => {
        event.preventDefault();
        row.classList.remove("is-drop-target");
        const fromIndex = Number(event.dataTransfer.getData("text/plain"));
        const toIndex = Number(row.dataset.index);
        if (!Number.isInteger(fromIndex) || !Number.isInteger(toIndex)) return;
        const next = [...fields];
        const [moved] = next.splice(fromIndex, 1);
        next.splice(toIndex, 0, moved);
        fields = next;
        render();
      });

      const dragHandle = document.createElement("span");
      dragHandle.className = "drag-handle";
      dragHandle.textContent = "↕";

      const inputs = document.createElement("div");
      inputs.className = "tooltip-field-editor__inputs";

      const label = document.createElement("label");
      label.textContent = "Intitulé";
      const labelInput = document.createElement("input");
      labelInput.type = "text";
      labelInput.value = field.label || "";
      labelInput.addEventListener("input", (event) => {
        const existing = fields.map((item) => item.id);
        const current = fields[index] || field;
        const nextId = ensureFieldId(event.target.value || current.id, current.id, existing);
        fields[index] = { ...current, label: event.target.value, id: nextId };
      });
      label.appendChild(labelInput);

      const typeLabel = document.createElement("label");
      typeLabel.textContent = "Type";
      const typeSelect = document.createElement("select");
      [
        { value: "text", label: "Texte" },
        { value: "textarea", label: "Texte long" },
        { value: "number", label: "Nombre" }
      ].forEach((option) => {
        const opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.label;
        if (option.value === field.type) opt.selected = true;
        typeSelect.appendChild(opt);
      });
      typeSelect.addEventListener("change", (event) => {
        const current = fields[index] || field;
        fields[index] = { ...current, type: event.target.value };
      });
      typeLabel.appendChild(typeSelect);

      const placeholderLabel = document.createElement("label");
      placeholderLabel.textContent = "Placeholder";
      const placeholderInput = document.createElement("input");
      placeholderInput.type = "text";
      placeholderInput.value = field.placeholder || "";
      placeholderInput.addEventListener("input", (event) => {
        const current = fields[index] || field;
        fields[index] = { ...current, placeholder: event.target.value };
      });
      placeholderLabel.appendChild(placeholderInput);

      const defaultLabel = document.createElement("label");
      defaultLabel.textContent = "Valeur par défaut";
      const defaultInput = document.createElement("input");
      defaultInput.type = field.type === "number" ? "number" : "text";
      defaultInput.value = field.defaultValue || "";
      defaultInput.addEventListener("input", (event) => {
        const current = fields[index] || field;
        fields[index] = { ...current, defaultValue: event.target.value };
      });
      defaultLabel.appendChild(defaultInput);

      inputs.appendChild(label);
      inputs.appendChild(typeLabel);
      inputs.appendChild(placeholderLabel);
      inputs.appendChild(defaultLabel);

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "ghost danger";
      remove.textContent = "Supprimer";
      remove.addEventListener("click", () => {
        fields = fields.filter((_, i) => i !== index);
        render();
      });

      row.appendChild(dragHandle);
      row.appendChild(inputs);
      row.appendChild(remove);
      list.appendChild(row);
    });
  };

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "ghost";
  addButton.textContent = "Ajouter un champ";
  addButton.addEventListener("click", () => {
    const nextIndex = fields.length + 1;
    const id = ensureFieldId(`champ-${nextIndex}`, `champ-${nextIndex}`, fields.map((f) => f.id));
    fields = [
      ...fields,
      {
        id,
        label: `Nouveau champ ${nextIndex}`,
        type: "text",
        placeholder: "",
        defaultValue: ""
      }
    ];
    render();
  });

  wrapper.appendChild(addButton);
  render();

  return {
    element: wrapper,
    getFields: () => normalizeTooltipFields({ fields })
  };
}

function openThemeCreationModal() {
  const wrapper = document.createElement("div");
  wrapper.className = "stack";
  const labelField = document.createElement("label");
  labelField.innerHTML = "Nom de la thématique<input id=\"themeName\" type=\"text\" placeholder=\"Ex. Couverture produits\" />";

  const typeField = document.createElement("div");
  typeField.className = "stack";
  typeField.innerHTML = `
    <p class="eyebrow">Type</p>
    <label class="pill-toggle"><input type="radio" name="themeMode" value="tooltip" checked />Infobulle (texte)</label>
    <label class="pill-toggle"><input type="radio" name="themeMode" value="category" />Zones de couleur</label>
  `;

  const tooltipConfig = document.createElement("div");
  tooltipConfig.className = "stack";
  tooltipConfig.innerHTML = `
    <div class="inline-fields">
      <label>Couleur d'accent
        <input id="themeColor" type="color" value="#0ea5e9" />
      </label>
    </div>
  `;

  const fieldConfigurator = createTooltipFieldConfigurator();
  tooltipConfig.appendChild(fieldConfigurator.element);

  const legendConfig = document.createElement("div");
  legendConfig.className = "stack";
  legendConfig.innerHTML = `<p class="helper">Préparez les catégories visibles dans la légende : un nom clair et une couleur unique par zone.</p>`;
  const legendRows = document.createElement("div");
  legendRows.className = "legend-editor__list";
  legendConfig.appendChild(legendRows);

  const addLegendButton = document.createElement("button");
  addLegendButton.type = "button";
  addLegendButton.className = "ghost";
  addLegendButton.textContent = "Ajouter une zone";
  addLegendButton.addEventListener("click", () => buildLegendRows(legendRows));
  legendConfig.appendChild(addLegendButton);

  buildLegendRows(legendRows);

  const toggleConfigVisibility = () => {
    const selectedMode =
      document.querySelector('input[name="themeMode"]:checked')?.value || "tooltip";
    tooltipConfig.style.display = selectedMode === "tooltip" ? "block" : "none";
    legendConfig.style.display = selectedMode === "category" ? "block" : "none";
  };

  typeField.querySelectorAll("input[name='themeMode']").forEach((input) => {
    input.addEventListener("change", toggleConfigVisibility);
  });
  toggleConfigVisibility();

  wrapper.appendChild(labelField);
  wrapper.appendChild(typeField);
  wrapper.appendChild(tooltipConfig);
  wrapper.appendChild(legendConfig);

  bindModalSubmit("Valider la création", () => {
    const nameInput = document.getElementById("themeName");
    const themeLabel = nameInput?.value.trim();
    if (!themeLabel) {
      alert("Merci d'indiquer un nom de thématique");
      return;
    }
    const mode =
      document.querySelector('input[name="themeMode"]:checked')?.value || "tooltip";
    const themeKey = generateThemeKey(themeLabel);
    if (state.themes[themeKey]) {
      alert("Une thématique porte déjà ce nom. Merci d'en choisir un autre.");
      return;
    }

    const theme = { label: themeLabel, mode, data: {} };

    if (mode === "tooltip") {
      const colorInput = document.getElementById("themeColor");
      theme.color = colorInput?.value || "#0ea5e9";
      theme.fields = fieldConfigurator.getFields();
    }

    if (mode === "category") {
      const legend = collectLegendValues(legendRows);
      if (!Object.keys(legend).length) {
        alert("Ajoutez au moins une zone colorée");
        return;
      }
      theme.legend = legend;
      theme.allowCustomLegend = true;
    }

    state.themes = { ...state.themes, [themeKey]: theme };
    persistThemes();
    buildMenu();
    buildBackOffice();
    selectTheme(themeKey);
    closeModal();
    showToast("Thématique créée", "success");
  });

  openModal(wrapper, "Nouvelle thématique");
}

function openThemeEditModal(themeKey) {
  const theme = state.themes[themeKey];
  if (!theme) return;

  const wrapper = document.createElement("div");
  wrapper.className = "stack";

  const labelField = document.createElement("label");
  labelField.innerHTML =
    "Nom de la thématique<input id=\"themeName\" type=\"text\" placeholder=\"Nom affiché\" />";
  const nameInput = labelField.querySelector("input");
  nameInput.value = theme.label || "";

  const typeField = document.createElement("div");
  typeField.className = "stack";
  typeField.innerHTML = `
    <p class="eyebrow">Type</p>
    <label class="pill-toggle"><input type="radio" name="themeMode" value="tooltip" />Infobulle (texte)</label>
    <label class="pill-toggle"><input type="radio" name="themeMode" value="category" />Zones de couleur</label>
    <label class="pill-toggle"><input type="radio" name="themeMode" value="numeric" />Valeur numérique</label>
  `;
  typeField
    .querySelector(`input[value='${theme.mode || "tooltip"}']`)
    ?.setAttribute("checked", "true");

  const tooltipConfig = document.createElement("div");
  tooltipConfig.className = "stack";
  tooltipConfig.innerHTML = `
    <div class="inline-fields">
      <label>Couleur d'accent
        <input id="themeColor" type="color" value="${theme.color || "#0ea5e9"}" />
      </label>
    </div>
  `;
  const tooltipConfigurator = createTooltipFieldConfigurator(getTooltipFields(theme));
  tooltipConfig.appendChild(tooltipConfigurator.element);

  const legendConfig = document.createElement("div");
  legendConfig.className = "stack";
  legendConfig.innerHTML = `<p class="helper">Définissez les catégories disponibles dans la légende et harmonisez leurs couleurs.</p>`;
  const legendRows = document.createElement("div");
  legendRows.className = "legend-editor__list";
  legendConfig.appendChild(legendRows);

  const addLegendButton = document.createElement("button");
  addLegendButton.type = "button";
  addLegendButton.className = "ghost";
  addLegendButton.textContent = "Ajouter une zone";
  addLegendButton.addEventListener("click", () => buildLegendRows(legendRows));
  legendConfig.appendChild(addLegendButton);

  const existingLegend = Object.entries(theme.legend || {});
  if (existingLegend.length) {
    existingLegend.forEach(([name, color]) =>
      buildLegendRows(legendRows, null, { name, color })
    );
  } else {
    buildLegendRows(legendRows);
  }

  const toggleConfigVisibility = () => {
    const selectedMode =
      document.querySelector('input[name="themeMode"]:checked')?.value || theme.mode || "tooltip";
    tooltipConfig.style.display = selectedMode === "tooltip" ? "block" : "none";
    legendConfig.style.display = selectedMode === "category" ? "block" : "none";
  };

  typeField.querySelectorAll("input[name='themeMode']").forEach((input) => {
    input.addEventListener("change", toggleConfigVisibility);
  });
  toggleConfigVisibility();

  wrapper.appendChild(labelField);
  wrapper.appendChild(typeField);
  wrapper.appendChild(tooltipConfig);
  wrapper.appendChild(legendConfig);

  bindModalSubmit("Enregistrer", () => {
    const themeLabel = nameInput?.value.trim();
    if (!themeLabel) {
      alert("Merci d'indiquer un nom de thématique");
      return;
    }
    const mode = document.querySelector('input[name="themeMode"]:checked')?.value || "tooltip";
    const updated = { ...theme, label: themeLabel, mode };

    if (mode === "tooltip") {
      const colorInput = document.getElementById("themeColor");
      updated.color = colorInput?.value || "#0ea5e9";
      updated.fields = tooltipConfigurator.getFields();
    } else {
      delete updated.fields;
    }

    if (mode === "category") {
      const legend = collectLegendValues(legendRows);
      if (!Object.keys(legend).length) {
        alert("Ajoutez au moins une catégorie pour continuer");
        return;
      }
      updated.legend = legend;
      updated.allowCustomLegend = true;
    }

    state.themes = { ...state.themes, [themeKey]: updated };
    persistThemes();
    buildMenu();
    buildBackOffice();
    selectTheme(themeKey);
    closeModal();
    showToast("Thématique mise à jour", "success");
  });

  openModal(wrapper, "Modifier la thématique");
}

function openTooltipFieldModal(themeKey) {
  const theme = state.themes[themeKey];
  if (!theme) return;

  const wrapper = document.createElement("div");
  wrapper.className = "stack";

  const configurator = createTooltipFieldConfigurator(getTooltipFields(theme));
  wrapper.appendChild(configurator.element);

  bindModalSubmit("Enregistrer", () => {
    const fields = configurator.getFields();
    if (!fields.length) {
      alert("Ajoutez au moins un champ pour configurer l'infobulle.");
      return;
    }

    state.themes = { ...state.themes, [themeKey]: { ...theme, fields } };
    persistThemes();
    buildMenu();
    buildBackOffice();
    selectTheme(themeKey);
    closeModal();
    showToast("Champs d'infobulle mis à jour", "success");
  });

  openModal(wrapper, "Champs de l'infobulle");
}

function buildTooltipFieldSummary(themeKey, theme) {
  const section = document.createElement("div");
  section.className = "back-office__section";

  const header = document.createElement("header");
  header.className = "back-office__section-header";
  const heading = document.createElement("div");
  heading.innerHTML = `<p class="eyebrow">Infobulle</p><h4>Champs disponibles</h4>`;
  header.appendChild(heading);

  const action = document.createElement("button");
  action.type = "button";
  action.className = "ghost";
  action.textContent = "Modifier";
  action.addEventListener("click", () => openTooltipFieldModal(themeKey));
  header.appendChild(action);

  section.appendChild(header);

  const list = document.createElement("div");
  list.className = "field-pill-list";
  const fields = getTooltipFields(theme);
  fields.forEach((field) => {
    const pill = document.createElement("div");
    pill.className = "field-pill";
    pill.innerHTML = `<strong>${field.label}</strong><span>${field.type}</span>`;
    list.appendChild(pill);
  });

  if (!fields.length) {
    const helper = document.createElement("p");
    helper.className = "helper";
    helper.textContent = "Aucun champ configuré pour cette infobulle.";
    list.appendChild(helper);
  }

  section.appendChild(list);
  return section;
}

function buildTooltipFieldInputs(container, fields) {
  if (!container) return;
  container.innerHTML = "";
  fields.forEach((field) => {
    const label = document.createElement("label");
    label.textContent = field.label || field.id;
    let input;
    if (field.type === "textarea") {
      input = document.createElement("textarea");
    } else {
      input = document.createElement("input");
      input.type = field.type === "number" ? "number" : "text";
    }
    input.id = `field-${field.id}`;
    if (field.placeholder) input.placeholder = field.placeholder;
    if (field.defaultValue) input.value = field.defaultValue;
    label.appendChild(input);
    container.appendChild(label);
  });
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
  const activePanel = document.querySelector(".back-office__panel.is-active");
  const tagContainer = activePanel?.querySelector(".tag-container");
  if (tagContainer) {
    const tags = Array.from(tagContainer.querySelectorAll(".tag"));
    if (tags.length) {
      return tags.map((tag) => tag.dataset.code);
    }
  }
  const checkboxes = activePanel?.querySelectorAll(".country-checkbox:checked") || [];
  return Array.from(checkboxes).map((input) => input.value);
}

function renderCountryBadges(summary) {
  const container = document.getElementById("countryBadges");
  if (!container) return;
  container.innerHTML = "";

  const totalBadge = document.createElement("span");
  totalBadge.className = "badge";
  totalBadge.textContent = `Sélectionnés : ${summary.totalSelected || 0}`;
  container.appendChild(totalBadge);

  const filteredBadge = document.createElement("span");
  filteredBadge.className = "badge";
  filteredBadge.textContent = `Affichés : ${summary.filteredCount || 0}`;
  container.appendChild(filteredBadge);

  Object.entries(summary.perContinentSelected || {}).forEach(
    ([continentId, count]) => {
      if (!count) return;
      const continent = CONTINENTS.find((item) => item.id === continentId);
      if (!continent) return;
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = `${continent.label} : ${count}`;
      container.appendChild(badge);
    }
  );
}

function buildCountrySelector() {
  const container = document.getElementById("countrySelection");
  const filterInput = document.getElementById("countryFilter");
  const filterContainer = document.getElementById("continentFilters");
  if (!container || !filterInput || !filterContainer) return;

  const selectedSet = new Set(state.countrySelector.selectedCountries || []);
  const query = (state.countrySelector.search || "").trim().toLowerCase();
  container.innerHTML = "";

  filterInput.value = state.countrySelector.search || "";
  filterInput.oninput = (event) => {
    state.countrySelector.search = event.target.value;
    persistCountrySelectorState();
    buildCountrySelector();
  };

  filterContainer.innerHTML = "";
  CONTINENTS.forEach((continent) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `continent-filter${
      state.countrySelector.continentFilters[continent.id] !== false ? " is-active" : ""
    }`;
    chip.textContent = continent.label;

    const count = document.createElement("small");
    count.textContent = `${continent.countries.length} pays`;
    chip.appendChild(count);

    chip.addEventListener("click", () => {
      const current = state.countrySelector.continentFilters[continent.id] !== false;
      state.countrySelector.continentFilters[continent.id] = !current;
      persistCountrySelectorState();
      buildCountrySelector();
    });

    filterContainer.appendChild(chip);
  });

  let filteredCount = 0;
  const perContinentSelected = {};

  CONTINENTS.forEach((continent) => {
    const isEnabled = state.countrySelector.continentFilters[continent.id] !== false;
    const continentCountries = continent.countries
      .map((id) => COUNTRIES.find((country) => country.id === id))
      .filter(Boolean);

    perContinentSelected[continent.id] = continentCountries.filter((country) =>
      selectedSet.has(country.id)
    ).length;

    const matchingCountries = continentCountries.filter((country) => {
      if (!query) return true;
      return (
        country.name.toLowerCase().includes(query) ||
        country.id.toLowerCase().includes(query)
      );
    });

    if (!isEnabled || !matchingCountries.length) return;

    filteredCount += matchingCountries.length;

    const group = document.createElement("div");
    group.className = "continent-group";

    const header = document.createElement("div");
    header.className = "continent-actions";

    const headerLabel = document.createElement("div");
    headerLabel.className = "continent-header";
    const label = document.createElement("span");
    label.textContent = continent.label;
    headerLabel.appendChild(label);

    const countBadge = document.createElement("span");
    countBadge.className = "badge";
    countBadge.textContent = `${perContinentSelected[continent.id]}/${continentCountries.length} sélectionnés`;
    headerLabel.appendChild(countBadge);

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "ghost";
    const allSelected = continentCountries.every((country) =>
      selectedSet.has(country.id)
    );
    toggleButton.textContent = allSelected
      ? "Tout désélectionner"
      : "Tout sélectionner";
    toggleButton.addEventListener("click", () => {
      const nextSelection = new Set(state.countrySelector.selectedCountries || []);
      if (allSelected) {
        continentCountries.forEach((country) => nextSelection.delete(country.id));
      } else {
        continentCountries.forEach((country) => nextSelection.add(country.id));
      }
      state.countrySelector.selectedCountries = Array.from(nextSelection);
      persistCountrySelectorState();
      buildCountrySelector();
    });

    header.appendChild(headerLabel);
    header.appendChild(toggleButton);
    group.appendChild(header);

    const list = document.createElement("div");
    list.className = "country-list";

    matchingCountries.forEach((country) => {
      const countryLabel = document.createElement("label");
      countryLabel.className = "country-option";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = country.id;
      checkbox.className = "country-checkbox";
      checkbox.checked = selectedSet.has(country.id);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectedSet.add(country.id);
        } else {
          selectedSet.delete(country.id);
        }
        state.countrySelector.selectedCountries = Array.from(selectedSet);
        persistCountrySelectorState();
        buildCountrySelector();
      });

      const name = document.createElement("span");
      name.textContent = country?.name || country.id;

      countryLabel.appendChild(checkbox);
      countryLabel.appendChild(name);
      list.appendChild(countryLabel);
    });

    group.appendChild(list);
    container.appendChild(group);
  });

  if (!filteredCount) {
    const emptyState = document.createElement("p");
    emptyState.className = "helper";
    emptyState.textContent = "Aucun pays ne correspond aux filtres.";
    container.appendChild(emptyState);
  }

  renderCountryBadges({
    totalSelected: state.countrySelector.selectedCountries.length,
    filteredCount,
    perContinentSelected
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
  closeModal();

  if (themeKey !== "countryProfile") {
    state.selectedEntityId = null;
    updateDeleteButtonState();
  }

  if (!theme) {
    const empty = document.createElement("p");
    empty.className = "helper";
    empty.textContent = "Aucune thématique à configurer.";
    dynamic.appendChild(empty);
    return;
  }

  if (themeKey === "countryProfile") {
    const creationPanel = document.createElement("div");
    creationPanel.id = "creationPanel";
    creationPanel.className = "creation-panel";
    creationPanel.innerHTML = `
      <p class="helper">Créez ou modifiez vos filiales, JV ou distributeurs.</p>
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
        <label class="pill-toggle"><input type="checkbox" name="activity" value="production" />Production</label>
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

    dynamic.appendChild(
      buildCreationButton("Créer l'entité", () => {
        state.selectedEntityId = null;
        resetCountryProfileForm();
        const field = document.getElementById("field-entityName");
        field?.focus();
      })
    );
    dynamic.appendChild(buildCountryProfileList());
    attachCreationPanel(creationPanel, "Créer ou modifier une entité");
    setupCountrySearch();
    buildMedicineChoices();
    buildPriorityChoices();
    setupActivityToggles();
    setupEntityRevenuePreview();
    bindEntityDeleteAction();
    populateSelectedEntity();
    const hasEntities = Object.keys(theme.data || {}).length > 0;
    const shouldShowForm = !!state.selectedEntityId || !hasEntities;
    setCreationPanelVisibility(creationPanel, shouldShowForm);
  } else if (themeKey === "embargo") {
    const creationPanel = document.createElement("div");
    creationPanel.id = "creationPanel";
    creationPanel.className = "creation-panel";
    creationPanel.dataset.currentList = "";
    const defaultColor = getNextLegendColor(theme) || "#000000";
    const listFields = document.createElement("div");
    listFields.className = "inline-fields";
    listFields.innerHTML = `
      <label>Nom de la liste<input id="field-category" type="text" placeholder="Liste d'embargo" /></label>
      <label class="color-picker">Couleur
        <div class="color-picker__field">
          <input id="field-categoryColor" type="color" value="${defaultColor}" />
          <span id="field-categoryColorValue" class="color-value" aria-live="polite">${defaultColor.toUpperCase()}</span>
        </div>
      </label>
    `;
    creationPanel.appendChild(listFields);
    const picker = document.createElement("div");
    picker.className = "country-chip-selector";
    picker.innerHTML = `
      <label for="countrySearch">Pays concernés</label>
      <input id="countrySearch" type="search" list="countryOptions" placeholder="Rechercher un pays" />
      <datalist id="countryOptions"></datalist>
      <div id="countryTags" class="tag-container" aria-live="polite"></div>
    `;
    creationPanel.appendChild(picker);
    dynamic.appendChild(
      buildCreationButton("Créer une liste d'embargo", () => {
        creationPanel.dataset.currentList = "";
        const nameInput = document.getElementById("field-category");
        if (nameInput) {
          nameInput.value = "";
        }
        document.getElementById("field-category")?.focus();
        setCategoryColorValue(getNextLegendColor(theme));
        setCountrySelection([]);
        showCreationPanel();
      })
    );
    dynamic.appendChild(buildEmbargoSummary());
    attachCreationPanel(creationPanel, "Créer une liste d'embargo");
    setupCountrySearch();
    setupCategoryColorPreview();
    const shouldShowForm = !Object.keys(theme.data || {}).length;
    setCreationPanelVisibility(creationPanel, shouldShowForm);
  } else if (themeKey === "corruptionIndex") {
    const tableWrapper = document.createElement("div");
    tableWrapper.className = "corruption-table";
    const info = document.createElement("p");
    info.className = "helper";
    info.textContent = "Table pré-remplie depuis ICP2024.json. Modifiez les valeurs si besoin.";
    tableWrapper.appendChild(info);
    const table = document.createElement("table");
    table.id = "corruptionTable";
    table.innerHTML = `<thead><tr><th>Pays</th><th>Indice 2024</th></tr></thead><tbody></tbody>`;
    tableWrapper.appendChild(table);
    dynamic.appendChild(tableWrapper);
    dynamic.appendChild(createSaveActions());
    buildCorruptionTable();
  } else if (themeKey === "areaManager") {
    if (theme.allowCustomLegend) {
      dynamic.appendChild(buildLegendEditor(themeKey, theme));
    }
    const container = document.createElement("div");
    container.id = "areaManagerAssignments";
    container.className = "area-manager";
    dynamic.appendChild(container);
    buildAreaManagerAssignments();
    dynamic.appendChild(createSaveActions());
  } else if (themeKey === "prospecting") {
    dynamic.appendChild(createSaveActions());
    const wrapper = document.createElement("div");
    wrapper.id = "prospectingMatrix";
    wrapper.className = "area-manager";
    dynamic.appendChild(wrapper);
    buildProspectingMatrix();
    dynamic.appendChild(createSaveActions());
  } else if (theme.mode === "tooltip") {
    dynamic.appendChild(buildTooltipFieldSummary(themeKey, theme));
    const creationPanel = document.createElement("div");
    creationPanel.id = "creationPanel";
    creationPanel.className = "creation-panel";
    creationPanel.innerHTML = `
      <p class="helper">Sélectionnez un ou plusieurs pays puis définissez le contenu de l'infobulle.</p>
      <div id="tooltipFieldInputs" class="stack tooltip-field-form"></div>
      <div class="country-chip-selector">
        <label for="countrySearch">Pays concernés</label>
        <input id="countrySearch" type="search" list="countryOptions" placeholder="Rechercher un pays" />
        <datalist id="countryOptions"></datalist>
        <div id="countryTags" class="tag-container" aria-live="polite"></div>
      </div>
    `;

    const fields = getTooltipFields(theme);
    buildTooltipFieldInputs(creationPanel.querySelector("#tooltipFieldInputs"), fields);

    dynamic.appendChild(
      buildCreationButton("Créer une infobulle", () => {
        buildTooltipFieldInputs(creationPanel.querySelector("#tooltipFieldInputs"), fields);
        creationPanel.dataset.countryId = "";
        creationPanel.dataset.modalTitle = "Créer une infobulle";
        applyTooltipValues(fields, {});
        setCountrySelection([]);
        const firstInput = creationPanel.querySelector(
          "#tooltipFieldInputs input, #tooltipFieldInputs textarea"
        );
        firstInput?.focus();
      })
    );
    dynamic.appendChild(buildTooltipThemeSummary(themeKey));
    attachCreationPanel(creationPanel, "Créer une infobulle");
    setupCountrySearch();
    const shouldShowForm = !Object.keys(theme.data || {}).length;
    setCreationPanelVisibility(creationPanel, shouldShowForm);
  } else if (theme.mode === "numeric") {
    dynamic.innerHTML = `<label>Valeur numérique<input id="field-numeric" type="number" step="0.1" /></label>`;
    dynamic.appendChild(createSaveActions());
  } else if (themeKey === "products") {
    dynamic.innerHTML = `<label>Produits (séparés par des virgules)<textarea id="field-products"></textarea></label>`;
    dynamic.appendChild(createSaveActions());
  } else if (theme.mode === "category") {
    if (theme.allowCustomLegend) {
      dynamic.appendChild(buildLegendEditor(themeKey, theme));
    }
    const categoryField = buildCategoryField(themeKey, theme);
    dynamic.appendChild(categoryField);
    dynamic.appendChild(createSaveActions());
  }

}

function buildCountryProfileList() {
  const container = document.createElement("div");
  container.className = "back-office__section";

  const header = document.createElement("header");
  header.className = "back-office__section-header";
  const heading = document.createElement("div");
  heading.innerHTML = `<p class="eyebrow">Entités</p><h4>Entités créées</h4>`;
  header.appendChild(heading);
  container.appendChild(header);

  const list = document.createElement("div");
  list.className = "summary-list";

  const entries = Object.entries(state.themes?.countryProfile?.data || {}).sort(
    (a, b) => getProfileEntityKey(a[1]).localeCompare(getProfileEntityKey(b[1]))
  );

  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "helper";
    empty.textContent = "Aucune entité créée pour le moment.";
    container.appendChild(empty);
    return container;
  }

  entries.forEach(([countryId, profile]) => {
    const row = document.createElement("div");
    row.className = "summary-row";

    const info = document.createElement("div");
    const country = COUNTRIES.find((c) => c.id === countryId);
    const revenue = formatRevenue(
      extractRevenueValue(profile, countryId),
      getProfileCurrency(profile)
    );
    const entityType = profile.entityType === "distributor" ? "Distributeur" : "Filiale / JV";
    info.innerHTML = `<strong>${profile.entityName || "(Sans nom)"} – ${
      country?.name || countryId
    }</strong><p class="helper">${entityType} · ${revenue}</p>`;

    const actions = document.createElement("div");
    actions.className = "summary-row__actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "ghost";
    editButton.textContent = "Modifier";
    editButton.addEventListener("click", () => {
      state.selectedEntityId = countryId;
      showCreationPanel();
      populateCountryProfileForm(countryId, profile);
    });

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "ghost danger";
    removeButton.textContent = "Supprimer";
    removeButton.addEventListener("click", () => {
      if (!confirm(`Supprimer l'entité ${profile.entityName || country?.name || countryId} ?`))
        return;
      delete state.themes.countryProfile.data[countryId];
      persistThemes();
      selectTheme("countryProfile");
    });

    actions.appendChild(editButton);
    actions.appendChild(removeButton);

    row.appendChild(info);
    row.appendChild(actions);
    list.appendChild(row);
  });

  container.appendChild(list);
  return container;
}

function updateDeleteButtonState() {
  const deleteButton = document.getElementById("deleteEntity");
  if (!deleteButton) return;
  const isVisible = state.currentTheme === "countryProfile" && !!state.selectedEntityId;
  deleteButton.style.display = isVisible ? "" : "none";
  deleteButton.disabled = !isVisible;
}

function bindEntityDeleteAction() {
  const deleteButton = document.getElementById("deleteEntity");
  if (deleteButton && !deleteButton.dataset.bound) {
    deleteButton.addEventListener("click", deleteSelectedEntity);
    deleteButton.dataset.bound = "true";
  }
}

function populateSelectedEntity() {
  if (state.currentTheme !== "countryProfile") {
    updateDeleteButtonState();
    return;
  }
  const profile = state.themes?.countryProfile?.data?.[state.selectedEntityId];
  if (profile) {
    populateCountryProfileForm(state.selectedEntityId, profile);
  } else {
    resetCountryProfileForm();
  }
  updateDeleteButtonState();
}

function deleteSelectedEntity() {
  if (state.currentTheme !== "countryProfile" || !state.selectedEntityId) return;
  const theme = state.themes?.countryProfile;
  if (!theme?.data) return;
  const profile = theme.data[state.selectedEntityId];
  const country = COUNTRIES.find((c) => c.id === state.selectedEntityId);
  const label = profile?.entityName || country?.name || state.selectedEntityId;
  if (!confirm(`Supprimer l'entité ${label} ?`)) return;
  delete theme.data[state.selectedEntityId];
  state.themes = { ...state.themes, countryProfile: { ...theme, data: { ...theme.data } } };
  persistThemes();
  state.selectedEntityId = null;
  populateSelectedEntity();
  refreshMap();
  buildLegend();
}

function buildEmbargoSummary() {
  const container = document.createElement("div");
  container.className = "back-office__section";
  const header = document.createElement("header");
  header.className = "back-office__section-header";
  const heading = document.createElement("div");
  heading.innerHTML = `<p class="eyebrow">Embargo</p><h4>Listes créées</h4>`;
  header.appendChild(heading);
  container.appendChild(header);

  const list = document.createElement("div");
  list.className = "summary-list";
  const assignments = state.themes?.embargo?.data || {};
  const perList = {};

  Object.entries(assignments).forEach(([countryId, listName]) => {
    if (!perList[listName]) {
      perList[listName] = [];
    }
    perList[listName].push(countryId);
  });

  const entries = Object.entries(perList).sort((a, b) => a[0].localeCompare(b[0]));
  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "helper";
    empty.textContent = "Aucune liste d'embargo créée.";
    container.appendChild(empty);
    return container;
  }

  entries.forEach(([listName, countries]) => {
    const row = document.createElement("div");
    row.className = "summary-row";
    const names = countries
      .map((id) => COUNTRIES.find((c) => c.id === id)?.name || id)
      .sort((a, b) => a.localeCompare(b));
    const info = document.createElement("div");
    info.innerHTML = `<strong>${listName}</strong><p class="helper">${names.join(", ")}</p>`;

    const actions = document.createElement("div");
    actions.className = "summary-row__actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "ghost";
    editButton.textContent = "Modifier";
    editButton.addEventListener("click", () => {
      showCreationPanel();
      const nameInput = document.getElementById("field-category");
      const colorInput = document.getElementById("field-categoryColor");
      const creationPanel = document.getElementById("creationPanel");
      if (creationPanel) {
        creationPanel.dataset.currentList = listName;
      }
      if (nameInput) {
        nameInput.value = listName;
      }
      if (colorInput) {
        const currentColor = state.themes?.embargo?.legend?.[listName];
        setCategoryColorValue(currentColor || getNextLegendColor(state.themes.embargo));
      }
      setCountrySelection(countries);
      const backOffice = document.getElementById("backOffice");
      backOffice?.scrollTo({ top: 0, behavior: "smooth" });
    });

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "ghost danger";
    removeButton.textContent = "Supprimer";
    removeButton.addEventListener("click", () => {
      if (!confirm(`Supprimer la liste "${listName}" ?`)) return;
      Object.entries(state.themes.embargo.data).forEach(([countryId, value]) => {
        if (value === listName) {
          delete state.themes.embargo.data[countryId];
        }
      });
      persistThemes();
      selectTheme("embargo");
    });

    actions.appendChild(editButton);
    actions.appendChild(removeButton);
    row.appendChild(info);
    row.appendChild(actions);
    list.appendChild(row);
  });

  container.appendChild(list);
  return container;
}

function focusProspectingCountry(countryId) {
  const checkbox = document.querySelector(`#prospectingMatrix input[data-country='${countryId}']`);
  if (!checkbox) return;
  checkbox.checked = true;
  checkbox.scrollIntoView({ behavior: "smooth", block: "center" });
  checkbox.focus();
}

function buildProspectingSummary() {
  const container = document.createElement("div");
  container.className = "back-office__section";
  const header = document.createElement("header");
  header.className = "back-office__section-header";
  const heading = document.createElement("div");
  heading.innerHTML = `<p class="eyebrow">Prospection</p><h4>Pays enregistrés</h4>`;
  header.appendChild(heading);
  container.appendChild(header);

  const list = document.createElement("div");
  list.className = "summary-list";
  const data = state.themes?.prospecting?.data || {};
  const entries = Object.keys(data).sort((a, b) => a.localeCompare(b));

  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "helper";
    empty.textContent = "Aucun pays en prospection.";
    container.appendChild(empty);
    return container;
  }

  entries.forEach((countryId) => {
    const row = document.createElement("div");
    row.className = "summary-row";
    const country = COUNTRIES.find((c) => c.id === countryId);
    const info = document.createElement("div");
    info.innerHTML = `<strong>${country?.name || countryId}</strong><p class="helper">En prospection</p>`;

    const actions = document.createElement("div");
    actions.className = "summary-row__actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "ghost";
    editButton.textContent = "Modifier";
    editButton.addEventListener("click", () => {
      showCreationPanel();
      focusProspectingCountry(countryId);
    });

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "ghost danger";
    removeButton.textContent = "Supprimer";
    removeButton.addEventListener("click", () => {
      if (!confirm(`Retirer ${country?.name || countryId} de la prospection ?`)) return;
      delete state.themes.prospecting.data[countryId];
      persistThemes();
      selectTheme("prospecting");
    });

    actions.appendChild(editButton);
    actions.appendChild(removeButton);
    row.appendChild(info);
    row.appendChild(actions);
    list.appendChild(row);
  });

  container.appendChild(list);
  return container;
}

function buildTooltipThemeSummary(themeKey) {
  const container = document.createElement("div");
  container.className = "back-office__section";
  const header = document.createElement("header");
  header.className = "back-office__section-header";
  const heading = document.createElement("div");
  heading.innerHTML = `<p class="eyebrow">Infobulles</p><h4>Pays configurés</h4>`;
  header.appendChild(heading);
  container.appendChild(header);

  const list = document.createElement("div");
  list.className = "summary-list";

  const data = state.themes?.[themeKey]?.data || {};
  const entries = Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]));

  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "helper";
    empty.textContent = "Aucune infobulle enregistrée pour le moment.";
    container.appendChild(empty);
    return container;
  }

  entries.forEach(([countryId, value]) => {
    const row = document.createElement("div");
    row.className = "summary-row";
    const country = COUNTRIES.find((c) => c.id === countryId);
    const title = value.title || country?.name || countryId;
    const description = value.description || value.text || value.content || "(Sans description)";

    const info = document.createElement("div");
    info.innerHTML = `<strong>${title}</strong><p class="helper">${country?.name || countryId}</p><p class="helper">${description.slice(0, 120)}${description.length > 120 ? "…" : ""}</p>`;

    const actions = document.createElement("div");
    actions.className = "summary-row__actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "ghost";
    editButton.textContent = "Modifier";
    editButton.addEventListener("click", () => {
      const creationPanel = document.getElementById("creationPanel");
      if (creationPanel) {
        creationPanel.dataset.countryId = countryId;
        creationPanel.dataset.modalTitle = `Modifier l'infobulle – ${country?.name || countryId}`;
      }
      setCountrySelection([countryId]);
      const fields = getTooltipFields(state.themes[themeKey]);
      applyTooltipValues(fields, value);
      showCreationPanel();
      const backOffice = document.getElementById("backOffice");
      backOffice?.scrollTo({ top: 0, behavior: "smooth" });
    });

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "ghost danger";
    removeButton.textContent = "Supprimer";
    removeButton.addEventListener("click", () => {
      if (!confirm(`Supprimer l'infobulle pour ${country?.name || countryId} ?`)) return;
      delete state.themes?.[themeKey]?.data?.[countryId];
      persistThemes();
      selectTheme(themeKey);
    });

    actions.appendChild(editButton);
    actions.appendChild(removeButton);
    row.appendChild(info);
    row.appendChild(actions);
    list.appendChild(row);
  });

  container.appendChild(list);
  return container;
}

function buildCorruptionTable() {
  const tbody = document.querySelector("#corruptionTable tbody");
  if (!tbody) return;
  const corruption = state.themes?.corruptionIndex?.data || {};
  tbody.innerHTML = "";

  COUNTRIES.forEach((country) => {
    const row = document.createElement("tr");
    const countryCell = document.createElement("td");
    countryCell.textContent = country.name;
    const valueCell = document.createElement("td");
    const input = document.createElement("input");
    input.type = "number";
    input.step = "1";
    input.min = "0";
    input.max = "100";
    input.value = corruption[country.id] ?? "";
    input.dataset.country = country.id;
    valueCell.appendChild(input);
    row.appendChild(countryCell);
    row.appendChild(valueCell);
    tbody.appendChild(row);
  });
}

function buildAreaManagerAssignments() {
  const container = document.getElementById("areaManagerAssignments");
  if (!container) return;
  const theme = state.themes.areaManager;
  const legendEntries = Object.keys(theme.legend || {});
  const assignments = theme.data || {};
  container.innerHTML = "";

  if (!legendEntries.length) {
    const empty = document.createElement("p");
    empty.className = "helper";
    empty.textContent = "Ajoutez une zone avant d'attribuer des pays.";
    container.appendChild(empty);
    return;
  }

  legendEntries.forEach((areaName) => {
    const block = document.createElement("details");
    block.className = "accordion";
    block.open = false;
    const summary = document.createElement("summary");
    summary.innerHTML = `<span>${areaName}</span>`;
    block.appendChild(summary);

    const body = document.createElement("div");
    body.className = "accordion__body";

    CONTINENTS.forEach((continent) => {
      const section = document.createElement("div");
      section.className = "continent-block";
      const header = document.createElement("div");
      header.className = "continent-block__header";
      const label = document.createElement("strong");
      label.textContent = continent.label;
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "ghost";
      toggle.textContent = "Tout sélectionner";
      toggle.addEventListener("click", () => {
        const checkboxes = section.querySelectorAll("input.area-checkbox");
        const conflictCountries = [];
        checkboxes.forEach((checkbox) => {
          const country = checkbox.dataset.country;
          const existing = document.querySelector(
            `input.area-checkbox[data-country='${country}']:checked:not([data-area='${areaName}'])`
          );
          if (existing) {
            conflictCountries.push(country);
            return;
          }
          checkbox.checked = true;
        });
        if (conflictCountries.length) {
          alert(
            `Ces pays sont déjà attribués : ${conflictCountries
              .map((code) => COUNTRIES.find((c) => c.id === code)?.name || code)
              .join(", ")}`
          );
        }
      });
      header.appendChild(label);
      header.appendChild(toggle);

      const list = document.createElement("div");
      list.className = "continent-grid";
      continent.countries.forEach((countryId) => {
        const country = COUNTRIES.find((c) => c.id === countryId);
        const wrapper = document.createElement("label");
        wrapper.className = "pill-toggle";
        const input = document.createElement("input");
        input.type = "checkbox";
        input.className = "area-checkbox";
        input.dataset.area = areaName;
        input.dataset.country = countryId;
        input.checked = assignments[countryId] === areaName;
        input.addEventListener("change", () => {
          if (input.checked) {
            const conflict = document.querySelector(
              `input.area-checkbox[data-country='${countryId}']:checked:not([data-area='${areaName}'])`
            );
            if (conflict) {
              alert(
                `${country?.name || countryId} est déjà attribué à ${
                  conflict.dataset.area
                }.`
              );
              input.checked = false;
            }
          }
        });
        const text = document.createElement("span");
        text.textContent = country?.name || countryId;
        wrapper.appendChild(input);
        wrapper.appendChild(text);
        list.appendChild(wrapper);
      });

      section.appendChild(header);
      section.appendChild(list);
      body.appendChild(section);
    });

    block.appendChild(body);
    container.appendChild(block);
  });
}

function buildProspectingMatrix() {
  const container = document.getElementById("prospectingMatrix");
  if (!container) return;
  container.innerHTML = "";
  const theme = state.themes.prospecting;
  const selected = theme?.data || {};
  const label = Object.keys(theme.legend || {})[0] || "En prospection";

  CONTINENTS.forEach((continent) => {
    const section = document.createElement("div");
    section.className = "continent-block";
    const header = document.createElement("div");
    header.className = "continent-block__header";
    const title = document.createElement("strong");
    title.textContent = continent.label;
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "ghost";
    toggle.textContent = "Tout sélectionner";
    toggle.addEventListener("click", () => {
      const checkboxes = section.querySelectorAll("input[data-country]");
      const shouldCheck = Array.from(checkboxes).some((cb) => !cb.checked);
      checkboxes.forEach((cb) => {
        cb.checked = shouldCheck;
      });
    });
    header.appendChild(title);
    header.appendChild(toggle);

    const list = document.createElement("div");
    list.className = "continent-grid";
    continent.countries.forEach((countryId) => {
      const country = COUNTRIES.find((c) => c.id === countryId);
      const wrapper = document.createElement("label");
      wrapper.className = "pill-toggle";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.dataset.country = countryId;
      checkbox.checked = selected[countryId] === label;
      const text = document.createElement("span");
      text.textContent = country?.name || countryId;
      wrapper.appendChild(checkbox);
      wrapper.appendChild(text);
      list.appendChild(wrapper);
    });
    section.appendChild(header);
    section.appendChild(list);
    container.appendChild(section);
  });
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

function populateCountryProfileForm(countryId, profile) {
  if (!profile) return;
  showCreationPanel();
  setFieldValue("field-entityName", profile.entityName || "");
  setFieldValue("field-entityType", profile.entityType || "subsidiary");
  toggleEntityTypeFields();
  setFieldValue("field-shareholding", profile.shareholding || "100% LFB");
  setFieldValue("field-generalManager", profile.generalManager || "");
  setFieldValue("field-complianceContact", profile.complianceContact || "");
  setFieldValue("field-contacts", profile.contacts || "");
  setFieldValue(
    "field-employees",
    Number.isFinite(profile.employees) ? profile.employees : ""
  );
  setCheckedValues("activityGroup", profile.activities);
  setCheckedValues("priorityChoices", profile.ethicsPriorities || profile.priorities);
  setCheckedValues("subsidiaryMedicines", profile.medicines);
  setCheckedValues("distributorMedicines", profile.medicines);
  toggleCommercialFields();
  const countries = [countryId].filter(Boolean);
  setCountrySelection(countries);

  const revenueCurrencyField =
    profile.entityType === "distributor" ? "field-distributorCurrency" : "field-revenueCurrency";
  setFieldValue(revenueCurrencyField, profile.revenueCurrency || "M€");

  const countryRevenues = profile.countryRevenues || {};
  renderCountryRevenueInputs(countries);
  document.querySelectorAll("#countryRevenueList input[data-country]").forEach((input) => {
    const raw = countryRevenues[input.dataset.country];
    input.value = Number.isFinite(raw) ? raw : raw || "";
  });

  const globalRevenueField =
    profile.entityType === "distributor" ? "field-distributorRevenue" : "field-globalRevenue";
  setFieldValue(globalRevenueField, profile.globalRevenue ?? "");
  setupEntityRevenuePreview();
  const backOffice = document.getElementById("backOffice");
  if (backOffice) {
    backOffice.scrollTo({ top: 0, behavior: "smooth" });
  }
  const entityInput = document.getElementById("field-entityName");
  entityInput?.focus();
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
  e?.preventDefault?.();
  setSavingState(true);
  const themeKey = document.getElementById("themeSelect").value;
  const theme = state.themes[themeKey];

  if (!theme) {
    return handleSaveError("Aucune thématique disponible.");
  }

  if (themeKey === "countryProfile") {
    const selectedCountries = getSelectedCountries();

    if (!selectedCountries.length) {
      return handleSaveError("Merci de sélectionner au moins un pays");
    }

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
      return handleSaveError("Merci de renseigner le nom de l'entité");
    }

    if (entityType === "subsidiary" && !activities.length) {
      return handleSaveError("Merci de sélectionner au moins une activité");
    }

    if (entityType === "subsidiary" && isCommercial) {
      if (!Number.isFinite(globalRevenueRaw) && !perCountryTotal) {
        return handleSaveError("Merci de saisir un chiffre d'affaires (global ou par pays)");
      }
    }

    if (entityType === "distributor" && !Number.isFinite(globalRevenueRaw)) {
      return handleSaveError("Merci de renseigner le chiffre d'affaires du distributeur");
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
    state.selectedEntityId = selectedCountries[0];
  } else if (themeKey === "embargo") {
    const selectedCountries = getSelectedCountries();
    if (!selectedCountries.length) {
      return handleSaveError("Merci de sélectionner au moins un pays");
    }
    const nameInput = document.getElementById("field-category");
    const colorInput = document.getElementById("field-categoryColor");
    if (!nameInput) {
      return handleSaveError("Merci de renseigner le nom de la liste");
    }
    const category = nameInput.value.trim();
    if (!category) {
      return handleSaveError("Merci de renseigner le nom de la liste");
    }
    const color = colorInput?.value || getNextLegendColor(theme);
    const creationPanel = document.getElementById("creationPanel");
    const previousLabel = creationPanel?.dataset.currentList || category;
    const legend = { ...(theme.legend || {}) };

    if (previousLabel && previousLabel !== category) {
      Object.entries(theme.data).forEach(([countryId, value]) => {
        if (value === previousLabel) {
          theme.data[countryId] = category;
        }
      });
      delete legend[previousLabel];
    }

    legend[category] = color;
    theme.legend = legend;

    selectedCountries.forEach((countryId) => {
      theme.data[countryId] = category;
    });
  } else if (themeKey === "corruptionIndex") {
    const inputs = document.querySelectorAll("#corruptionTable input[data-country]");
    const corruptionData = {};
    inputs.forEach((input) => {
      const value = Number(input.value);
      if (Number.isFinite(value)) {
        corruptionData[input.dataset.country] = value;
      }
    });
    theme.data = corruptionData;
  } else if (themeKey === "areaManager") {
    const checkboxes = Array.from(
      document.querySelectorAll("#areaManagerAssignments input[type='checkbox'][data-country]")
    );
    const assignments = {};
    const conflicts = [];
    checkboxes.forEach((checkbox) => {
      if (!checkbox.checked) return;
      const country = checkbox.dataset.country;
      const area = checkbox.dataset.area;
      if (assignments[country] && assignments[country] !== area) {
        conflicts.push(country);
      }
      assignments[country] = area;
    });
    if (conflicts.length) {
      return handleSaveError(
        `Attention : ${conflicts
          .map((c) => COUNTRIES.find((item) => item.id === c)?.name || c)
          .join(", ")} est déjà attribué à un autre Area Manager.`
      );
    }
    theme.data = assignments;
  } else if (themeKey === "prospecting") {
    const checkboxes = document.querySelectorAll(
      "#prospectingMatrix input[type='checkbox'][data-country]"
    );
    const prospecting = {};
    const label = Object.keys(theme.legend || {})[0] || "En prospection";
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        prospecting[checkbox.dataset.country] = label;
      }
    });
    theme.data = prospecting;
  } else if (theme.mode === "tooltip") {
    const selectedCountries = getSelectedCountries();
    if (!selectedCountries.length) {
      return handleSaveError("Merci de sélectionner au moins un pays");
    }
    const fields = getTooltipFields(theme);
    const values = {};
    fields.forEach((field) => {
      const input = document.getElementById(`field-${field.id}`);
      if (input) {
        values[field.id] = input.value;
      }
    });
    const hasContent = Object.values(values).some(
      (value) => typeof value === "string" && value.trim().length
    );
    if (!hasContent) {
      return handleSaveError("Merci de compléter au moins un champ de l'infobulle");
    }
    theme.fields = fields;
    selectedCountries.forEach((countryId) => {
      theme.data[countryId] = {
        fields: values,
        title:
          values.title ||
          COUNTRIES.find((c) => c.id === countryId)?.name ||
          values[fields[0]?.id] ||
          countryId,
        description: values.description || values[fields[1]?.id] || ""
      };
    });
  } else if (theme.mode === "numeric") {
    const selectedCountries = getSelectedCountries();
    if (!selectedCountries.length) {
      return handleSaveError("Merci de sélectionner au moins un pays");
    }
    const val = Number(document.getElementById("field-numeric").value);
    if (!Number.isFinite(val)) {
      return handleSaveError("Merci de saisir une valeur numérique valide");
    }
    selectedCountries.forEach((countryId) => {
      theme.data[countryId] = val;
    });
  } else if (themeKey === "products") {
    const selectedCountries = getSelectedCountries();
    if (!selectedCountries.length) {
      return handleSaveError("Merci de sélectionner au moins un pays");
    }
    const raw = document.getElementById("field-products").value;
    selectedCountries.forEach((countryId) => {
      theme.data[countryId] = { products: raw.split(",").map((p) => p.trim()).filter(Boolean) };
    });
  } else if (theme.mode === "category") {
    const selectedCountries = getSelectedCountries();
    if (!selectedCountries.length) {
      return handleSaveError("Merci de sélectionner au moins un pays");
    }
    const categoryField = document.getElementById("field-category");
    if (!categoryField) {
      return handleSaveError("Merci d'ajouter au moins une liste pour continuer");
    }
    const category = categoryField.value;
    selectedCountries.forEach((countryId) => {
      theme.data[countryId] = category;
    });
  }

  state.themes = { ...state.themes, [themeKey]: { ...theme, data: { ...theme.data } } };
  persistThemes();
  selectTheme(themeKey);
  setSavingState(false);
  showToast("Modifications enregistrées avec succès", "success");
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
  a.download = "planisphere-configuration.json";
  a.click();
  URL.revokeObjectURL(url);
  showToast("Fichier de configuration généré", "success");
}

function setupBackOfficeTabs() {
  const tabs = Array.from(document.querySelectorAll(".back-office__nav [role='tab']"));
  const panels = Array.from(document.querySelectorAll(".back-office__panel"));
  if (!tabs.length || !panels.length) return;

  const activate = (tab) => {
    const panelId = tab.getAttribute("aria-controls");
    tabs.forEach((button) => {
      const isActive = button === tab;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", isActive.toString());
      button.tabIndex = isActive ? "0" : "-1";
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

    const themeKey = tab.dataset.theme;
    if (themeKey) {
      state.currentTheme = themeKey;
      const themeSelect = document.getElementById("themeSelect");
      if (themeSelect) {
        themeSelect.value = themeKey;
      }
      selectTheme(themeKey);
      renderDynamicFields();
    }
  };

  const initialTab = tabs.find((tab) => tab.classList.contains("is-active")) || tabs[0];
  if (initialTab) {
    activate(initialTab);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab));
    tab.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate(tab);
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
  document.getElementById("backOfficeForm")?.addEventListener("submit", handleBackOfficeSubmit);
  const saveButton = document.getElementById("saveConfiguration");
  if (saveButton) {
    saveButton.addEventListener("click", exportThemes);
  }
  setupMedicineCatalog();
  setupPriorityCatalog();
  setupBackOfficeTabs();

  const modal = document.getElementById("modalOverlay");
  const closeModalButton = document.getElementById("closeModal");
  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeModal);
  }
  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.classList.contains("modal__backdrop")) {
        closeModal();
      }
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeModalContent) {
      closeModal();
    }
  });
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

async function init() {
  buildMenu();
  await refreshCorruptionIndexData();
  await createMap();
  buildLegend();
  setupBurger();
  buildBackOffice();
  setupBackOffice();
  setupInfoModal();
  setupZoomControls();
  selectTheme(state.currentTheme);
}

window.addEventListener("DOMContentLoaded", init);
