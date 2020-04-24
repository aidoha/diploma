import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Box, Link } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { Loader, Statuses } from '../../../components';
import ServiceItem from './serviceItem';
import { routes } from '../../../constants';
import {
  handleCompanyServices,
  handleResetCompanyServices,
} from '../../../redux/company/actions';
import { useStyles } from '../style';

const { service } = routes;

const CompanyServices = ({ companyServicesData, companyServicesLoading }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const companyState = useSelector((state) => state.company);
  const { companyServices } = companyState;
  const services =
    companyServicesData?.getBusinessCompanyServices?.businessCompanyService;

  useEffect(() => {
    if (services) {
      dispatch(handleCompanyServices(services));
    } else {
      dispatch(handleResetCompanyServices());
    }

    return () => {
      dispatch(handleCompanyServices([]));
    };
  }, [services, dispatch]);

  if (companyServicesLoading) {
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

      <Link href={service.add} style={{ display: 'flex' }}>
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
      </Link>

      <Grid container justify='space-between' alignItems='center'>
        {companyServices &&
          companyServices.map((item, index) => (
            <ServiceItem key={index} item={item} index={index} />
          ))}
      </Grid>
      <Statuses type='service' />
    </Grid>
  );
};

export default CompanyServices;
