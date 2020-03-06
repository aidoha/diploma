import React from 'react';
import { useSelector } from 'react-redux';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { getSteps } from '../../constants';

const Steps = () => {
  const intro = useSelector(state => state.intro);
  const { activeStep } = intro;
  const steps = getSteps();
  return (
    <Stepper activeStep={activeStep}>
      {steps.map(label => {
        return (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default Steps;
