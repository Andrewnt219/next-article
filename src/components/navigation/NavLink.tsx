import { useRouter } from "next/router";
import NextLink, { LinkProps } from "next/link";
import React, { ReactElement, ReactNode } from "react";

import styled, { css } from "styled-components";

export type NavLinkProps = LinkProps & {
  children: ReactNode;
  isDesktop?: StyledLinkProps["isDesktop"];
  activeStyle?: Record<string, string | number>;
};

function NavLink({
  children,
  activeStyle,
  isDesktop,
  ...linkProps
}: NavLinkProps): ReactElement {
  const router = useRouter();
  const isActive = router.asPath === (linkProps.as ?? linkProps.href);

  return (
    <NextLink {...linkProps} passHref>
      <StyledLink isActive={isActive} isDesktop={isDesktop}>
        {children}
      </StyledLink>
    </NextLink>
  );
}

type StyledLinkProps = {
  isActive: boolean;
  isDesktop?: boolean;
};
const activeDesktopLink = css`
  background: ${(p) => p.theme.palette.primary.main};
  color: ${(p) => p.theme.palette.common.white};
`;
const activeMobileLink = css`
  color: ${(p) => p.theme.palette.text.primary};
`;
const StyledLink = styled.a<StyledLinkProps>`
  color: #000;
  cursor: pointer;
  width: 100%;
  display: inline-block;

  ${(p) => p.isActive && (p.isDesktop ? activeDesktopLink : activeMobileLink)};
`;

export default NavLink;
