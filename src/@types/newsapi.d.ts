export declare type EverythingApiResponse = {
  status: string;
  totalResults: number;
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

export declare type EverythingApiRequest = {
  /**
   * @option Surround phrases with quotes (") for exact match.
   * @option Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
   * @option Prepend words that must not appear with a - symbol. Eg: -bitcoin
   * @option Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
   */
  q: string;
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
  language?:
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
  pageSize?: number;

  /**
   * @description Use this to page through the results.
   */
  page?: number;
};

export declare type Article = {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

declare type Source = {
  id: string | null;
  name: string;
};
