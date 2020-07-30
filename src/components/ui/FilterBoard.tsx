import React, { ReactElement } from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  children: ReactElement;
};

/**
 * @description A UI for filter board
 * @param className for styled-components
 * @param children a form elements with inputs
 */
function FilterBoard({ children, className }: Props): ReactElement {
  return <Container className={className}>{children}</Container>;
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 35rem;
  padding: 2rem 2rem 3rem 2rem;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
`;

export { FilterBoard };
