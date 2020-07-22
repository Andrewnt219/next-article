import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

import Hidden from "@material-ui/core/Hidden";
import { Logo } from "../Logo";

type Props = React.FormHTMLAttributes<HTMLFormElement> & {
  footer?: ReactNode;
  heading?: string;
  children: ReactElement | ReactElement[];
};

function Form({
  children,
  footer,
  heading,
  ...formProps
}: Props): ReactElement {
  return (
    <StyledForm {...formProps} noValidate>
      <Header>
        <Hidden mdUp implementation="css">
          <Heading>{heading}</Heading>
        </Hidden>

        <Hidden smDown implementation="css">
          <Logo height="2rem" />
        </Hidden>
      </Header>

      {children}

      <Footer>{footer}</Footer>
    </StyledForm>
  );
}

type StyledFormProps = {};
const StyledForm = styled.form<StyledFormProps>`
  max-width: 30rem;
  width: 100%;
  box-shadow: ${(p) => p.theme.shadows["2"]};
  padding: 2rem 2rem 4rem 2rem;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

type HeaderProps = {};
const Header = styled.div<HeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type HeadingProps = {};
const Heading = styled.h2<HeadingProps>`
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: ${(p) => p.theme.palette.text.primary};
`;

type FooterProps = {};
const Footer = styled.span<FooterProps>`
  display: block;
  text-align: center;
`;
export { Form };
