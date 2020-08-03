import React, { ReactElement } from "react";
import styled from "styled-components";
import { Logo } from "../../ui/Logo";
import { FooterMenu } from "./FooterMenu";
import { SocialMedias } from "./SocialMedias";

type Props = {
  height: string;
};

function Footer({ height }: Props): ReactElement {
  return (
    <Container style={{ height }}>
      <FooterMenu />

      <SubContainer>
        <Logo height="5rem" />

        <Text>
          Made by Tuan Phong (Andrew) Nguyen with{" "}
          <span role="img" aria-label="heart">
            💗
          </span>
        </Text>

        <Text>
          API by{" "}
          <a
            style={{ color: "#fff", textDecoration: "underline" }}
            target="_blank"
            rel="noreferrer noopener"
            href="https://newsapi.org/"
          >
            NewsApi
          </a>
          . Icons by{" "}
          <a
            style={{ color: "#fff", textDecoration: "underline" }}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.freepik.com/"
          >
            Freepik
          </a>
          .
        </Text>
      </SubContainer>
      <SocialMedias />
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.footer<ContainerProps>`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;

  background: ${(p) => p.theme.palette.primary.dark};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  color: ${(p) => p.theme.palette.common.white};

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.span`
  margin-top: 1rem;
  display: block;
`;

export { Footer };
