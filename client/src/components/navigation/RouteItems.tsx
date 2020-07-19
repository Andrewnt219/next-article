import React, { ReactElement } from "react";
import styled from "styled-components";
import { Link } from "./Link";
import NavLink from "./NavLink";

type Props = {
  isNavLink?: boolean;
  className?: string;
};

function RouteItems({ className, isNavLink }: Props): ReactElement {
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
    <Link key={href} href={href}>
      {text}
    </Link>
  ));
}

type ContainerProps = {};
const Container = styled.ul<ContainerProps>``;

type Route = {
  href: string;
  text: string;
};

export const allRoutes: Route[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/dashboard",
    text: "Dashboard",
  },
  {
    href: "/courses",
    text: "Courses",
  },
  {
    href: "/how-it-works",
    text: "How it works",
  },
  {
    href: "/login",
    text: "Login",
  },
];

export { RouteItems as NavigationItems };
