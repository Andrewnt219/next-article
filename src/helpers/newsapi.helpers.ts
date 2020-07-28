import { everything } from "./../apis/everything.api";
import { AxiosError } from "axios";
import { topheadlines } from "./../apis/tophealines.api";
import {
  EverythingApiRequest,
  EverythingApiResponse,
  NewsApiError,
  TopHeadlinesApiRequest,
  TopHeadlinesApiResponse,
} from "@src/@types/newsapi";

export const fetchTopHeadlines = async (
  params: TopHeadlinesApiRequest
): Promise<TopHeadlinesApiResponse | string> => {
  try {
    const { data } = await topheadlines.get<TopHeadlinesApiResponse>("/", {
      params,
    });
    return data;
  } catch (error) {
    console.log("fetchTopHealines", error);
    return (
      (error as AxiosError<NewsApiError>).response?.data.message ??
      "Something went wrong"
    );
  }
};

export const fetchEverything = async (
  params: EverythingApiRequest
): Promise<EverythingApiResponse | string> => {
  try {
    const { data } = await everything.get<EverythingApiResponse>("/", {
      params,
    });
    return data;
  } catch (error) {
    console.log("fetchEverything", error);
    return (
      (error as AxiosError<NewsApiError>).response?.data.message ??
      "Something went wrong"
    );
  }
};
