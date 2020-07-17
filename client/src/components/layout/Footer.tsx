import React, { ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  height: string;
};

function Footer({ height }: Props): ReactElement {
  return <Container style={{ height }}></Container>;
}

type ContainerProps = {};
const Container = styled.footer<ContainerProps>`
  background: #000;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export { Footer };
