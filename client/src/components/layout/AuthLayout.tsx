import styled from "styled-components";

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  display: flex;

  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: ${(p) => p.theme.breakpoints.values.md}px) {
  }
`;

type SvgContainerProps = {};
const SvgContainer = styled.div<SvgContainerProps>`
  display: none;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.values.md}px) {
    display: block;
    max-width: 30rem;

    svg {
      width: 100%;
      height: auto;
    }
  }
`;

type AuthLayoutComponents = {
  Container: typeof Container;
  SvgContainer: typeof SvgContainer;
};

export const AuthLayout = {
  Container,
  SvgContainer,
};
