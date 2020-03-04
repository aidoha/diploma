import React from 'react';
import { Topbar } from '../../components';
import { Container, Grid, Typography } from '@material-ui/core';
import AuthForm from './components/authForm';

import './index.css';

const SignIn = () => {
  return (
    <>
      <Topbar />
      <Container maxWidth='xs' className='auth__container'>
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
