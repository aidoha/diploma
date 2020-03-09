import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Typography, Grid, TextField } from '@material-ui/core';
import { handleStartTime, handleFinishTime } from '../../../redux';
import { useStyles } from '../style';

const Timetable = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const timetableState = useSelector(state => state.timetable);
  const { week, service } = timetableState;
  const { duration, price } = service;

  const onChangeStartTime = (day, value) => {
    dispatch(handleStartTime(day, value));
  };

  const onChangeFinishTime = (day, value) => {
    dispatch(handleFinishTime(day, value));
  };

  console.log(week);

  return (
    <div>
      <Typography variant='h1' className={classes.heading}>
        Укажите, в какое время можно записаться на услугу и её стоимость
      </Typography>
      <div className={classes.timeTableContainer}>
        {week.map(item => {
          const { time, day } = item;
          const { start, finish } = time;
          return (
            <Grid
              key={day}
              container
              justify='space-between'
              alignItems='center'
              className={classes.timeTableRow}
            >
              <div>{day}</div>
              <TextField
                variant='outlined'
                type='time'
                className={classes.textField}
                error={start === ''}
                value={start}
                onChange={e => onChangeStartTime(day, e.target.value)}
              />
              -
              <TextField
                variant='outlined'
                type='time'
                className={classes.textField}
                error={finish === ''}
                value={finish}
                onChange={e => onChangeFinishTime(day, e.target.value)}
              />
            </Grid>
          );
        })}
      </div>
    </div>
  );
};

export default Timetable;
