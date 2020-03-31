import React from 'react';
import { Grid } from '@material-ui/core';
import { Topbar } from '../../components';
import HelloSection from './components/helloSection';
import { useStyles } from './style';

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <Topbar />
      <Grid container justify='center' className={classes.container}>
        <HelloSection classes={classes} />
      </Grid>
    </>
  );
};

export default Main;
