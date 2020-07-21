import Button from "@material-ui/core/Button";
import React, { ReactElement, ReactText } from "react";
import styled from "styled-components";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      width: "100%",
      fontSize: "inherit",
      padding: "0.75rem 0",
      maxWidth: "35rem",
      margin: "0 auto",
    },
  })
);

type Props = {
  children: ReactText;
};

function SubmitButton({ children }: Props): ReactElement {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      type="submit"
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export { SubmitButton };
