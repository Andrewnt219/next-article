import React from "react";
import Divider from "@material-ui/core/Divider";
import MuiDrawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import { Logo } from "../ui/Logo";
import { allRoutes } from "./RouteItems";
import NavLink from "./NavLink";

type StyleProps = {
  drawerWidth: number;
  paddingTop: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
    },
    listItem: {
      padding: "1.5rem",
      fontSize: "1.2rem",
    },
    // necessary for content to be below app bar
    toolbar: (p: StyleProps) => ({
      minHeight: p.paddingTop,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
    drawerPaper: (p: StyleProps) => ({
      width: p.drawerWidth,
    }),
  })
);

type Props = StyleProps & {
  mobileOpen: boolean;
  handleDrawerToggle(): void;
};

export default function Drawer({
  mobileOpen,
  handleDrawerToggle,
  ...styleProps
}: Props) {
  const classes = useStyles(styleProps);
  const theme = useTheme();

  const activeStyle = {
    color: theme.palette.text.primary,
  };

  const drawerContent = (
    <>
      <div className={classes.toolbar}>
        <Logo height="4rem" isFullLogo />
      </div>
      <Divider />

      <List component="nav">
        {allRoutes.map(({ href, text }) => (
          <ListItem button key={href} classes={{ root: classes.listItem }}>
            <NavLink href={href} activeStyle={activeStyle}>
              {text}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <div className={classes.root}>
      <nav aria-label="navigation links">
        <MuiDrawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawerContent}
        </MuiDrawer>
      </nav>
    </div>
  );
}
