import React, { ReactElement } from "react";
import styled from "styled-components";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import type { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      fontFamily: "inherit",
      color: "inherit",
    },
    iconRoot: {
      fill: theme.palette.common.black,
    },
    inputInput: {
      padding: 0,
    },
  })
);

type Props = {
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
};

function SearchBar({ handleSubmit }: Props): ReactElement {
  const classes = useStyles();

  return (
    <Container onSubmit={handleSubmit}>
      <InputBase
        placeholder="Search for lessons..."
        classes={{ input: classes.inputInput, root: classes.inputRoot }}
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton type="submit" aria-label="search icon">
        <SearchIcon
          color="inherit"
          classes={{ root: classes.iconRoot }}
          fontSize="small"
        />
      </IconButton>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.form<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  padding: 0 1rem;
  border: 2px solid currentColor;
  border-radius: ${(p) => p.theme.shape.borderRadius}px;
  color: ${(p) => p.theme.palette.common.black};
`;

export { SearchBar };
