import React from 'react';

import { useSelector } from 'react-redux';
import { Typography, Grid, TextField } from '@material-ui/core';
import { getWeekDays } from '../../../constants/index';
import { formateWeekArray } from '../../../utils/index';
import { useStyles } from '../style';

const weekDays = getWeekDays();

const Timetable = () => {
  const classes = useStyles();
  const timetableState = useSelector(state => state.timetable);
  const { time, service } = timetableState;
  const { start, finish } = time;
  const { duration, price } = service;
  const week = formateWeekArray(weekDays, timetableState);

  return (
    <div>
      <Typography variant='h1' className={classes.heading}>
        Укажите, в какое время можно записаться на услугу и её стоимость
      </Typography>
      <div className={classes.timeTableContainer}>
        {week.map((item, index) => (
          <Grid
            key={index}
            container
            justify='space-between'
            alignItems='center'
            className={classes.timeTableRow}
          >
            <div>{item.day}</div>
            <TextField
              variant='outlined'
              type='time'
              defaultValue={start}
              className={classes.textField}
            />
            -
            <TextField
              variant='outlined'
              type='time'
              defaultValue={finish}
              className={classes.textField}
            />
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
