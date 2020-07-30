import { Article } from "@src/@types/newsapi";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { ArticleCard } from "./ArticleCard";

type Props = {
  articles: Article[];
};

/**
 * @description renders a list of articles
 * @param articles an array of articles
 */
function ArticleCards({ articles }: Props): ReactElement {
  return <Container>{renderData(articles)}</Container>;
}

type ContainerProps = {};
const Container = styled.ul<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  row-gap: 2rem;
`;

/**
 * @description renders a list of articles
 */
function renderData(articles: Article[]): ReactElement | ReactElement[] {
  return articles.map((article, idx) => {
    return (
      <li key={idx}>
        <ArticleCard article={article} />
      </li>
    );
  });
}

export { ArticleCards };
