import { UseFormMethods } from "react-hook-form";

export declare type CustomInput<FormValues, HTMLElement = HTMLInputElement> = {
  register: (instance: HTMLElement | null) => void;
  errors: UseFormMethods["errors"];
  name: keyof FormValues;
  label?: string;
};
