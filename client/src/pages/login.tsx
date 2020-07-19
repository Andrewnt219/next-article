import React, { ReactElement } from "react";
import styled from "styled-components";
import { TextField } from "../components/form/TextField";
import { MainLayout } from "../components/layout/MainLayout";

type Props = {};

function Login({}: Props): ReactElement {
  return (
    <MainLayout pageTitle="LOGIN">
      <TextField label="Username" />
    </MainLayout>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export default Login;
