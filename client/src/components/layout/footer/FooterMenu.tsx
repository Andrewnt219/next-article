import React, { ReactElement } from "react";
import styled from "styled-components";
import { NavigationItems, renderAllRoutes } from "../../navigation/RouteItems";

type Props = {};

function FooterMenu({}: Props): ReactElement {
  return (
    <Container>
      <FooterNavigationItems>{renderAllRoutes()}</FooterNavigationItems>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  grid-area: footer-menu;
  width: 100%;
`;

const FooterNavigationItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  row-gap: 1.5rem;

  color: ${(p) => p.theme.palette.common.white};

  a {
    color: inherit;
    cursor: pointer;
  }
`;
export { FooterMenu };
