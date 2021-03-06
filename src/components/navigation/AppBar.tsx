import React, { ReactElement } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ElevationScroll } from "../../helpers/material-ui.helpers";
import { Logo } from "../ui/Logo";
import Hidden from "@material-ui/core/Hidden";

import { DesktopNavItems } from "./DesktopNavItems";
import type { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
    toolbar: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.up("md")]: {
        justifyContent: "flex-start",
      },
    },
    appbar: {
      background: theme.palette.common.white,
      // for NProgress
      marginTop: 2,
    },
    menuIcon: {
      position: "absolute",
      top: "50%",
      left: "4rem",
      transform: "translate(-50%, -50%)",
    },
  })
);

type AppBarProps = {
  height: string;
  handleDrawerToggle(): void;
};

export default function AppBar({
  height,
  handleDrawerToggle,
}: AppBarProps): ReactElement {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <MuiAppBar position="fixed" className={classes.appbar}>
          <Toolbar style={{ height }} className={classes.toolbar}>
            <Hidden mdUp implementation="css">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={classes.menuIcon}
                onClick={handleDrawerToggle}
              >
                <MenuIcon color="primary" fontSize="large" />
              </IconButton>
            </Hidden>

            <Logo isFullLogo height="70%" />

            <DesktopNavItems />
          </Toolbar>
        </MuiAppBar>
      </ElevationScroll>
    </>
  );
}
