import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

type AppBarProps = {
  height: string;
};

export default function AppBar({ height }: AppBarProps): ReactElement {
  const classes = useStyles();

  return (
    <Container>
      <MuiAppBar position="fixed" style={{ height }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </MuiAppBar>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.article<ContainerProps>`
  position: relative;
`;
