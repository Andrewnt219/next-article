import React, { ReactElement } from "react";
import styled from "styled-components";
import LoginHumanSvg from "../../public/static/svg/login.svg";

import { MainLayout } from "../components/layout/MainLayout";
import { LoginForm } from "../components/login/LoginForm";

type Props = {};

function Login({}: Props): ReactElement {
  return (
    <MainLayout>
      <Container>
        <SvgContainer>
          <LoginHumanSvg />
        </SvgContainer>

        <LoginForm />
      </Container>
    </MainLayout>
  );
}

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  display: flex;

  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: ${(p) => p.theme.breakpoints.values.md}px) {
  }
`;

type SvgContainerProps = {};
const SvgContainer = styled.div<SvgContainerProps>`
  display: none;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.values.md}px) {
    display: block;
    max-width: 30rem;

    svg {
      width: 100%;
      height: auto;
    }
  }
`;

export default Login;
