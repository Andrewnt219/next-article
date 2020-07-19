import Button from "@material-ui/core/Button";
import React, { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { Form } from "../components/form/Form";
import { TextField } from "../components/form/TextField";
import { MainLayout } from "../components/layout/MainLayout";

type Props = {};
type FormValues = {
  username: string;
  password: string;
};

function Login({}: Props): ReactElement {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <MainLayout pageTitle="LOGIN">
      <Form onSubmit={onSubmit}>
        <TextField label="Username" name="username" register={register} />
        <TextField label="Password" name="password" register={register} />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    </MainLayout>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export default Login;
