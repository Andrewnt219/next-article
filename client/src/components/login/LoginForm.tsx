import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import { useForm, UseFormMethods } from "react-hook-form";
import { Form as BaseForm } from "../ui/form/Form";
import { TextField } from "../ui/form/TextField";
import { SubmitButton } from "../ui/form/SubmitButton";
import { Logo } from "../ui/Logo";
import { Hidden } from "@material-ui/core";

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
      <Header>
        <Hidden smDown implementation="css">
          <Logo height="2rem" />
        </Hidden>
      </Header>

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

      <SubmitButton>LOG IN</SubmitButton>

      <Text>
        New to Dooee? <SignUpText>Sign up now</SignUpText>
      </Text>
    </Form>
  );
}

type FormProps = {};
const Form = styled(BaseForm)<FormProps>`
  max-width: 25rem;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.values["md"]}px) {
    padding: 2rem 2rem 4rem 2rem;
    margin-left: auto;
    border: 1px solid black;
    border-radius: 4px;
  }
`;

type HeaderProps = {};
const Header = styled.div<HeaderProps>`
  display: flex;
  justify-content: center;
`;

type WelcomeTextProps = {};
const WelcomeText = styled.span<WelcomeTextProps>``;

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

  :hover ::after {
    width: 100%;
  }
`;

type TextProps = {};
const Text = styled.span<TextProps>`
  display: block;
  text-align: center;
`;

type ForgotPasswordTextProps = {};
const ForgotPasswordText = styled(SignUpText)<ForgotPasswordTextProps>`
  display: block;
  margin-left: auto;
`;

export { LoginForm };
