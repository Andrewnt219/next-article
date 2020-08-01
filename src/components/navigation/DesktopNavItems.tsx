import React, { ReactElement } from "react";
import styled from "styled-components";
import { DesktopNavigationItem } from "./DesktopNavItem";
import { allRoutes } from "./RouteItems";

type Props = {};

function DesktopNavItems({}: Props): ReactElement {
  return (
    <Container>
      {allRoutes.map(({ href, text }) => (
        <DesktopNavigationItem key={href} href={href} isDesktop>
          {text}
        </DesktopNavigationItem>
      ))}
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.ul<ContainerProps>`
  display: none;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.values.md}px) {
    display: flex;
    flex: 1;
    justify-content: flex-end;

    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

export { DesktopNavItems };
