import { FilterFormValues } from "@components/homepage/FilterBoard";
import * as yup from "yup";
import * as fields from "./filterFields";

const { query, category, country } = fields;

export const filterSchema = yup.object().shape<FilterFormValues>({
  q: query,
});
