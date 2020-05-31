import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Topbar } from '../../components';
import HelloSection from './components/helloSection';
import CategorySection from './components/categorySection';
import { useStyles } from './style';
import { routes } from '../../constants/index';

const Main = () => {
  const classes = useStyles();
  const signInState = useSelector((state) => state.signIn);
  const { isLoggedIn } = signInState;

  if (isLoggedIn) {
    window.location.href = `${window.location.protocol}//${
      window.location.hostname
    }${window.location.port ? `:${window.location.port}` : ''}${
      routes.company
    }`;
  }
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
