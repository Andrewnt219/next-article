import Head from "next/head";
import React, { ReactElement } from "react";
import styled from "styled-components";
import LoginHumanSvg from "../../public/svg/login.svg";
import { LoginForm } from "../components/auth/LoginForm";
import { AuthLayout } from "../components/layout/AuthLayout";

import { MainLayout } from "../components/layout/MainLayout";

type Props = {};

function Login({}: Props): ReactElement {
  return (
    <MainLayout>
      <Head>
        <title key="title">Login | Dooee</title>
        <meta
          name="description"
          content="Signing in to Dooee for hundreds of free online English courses"
        />
      </Head>
      <AuthLayout.Container>
        <AuthLayout.SvgContainer>
          <LoginHumanSvg />
        </AuthLayout.SvgContainer>

        <LoginForm />
      </AuthLayout.Container>
    </MainLayout>
  );
}

export default Login;
