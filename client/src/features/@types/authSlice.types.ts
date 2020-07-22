import { LoginFormValues } from "@src/components/auth/LoginForm";
import { SignupFormValues } from "@src/components/auth/SignupForm";
import { uiState } from "./uiState.types";

export type authState = uiState & {
  email: string | null;
  token: string | null;
};

export type NewUserData = Omit<SignupFormValues, "confirmPassword">;

export type UserLoginData = LoginFormValues;
