import Head from "next/head";
import React, { ReactElement } from "react";
import SignupHumanSvg from "../../public/svg/signup.svg";

import { MainLayout } from "../components/layout/MainLayout";
import { SignupForm } from "../components/auth/SignupForm";
import { AuthLayout } from "../components/layout/AuthLayout";

type Props = {};

function Signup({}: Props): ReactElement {
  return (
    <MainLayout>
      <Head>
        <title key="title">Signup | Dooee</title>
        <meta
          name="description"
          content="Register a new membership at Dooee for hundreds of free online English courses"
        />
      </Head>

      <AuthLayout.Container>
        <AuthLayout.SvgContainer>
          <SignupHumanSvg />
        </AuthLayout.SvgContainer>

        <SignupForm />
      </AuthLayout.Container>
    </MainLayout>
  );
}

export default Signup;
