import React, { InputHTMLAttributes, ReactElement } from "react";
import type { UseFormMethods } from "react-hook-form/dist/types/form";
import styled from "styled-components";
import { ErrorMessage } from "./ErrorMessage";

export type TextFieldProps<FormValues> = InputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    errors: UseFormMethods["errors"];
    register: (instance: HTMLInputElement | null) => void;
    name: keyof FormValues;
    description?: string;
    label: string;
    id: string;
    type:
      | "text"
      | "password"
      | "number"
      | "tel"
      | "email"
      | "time"
      | "week"
      | "date"
      | "datetime-local";
  };

function TextField<FormValues>({
  label,
  labelBackgroundColor,
  register,
  errors,
  name,
  description,
  children,
  ...inputAttrs
}: TextFieldProps<FormValues>): ReactElement {
  const hasError = !!errors[name];

  return (
    <Container>
      <InputContainer hasError={hasError}>
        <Input
          {...inputAttrs}
          name={name}
          ref={register}
          labelBackgroundColor={labelBackgroundColor}
          placeholder={label}
        />
        <Label htmlFor={inputAttrs.id} hasError={hasError}>
          {label}
        </Label>
        {children}
      </InputContainer>

      {description && <Description>{description}</Description>}

      {hasError && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

type InputContainerProps = {
  hasError: boolean;
};
const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  border-radius: ${(p) => p.theme.shape.borderRadius}px;
  border: 1px solid
    ${(p) => (p.hasError ? p.theme.palette.error.main : "#e2e2e2")};
  width: 100%;

  /* Smoothen the corners */
  padding: 1rem 1.25rem;

  :focus-within {
    border-color: ${(p) => p.theme.palette.primary.main};
  }
`;

type InputProps = {
  labelBackgroundColor?: string;
};
const Input = styled.input<InputProps>`
  /* Side padding = custom padding + label's side padding */
  width: 100%;
  border: none;
  outline: none;

  :not(:placeholder-shown) + label {
    /* Background must match the surrounding background */
    background: ${(p) => p.labelBackgroundColor ?? "#fff"};
    transform: translate(0, -50%);
    opacity: 1;
    color: ${(p) => p.theme.palette.text.primary};
  }
`;

type LabelProps = {
  hasError: boolean;
};
const Label = styled.label<LabelProps>`
  /* Position the label */
  position: absolute;
  left: 1rem;
  top: 0;

  /* Hide it by default */
  opacity: 0;
  transition: all 200ms ease;

  padding: 0 0.25rem;

  &&& {
    color: ${(p) => p.hasError && p.theme.palette.error.main};
  }
`;

type DescriptionProps = {};
const Description = styled.p<DescriptionProps>`
  font-size: smaller;
`;

export { TextField };
