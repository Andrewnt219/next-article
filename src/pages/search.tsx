import { renderArticles } from "@components/homepage/ArticleCards";
import { EverythingFilter } from "@components/searchPage/EverythingFilter";
import { FilterBoard } from "@components/ui/FilterBoard";
import {
  Article,
  EverythingApiRequest,
  EverythingApiResponse,
} from "@src/@types/newsapi";
import { RouteChangeHandlers, useRouteChange } from "@src/hooks/useRouteChange";
import Axios, { AxiosError } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

import { MainLayout } from "../components/layout/MainLayout";

const Search = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);

  /* handle route change and data fetching */
  const [error, setError] = useState<string | null>(null);
  const [isFetchingArticles, setIsFetchingArticles] = useState(false);
  const router = useRouter();

  const handleChangeComplete = useCallback(
    () => setIsFetchingArticles(false),
    []
  );
  const handleChangeStart = useCallback(() => setIsFetchingArticles(true), []);

  const routeChangeHandlers: RouteChangeHandlers = {
    handleChangeComplete,
    handleChangeStart,
    handleChangeError: handleChangeComplete,
  };
  useRouteChange(router, routeChangeHandlers);

  const onSubmit = async (params: EverythingApiRequest) => {
    try {
      setIsFetchingArticles(true);
      const { data } = await Axios.get<EverythingApiResponse>(
        "/api/everything",
        {
          params,
        }
      );

      setArticles(data.articles);
    } catch (error) {
      setError((error as AxiosError).message);
    } finally {
      setIsFetchingArticles(false);
    }

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

      <FilterBoard>
        <EverythingFilter isFetching={isFetchingArticles} onSubmit={onSubmit} />
      </FilterBoard>

      {articles && renderArticles(articles)}
      {error && <p>{error}</p>}
    </MainLayout>
  );
};

export default Search;
