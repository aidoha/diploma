import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, Slide } from '@material-ui/core';
import { Topbar } from '../../components';
import { getSteps } from '../../constants';
import IntroForm from './components/introForm';
import Schedule from './components/schedule';
import { handleBackStep, handleNextStep } from '../../redux';
import { useStyles } from './style';

const Intro = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const introFormState = useSelector(state => state.introForm);
  const { activeStep, service } = introFormState;
  const { name } = service;
  const steps = getSteps();

  const onClickNext = () => {
    dispatch(handleNextStep(activeStep));
  };

  const onClickBack = () => {
    dispatch(handleBackStep(activeStep));
  };

  useEffect(() => {
    document.title = `${name} | BookForm`;
  }, [name]);

  return (
    <>
      <Topbar />
      <Grid
        container
        justify='flex-start'
        direction='column'
        className={classes.container}
      >
        {activeStep === 0 && (
          <Slide direction='up' in={activeStep === 0}>
            <div>
              <IntroForm introFormState={introFormState} dispatch={dispatch} />
            </div>
          </Slide>
        )}
        {activeStep === 1 && (
          <Slide direction='up' in={activeStep === 1}>
            <div>
              <Schedule />
            </div>
          </Slide>
        )}
        {activeStep === steps.length && <Redirect to='/' />}
        {activeStep !== steps.length && (
          <div>
            <Button onClick={onClickBack} disabled={!(activeStep > 0)}>
              Назад
            </Button>
            <Button
              variant='contained'
              onClick={onClickNext}
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
