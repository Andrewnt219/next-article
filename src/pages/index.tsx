import React, { ReactElement } from "react";
import Head from "next/head";

import { MainLayout } from "../components/layout/MainLayout";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  TopHeadlinesApiRequest,
  TopHeadlinesApiResponse,
} from "@src/@types/newsapi";
import { fetchTopHeadlines } from "@src/helpers/newsapi.helpers";
import { ArticleCard } from "@components/homepage/ArticleCard";

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

function renderData(
  data: TopHeadlinesApiResponse | string
): ReactElement | ReactElement[] {
  if (typeof data === "string") {
    return <p>{data}</p>;
  } else {
    return data.articles.map((article) => {
      const {
        title,
        content,
        urlToImage,
        url,
        publishedAt,
        source: { name: sourceName },
      } = article;

      return (
        <ArticleCard
          key={url + sourceName}
          article={{
            content,
            publishedAt,
            title,
            imgUrl: urlToImage,
            url,
            publisher: sourceName,
          }}
        />
      );
    });
  }
}

export default Home;
