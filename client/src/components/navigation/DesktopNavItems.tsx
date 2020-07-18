import React, { ReactElement } from "react";
import styled from "styled-components";
import { DesktopNavigationItem } from "./DesktopNavItem";
import { allRoutes } from "./RouteItems";

type Props = {};

function DesktopNavItems({}: Props): ReactElement {
  return (
    <Container>
      {allRoutes.map(({ href, text }) => (
        <DesktopNavigationItem href={href}>{text}</DesktopNavigationItem>
      ))}
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.ul<ContainerProps>`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export { DesktopNavItems };
