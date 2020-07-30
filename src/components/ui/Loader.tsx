import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

type Props = StyledLoaderProps & {
  className?: string;
};

/**
 * @description renders a Loader
 * @param className  for styled-components
 */
function Loader({ className, ...props }: Props): ReactElement {
  return (
    <Container className={className}>
      <StyledLoader {...props} />
    </Container>
  );
}

const flipX = keyframes`
  0% {
    transform: perspective(200px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
  }
  100% {
    transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
  }
`;

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  display: inline-block;
`;

type StyledLoaderProps = {
  size: string;
  bgColor?: string;
};
const StyledLoader = styled.span<StyledLoaderProps>`
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  background: ${(p) => p.bgColor ?? p.theme.palette.common.black};

  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: ${flipX} 1s linear infinite;
`;

export { Loader };
