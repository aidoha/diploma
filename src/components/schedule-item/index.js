import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import {
  Grid,
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@material-ui/core';
import { Edit, Delete, Bookmark } from '@material-ui/icons';
import {
  handleStartTime,
  handleFinishTime,
  handleSelectedDay,
} from '../../redux/companySchedule/actions';
import { getDayOfWeekById } from '../../utils';
import { useStyles } from './style';

const ServiceSchedule = ({
  item,
  addTimes,
  editTimes,
  deleteTimes,
  editDayOfWeek,
}) => {
  const classes = useStyles();
  const { openTime, closeTime, dayOfWeek, added, edited } = item;
  const dispatch = useDispatch();
  const scheduleState = useSelector((state) => state.companySchedule);
  const [confirmModal, setConfirmModal] = useState(false);

  const handleConfirmModal = () => {
    setConfirmModal(!confirmModal);
  };

  const onChangeStartTime = (day, value) => {
    // console.log('start time', value + ':00');
    dispatch(handleStartTime(day, value + ':00'));
  };

  const onChangeFinishTime = (day, value) => {
    dispatch(handleFinishTime(day, value + ':00'));
  };

  const onChangeSelectedDay = (id) => {
    dispatch(handleSelectedDay(id));
  };

  return (
    <Box margin='20px 0'>
      <Grid container item alignItems='center' lg={12} md={12} xs={12}>
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
          width='50%'
        >
          <TextField
            variant='outlined'
            type='time'
            error={openTime === ''}
            value={openTime}
            onChange={(e) => onChangeStartTime(dayOfWeek, e.target.value)}
            className={classes.textfield}
            disabled={!added && !edited}
          />
          -
          <TextField
            variant='outlined'
            type='time'
            error={closeTime === ''}
            value={closeTime}
            onChange={(e) => onChangeFinishTime(dayOfWeek, e.target.value)}
            className={classes.textfield}
            disabled={!added && !edited}
          />
        </Box>
        <Box width='35%' display='flex' justifyContent='center'>
          {!added && (
            <div>
              {edited && (
                <Bookmark
                  color='action'
                  className={classes.service_item_actions}
                  onClick={() => editTimes(item)}
                />
              )}
              {!edited && (
                <Edit
                  color='action'
                  className={classes.service_item_actions}
                  onClick={() => editDayOfWeek(item)}
                />
              )}
              <Delete
                color='action'
                className={classes.service_item_actions}
                onClick={handleConfirmModal}
              />
            </div>
          )}
          {added && (
            <Button
              variant='contained'
              size='large'
              className={classes.btn_save_time}
              onClick={() => addTimes(item)}
            >
              Сохранить
            </Button>
          )}
        </Box>
      </Grid>
      <Dialog open={confirmModal} onClose={handleConfirmModal}>
        <DialogTitle>
          Вы действительно хотите удалить этот рабочий день?
        </DialogTitle>
        <DialogActions>
          <Button color='default' onClick={handleConfirmModal}>
            Отменить
          </Button>
          <Button color='primary' onClick={() => deleteTimes(item)}>
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ServiceSchedule;
