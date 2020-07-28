import Axios, { AxiosInstance } from "axios";

const BASE_NEWS_API_URL = "http://newsapi.org/v2";

export function createApiPath(endpoint: string): string {
  const hasSlash = endpoint.startsWith("/");
  return BASE_NEWS_API_URL + (hasSlash ? "" : "/") + endpoint;
}

export function createNewsApi(
  endpoint: string,
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
