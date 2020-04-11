import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MainMenu } from '../index';

const useStyles = makeStyles({
  content: (props) => ({
    padding: props.padding || '20px 100px',
  }),
});

const MainLayout = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container>
      <MainMenu />
      <main className={classes.content}>{props.children}</main>
    </Grid>
  );
};

export default MainLayout;
