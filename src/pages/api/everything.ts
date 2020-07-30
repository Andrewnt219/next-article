import {
  EverythingApiRequest,
  EverythingApiResponse,
} from "@src/@types/newsapi";
import { fetchEverything } from "@src/helpers/newsapi.helpers";

import { NextApiHandler } from "next";

const searchHandler: NextApiHandler<EverythingApiResponse | string> = async (
  req,
  res
) => {
  const { method, query } = req;

  const params: EverythingApiRequest = {
    ...query,
  };
  const response = await fetchEverything(params);

  switch (method) {
    case "GET":
      if (typeof response === "string") {
        return res.status(404).end(response);
      }

      return res.status(200).json(response);

    default:
      return res.status(405).end("Only GET");
  }
};

export default searchHandler;
