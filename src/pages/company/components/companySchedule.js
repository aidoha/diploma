import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  handleStartTime,
  handleFinishTime,
  handleSelectedDay,
} from '../../../redux/companySchedule/actions';
import { getDayOfWeekById } from '../../../utils';
import { useStyles } from '../style';

const CompanySchedule = ({ item, addCompanyTimes }) => {
  const classes = useStyles();
  const { openTime, closeTime, dayOfWeek, added } = item;
  const dispatch = useDispatch();
  const scheduleState = useSelector((state) => state.companySchedule);

  const onChangeStartTime = (day, value) => {
    dispatch(handleStartTime(day, value));
  };

  const onChangeFinishTime = (day, value) => {
    dispatch(handleFinishTime(day, value));
  };

  const onChangeSelectedDay = (id) => {
    dispatch(handleSelectedDay(id));
  };

  return (
    <Box margin='20px 0'>
      <Grid container item alignItems='center' lg={6} md={6} xs={12}>
        <Box width='10%'>
          {!added && getDayOfWeekById(dayOfWeek)}
          {added && (
            <Select
              required
              value={scheduleState.selectedDay}
              onChange={(e) => onChangeSelectedDay(e.target.value)}
            >
              {scheduleState.weekOptionList.map((item) => {
                const { day, id } = item;
                return (
                  <MenuItem key={id} value={id}>
                    {day}
                  </MenuItem>
                );
              })}
            </Select>
          )}
        </Box>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='30%'
        >
          <TextField
            variant='outlined'
            type='time'
            error={openTime === ''}
            value={openTime}
            onChange={(e) => onChangeStartTime(dayOfWeek, e.target.value)}
            className={classes.textfield}
          />
          -
          <TextField
            variant='outlined'
            type='time'
            error={closeTime === ''}
            value={closeTime}
            onChange={(e) => onChangeFinishTime(dayOfWeek, e.target.value)}
            className={classes.textfield}
          />
        </Box>
        {added && (
          <Box width='35%' display='flex' justifyContent='center'>
            <Button
              variant='contained'
              size='large'
              className={classes.btn_save_time}
              onClick={() => addCompanyTimes(item)}
            >
              Сохранить
            </Button>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default CompanySchedule;
