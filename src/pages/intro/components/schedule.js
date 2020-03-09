import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Typography, Grid, TextField, InputAdornment } from '@material-ui/core';
import {
  handleStartTime,
  handleFinishTime,
  handleServiceDuration,
  handleServicePrice
} from '../../../redux';
import { useStyles } from '../style';
import { CssTextField } from '../../../globalStyle';

const Schedule = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const scheduleState = useSelector(state => state.schedule);
  const { week, service, touched } = scheduleState;
  const { duration, price } = service;

  const onChangeStartTime = (day, value) => {
    dispatch(handleStartTime(day, value));
  };

  const onChangeFinishTime = (day, value) => {
    dispatch(handleFinishTime(day, value));
  };

  const onChangeServiceDuration = value => {
    dispatch(handleServiceDuration(value));
  };

  const onChangeServicePrice = value => {
    dispatch(handleServicePrice(value));
  };

  return (
    <>
      <Typography variant='h1' className={classes.heading}>
        Укажите, в какое время можно записаться на услугу и её стоимость
      </Typography>
      <div className={classes.schedule__container}>
        {week.map(item => {
          const { time, day } = item;
          const { start, finish } = time;
          return (
            <Grid
              key={day}
              container
              justify='space-between'
              alignItems='center'
              className={classes.schedule__row}
            >
              <div>{day}</div>
              <TextField
                variant='outlined'
                type='time'
                error={start === ''}
                value={start}
                onChange={e => onChangeStartTime(day, e.target.value)}
              />
              -
              <TextField
                variant='outlined'
                type='time'
                error={finish === ''}
                value={finish}
                onChange={e => onChangeFinishTime(day, e.target.value)}
              />
            </Grid>
          );
        })}
        <div className={classes.form__group}>
          <Typography paragraph>Продолжительность услуги</Typography>
          <CssTextField
            type='number'
            variant='outlined'
            fullWidth
            name='service-duration'
            value={duration}
            error={parseInt(duration, 10) === 0}
            onBlur={e => onChangeServiceDuration(e.target.value)}
            onChange={e => onChangeServiceDuration(e.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position='end'>мин</InputAdornment>
            }}
          />
        </div>
        <div className={classes.form__group}>
          <Typography paragraph>Стоимость услуги</Typography>
          <CssTextField
            type='number'
            variant='outlined'
            fullWidth
            name='service-price'
            value={price}
            error={touched.price && parseInt(price, 10) === 0}
            onBlur={e => onChangeServicePrice(e.target.value)}
            onChange={e => onChangeServicePrice(e.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position='end'>₸</InputAdornment>
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Schedule;
