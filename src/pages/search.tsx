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
import styled from "styled-components";

const Search = () => {
  /* handle data fetching */
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
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
        setError(error as AxiosError);
      } finally {
        setIsFetchingArticles(false);
      }
    };

    if (!_.isEmpty(router.query)) {
      fetchArticles();
    }
  }, [router.query]);

  /* Handle submit queries */
  const updateUrlQueries = (params: EverythingApiRequest) => {
    router.push(
      {
        pathname: router.pathname,
        query: params,
      },
      undefined,
      { shallow: true }
    );
  };

  const onSubmit = (params: EverythingApiRequest) => {
    updateUrlQueries(params);
  };

  /* UI */
  const searchTerm = router.query.q;

  return (
    <MainLayout>
      <Head>
        <title key="title">Search | Dooee</title>
        <meta
          name="description"
          content="Search for any articles, dozen of filtering tools for the most accurate results"
        />
      </Head>

      <FilterContainer>
        <EverythingFilter isFetching={isFetchingArticles} onSubmit={onSubmit} />
      </FilterContainer>

      {searchTerm && <Heading>Result for "{searchTerm}"</Heading>}
      {articles && renderArticles(articles)}

      {error && <p>{error.message}</p>}
    </MainLayout>
  );
};

type FilterContainerProps = {};
const FilterContainer = styled.div<FilterContainerProps>`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 2rem 3rem 2rem;
`;

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
  margin-bottom: 2rem;
  text-align: center;
`;

export default Search;
