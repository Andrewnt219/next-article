import styled from "styled-components";

type RowProps = {
  justify?: "space-between" | "space-around" | "space-evenly" | "center";
};
export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${(p) => p.justify};
`;
