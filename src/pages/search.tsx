import _ from "lodash";
import { renderArticles } from "@components/homepage/ArticleCards";
import { EverythingFilter } from "@components/searchPage/EverythingFilter";
import {
  Article,
  EverythingApiRequest,
  EverythingApiResponse,
} from "@src/@types/newsapi";
import Axios, { AxiosError } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { MainLayout } from "../components/layout/MainLayout";

const Search = () => {
  /* handle data fetching */
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFetchingArticles, setIsFetchingArticles] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsFetchingArticles(true);

        const { data } = await Axios.get<EverythingApiResponse>(
          "/api/everything",
          {
            params: router.query,
          }
        );

        setArticles(data.articles);
      } catch (error) {
        setError((error as AxiosError).message);
      } finally {
        setIsFetchingArticles(false);
      }
    };

    if (!_.isEmpty(router.query)) {
      fetchArticles();
    }
  }, [router.query]);

  /* Handle submit queries */
  const onSubmit = async (params: EverythingApiRequest) => {
    router.push(
      {
        pathname: router.pathname,
        query: params,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <MainLayout>
      <Head>
        <title key="title">Search | Dooee</title>
        <meta
          name="description"
          content="Search for any articles, dozen of filtering tools for the most accurate results"
        />
      </Head>

      <EverythingFilter isFetching={isFetchingArticles} onSubmit={onSubmit} />

      {articles && renderArticles(articles)}
      {error && <p>{error}</p>}
    </MainLayout>
  );
};

export default Search;
