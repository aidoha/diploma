import React from 'react';
import { Redirect } from 'react-router-dom';
import { Topbar } from '../../../components';
import { Container, Grid, Typography } from '@material-ui/core';
import AuthForm from './components/authForm';
import { useStyles } from '../style';
import { useSelector } from 'react-redux';

const SignIn = () => {
  const classes = useStyles();
  const signInState = useSelector(state => state.signIn);
  const { isLoggedIn } = signInState;

  if (isLoggedIn) {
    return <Redirect to='/intro' />;
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
    </>
  );
};

export default SignIn;
