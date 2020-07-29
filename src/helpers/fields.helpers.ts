import * as yup from "yup";

export const requiredField = (fieldName: string) =>
  yup.string().required(fieldName + " is required");
