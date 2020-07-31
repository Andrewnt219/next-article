import Link from "next/link";
import styled from "styled-components";
import LogoSvg from "../../../public/svg/next-article-logo.svg";
import FullLogoSvg from "../../../public/svg/next-article-full-logo.svg";

type Props = LogoWrapperProps & {
  isFullLogo?: boolean;
};

export function Logo({ fill, isFullLogo, ...styleProps }: Props) {
  return (
    <Link href="/">
      <LogoWrapper style={{ ...styleProps }} fill={fill}>
        {isFullLogo ? <FullLogoSvg /> : <LogoSvg />}
      </LogoWrapper>
    </Link>
  );
}

type LogoWrapperProps = {
  width?: string;
  height?: string;
  fill?: "primary" | "white";
};
const LogoWrapper = styled.a<LogoWrapperProps>`
  display: inline-block;
  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${(p) => p.fill === "white" && p.theme.palette.common.white};
    }
  }
`;
