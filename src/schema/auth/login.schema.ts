import { requiredField } from "./../../helpers/fields.helpers";
import { LoginFormValues } from "@components/auth/LoginForm";
import * as yup from "yup";
import * as fields from "./authFields";

const { email } = fields;

export const loginSchema = yup.object().shape<LoginFormValues>({
  email,
  password: requiredField("Password"),
});
