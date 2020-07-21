import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { TextField } from "../ui/form/TextField";
import { AuthForm } from "./AuthForm";
import { SubmitButton } from "../ui/form/SubmitButton";

type Props = {};
type SignupFormValues = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function SignupForm({}: Props): ReactElement {
  const { register, handleSubmit, errors } = useForm<SignupFormValues>({
    mode: "onChange",
  });

  const [passwordIsShown, setPasswordIsShown] = useState(false);

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  const onShowPasswordClicked = () => {
    setPasswordIsShown((isShown) => !isShown);
  };

  const footer = (
    <>
      Already has an account?{" "}
      <AuthForm.FooterText href="/login">Log in now</AuthForm.FooterText>
    </>
  );

  return (
    <AuthForm.Form onSubmit={onSubmit} footer={footer} heading="Welcome Back!">
      <TextField<SignupFormValues>
        type="text"
        id="register_fullname"
        label="Full Name"
        name="fullname"
        errors={errors}
        register={register({
          required: "Full Name is required!",
        })}
      />

      <TextField<SignupFormValues>
        type="email"
        id="register_email"
        label="Email"
        name="email"
        errors={errors}
        register={register({
          required: "Email is required!",
        })}
      />

      <TextField<SignupFormValues>
        type={passwordIsShown ? "text" : "password"}
        id="register_password"
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
      >
        <AuthForm.ShowPasswordIcon
          passwordIsShown={passwordIsShown}
          handleClick={onShowPasswordClicked}
        />
      </TextField>

      <TextField<SignupFormValues>
        type={passwordIsShown ? "text" : "password"}
        id="register_confirmPassword"
        label="Confirm Password"
        name="confirmPassword"
        errors={errors}
        register={register({
          required: "Password is required!",
          minLength: {
            value: 6,
            message: "Min 6",
          },
        })}
      />

      <SubmitButton>SIGN UP</SubmitButton>
    </AuthForm.Form>
  );
}

export { SignupForm };
