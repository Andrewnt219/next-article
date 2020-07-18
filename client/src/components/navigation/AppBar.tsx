import React, { ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import { ElevationScroll } from "../../helpers/material-ui.helpers";
import { Logo } from "../ui/Logo";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
    toolbar: {
      display: "flex",
      justifyContent: "center",
    },
    appbar: {
      background: theme.palette.common.white,
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
    <Hidden mdUp>
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
          </Toolbar>
        </MuiAppBar>
      </ElevationScroll>
    </Hidden>
  );
}
