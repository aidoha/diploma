import React from 'react';
import { Grid } from '@material-ui/core';
import { Topbar } from '../../components';
import HelloSection from './components/helloSection';
import CategorySection from './components/categorySection';
import { useStyles } from './style';

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <Topbar />
      <Grid container justify='center' className={classes.container_hello}>
        <HelloSection classes={classes} />
      </Grid>
      <Grid container justify='center' className={classes.container_category}>
        <CategorySection classes={classes} />
      </Grid>
    </>
  );
};

export default Main;
