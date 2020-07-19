import React, { ReactElement } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useForm, UseFormMethods } from "react-hook-form";
import { Form } from "../ui/form/Form";
import { TextField } from "../ui/form/TextField";
import { SubmitButton } from "../ui/form/SubmitButton";

type Props = {};
type FormValues = {
  username: string;
  password: string;
};

function LoginForm({}: Props): ReactElement {
  const { register, handleSubmit, errors } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });
  return (
    <Form onSubmit={onSubmit}>
      <TextField
        id="login_username"
        label="Username"
        name="username"
        errors={errors}
        register={register({
          required: "Username is required!",
        })}
      />

      <TextField
        id="login_password"
        label="Password"
        name="password"
        errors={errors}
        register={register({
          required: "Password is required!",
          minLength: {
            value: 6,
            message: "Min 6",
          },
        })}
      />

      <SubmitButton>LOG IN</SubmitButton>
    </Form>
  );
}

export { LoginForm };
