import React, { InputHTMLAttributes, ReactElement } from "react";
import styled from "styled-components";
import { ErrorMessage } from "./ErrorMessage";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { CustomInput } from "@src/@types/react-hook-form";

type Props<
  FormValues extends Record<string, string | undefined>
> = InputHTMLAttributes<HTMLSelectElement> &
  CustomInput<FormValues, HTMLSelectElement> & {
    options: string[];
    id: string;
  };

/**
 * @description renders a styled select element with options
 * @param options an array of options
 * @param register a ref to react-hook-form register
 * @param errors  react-hook-form errors
 * @param label  the text on label
 * @param selectProps html select attributes
 */
function Select<FormValues extends Record<string, string | undefined>>({
  options,
  register,
  errors,
  label,
  ...selectProps
}: Props<FormValues>): ReactElement {
  const { id, name } = selectProps;
  const hasError = !!errors[name];

  return (
    <Container>
      <Label hasError={hasError} htmlFor={id}>
        {label}
      </Label>

      <SelectContainer>
        <StyledSelect hasError={hasError} ref={register} {...selectProps}>
          <Option aria-label="None" value="" />
          {renderOptions(options)}
        </StyledSelect>

        <DropDownArrow />
      </SelectContainer>

      <ErrorMessage>{errors[name]?.message}&nbsp;</ErrorMessage>
    </Container>
  );
}

function renderOptions(optionsData: string[]): ReactElement[] {
  return optionsData.map((option) => (
    <Option key={option} value={option}>
      {option}
    </Option>
  ));
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  :focus-within label {
    color: ${(p) => p.theme.palette.text.primary};
  }

  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

type SelectContainerProps = {};
const SelectContainer = styled.div<SelectContainerProps>`
  position: relative;
  width: min-content;
`;

type StyledSelectProps = {
  hasError: boolean;
  width?: string | number;
};
const StyledSelect = styled.select<StyledSelectProps>`
  appearance: none;
  cursor: pointer;
  width: ${(p) => p.width ?? "9rem"};
  outline: none;

  border-radius: ${(p) => p.theme.shape.borderRadius}px;
  border: 1px solid ${(p) => (p.hasError ? p.theme.palette.error.main : "#000")};
  padding: 0.5rem;

  :focus {
    border-color: ${(p) => p.theme.palette.primary.main};
  }
`;

type DropDownArrowProps = {};
const DropDownArrow = styled(ArrowDropDownIcon)<DropDownArrowProps>`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  pointer-events: none;
`;

type OptionProps = {};
const Option = styled.option<OptionProps>``;

type LabelProps = {
  hasError: boolean;
};
const Label = styled.label<LabelProps>`
  display: block;
  color: ${(p) =>
    p.hasError ? p.theme.palette.error.main : p.theme.palette.common.black};
`;

export { Select };
