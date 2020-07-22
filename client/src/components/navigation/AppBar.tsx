import React, { ReactElement } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ElevationScroll } from "../../helpers/material-ui.helpers";
import { Logo } from "../ui/Logo";
import Hidden from "@material-ui/core/Hidden";

import { DesktopNavItems } from "./DesktopNavItems";
import { SearchBar } from "../ui/SearchBar";
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

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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

            <Logo height="1.5rem" />

            <Hidden smDown implementation="css">
              <DesktopNavItems />
            </Hidden>

            <Hidden smDown implementation="css">
              <SearchBar handleSubmit={handleSearchSubmit} />
            </Hidden>
          </Toolbar>
        </MuiAppBar>
      </ElevationScroll>
    </>
  );
}
