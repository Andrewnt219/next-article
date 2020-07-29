import * as yup from "yup";
import * as fields from "./authFields";
import { SignupFormValues } from "@components/auth/SignupForm";

const { email, confirmPassword, fullname, password } = fields;

export const signupSchema = yup.object().shape<SignupFormValues>({
  email,
  //@ts-ignore
  confirmPassword,
  fullname,
  password,
});
