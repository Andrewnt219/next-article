import React, { ReactElement } from "react";
import styled from "styled-components";

type Props = InputProps &
  HTMLInputElement & {
    label: string;
  };

function TextField({
  label,
  labelBackgroundColor,
  ...HTMLInputElement
}: Props): ReactElement {
  return (
    <Container>
      <Input
        labelBackgroundColor={labelBackgroundColor}
        type="text"
        placeholder={label}
      />
      <Label>{label}</Label>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  position: relative;
`;

type InputProps = {
  labelBackgroundColor?: string;
};
const Input = styled.input<InputProps>`
  /* Side padding = custom padding + label's side padding */
  padding: 1rem 1.25rem;
  width: 100%;

  :not(:placeholder-shown) + label {
    /* Background must match the surrounding background */
    background: ${(p) => p.labelBackgroundColor ?? "#fff"};
    transform: translate(0, -50%);
    opacity: 1;
  }
`;

type LabelProps = {};
const Label = styled.label<LabelProps>`
  /* Position the label */
  left: 1rem;
  position: absolute;
  top: 0;

  /* Hide it by default */
  opacity: 0;
  transition: all 200ms ease;

  padding: 0 0.25rem;
`;

export { TextField };
