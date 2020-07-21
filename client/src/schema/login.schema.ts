import { LoginFormValues } from "./../components/auth/LoginForm";
import * as yup from "yup";
import * as fields from "./fields";

const { email, password } = fields;

export const loginSchema = yup.object().shape<LoginFormValues>({
  email,
  password,
});
