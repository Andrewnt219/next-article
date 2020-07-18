import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import AppBar from "../navigation/AppBar";
import { Footer } from "./footer/Footer";
import ResponsiveDrawer from "../navigation/Drawer";
type Props = {
  children: ReactNode;
};

const APPBAR_HEIGHT = "5rem";
const FOOTER_HEIGHT = "15rem";
const DRAWER_WIDTH = 240;

function MainLayout({ children }: Props): ReactElement {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar handleDrawerToggle={handleDrawerToggle} height={APPBAR_HEIGHT} />
      <Main>{children}</Main>
      <Footer height={FOOTER_HEIGHT} />
      <ResponsiveDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={DRAWER_WIDTH}
      />
    </>
  );
}

type MainProps = {};
const Main = styled.main<MainProps>`
  margin-top: calc(${APPBAR_HEIGHT} + 2rem);
  padding: 0 5vw calc(${FOOTER_HEIGHT} + 10rem) 5vw;
`;

export { MainLayout };
