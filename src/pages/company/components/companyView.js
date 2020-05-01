import React, { useEffect, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Grid, Box, Button } from '@material-ui/core';
import { MainLayout, Loader, InputField, Statuses } from '../../../components';
import CompanySchedule from './companySchedule';
import withCurrentUser from '../../../hoc/currentUser';
import withApollo from '../../../hoc/withApollo';
import {
  GET_BUSINESS_COMPANY,
  CREATE_COMPANY_OPERTATION_HOURS,
  GET_COMPANY_OPERTATION_HOURS,
  UPDATE_COMPANY_OPERATION_HOURS,
  DELETE_COMPANY_OPERATION_HOURS,
} from '../queries';
import {
  handleWeekArray,
  handleAddDay,
  handleEditDay,
  handleDeleteDay,
} from '../../../redux/companySchedule/actions';
import {
  handleErrorStatus,
  handleSuccessStatus,
} from '../../../redux/statuses/actions';
import { errors, succeses } from '../../../constants/statuses';
import { useStyles } from '../style';

const CompanyView = memo((props) => {
  const classes = useStyles();
  const businessCompanyID =
    props &&
    props.currentUser &&
    props.currentUser[0] &&
    props.currentUser[0].businessCompanyID;
  const [companyName, setCompanyName] = useState('');
  const dispatch = useDispatch();
  const scheduleState = useSelector((state) => state.companySchedule);

  const { data: companyData, loading: companyLoading } = useQuery(
    GET_BUSINESS_COMPANY,
    {
      variables: { businessCompanyID },
    }
  );
  const {
    data: companyOperationHours,
    loading: companyOperationHoursLoading,
  } = useQuery(GET_COMPANY_OPERTATION_HOURS, {
    variables: { businessCompanyID },
  });
  const [createCompanyOperationHours] = useMutation(
    CREATE_COMPANY_OPERTATION_HOURS
  );
  const [updateCompanyOperationHours] = useMutation(
    UPDATE_COMPANY_OPERATION_HOURS
  );
  const [deleteCompanyOperationHours] = useMutation(
    DELETE_COMPANY_OPERATION_HOURS
  );

  useEffect(() => {
    setCompanyName(companyData?.getBusinessCompany?.businessCompanyName);
  }, [companyData]);

  useEffect(() => {
    dispatch(
      handleWeekArray(
        companyOperationHours?.getBusinessCompanyOperationHours
          ?.businessCompanyOperationHour
      )
    );
  }, [companyOperationHours]);

  const onChangeCompanyName = (name, value) => {
    setCompanyName(value);
  };

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

  const deleteCompanyTimes = (day) => {
    const objDay = findDayInWeek(day);

    deleteCompanyOperationHours({
      variables: { companyOperationHourID: objDay.companyOperationHourID },
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

  const editCompanyTimes = (day) => {
    const objDay = findDayInWeek(day);
    const obj = { ...objDay, businessCompanyID };
    delete obj.edited;
    delete obj.__typename;
    delete objDay.edited;

    if (!obj.dayOfWeek || !obj.openTime || !obj.closeTime) {
      dispatch(
        handleErrorStatus({
          value: true,
          message: errors.company.operation_hours.empty_field,
        })
      );
    } else {
      updateCompanyOperationHours({ variables: obj })
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

  const addCompanyTimes = (item) => {
    const obj = {
      businessCompanyID,
      dayOfWeek: scheduleState.selectedDay,
      openTime: item.openTime,
      closeTime: item.closeTime,
    };

    const existDay = scheduleState.week.find(
      (item) => item.dayOfWeek === obj.dayOfWeek
    );
    if (existDay) {
      dispatch(
        handleErrorStatus({
          value: true,
          message: errors.company.operation_hours.exists,
        })
      );
    } else if (!obj.dayOfWeek || !obj.openTime || !obj.closeTime) {
      dispatch(
        handleErrorStatus({
          value: true,
          message: errors.company.operation_hours.empty_field,
        })
      );
    } else {
      createCompanyOperationHours({ variables: obj })
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

  return (
    <MainLayout padding='25px' section='company' hasBackArrow>
      {companyLoading || companyOperationHoursLoading ? (
        <Loader />
      ) : (
        <Grid container direction='column'>
          <Box fontWeight={600} fontSize='24px'>
            Информация о компании
          </Box>
          <Box fontSize='16px' color='#999' marginTop='15px'>
            Заполненная информация отображается на странице с онлайн-записью.
          </Box>
          <Grid item lg={6} md={6} xs={12}>
            <InputField
              label='Название компании*'
              name='company-name'
              value={companyName}
              onChange={onChangeCompanyName}
            />
          </Grid>
          {scheduleState.week.map((item) => (
            <CompanySchedule
              key={item.dayOfWeek}
              item={item}
              addCompanyTimes={addCompanyTimes}
              editCompanyTimes={editCompanyTimes}
              deleteCompanyTimes={deleteCompanyTimes}
              editDayOfWeek={editDayOfWeek}
            />
          ))}
          {scheduleState.week.length < 7 && (
            <Grid container item lg={4} md={4} xs={12}>
              <Button
                size='large'
                onClick={addDayToWeek}
                className={classes.btn_save_time_oulined}
              >
                Добавить
              </Button>
            </Grid>
          )}
        </Grid>
      )}
      <Statuses />
    </MainLayout>
  );
});

export default withApollo(withCurrentUser(CompanyView));
