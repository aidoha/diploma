import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Typography, Box } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { Loader, ServiceStatuses } from '../../../components';
import ServiceItem from './serviceItem';
import { routes } from '../../../constants';
import { GET_BUSINESS_COMPANY_SERVICES } from '../queries';
import {
  handleCompanyServices,
  handleResetCompanyServices,
} from '../../../redux/company/actions';
import { useStyles } from '../style';

const { service } = routes;

const CompanyServices = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const companyState = useSelector((state) => state.company);
  const { companyServices } = companyState;
  const { data, loading } = useQuery(GET_BUSINESS_COMPANY_SERVICES, {
    variables: { businessCompanyID: 6 },
  });
  const services = data?.getBusinessCompanyServices?.businessCompanyService;

  useEffect(() => {
    if (services) {
      dispatch(handleCompanyServices(services));
    } else {
      dispatch(handleResetCompanyServices());
    }
    // return () => stopPolling();
  }, [data, dispatch]);

  if (loading) {
    return (
      <Grid container justify='center'>
        <Box margin='50px 0'>
          <Loader />
        </Box>
      </Grid>
    );
  }

  return (
    <Grid
      container
      justify='space-between'
      className={classes.company_services_container}
    >
      <Grid item lg={6} md={6} xs={12}>
        <Typography variant='h2'>
          <Box fontSize={24} fontWeight={600}>
            Услуги компании
          </Box>
        </Typography>
      </Grid>

      <Grid
        item
        container
        justify='flex-end'
        alignItems='center'
        lg={6}
        md={6}
        xs={12}
        spacing={2}
        className={classes.company_services__add}
        onClick={() => push(service.add)}
      >
        <Grid item>
          <AddCircle className={classes.add_icon} />
        </Grid>
        <Grid item>
          <Typography variant='h6'>
            <Box fontSize={16} color='#8282ff'>
              Добавить услугу
            </Box>
          </Typography>
        </Grid>
      </Grid>

      <Grid container justify='space-between' alignItems='center'>
        {companyServices &&
          companyServices.map((item, index) => (
            <ServiceItem key={index} item={item} index={index} />
          ))}
      </Grid>
      <ServiceStatuses />
    </Grid>
  );
};

export default CompanyServices;
