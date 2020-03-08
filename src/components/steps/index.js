import React from 'react';
import { useSelector } from 'react-redux';
import { Stepper, Step, StepLabel, makeStyles } from '@material-ui/core';
import { getSteps } from '../../constants';

const useStyles = makeStyles({
  step: {
    '& .MuiStepIcon-active': {
      color: '#52c41a'
    },
    '&  .MuiStepIcon-completed': {
      color: '#52c41a'
    }
  }
});

const Steps = () => {
  const classes = useStyles();
  const introForm = useSelector(state => state.introForm);
  const { activeStep } = introForm;
  const steps = getSteps();
  return (
    <Stepper activeStep={activeStep}>
      {steps.map(label => {
        return (
          <Step key={label} className={classes.step}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default Steps;
