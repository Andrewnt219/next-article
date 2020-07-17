import React, { ReactElement } from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

type Props = {};

function NavigationItems({}: Props): ReactElement {
  return (
    <Container>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/other">Other</NavLink>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.ul<ContainerProps>``;

export { NavigationItems };
