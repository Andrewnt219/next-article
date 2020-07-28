import { Article } from "@src/@types/newsapi";
import React, { ReactElement } from "react";
import styled, { css } from "styled-components";

type Props = {
  article: Article;
};

function ArticleCard({ article }: Props): ReactElement {
  const {
    title,
    urlToImage,
    publishedAt,
    source: { name: publisher },
    url,
    description,
  } = article;

  return (
    <Container>
      {urlToImage ? (
        <Image src={urlToImage} loading="lazy" alt={title} />
      ) : (
        <Line />
      )}

      <Title>
        <ArticleLink href={url}>{title}</ArticleLink>
      </Title>

      <ArticleInfo>{publisher}</ArticleInfo>
      <ArticleInfo>{new Date(publishedAt).toLocaleDateString()}</ArticleInfo>

      <Content>{description}</Content>
    </Container>
  );
}

const lineCss = css`
  display: block;
  height: 0.25rem;
  width: 5rem;
  background: ${(p) => p.theme.palette.primary.main};

  margin-bottom: 2rem;
`;

const containerPaddingLeft = "2rem";

type ContainerProps = {};
const Container = styled.article<ContainerProps>`
  font-size: 1.2rem;
  padding: 2rem ${containerPaddingLeft} 4rem 2rem;
  border-radius: ${(p) => p.theme.shape.borderRadius}px;

  transition: all 200ms;
  position: relative;

  :hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  :active {
    background: #eee;
  }

  ::after {
    ${lineCss};
    margin: 0;
    content: "";
    position: absolute;
    bottom: 0;
    left: ${containerPaddingLeft};
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.values.md}px) {
    ::after {
      display: none;
    }
  }
`;

type TitleProps = {};
const Title = styled.h5<TitleProps>`
  font-size: larger;
  line-height: 2rem;
  margin: 1rem 0;

  color: ${(p) => p.theme.palette.common.black};
`;

type ArticleLinkProps = {};
const ArticleLink = styled.a<ArticleLinkProps>`
  font-family: inherit;
  font-size: inherit;
  color: inherit;

  :visited {
    color: ${(p) => p.theme.palette.grey["700"]};
  }
`;

type LineProps = {};
const Line = styled.div<LineProps>`
  display: none;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.values.md}px) {
    ${lineCss}
    background: ${(p) => p.theme.palette.primary.main};
  }
`;

type ImageProps = {};
const Image = styled.img<ImageProps>`
  width: 100%;
  height: 15rem;

  object-fit: cover;
`;

type ContentProps = {};
const Content = styled.p<ContentProps>`
  margin-top: 2rem;
  color: ${(p) => p.theme.palette.grey["A700"]};
`;

type ArticleInfoProps = {};
const ArticleInfo = styled.span<ArticleInfoProps>`
  display: inline-block;
  padding: 0.5rem;
  margin-right: 1rem;

  border: 1px solid #ccc;
  border-radius: 1rem;
`;

export { ArticleCard };
