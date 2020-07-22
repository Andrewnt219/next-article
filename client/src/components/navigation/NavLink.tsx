import { useRouter } from "next/router";
import NextLink, { LinkProps } from "next/link";
import MuiLink from "@material-ui/core/Link";
import { ReactElement, ReactNode } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      color: "#000",
      cursor: "pointer",
      width: "100%",
      display: "inline-block",
    },
  })
);

export type NavLinkProps = LinkProps & {
  children: ReactNode;
  activeStyle?: Record<string, string | number>;
};

function NavLink({
  children,
  activeStyle,
  ...linkProps
}: NavLinkProps): ReactElement {
  const router = useRouter();
  const classes = useStyles(activeStyle);
  const isActive = router.asPath === (linkProps.as ?? linkProps.href);

  return (
    <NextLink {...linkProps}>
      <MuiLink style={isActive ? activeStyle : {}} className={classes.link}>
        {children}
      </MuiLink>
    </NextLink>
  );
}

export default NavLink;
