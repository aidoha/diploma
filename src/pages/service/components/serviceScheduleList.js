import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Grid, Button, Box } from '@material-ui/core';
import { Loader, ScheduleItem } from '../../../components';
import {
  GET_SERVICE_OPERATION_HOURS,
  CREATE_SERVICE_OPERATION_HOURS,
  DELETE_SERVICE_OPERATION_HOURS,
  UPDATE_SERVICE_OPERATION_HOURS,
} from '../queries';
import {
  handleWeekArray,
  handleAddDay,
  handleEditDay,
  handleDeleteDay,
} from '../../../redux/companySchedule/actions';
import withCurrentUser from '../../../hoc/currentUser';
import { useStyles } from '../style';
import {
  handleErrorStatus,
  handleSuccessStatus,
} from '../../../redux/statuses/actions';
import { errors, succeses } from '../../../constants/statuses';

const ServiceScheduleList = (props) => {
  const classes = useStyles();
  const businessCompanyID =
    props &&
    props.currentUser &&
    props.currentUser[0] &&
    props.currentUser[0].businessCompanyID;

  const { slug, id: serviceID } = useParams();
  const dispatch = useDispatch();
  const scheduleState = useSelector((state) => state.companySchedule);
  const {
    data: serviceOperationHours,
    loading: serviceOperationHoursLoading,
  } = useQuery(GET_SERVICE_OPERATION_HOURS, {
    variables: { serviceID },
    skip: !serviceID,
  });
  const [createServiceOperationHours] = useMutation(
    CREATE_SERVICE_OPERATION_HOURS
  );
  const [updateServiceOperationHours] = useMutation(
    UPDATE_SERVICE_OPERATION_HOURS
  );
  const [deleteServiceOperationHours] = useMutation(
    DELETE_SERVICE_OPERATION_HOURS
  );

  useEffect(() => {
    const sortedWeek = serviceOperationHours?.getBusinessCompanyServiceOperationHours?.businessCompanyServiceOperationHour.sort(
      (a, b) => a.dayOfWeek - b.dayOfWeek
    );
    dispatch(handleWeekArray(sortedWeek));
  }, [serviceOperationHours]);

  const findDayInWeek = (day) => {
    return scheduleState.week.find((item) => item === day);
  };

  const addDayToWeek = () => {
    const addedEmptyDay = {
      dayOfWeek: null,
      openTime: '',
      closeTime: '',
      added: true,
    };
    dispatch(handleAddDay(addedEmptyDay));
  };

  const editDayOfWeek = (day) => {
    const objDay = findDayInWeek(day);
    dispatch(handleEditDay(objDay));
  };

  const addServiceTimes = (item) => {
    const obj = {
      businessCompanyID,
      businessServiceID: serviceID,
      dayOfWeek: scheduleState.selectedDay,
      openTime: item.openTime,
      closeTime: item.closeTime,
    };
    const existDay = scheduleState.week.find(
      (item) => item.dayOfWeek === obj.dayOfWeek
    );

    console.log('obj', obj);
    if (existDay) {
      dispatch(
        handleErrorStatus({
          value: true,
          message: errors.company.operation_hours.exists,
        })
      );
    } else if (obj.dayOfWeek === null || !obj.openTime || !obj.closeTime) {
      dispatch(
        handleErrorStatus({
          value: true,
          message: errors.company.operation_hours.empty_field,
        })
      );
    } else {
      createServiceOperationHours({ variables: obj })
        .then((res) => {
          if (res.data) {
            dispatch(
              handleSuccessStatus({
                value: true,
                message: succeses.company.operation_hours.add,
              })
            );
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        })
        .catch(() =>
          dispatch(
            handleErrorStatus({
              value: true,
              message: errors.general,
            })
          )
        );
    }
  };

  const editServiceTimes = (day) => {
    const objDay = findDayInWeek(day);
    const obj = {
      ...objDay,
      businessCompanyID,
      operationHourID: objDay.serviceOperationHourID,
    };
    delete obj.serviceOperationHourID;
    delete obj.edited;
    delete obj.__typename;
    delete objDay.edited;

    if (obj.dayOfWeek === null || !obj.openTime || !obj.closeTime) {
      dispatch(
        handleErrorStatus({
          value: true,
          message: errors.company.operation_hours.empty_field,
        })
      );
    } else {
      updateServiceOperationHours({ variables: obj })
        .then((res) => {
          if (res.data) {
            dispatch(
              handleSuccessStatus({
                value: true,
                message: succeses.company.operation_hours.edit,
              })
            );
          }
        })
        .catch(() =>
          dispatch(
            handleErrorStatus({
              value: true,
              message: errors.general,
            })
          )
        );
    }
  };

  const deleteServiceTimes = (day) => {
    const objDay = findDayInWeek(day);

    deleteServiceOperationHours({
      variables: { operationHourID: objDay.serviceOperationHourID },
    })
      .then((res) => {
        if (res.data) {
          dispatch(
            handleSuccessStatus({
              value: true,
              message: succeses.company.operation_hours.delete,
            })
          );
          dispatch(handleDeleteDay(objDay));
        }
      })
      .catch(() =>
        dispatch(
          handleErrorStatus({
            value: true,
            message: errors.general,
          })
        )
      );
  };

  return (
    <Grid container direction='column'>
      {serviceOperationHoursLoading ? (
        <Loader />
      ) : (
        scheduleState.week.map((item) => (
          <ScheduleItem
            key={item.dayOfWeek}
            item={item}
            editDayOfWeek={editDayOfWeek}
            addTimes={addServiceTimes}
            editTimes={editServiceTimes}
            deleteTimes={deleteServiceTimes}
          />
        ))
      )}
      {scheduleState.week.length < 7 && (
        <Box>
          <Button
            size='large'
            onClick={addDayToWeek}
            className={classes.btn_save_time_oulined}
          >
            Добавить
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default withCurrentUser(ServiceScheduleList);
