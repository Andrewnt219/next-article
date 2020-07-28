import React, { ReactElement } from "react";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { MainLayout } from "@components/layout/MainLayout";
import {
  TopHeadlinesApiRequest,
  TopHeadlinesApiResponse,
} from "@src/@types/newsapi";
import { fetchTopHeadlines } from "@src/helpers/newsapi.helpers";
import { ArticleCard } from "@components/homepage/ArticleCard";
import { ArticleCards } from "@components/homepage/ArticleCards";

/**
 * @description render te Homepage and fetch topHeadlines
 * @param data topHeadlines article or an error message
 */
const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainLayout>
      <Head>
        <title key="title">Welcome to NextArticle</title>
        <meta
          name="description"
          content="Welcome to NextArticle, all your favorite sources in one paper"
        />
      </Head>

      {renderData(data)}
    </MainLayout>
  );
};

/**
 * @description fetch topheadlines
 * @returns topHeadlines or an error message
 */
export const getServerSideProps: GetServerSideProps<{
  data: TopHeadlinesApiResponse | string;
}> = async () => {
  const params: TopHeadlinesApiRequest = {
    country: "ca",
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
function renderData(
  data: TopHeadlinesApiResponse | string
): ReactElement | ReactElement[] {
  if (typeof data === "string") {
    return <p>{data}</p>;
  }

  return <ArticleCards articles={data.articles} />;
}

export default Home;
