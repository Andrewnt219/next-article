import {
  CategoryName,
  CountryCode,
  Language,
  SortOption,
  Source,
  SourceId,
} from "@src/@types/newsapi";

export const categoryNames: CategoryName[] = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

export const sortOptions: SortOption[] = [
  "relevancy",
  "popularity",
  "publishedAt",
];

export const languages: Language[] = [
  "ar",
  "de",
  "en",
  "es",
  "fr",
  "he",
  "it",
  "nl",
  "no",
  "pt",
  "ru",
  "se",
  "ud",
  "zh",
];

export const countryCodes: CountryCode[] = [
  "ae",
  "ar",
  "at",
  "au",
  "be",
  "bg",
  "br",
  "ca",
  "ch",
  "cn",
  "co",
  "cu",
  "cz",
  "de",
  "eg",
  "fr",
  "gb",
  "gr",
  "hk",
  "hu",
  "id",
  "ie",
  "il",
  "in",
  "it",
  "jp",
  "kr",
  "lt",
  "lv",
  "ma",
  "mx",
  "my",
  "ng",
  "nl",
  "no",
  "nz",
  "ph",
  "pl",
  "pt",
  "ro",
  "rs",
  "ru",
  "sa",
  "se",
  "sg",
  "si",
  "sk",
  "th",
  "tr",
  "tw",
  "ua",
  "us",
  "ve",
  "za",
];

export const sources: (Source & { id: SourceId })[] = [
  {
    id: "abc-news",
    name: "ABC News",
  },
  {
    id: "abc-news-au",
    name: "ABC News (AU)",
  },
  {
    id: "aftenposten",
    name: "Aftenposten",
  },
  {
    id: "al-jazeera-english",
    name: "Al Jazeera English",
  },
  {
    id: "ansa",
    name: "ANSA.it",
  },
  {
    id: "argaam",
    name: "Argaam",
  },
  {
    id: "ars-technica",
    name: "Ars Technica",
  },
  {
    id: "ary-news",
    name: "Ary News",
  },
  {
    id: "associated-press",
    name: "Associated Press",
  },
  {
    id: "australian-financial-review",
    name: "Australian Financial Review",
  },
  {
    id: "axios",
    name: "Axios",
  },
  {
    id: "bbc-news",
    name: "BBC News",
  },
  {
    id: "bbc-sport",
    name: "BBC Sport",
  },
  {
    id: "bild",
    name: "Bild",
  },
  {
    id: "blasting-news-br",
    name: "Blasting News (BR)",
  },
  {
    id: "bleacher-report",
    name: "Bleacher Report",
  },
  {
    id: "bloomberg",
    name: "Bloomberg",
  },
  {
    id: "breitbart-news",
    name: "Breitbart News",
  },
  {
    id: "business-insider",
    name: "Business Insider",
  },
  {
    id: "business-insider-uk",
    name: "Business Insider (UK)",
  },
  {
    id: "buzzfeed",
    name: "Buzzfeed",
  },
  {
    id: "cbc-news",
    name: "CBC News",
  },
  {
    id: "cbs-news",
    name: "CBS News",
  },
  {
    id: "cnn",
    name: "CNN",
  },
  {
    id: "cnn-es",
    name: "CNN Spanish",
  },
  {
    id: "crypto-coins-news",
    name: "Crypto Coins News",
  },
  {
    id: "der-tagesspiegel",
    name: "Der Tagesspiegel",
  },
  {
    id: "die-zeit",
    name: "Die Zeit",
  },
  {
    id: "el-mundo",
    name: "El Mundo",
  },
  {
    id: "engadget",
    name: "Engadget",
  },
  {
    id: "entertainment-weekly",
    name: "Entertainment Weekly",
  },
  {
    id: "espn",
    name: "ESPN",
  },
  {
    id: "espn-cric-info",
    name: "ESPN Cric Info",
  },
  {
    id: "financial-post",
    name: "Financial Post",
  },
  {
    id: "focus",
    name: "Focus",
  },
  {
    id: "football-italia",
    name: "Football Italia",
  },
  {
    id: "fortune",
    name: "Fortune",
  },
  {
    id: "four-four-two",
    name: "FourFourTwo",
  },
  {
    id: "fox-news",
    name: "Fox News",
  },
  {
    id: "fox-sports",
    name: "Fox Sports",
  },
  {
    id: "globo",
    name: "Globo",
  },
  {
    id: "google-news",
    name: "Google News",
  },
  {
    id: "google-news-ar",
    name: "Google News (Argentina)",
  },
  {
    id: "google-news-au",
    name: "Google News (Australia)",
  },
  {
    id: "google-news-br",
    name: "Google News (Brasil)",
  },
  {
    id: "google-news-ca",
    name: "Google News (Canada)",
  },
  {
    id: "google-news-fr",
    name: "Google News (France)",
  },
  {
    id: "google-news-in",
    name: "Google News (India)",
  },
  {
    id: "google-news-is",
    name: "Google News (Israel)",
  },
  {
    id: "google-news-it",
    name: "Google News (Italy)",
  },
  {
    id: "google-news-ru",
    name: "Google News (Russia)",
  },
  {
    id: "google-news-sa",
    name: "Google News (Saudi Arabia)",
  },
  {
    id: "google-news-uk",
    name: "Google News (UK)",
  },
  {
    id: "goteborgs-posten",
    name: "Göteborgs-Posten",
  },
  {
    id: "gruenderszene",
    name: "Gruenderszene",
  },
  {
    id: "hacker-news",
    name: "Hacker News",
  },
  {
    id: "handelsblatt",
    name: "Handelsblatt",
  },
  {
    id: "ign",
    name: "IGN",
  },
  {
    id: "il-sole-24-ore",
    name: "Il Sole 24 Ore",
  },
  {
    id: "independent",
    name: "Independent",
  },
  {
    id: "infobae",
    name: "Infobae",
  },
  {
    id: "info-money",
    name: "InfoMoney",
  },
  {
    id: "la-gaceta",
    name: "La Gaceta",
  },
  {
    id: "la-nacion",
    name: "La Nacion",
  },
  {
    id: "la-repubblica",
    name: "La Repubblica",
  },
  {
    id: "le-monde",
    name: "Le Monde",
  },
  {
    id: "lenta",
    name: "Lenta",
  },
  {
    id: "lequipe",
    name: "L'equipe",
  },
  {
    id: "les-echos",
    name: "Les Echos",
  },
  {
    id: "liberation",
    name: "Libération",
  },
  {
    id: "marca",
    name: "Marca",
  },
  {
    id: "mashable",
    name: "Mashable",
  },
  {
    id: "medical-news-today",
    name: "Medical News Today",
  },
  {
    id: "msnbc",
    name: "MSNBC",
  },
  {
    id: "mtv-news",
    name: "MTV News",
  },
  {
    id: "mtv-news-uk",
    name: "MTV News (UK)",
  },
  {
    id: "national-geographic",
    name: "National Geographic",
  },
  {
    id: "national-review",
    name: "National Review",
  },
  {
    id: "nbc-news",
    name: "NBC News",
  },
  {
    id: "news24",
    name: "News24",
  },
  {
    id: "new-scientist",
    name: "New Scientist",
  },
  {
    id: "news-com-au",
    name: "News.com.au",
  },
  {
    id: "newsweek",
    name: "Newsweek",
  },
  {
    id: "new-york-magazine",
    name: "New York Magazine",
  },
  {
    id: "next-big-future",
    name: "Next Big Future",
  },
  {
    id: "nfl-news",
    name: "NFL News",
  },
  {
    id: "nhl-news",
    name: "NHL News",
  },
  {
    id: "nrk",
    name: "NRK",
  },
  {
    id: "politico",
    name: "Politico",
  },
  {
    id: "polygon",
    name: "Polygon",
  },
  {
    id: "rbc",
    name: "RBC",
  },
  {
    id: "recode",
    name: "Recode",
  },
  {
    id: "reddit-r-all",
    name: "Reddit /r/all",
  },
  {
    id: "reuters",
    name: "Reuters",
  },
  {
    id: "rt",
    name: "RT",
  },
  {
    id: "rte",
    name: "RTE",
  },
  {
    id: "rtl-nieuws",
    name: "RTL Nieuws",
  },
  {
    id: "sabq",
    name: "SABQ",
  },
  {
    id: "spiegel-online",
    name: "Spiegel Online",
  },
  {
    id: "svenska-dagbladet",
    name: "Svenska Dagbladet",
  },
  {
    id: "t3n",
    name: "T3n",
  },
  {
    id: "talksport",
    name: "TalkSport",
  },
  {
    id: "techcrunch",
    name: "TechCrunch",
  },
  {
    id: "techcrunch-cn",
    name: "TechCrunch (CN)",
  },
  {
    id: "techradar",
    name: "TechRadar",
  },
  {
    id: "the-american-conservative",
    name: "The American Conservative",
  },
  {
    id: "the-globe-and-mail",
    name: "The Globe And Mail",
  },
  {
    id: "the-hill",
    name: "The Hill",
  },
  {
    id: "the-hindu",
    name: "The Hindu",
  },
  {
    id: "the-huffington-post",
    name: "The Huffington Post",
  },
  {
    id: "the-irish-times",
    name: "The Irish Times",
  },
  {
    id: "the-jerusalem-post",
    name: "The Jerusalem Post",
  },
  {
    id: "the-lad-bible",
    name: "The Lad Bible",
  },
  {
    id: "the-next-web",
    name: "The Next Web",
  },
  {
    id: "the-sport-bible",
    name: "The Sport Bible",
  },
  {
    id: "the-times-of-india",
    name: "The Times of India",
  },
  {
    id: "the-verge",
    name: "The Verge",
  },
  {
    id: "the-wall-street-journal",
    name: "The Wall Street Journal",
  },
  {
    id: "the-washington-post",
    name: "The Washington Post",
  },
  {
    id: "the-washington-times",
    name: "The Washington Times",
  },
  {
    id: "time",
    name: "Time",
  },
  {
    id: "usa-today",
    name: "USA Today",
  },
  {
    id: "vice-news",
    name: "Vice News",
  },
  {
    id: "wired",
    name: "Wired",
  },
  {
    id: "wired-de",
    name: "Wired.de",
  },
  {
    id: "wirtschafts-woche",
    name: "Wirtschafts Woche",
  },
  {
    id: "xinhua-net",
    name: "Xinhua Net",
  },
  {
    id: "ynet",
    name: "Ynet",
  },
];
