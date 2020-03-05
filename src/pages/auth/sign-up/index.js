import React from 'react';
import { useSelector } from 'react-redux';
import { Topbar } from '../../../components';
import { Container, Grid, Typography } from '@material-ui/core';
import FirstStep from './components/firsStep';
import SecondStep from './components/secondStep';
import { useStyles } from '../style';

const SignUp = () => {
  const signUpState = useSelector(state => state.signUp);
  const { firstStep, secondStep } = signUpState;
  const classes = useStyles();
  return (
    <>
      <Topbar />
      <Container maxWidth='xs' className={classes.auth__container}>
        <Typography component='h1' variant='h5'>
          Регистрация
        </Typography>
        <Grid container alignItems='center'>
          {/* {firstStep && <FirstStep />} */}
          {/* {secondStep && <SecondStep />} */}
          {firstStep && <SecondStep />}
        </Grid>
      </Container>
    </>
  );
};

export default SignUp;
