import React from 'react';
// import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import withApollo from '../../../hoc/withApollo';
import { Topbar, Statuses } from '../../../components';
import AuthForm from './components/authForm';
import { routes } from '../../../constants';
import { useStyles } from '../style';

const SignIn = () => {
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
      <Container maxWidth='xs' className={classes.auth__container}>
        <Typography component='h1' variant='h5'>
          Войти
        </Typography>
        <Grid container alignItems='center'>
          <AuthForm />
        </Grid>
      </Container>
      <Statuses />
    </>
  );
};

export default withApollo(SignIn);
