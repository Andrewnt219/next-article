import Axios from "axios";
import { createApiPath } from "./base.api";

export const authApi = Axios.create({
  baseURL: createApiPath("auth"),
});
