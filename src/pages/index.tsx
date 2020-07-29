import React, { ReactElement, useState } from "react";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { MainLayout } from "@components/layout/MainLayout";
import {
  TopHeadlinesApiRequest,
  TopHeadlinesApiResponse,
} from "@src/@types/newsapi";
import { fetchTopHeadlines } from "@src/helpers/newsapi.helpers";
import { ArticleCards } from "@components/homepage/ArticleCards";
import { FilterBoard } from "@components/homepage/FilterBoard";
import Axios, { AxiosError } from "axios";
import { useRouter } from "next/router";

/**
 * @description render te Homepage and fetch (filtered) topHeadlines
 * @param data topHeadlines article or an error message
 */
const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  let fetchedArticles: TopHeadlinesApiResponse["articles"] | null = null;
  let error: string | null = null;

  if (typeof data !== "string") fetchedArticles = data.articles;
  else error = data;

  const [errorMessage, setErrorMessage] = useState(error);
  const [articles, setArticles] = useState(fetchedArticles);
  const router = useRouter();

  const onSubmit = async (params: TopHeadlinesApiRequest) => {
    try {
      const { data } = await Axios.get<TopHeadlinesApiResponse>(
        "/api/topHeadlines",
        {
          params,
        }
      );

      setArticles(data.articles);

      router.push(
        {
          pathname: router.pathname,
          query: params,
        },
        undefined,
        { shallow: true }
      );
    } catch (error) {
      setErrorMessage((error as AxiosError).message);
    }
  };

  return (
    <MainLayout>
      <Head>
        <title key="title">Welcome to NextArticle</title>
        <meta
          name="description"
          content="Welcome to NextArticle, all your favorite sources in one paper"
        />
      </Head>
      <FilterBoard onSubmit={onSubmit} />

      {articles && renderArticles(articles)}
      {errorMessage && renderError(errorMessage)}
    </MainLayout>
  );
};

type ServerSideProps = {
  data: TopHeadlinesApiResponse | string;
};

/**
 * @description fetch topheadlines
 * @returns topHeadlines or an error message
 */
export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  context
) => {
  const params: TopHeadlinesApiRequest = {
    ...context.query,
  };
  const data = await fetchTopHeadlines(params);

  return {
    props: {
      data,
    },
  };
};

/**
 * @description renders a list of headlines or an error message
 * @param data the data needs rendering
 */
function renderArticles(
  articles: TopHeadlinesApiResponse["articles"]
): ReactElement | ReactElement[] {
  return <ArticleCards articles={articles} />;
}

function renderError(message: string) {
  return <p>{message}</p>;
}

export default Home;
