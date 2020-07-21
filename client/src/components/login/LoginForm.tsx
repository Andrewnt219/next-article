import React, { ReactElement } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { Form as BaseForm } from "../ui/form/Form";
import { TextField } from "../ui/form/TextField";

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

  const footer = (
    <>
      New to Dooee? <SignUpText>Sign up now</SignUpText>
    </>
  );

  return (
    <Form onSubmit={onSubmit} footer={footer} heading="Welcome Back!">
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

      <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
    </Form>
  );
}

type FormProps = {};
const Form = styled(BaseForm)<FormProps>`
  @media screen and (min-width: ${(p) => p.theme.breakpoints.values["md"]}px) {
    border-radius: 4px;
  }
`;

type SignUpTextProps = {};
const SignUpText = styled.a<SignUpTextProps>`
  display: inline-block;
  color: ${(p) => p.theme.palette.secondary.main};
  width: max-content;

  position: relative;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0.1px;
    height: 1px;
    background: currentColor;

    transition: all 200ms ease;
  }

  :hover ::after,
  :active ::after,
  :focus ::after {
    width: 100%;
  }
`;

type ForgotPasswordTextProps = {};
const ForgotPasswordText = styled(SignUpText)<ForgotPasswordTextProps>`
  display: block;
  margin-left: auto;
`;

export { LoginForm };
