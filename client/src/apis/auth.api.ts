import Axios from "axios";

export const authApi = Axios.create({
  baseURL: "http://localhost:3001/api/v1/auth/",
});
