import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../style';

const ServiceItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      lg={3}
      md={3}
      xs={12}
      className={classes.service_item}
      style={{ margin: '35px 0px' }}
    >
      <div>{item}</div>
    </Grid>
  );
};

export default ServiceItem;
