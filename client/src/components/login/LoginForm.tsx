import React, { ReactElement } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form/Form";
import { TextField } from "../ui/form/TextField";

type Props = {};
type FormValues = {
  username: string;
  password: string;
};

function LoginForm({}: Props): ReactElement {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });
  return (
    <Form onSubmit={onSubmit}>
      <TextField
        id="login_username"
        label="Username"
        name="username"
        register={register}
      />

      <TextField
        id="login_password"
        label="Password"
        name="password"
        register={register}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Form>
  );
}

export { LoginForm };
