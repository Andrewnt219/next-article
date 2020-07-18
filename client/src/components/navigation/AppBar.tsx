import React, { ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ElevationScroll } from "../../helpers/material-ui.helpers";
import { Logo } from "../ui/Logo";
import Hidden from "@material-ui/core/Hidden";

import { DesktopNavItems } from "./DesktopNavItems";

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
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
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
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuIcon}
              onClick={handleDrawerToggle}
            >
              <MenuIcon color="primary" fontSize="large" />
            </IconButton>

            <Logo height="1.5rem" />

            <Hidden mdDown implementation="css">
              <DesktopNavItems />
            </Hidden>
          </Toolbar>
        </MuiAppBar>
      </ElevationScroll>
    </>
  );
}
