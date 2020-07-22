import type { LoginFormValues } from "@src/components/auth/LoginForm";
import type { SignupFormValues } from "@src/components/auth/SignupForm";
import { uiState } from "./uiState.types";

type authState = uiState & {
  email: string | null;
  token: string | null;
};

type NewUserData = Omit<SignupFormValues, "confirmPassword">;

type UserLoginData = LoginFormValues;

export type { authState, NewUserData, UserLoginData };
