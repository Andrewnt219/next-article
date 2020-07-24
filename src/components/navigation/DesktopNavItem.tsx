import React, { ReactElement } from "react";
import styled from "styled-components";
import NavLink, { NavLinkProps } from "./NavLink";

type Props = NavLinkProps & {};

function DesktopNavItem({ children, ...navLinkProps }: Props): ReactElement {
  return (
    <Container>
      <NavLink {...navLinkProps} isDesktop>
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
