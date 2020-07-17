import styled from "styled-components";
import logo from "../../../public/dooee.svg";

type Props = {
  width?: string;
  height?: string;
};

export const Logo = styled.img.attrs({ src: logo })<Props>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
`;
