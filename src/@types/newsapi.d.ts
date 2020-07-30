export declare type NewsApiEndPoints =
  | "top-headlines"
  | "everything"
  | "sources";

export declare type TopHeadlinesApiRequest = {
  /**
   * @description The 2-letter ISO 3166-1 code of the country you want to get headlines for. You can't mix this param with the `sources` param.
   */

  country?: CountryCode;

  /**
   * @description The category you want to get headlines for. You can't mix this param with the `sources` param.
   */
  category?: CategoryName;

  /**
   * @description A comma-seperated string of identifiers for the news sources or blogs you want headlines from.
   * Use the /sources endpoint to locate these programmatically or look at the sources index.
   * You can't mix this param with the country or category params.
   */
  sources?: string;

  /**
   * @description Keywords or a phrase to search for.
   */
  q?: string;

  /**
   * @description The number of results to return per page (request).
   * 20 is the default,
   * 100 is the maximum.
   */
  pageSize?: string;

  /**
   * @description Use this to page through the results if the total results found is greater than the page size.
   */
  page?: string;
};

export declare type TopHeadlinesApiResponse = {
  status: string;
  totalResults: string;
  articles: Article[];
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export declare type EverythingApiResponse = TopHeadlinesApiResponse;

export declare type EverythingApiRequest = {
  /**
   * @option Surround phrases with quotes (") for exact match.
   * @option Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
   * @option Prepend words that must not appear with a - symbol. Eg: -bitcoin
   * @option Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
   */
  q?: string;
  /**
   * @option Surround phrases with quotes (") for exact match.
   * @option Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
   * @option Prepend words that must not appear with a - symbol. Eg: -bitcoin
   * @option Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
   */
  qInTitle?: string;

  /**
   * @description A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from.
   */
  sources?: string;

  /**
   * @description A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.
   */
  domains?: string;

  /**
   * @description A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to remove from the results.
   */
  excludeDomains?: string;

  /**
   * @description A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2020-07-24 or 2020-07-24T21:19:33). Default: the oldest according to your plan.
   */
  from?: string;

  /**
   * @description A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2020-07-24 or 2020-07-24T21:19:33). Default: the newest according to your plan.
   */
  to?: string;

  /**
   * @description Default: all languages returned.
   */
  language?: Language;

  /**
   * @param relevancy articles more closely related to q come first.
   * @param popularity articles from popular sources and publishers come first
   * @param publishedAt newest articles come first
   * @default publishedAt
   */
  sortBy?: "relevancy" | "popularity" | "publishedAt";

  /**
   * @description The number of results to return per page
   * @default 20
   * @max 100
   */
  pageSize?: string;

  /**
   * @description Use this to page through the results.
   */
  page?: string;
};

export declare type NewsApiError = {
  status: string;
  code: string;
  message: string;
};

export declare type Article = {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

declare type Source = {
  id: SourceId | null;
  name: SourceName;
};

declare type Language =
  | "ar"
  | "de"
  | "en"
  | "es"
  | "fr"
  | "he"
  | "it"
  | "nl"
  | "no"
  | "pt"
  | "ru"
  | "se"
  | "ud"
  | "zh";

declare type CategoryName =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

declare type CountryCode =
  | "ae"
  | "ar"
  | "at"
  | "au"
  | "be"
  | "bg"
  | "br"
  | "ca"
  | "ch"
  | "cn"
  | "co"
  | "cu"
  | "cz"
  | "de"
  | "eg"
  | "fr"
  | "gb"
  | "gr"
  | "hk"
  | "hu"
  | "id"
  | "ie"
  | "il"
  | "in"
  | "it"
  | "jp"
  | "kr"
  | "lt"
  | "lv"
  | "ma"
  | "mx"
  | "my"
  | "ng"
  | "nl"
  | "no"
  | "nz"
  | "ph"
  | "pl"
  | "pt"
  | "ro"
  | "rs"
  | "ru"
  | "sa"
  | "se"
  | "sg"
  | "si"
  | "sk"
  | "th"
  | "tr"
  | "tw"
  | "ua"
  | "us"
  | "ve"
  | "za";

declare type SourceId =
  | "abc-news"
  | "abc-news-au"
  | "aftenposten"
  | "al-jazeera-english"
  | "ansa"
  | "argaam"
  | "ars-technica"
  | "ary-news"
  | "associated-press"
  | "australian-financial-review"
  | "axios"
  | "bbc-news"
  | "bbc-sport"
  | "bild"
  | "blasting-news-br"
  | "bleacher-report"
  | "bloomberg"
  | "breitbart-news"
  | "business-insider"
  | "business-insider-uk"
  | "buzzfeed"
  | "cbc-news"
  | "cbs-news"
  | "cnn"
  | "cnn-es"
  | "crypto-coins-news"
  | "der-tagesspiegel"
  | "die-zeit"
  | "el-mundo"
  | "engadget"
  | "entertainment-weekly"
  | "espn"
  | "espn-cric-info"
  | "financial-post"
  | "focus"
  | "football-italia"
  | "fortune"
  | "four-four-two"
  | "fox-news"
  | "fox-sports"
  | "globo"
  | "google-news"
  | "google-news-ar"
  | "google-news-au"
  | "google-news-br"
  | "google-news-ca"
  | "google-news-fr"
  | "google-news-in"
  | "google-news-is"
  | "google-news-it"
  | "google-news-ru"
  | "google-news-sa"
  | "google-news-uk"
  | "goteborgs-posten"
  | "gruenderszene"
  | "hacker-news"
  | "handelsblatt"
  | "ign"
  | "il-sole-24-ore"
  | "independent"
  | "infobae"
  | "info-money"
  | "la-gaceta"
  | "la-nacion"
  | "la-repubblica"
  | "le-monde"
  | "lenta"
  | "lequipe"
  | "les-echos"
  | "liberation"
  | "marca"
  | "mashable"
  | "medical-news-today"
  | "msnbc"
  | "mtv-news"
  | "mtv-news-uk"
  | "national-geographic"
  | "national-review"
  | "nbc-news"
  | "news24"
  | "new-scientist"
  | "news-com-au"
  | "newsweek"
  | "new-york-magazine"
  | "next-big-future"
  | "nfl-news"
  | "nhl-news"
  | "nrk"
  | "politico"
  | "polygon"
  | "rbc"
  | "recode"
  | "reddit-r-all"
  | "reuters"
  | "rt"
  | "rte"
  | "rtl-nieuws"
  | "sabq"
  | "spiegel-online"
  | "svenska-dagbladet"
  | "t3n"
  | "talksport"
  | "techcrunch"
  | "techcrunch-cn"
  | "techradar"
  | "the-american-conservative"
  | "the-globe-and-mail"
  | "the-hill"
  | "the-hindu"
  | "the-huffington-post"
  | "the-irish-times"
  | "the-jerusalem-post"
  | "the-lad-bible"
  | "the-next-web"
  | "the-sport-bible"
  | "the-times-of-india"
  | "the-verge"
  | "the-wall-street-journal"
  | "the-washington-post"
  | "the-washington-times"
  | "time"
  | "usa-today"
  | "vice-news"
  | "wired"
  | "wired-de"
  | "wirtschafts-woche"
  | "xinhua-net"
  | "ynet";

declare type SourceName =
  | "ABC News"
  | "ABC News (AU)"
  | "Aftenposten"
  | "Al Jazeera English"
  | "ANSA.it"
  | "Argaam"
  | "Ars Technica"
  | "Ary News"
  | "Associated Press"
  | "Australian Financial Review"
  | "Axios"
  | "BBC News"
  | "BBC Sport"
  | "Bild"
  | "Blasting News (BR)"
  | "Bleacher Report"
  | "Bloomberg"
  | "Breitbart News"
  | "Business Insider"
  | "Business Insider (UK)"
  | "Buzzfeed"
  | "CBC News"
  | "CBS News"
  | "CNN"
  | "CNN Spanish"
  | "Crypto Coins News"
  | "Der Tagesspiegel"
  | "Die Zeit"
  | "El Mundo"
  | "Engadget"
  | "Entertainment Weekly"
  | "ESPN"
  | "ESPN Cric Info"
  | "Financial Post"
  | "Focus"
  | "Football Italia"
  | "Fortune"
  | "FourFourTwo"
  | "Fox News"
  | "Fox Sports"
  | "Globo"
  | "Google News"
  | "Google News (Argentina)"
  | "Google News (Australia)"
  | "Google News (Brasil)"
  | "Google News (Canada)"
  | "Google News (France)"
  | "Google News (India)"
  | "Google News (Israel)"
  | "Google News (Italy)"
  | "Google News (Russia)"
  | "Google News (Saudi Arabia)"
  | "Google News (UK)"
  | "Göteborgs-Posten"
  | "Gruenderszene"
  | "Hacker News"
  | "Handelsblatt"
  | "IGN"
  | "Il Sole 24 Ore"
  | "Independent"
  | "Infobae"
  | "InfoMoney"
  | "La Gaceta"
  | "La Nacion"
  | "La Repubblica"
  | "Le Monde"
  | "Lenta"
  | "L'equipe"
  | "Les Echos"
  | "Libération"
  | "Marca"
  | "Mashable"
  | "Medical News Today"
  | "MSNBC"
  | "MTV News"
  | "MTV News (UK)"
  | "National Geographic"
  | "National Review"
  | "NBC News"
  | "News24"
  | "New Scientist"
  | "News.com.au"
  | "Newsweek"
  | "New York Magazine"
  | "Next Big Future"
  | "NFL News"
  | "NHL News"
  | "NRK"
  | "Politico"
  | "Polygon"
  | "RBC"
  | "Recode"
  | "Reddit /r/all"
  | "Reuters"
  | "RT"
  | "RTE"
  | "RTL Nieuws"
  | "SABQ"
  | "Spiegel Online"
  | "Svenska Dagbladet"
  | "T3n"
  | "TalkSport"
  | "TechCrunch"
  | "TechCrunch (CN)"
  | "TechRadar"
  | "The American Conservative"
  | "The Globe And Mail"
  | "The Hill"
  | "The Hindu"
  | "The Huffington Post"
  | "The Irish Times"
  | "The Jerusalem Post"
  | "The Lad Bible"
  | "The Next Web"
  | "The Sport Bible"
  | "The Times of India"
  | "The Verge"
  | "The Wall Street Journal"
  | "The Washington Post"
  | "The Washington Times"
  | "Time"
  | "USA Today"
  | "Vice News"
  | "Wired"
  | "Wired.de"
  | "Wirtschafts Woche"
  | "Xinhua Net"
  | "Ynet";
