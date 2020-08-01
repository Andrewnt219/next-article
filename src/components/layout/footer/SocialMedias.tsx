import React, { ReactElement } from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { SocialMedia } from "../../ui/SocialMedia";

type Props = {};
function SocialMedias(): ReactElement {
  return (
    <Container>
      <SocialMedia
        href="https://github.com/Andrewnt219"
        fillColor="#6f42c1"
        ariaLabel="Link to GitHub"
      >
        <GitHubIcon />
      </SocialMedia>

      <SocialMedia
        href="https://www.linkedin.com/in/andrewnt219/"
        fillColor="#0E76A8"
        ariaLabel="Link to LinkedIn"
      >
        <LinkedInIcon />
      </SocialMedia>

      <SocialMedia
        href="https://www.facebook.com/phong.nguyentuan.108"
        fillColor="#3B5998"
        ariaLabel="Link to Facebook"
      >
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
