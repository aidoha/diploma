import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography, Grid } from '@material-ui/core';
import { Topbar } from '../../components';
import { getSteps } from '../../constants';
import IntroFrom from './components/introForm';
import { handleBackStep, handleNextStep } from '../../redux';
import { useStyles } from './style';

const Intro = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const introState = useSelector(state => state.intro);
  const { activeStep, service } = introState;
  const { name } = service;
  const steps = getSteps();

  return (
    <>
      <Topbar />
      <Grid
        container
        justify='flex-start'
        direction='column'
        className={classes.container}
      >
        <Typography variant='h1' className={classes.heading}>
          Привет! Мы поможем настроить онлайн-запись для твоего бизнеса за
          несколько минут.
        </Typography>
        <Typography paragraph className={classes.subheading}>
          Добавьте первую услугу, на которую будут записываться ваши клиенты
        </Typography>
        <IntroFrom introState={introState} dispatch={dispatch} />
        {activeStep === steps.length ? (
          //Redirected to Order page
          <Redirect to='/' />
        ) : (
          <div>
            {activeStep > 0 && (
              <Button onClick={() => dispatch(handleBackStep(activeStep))}>
                Назад
              </Button>
            )}
            <Button
              variant='contained'
              onClick={() => dispatch(handleNextStep(activeStep))}
              className={classes.btn__next}
              disabled={activeStep === 0 && name === ''}
            >
              Далее
            </Button>
          </div>
        )}
      </Grid>
    </>
  );
};

export default Intro;
