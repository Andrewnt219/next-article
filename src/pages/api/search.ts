import { AxiosError } from "axios";
import {
  EverythingApiRequest,
  EverythingApiResponse,
} from "./../../@types/newsapi.d";
import { everything } from "@src/apis/everything.api";
import { NextApiHandler } from "next";

const searchHandler: NextApiHandler = async (req, res) => {
  const { method, query } = req;

  const response = await fetchNews("redux");

  switch (method) {
    case "GET":
      if (typeof response === "string") {
        return res.status(404).end(response);
      }

      return res.status(200).json(response);

    default:
      break;
  }
};

export async function fetchNews(query: string) {
  const params: EverythingApiRequest = {
    q: query,
  };

  try {
    const { data } = await everything.get<EverythingApiResponse>("/", {
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    return (error as AxiosError).message;
  }
}

export default searchHandler;
