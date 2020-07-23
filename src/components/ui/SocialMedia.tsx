import React, { ReactElement } from "react";
import styled from "styled-components";

type Props = ContainerProps & {
  children: ReactElement;
  href: string;
};

function SocialMedia({ children, href, fillColor }: Props): ReactElement {
  return (
    <Container fillColor={fillColor}>
      <a href={href}>{children}</a>
      <Filter />
    </Container>
  );
}

type ContainerProps = {
  fillColor: string;
};
const Container = styled.span<ContainerProps>`
  display: inline-block;

  background-color: #fff;
  width: 1.5em;
  height: 1.5em;
  border-radius: ${(p) => p.theme.shape.borderRadius}px;

  position: relative;
  overflow: hidden;

  svg {
    fill: ${(p) => p.fillColor};
    position: relative;
    z-index: ${(p) => p.theme.zIndex.tooltip};
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  :hover {
    svg {
      fill: #fff;
    }

    div {
      clip-path: circle(150% at 0% 0%);
      background-color: ${(p) => p.fillColor};
    }
  }
`;

type FilterProps = {};
const Filter = styled.div<FilterProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  clip-path: circle(0 at 0% 0%);

  transition: all ${(p) => p.theme.transitions.easing.easeInOut} 400ms;
`;

export { SocialMedia };
