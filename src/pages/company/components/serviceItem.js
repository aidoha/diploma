import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../style';

const ServiceItem = ({ item }) => {
  const classes = useStyles();
  const { companyServiceName } = item;
  return (
    <Grid item lg={3} md={3} xs={12} className={classes.service_item}>
      <div>{companyServiceName}</div>
    </Grid>
  );
};

export default ServiceItem;
