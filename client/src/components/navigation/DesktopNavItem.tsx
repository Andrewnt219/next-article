import useTheme from "@material-ui/core/styles/useTheme";
import React, { ReactElement } from "react";
import styled from "styled-components";
import NavLink, { NavLinkProps } from "./NavLink";

type Props = NavLinkProps & {};

function DesktopNavItem({ children, ...navLinkProps }: Props): ReactElement {
  const theme = useTheme();

  const activeStyle = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  };

  return (
    <Container>
      <NavLink {...navLinkProps} activeStyle={activeStyle}>
        {children}
      </NavLink>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.li<ContainerProps>`
  a {
    padding: 0.5rem;
    cursor: pointer;
  }
`;

export { DesktopNavItem as DesktopNavigationItem };
