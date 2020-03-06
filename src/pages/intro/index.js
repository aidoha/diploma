import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography, Container } from '@material-ui/core';
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
      <Container className={classes.container}>
        <Typography variant='h1' className={classes.heading}>
          Привет! Мы поможем настроить онлайн-запись для твоего бизнеса за
          несколько минут.
        </Typography>
        {activeStep === steps.length ? (
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
              color='primary'
              onClick={() => dispatch(handleNextStep(activeStep))}
              className={classes.btn__next}
            >
              Далее
            </Button>
          </div>
        )}
      </Container>
    </>
  );
};

export default Intro;
