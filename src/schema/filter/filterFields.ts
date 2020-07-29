import { categoryNames, countryCodes } from "@src/data/newsApi.data";
import * as yup from "yup";

export const query = yup.string();

export const country = yup.string().oneOf([...countryCodes, ""]);

export const category = yup.string().oneOf([...categoryNames, ""]);
