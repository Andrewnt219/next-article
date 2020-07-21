import * as yup from "yup";

// Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z0-9$@$!%*?&]{8,}/;

export const email = yup
  .string()
  .required("Email is required")
  .email("Not a valid email");

export const fullname = yup.string().required("Full Name is required");

export const password = yup
  .string()
  .required("Password is required")
  .matches(PASSWORD_PATTERN, "Password is not strong enough");

export const confirmPassword = yup
  .string()
  .oneOf([yup.ref("password")], "Password does not match");

export const requiredField = (fieldName: string) =>
  yup.string().required(fieldName + " is required");
