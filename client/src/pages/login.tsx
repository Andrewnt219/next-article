import React, { ReactElement } from "react";
import styled from "styled-components";

import { MainLayout } from "../components/layout/MainLayout";
import { LoginForm } from "../components/login/LoginForm";

type Props = {};

function Login({}: Props): ReactElement {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export default Login;
