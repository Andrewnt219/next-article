import styled from "styled-components";

type RowProps = {
  justify?: "space-between" | "space-around" | "space-evenly" | "center";
  gap?: string;
};
export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${(p) => p.justify};

  & > *:not(:last-child) {
    margin-right: ${(p) => p.gap};
  }
`;
