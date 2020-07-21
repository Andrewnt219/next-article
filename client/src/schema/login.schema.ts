import { LoginFormValues } from "./../components/auth/LoginForm";
import * as yup from "yup";
import * as fields from "./fields";

const { email, requiredField } = fields;

export const loginSchema = yup.object().shape<LoginFormValues>({
  email,
  password: requiredField("Password"),
});
