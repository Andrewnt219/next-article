import Axios from "axios";

const BASE_API_URL = "http://localhost:3001/api/v1";

export function createApiPath(path: string): string {
  const hasSlash = path.startsWith("/");
  return BASE_API_URL + (hasSlash ? "" : "/") + path;
}

export const authApi = Axios.create({
  baseURL: BASE_API_URL,
});
