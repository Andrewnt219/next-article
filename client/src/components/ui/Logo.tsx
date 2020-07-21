import Link from "next/link";
import styled from "styled-components";
import LogoSvg from "../../../public/static/svg/dooee.svg";

type Props = LogoWrapperProps & {};

export function Logo({ fill, ...styleProps }: Props) {
  return (
    <Link href="/">
      <LogoWrapper style={{ ...styleProps }} fill={fill}>
        <LogoSvg />
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
      fill: ${(p) =>
        p.fill === "white"
          ? p.theme.palette.common.white
          : p.theme.palette.primary.main};
    }
  }
`;
