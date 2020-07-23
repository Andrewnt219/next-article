import React, { ReactElement } from "react";
import styled from "styled-components";
import NextLink from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function Link({ href, children, className }: Props): ReactElement {
  return (
    <NextLink href={href}>
      <StyledLink className={className}>{children}</StyledLink>
    </NextLink>
  );
}

type StyledLinkProps = {};
const StyledLink = styled.a<StyledLinkProps>`
  cursor: pointer;
`;

export { Link };
