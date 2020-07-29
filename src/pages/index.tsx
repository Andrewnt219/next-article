import React, { ReactElement, useRef, useState } from "react";
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
import FilterListIcon from "@material-ui/icons/FilterList";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { useClickOutside } from "@src/hooks/useClickOutside";

/**
 * @description render te Homepage and fetch (filtered) topHeadlines
 * @param data topHeadlines article or an error message
 */
const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  /* Fetching data */
  let fetchedArticles: TopHeadlinesApiResponse["articles"] | null = null;
  let error: string | null = null;

  if (typeof data !== "string") fetchedArticles = data.articles;
  else error = data;

  const [isFetchingArticles, setIsFetchingArticles] = useState(false);
  const [errorMessage, setErrorMessage] = useState(error);
  const [articles, setArticles] = useState(fetchedArticles);

  /* Filter form handling */
  const [showFilter, setShowFilter] = useState(false);
  const router = useRouter();
  const onSubmit = async (params: TopHeadlinesApiRequest) => {
    try {
      setIsFetchingArticles(true);
      const { data } = await Axios.get<TopHeadlinesApiResponse>(
        "/api/topHeadlines",
        {
          params,
        }
      );

      setArticles(data.articles);
      setIsFetchingArticles(false);

      // shallow renders the url
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

  /* FilterBoard appear controller */
  const onFilterIconClicked = () => {
    setShowFilter((show) => !show);
  };
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setShowFilter(false));

  return (
    <MainLayout>
      <Head>
        <title key="title">Welcome to NextArticle</title>
        <meta
          name="description"
          content="Welcome to NextArticle, all your favorite sources in one paper"
        />
      </Head>

      <FilterContainer>
        <IconButton aria-label="filter icon" onClick={onFilterIconClicked}>
          <FilterListIcon />
        </IconButton>

        {showFilter && (
          <CustomFilterBoard
            ref={ref}
            isFetching={isFetchingArticles}
            onSubmit={onSubmit}
          />
        )}
      </FilterContainer>

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

type FilterContainerProps = {};
const FilterContainer = styled.div<FilterContainerProps>`
  position: relative;
`;

type CustomFilterBoardProps = {};
const CustomFilterBoard = styled(FilterBoard)<CustomFilterBoardProps>`
  position: absolute;
  left: 0;
  top: 3.5rem;
  background: #fff;
  z-index: ${(p) => p.theme.zIndex.modal};
`;

export default Home;
