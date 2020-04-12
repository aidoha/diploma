import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import ServiceItem from './serviceItem';
import { useStyles } from '../style';

const services = ['service 1', 'service 2', 'service 3'];

const CompanyServices = () => {
  const classes = useStyles();
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
        {services.map((item) => (
          <ServiceItem item={item} />
        ))}
      </Grid>
    </Grid>
  );
};

export default CompanyServices;
