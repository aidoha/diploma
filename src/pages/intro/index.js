import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { Topbar } from '../../components';
import { getSteps } from '../../constants';
import { handleBackStep, handleNextStep } from '../../redux';
import { useStyles } from './style';
import { Redirect } from 'react-router-dom';

const Intro = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const intro = useSelector(state => state.intro);
  const { activeStep } = intro;
  const steps = getSteps();

  return (
    <>
      <Topbar />
      {activeStep === steps.length ? (
        <Redirect to='/' />
      ) : (
        <div>
          <Button
            disabled={activeStep === 0}
            onClick={() => dispatch(handleBackStep(activeStep))}
            className={classes.button}
          >
            Назад
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => dispatch(handleNextStep(activeStep))}
            className={classes.button}
          >
            Далее
          </Button>
        </div>
      )}
    </>
  );
};

export default Intro;
