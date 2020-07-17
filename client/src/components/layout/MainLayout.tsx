import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import AppBar from '../navigation/AppBar';
import { Footer } from './Footer';

type Props = {
  children: ReactNode;
};

const APPBAR_HEIGHT = '5rem';
const FOOTER_HEIGHT = '20rem';

function MainLayout({ children }: Props): ReactElement {
  return (
    <>
      <AppBar height={APPBAR_HEIGHT} />
      <Main>{children}</Main>
      <Footer height={FOOTER_HEIGHT} />
    </>
  );
}

type MainProps = {};
const Main = styled.main<MainProps>`
  margin-top: calc(${APPBAR_HEIGHT} + 2rem);
  padding: 0 5vw calc(${FOOTER_HEIGHT} + 10rem) 5vw;
`;

export { MainLayout };
