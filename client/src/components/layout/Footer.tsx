import React, { ReactElement } from "react";
import styled from "styled-components";
import { Logo } from "../ui/Logo";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { SocialMedia } from "../ui/SocialMedia";

type Props = {
  height: string;
};

function Footer({ height }: Props): ReactElement {
  return (
    <Container style={{ height }}>
      <Logo height="4rem" />
      <SocialMedia href="#" fillColor="#6f42c1">
        <GitHubIcon />
      </SocialMedia>

      <SocialMedia href="#" fillColor="#0E76A8">
        <LinkedInIcon />
      </SocialMedia>

      <SocialMedia href="#" fillColor="#3B5998">
        <FacebookIcon />
      </SocialMedia>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.footer<ContainerProps>`
  background: ${(p) => p.theme.palette.grey["50"]};
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export { Footer };
