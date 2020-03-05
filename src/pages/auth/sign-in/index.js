import React from 'react';
import { Topbar } from '../../../components';
import { Container, Grid, Typography } from '@material-ui/core';
import AuthForm from './components/authForm';
import { useStyles } from '../style';

const SignIn = () => {
  const classes = useStyles();
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
