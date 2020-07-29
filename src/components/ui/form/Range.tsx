import { CustomInput } from "@src/@types/react-hook-form";
import React, { InputHTMLAttributes, ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import { ErrorMessage } from "./ErrorMessage";

type Props<FormValues> = InputHTMLAttributes<HTMLInputElement> &
  CustomInput<FormValues> & {
    type?: null;
  };

function Range<FormValues>({
  register,
  errors,
  label,
  ...inputProps
}: Props<FormValues>): ReactElement {
  const { min } = inputProps;
  const [value, setValue] = useState(min);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  const { id, name } = inputProps;
  const hasError = !!errors[name];

  return (
    <Container>
      <Label hasError={hasError} htmlFor={id}>
        {label}: <RangeValue>{value}</RangeValue>
      </Label>

      <Input
        {...inputProps}
        ref={register}
        type="range"
        onChange={onChange}
        value={value}
      />

      <ErrorMessage>{errors[name]?.message}&nbsp;</ErrorMessage>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  :focus-within label {
    color: ${(p) => p.theme.palette.text.primary};
  }
`;

type LabelProps = {
  hasError: boolean;
};
const Label = styled.label<LabelProps>`
  display: block;
  color: black;
`;

type RangeValueProps = {};
const RangeValue = styled.span<RangeValueProps>``;

const sliderThumbStyle = css`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  cursor: pointer;

  border-color: ${(p) => p.theme.palette.primary.main};
  background: ${(p) => p.theme.palette.primary.main};

  transition: all 200ms ease;

  :hover {
    border-color: ${(p) => p.theme.palette.primary.dark};
    background: ${(p) => p.theme.palette.primary.dark};
  }
`;

type InputProps = {};
const Input = styled.input<InputProps>`
  appearance: none;
  width: 100%;
  height: 1px;
  background: ${(p) => p.theme.palette.common.black};
  outline: none;

  :focus {
    background: ${(p) => p.theme.palette.primary.light};
  }
  /* cannot be merged with comma */
  ::-moz-range-thumb {
    ${sliderThumbStyle}
  }

  /* cannot be merged with comma */
  ::-webkit-slider-thumb {
    ${sliderThumbStyle}
  }
`;

export { Range };
