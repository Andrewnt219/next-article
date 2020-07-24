import Axios, { AxiosInstance } from "axios";

const BASE_NEWS_API_URL = "http://newsapi.org/v2";

export function createApiPath(path: string): string {
  const hasSlash = path.startsWith("/");
  return BASE_NEWS_API_URL + (hasSlash ? "" : "/") + path;
}

export function createNewsApi(
  path: string,
  extraConfig?: Record<string, string>
): AxiosInstance {
  return Axios.create({
    baseURL: createApiPath(path),
    params: {
      language: "en",
      apiKey: process.env.NEWSAPI,
      ...extraConfig,
    },
  });
}
