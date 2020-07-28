import { Link } from "@components/navigation/Link";
import React, { ReactElement } from "react";
import styled from "styled-components";

type Props = {
  article: {
    title: string;
    imgUrl: string;
    content: string;
    publisher: string;
    publishedAt: string;
    url: string;
  };
};

function ArticleCard({ article }: Props): ReactElement {
  const { title, imgUrl, content, publishedAt, publisher, url } = article;

  return (
    <Container>
      <Title>
        <a href={url}>{title}</a>
      </Title>
      <Image src={imgUrl} />
      <Content>{content}</Content>
      <ArticleInfo>{publishedAt}</ArticleInfo>
      <ArticleInfo>{publisher}</ArticleInfo>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type TitleProps = {};
const Title = styled.h5<TitleProps>``;

type ImageProps = {};
const Image = styled.img<ImageProps>``;

type ContentProps = {};
const Content = styled.p<ContentProps>``;

type ArticleInfoProps = {};
const ArticleInfo = styled.span<ArticleInfoProps>``;

export { ArticleCard };
