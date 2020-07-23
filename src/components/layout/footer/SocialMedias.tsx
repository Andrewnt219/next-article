import React, { ReactElement } from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { SocialMedia } from "../../ui/SocialMedia";

type Props = {};
function SocialMedias({}: Props): ReactElement {
  return (
    <Container>
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
const Container = styled.div<ContainerProps>`
  grid-area: social-medias;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export { SocialMedias };
