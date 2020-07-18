import React, { ReactElement } from "react";
import styled from "styled-components";
import NextLink from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

function Link({ href, children }: Props): ReactElement {
  return (
    <NextLink href={href}>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
}

type StyledLinkProps = {};
const StyledLink = styled.a<StyledLinkProps>`
  cursor: pointer;
`;

export { Link };
