import { NewsApiEndPoints } from "@src/@types/newsapi";
import Axios, { AxiosInstance } from "axios";

const BASE_NEWS_API_URL = "http://newsapi.org/v2";

/**
 * @description create a baseUrl for newsapi
 * @param endpoint the appended newsapi endpoints
 */
export function createApiPath(endpoint: NewsApiEndPoints): string {
  const hasSlash = endpoint.startsWith("/");
  return BASE_NEWS_API_URL + (hasSlash ? "" : "/") + endpoint;
}

/**
 * @returns an axios instance with preconfigured newsapi key, en language + custom config
 * @param endpoint the appended newsapi endpoints
 * @param params additional config to axios params
 */
export function createNewsApi(
  endpoint: NewsApiEndPoints,
  params?: Record<string, string>
): AxiosInstance {
  return Axios.create({
    baseURL: createApiPath(endpoint),
    params: {
      language: "en",
      apiKey: process.env.NEWSAPI,
      ...params,
    },
  });
}
