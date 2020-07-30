import React, { ReactElement, useCallback, useRef, useState } from "react";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import _ from "lodash";

import { MainLayout } from "@components/layout/MainLayout";
import {
  Article,
  TopHeadlinesApiRequest,
  TopHeadlinesApiResponse,
} from "@src/@types/newsapi";
import { fetchTopHeadlines } from "@src/helpers/newsapi.helpers";
import { ArticleCards } from "@components/homepage/ArticleCards";
import { FilterBoard } from "@components/homepage/FilterBoard";

import { useRouter } from "next/router";
import FilterListIcon from "@material-ui/icons/FilterList";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { useClickOutside } from "@src/hooks/useClickOutside";
import { useRouteChange, RouteChangeHandlers } from "@src/hooks/useRouteChange";

/**
 * @description render te Homepage and fetch (filtered) topHeadlines
 * @param data topHeadlines article or an error message
 */
const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  /* handle route change and data fetching */
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

  /* Filter form handling */
  const [showFilter, setShowFilter] = useState(false);

  const onSubmit = async (params: TopHeadlinesApiRequest) => {
    router.push({
      pathname: router.pathname,
      query: params,
    });
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

      <FilterContainer ref={ref}>
        <IconButton aria-label="filter icon" onClick={onFilterIconClicked}>
          <FilterListIcon />
        </IconButton>

        {showFilter && (
          <CustomFilterBoard
            isFetching={isFetchingArticles}
            onSubmit={onSubmit}
          />
        )}
      </FilterContainer>

      {typeof data === "string"
        ? renderError(data)
        : renderArticles(data.articles)}
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
 * @description renders a list of headlines
 * @param data the data needs rendering
 */
function renderArticles(
  articles: TopHeadlinesApiResponse["articles"]
): ReactElement {
  const uniqueArticles = _.uniqBy(
    articles,
    (article: Article) => article.title
  );

  return <ArticleCards articles={uniqueArticles} />;
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
