import React from 'react';
// import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Topbar, Statuses } from '../../../components';
import { Container, Grid, Typography } from '@material-ui/core';
import withApollo from '../../../hoc/withApollo';
import FirstStep from './components/firsStep';
import SecondStep from './components/secondStep';
import { routes } from '../../../constants';
import { useStyles } from '../style';

const SignUp = () => {
  const signUpState = useSelector((state) => state.signUp);
  const { firstStep, secondStep, isLoggedIn } = signUpState;
  const classes = useStyles();

  if (isLoggedIn) {
    window.location.href = `${window.location.protocol}//${
      window.location.hostname
    }${window.location.port ? `:${window.location.port}` : ''}${
      routes.company
    }`;
    // return <Redirect to={routes.company} />;
  }

  return (
    <>
      <Topbar />
      <Container maxWidth='xs' className={classes.auth__container}>
        <Typography component='h1' variant='h5'>
          Регистрация
        </Typography>
        <Grid container alignItems='center'>
          {firstStep && <FirstStep />}
          {secondStep && <SecondStep />}
        </Grid>
      </Container>
      <Statuses type='signUp' />
    </>
  );
};

export default withApollo(SignUp);
