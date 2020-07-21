import React, { InputHTMLAttributes, ReactElement, ReactNode } from "react";
import { UseFormMethods } from "react-hook-form/dist/types/form";
import styled from "styled-components";

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

      <Error>{errors[name]?.message}&nbsp;</Error>
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
  border: 1px solid ${(p) => (p.hasError ? p.theme.palette.error.dark : "#000")};
  width: 100%;

  /* Smoothen the corners */
  padding: 1rem 1.25rem;
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
  left: 1rem;
  position: absolute;
  top: 0;

  /* Hide it by default */
  opacity: 0;
  transition: all 200ms ease;

  padding: 0 0.25rem;

  &&& {
    color: ${(p) => p.hasError && p.theme.palette.error.dark};
  }
`;

type DescriptionProps = {};
const Description = styled.p<DescriptionProps>`
  font-size: smaller;
`;

const Error = styled.p`
  color: ${(p) => p.theme.palette.error.dark};
  font-size: inherit;
`;

export { TextField };
