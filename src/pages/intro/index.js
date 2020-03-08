import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, Slide } from '@material-ui/core';
import { Topbar } from '../../components';
import { getSteps } from '../../constants';
import IntroForm from './components/introForm';
import Timetable from './components/timetable';
import { handleBackStep, handleNextStep } from '../../redux';
import { useStyles } from './style';

const Intro = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const introFormState = useSelector(state => state.introForm);
  const { activeStep, service } = introFormState;
  const { name } = service;
  const steps = getSteps();

  useEffect(() => {
    document.title = `${name} | BookForm`;
  }, []);

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
              <Timetable />
            </div>
          </Slide>
        )}
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
