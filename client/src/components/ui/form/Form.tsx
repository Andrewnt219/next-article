import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type Props = React.FormHTMLAttributes<HTMLFormElement> & {
  children: ReactElement | ReactElement[];
};

function Form({ children, ...formProps }: Props): ReactElement {
  return <StyledForm {...formProps}>{children}</StyledForm>;
}

type StyledFormProps = {};
const StyledForm = styled.form<StyledFormProps>`
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export { Form };
