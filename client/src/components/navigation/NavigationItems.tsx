import Link from "@material-ui/core/Link";
import NextLink from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import NavLink from "./NavLink";

type Props = {
  isNavLink?: boolean;
  className?: string;
};

function NavigationItems({ className, isNavLink }: Props): ReactElement {
  let Anchor = isNavLink ? NavLink : Link;

  return (
    <Container className={className}>{renderAllRoutes(isNavLink)}</Container>
  );
}

export function renderAllRoutes(isNavLink?: Props["isNavLink"]) {
  if (isNavLink) {
    return allRoutes.map(({ text, href }) => (
      <NavLink key={href} href={href}>
        {text}
      </NavLink>
    ));
  }

  return allRoutes.map(({ text, href }) => (
    <NextLink key={href} href={href}>
      <Link>{text}</Link>
    </NextLink>
  ));
}

type ContainerProps = {};
const Container = styled.ul<ContainerProps>``;

type Route = {
  href: string;
  text: string;
};

const allRoutes: Route[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/dashboard",
    text: "Dashboard",
  },
  {
    href: "/your-courses",
    text: "Your Courses",
  },
  {
    href: "/how-it-works",
    text: "How it works",
  },
];

export { NavigationItems };
