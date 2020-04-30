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
  CREACTE_COMPANY_OPERTATION_HOURS,
  GET_COMPANY_OPERTATION_HOURS,
} from '../queries';
import {
  handleWeekArray,
  handleAddDay,
} from '../../../redux/compnaySchedule/actions';
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
  const [createServiceOperationHours] = useMutation(
    CREACTE_COMPANY_OPERTATION_HOURS
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

  const addDayToWeek = () => {
    dispatch(
      handleAddDay({
        dayOfWeek: '',
        openTime: '08:00',
        closeTime: '13:00',
        added: true,
      })
    );
  };

  const saveServiceTimes = (item) => {
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
      console.log('IDI NAHUI UJE SEWESTVUET');
    } else if (!obj.dayOfWeek || !obj.openTime || !obj.closeTime) {
      console.log('че то пусто блять');
    } else {
      createServiceOperationHours({ variables: obj })
        .then((res) => console.log('res', res))
        .catch((err) => console.log('err', err));
    }
  };

  return (
    <MainLayout padding='25px' section='company'>
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
              saveServiceTimes={saveServiceTimes}
            />
          ))}
          <Grid container item lg={4} md={4} xs={12}>
            <Button
              size='large'
              onClick={addDayToWeek}
              className={classes.btn_save_time_oulined}
            >
              Добавить
            </Button>
          </Grid>
        </Grid>
      )}
      <Statuses type='companySchedule' />
    </MainLayout>
  );
});

export default withApollo(withCurrentUser(CompanyView));
