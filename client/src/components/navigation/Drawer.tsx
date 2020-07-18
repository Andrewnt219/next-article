import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Logo } from "../ui/Logo";
import { allRoutes } from "./NavigationItems";
import NavLink from "./NavLink";

type StyleProps = {
  drawerWidth: number;
};

type ClassKeys = "root" | "toolbar" | "drawerPaper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles<ClassKeys, StyleProps>({
    root: {
      display: "flex",
    },
    // necessary for content to be below app bar
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    drawerPaper: (p) => ({
      width: p.drawerWidth,
    }),
  })
);

type Props = StyleProps & {
  mobileOpen: boolean;
  handleDrawerToggle(): void;
};

export default function ResponsiveDrawer({
  mobileOpen,
  handleDrawerToggle,
  ...styleProps
}: Props) {
  const classes = useStyles(styleProps);
  const theme = useTheme();

  const drawerContent = (
    <>
      <div className={classes.toolbar}>
        <Logo height="2rem" />
      </div>
      <Divider />

      <List>
        {allRoutes.map(({ href, text }) => (
          <ListItem button key={href}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>

            <NavLink href={href}>
              <ListItemText primary={text} onClick={handleDrawerToggle} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <div className={classes.root}>
      <nav aria-label="navigation links">
        <Drawer
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
        </Drawer>
      </nav>
    </div>
  );
}
