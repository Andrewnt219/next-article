import React, { ReactElement, useState } from "react";

import styled from "styled-components";
import { useForm } from "react-hook-form";

import { TextField } from "@components/ui/form/TextField";
import { AuthForm } from "./AuthForm";
import { SubmitButton } from "@components/ui/form/SubmitButton";
import { loginSchema } from "@src/schema/login.schema";
import { useDispatch } from "react-redux";
import { login } from "@src/features/authSlice";
import { yupResolver } from "@hookform/resolvers";

type Props = {};
export type LoginFormValues = {
  email: string;
  password: string;
};

function LoginForm({}: Props): ReactElement {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isValid },
  } = useForm<LoginFormValues>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });
  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = handleSubmit((data) => {
    dispatch(login(data));
  });

  const onShowPasswordClicked = () => {
    setPasswordIsShown((isShown) => !isShown);
  };

  const footer = (
    <>
      New to Dooee?{" "}
      <AuthForm.FooterText href="/signup">Sign up now</AuthForm.FooterText>
    </>
  );

  return (
    <AuthForm.Form onSubmit={onSubmit} footer={footer} heading="Welcome Back!">
      <TextField<LoginFormValues>
        register={register}
        type="email"
        id="login_email"
        label="Email"
        name="email"
        errors={errors}
      />

      <TextField<LoginFormValues>
        type={passwordIsShown ? "text" : "password"}
        id="login_password"
        label="Password"
        name="password"
        errors={errors}
        register={register}
      >
        <AuthForm.ShowPasswordIcon
          passwordIsShown={passwordIsShown}
          handleClick={onShowPasswordClicked}
        />
      </TextField>

      <ForgotPasswordText href="/forgot-password">
        Forgot Password?
      </ForgotPasswordText>

      <SubmitButton disabled={!isValid}>LOG IN</SubmitButton>
    </AuthForm.Form>
  );
}

type ForgotPasswordTextProps = {};
const ForgotPasswordText = styled(AuthForm.FooterText)<ForgotPasswordTextProps>`
  display: block;
  margin-left: auto;
`;

export { LoginForm };
