import React, { InputHTMLAttributes, ReactElement } from "react";
import {
  FieldElement,
  Ref,
  UseFormMethods,
} from "react-hook-form/dist/types/form";
import styled from "styled-components";

import { ErrorMessage } from "./ErrorMessage";

type Props<FormValues> = InputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    errors: UseFormMethods["errors"];
    register: (instance: HTMLInputElement | null) => void;
    name: keyof FormValues;
    label: string;
    id: string;
  };

function TextField<FormValues>({
  label,
  labelBackgroundColor,
  register,
  errors,
  name,
  ...inputAttrs
}: Props<FormValues>): ReactElement {
  return (
    <>
      <Container>
        <Input
          {...inputAttrs}
          name={name}
          ref={register}
          labelBackgroundColor={labelBackgroundColor}
          type="text"
          placeholder={label}
        />
        <Label hasError={!!errors[name]}>{label}</Label>
      </Container>
      <ErrorMessage name={name} errors={errors} />
    </>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  position: relative;
  border-radius: ${(p) => p.theme.shape.borderRadius}px;
  border: 1px solid black;

  /* Smoothen the corners */
  padding: 0px 1px;
`;

type InputProps = {
  labelBackgroundColor?: string;
};
const Input = styled.input<InputProps>`
  /* Side padding = custom padding + label's side padding */
  padding: 1rem 1.25rem;
  width: 100%;
  border: none;

  :not(:placeholder-shown) + label {
    /* Background must match the surrounding background */
    background: ${(p) => p.labelBackgroundColor ?? "#fff"};
    transform: translate(0, -50%);
    opacity: 1;
    color: ${(p) => p.theme.palette.primary.main};
  }
`;

type LabelProps = {
  hasError: boolean;
};
const Label = styled.label<LabelProps>`
  /* Position the label */
  left: 1rem;
  position: absolute;
  top: 0;

  /* Hide it by default */
  opacity: 0;
  transition: all 200ms ease;

  padding: 0 0.25rem;
  &&& {
    color: ${(p) => p.hasError && p.theme.palette.error.main};
  }
`;

export { TextField };
