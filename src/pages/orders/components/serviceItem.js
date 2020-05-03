import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { routes } from '../../../constants';
import { useStyles } from '../style';

const ServiceItem = ({ item }) => {
  const { companyServiceName, companyServiceID } = item;
  const classes = useStyles();
  const { push } = useHistory();

  const redirectToOrderService = () => {
    push(`${routes.orders}/${companyServiceID}`);
  };

  return (
    <Grid
      container
      justify='space-between'
      alignItems='center'
      item
      lg={3}
      md={3}
      xs={12}
      className={classes.service_item}
    >
      <div
        className={classes.service_item_name}
        onClick={redirectToOrderService}
      >
        {companyServiceName}
      </div>
    </Grid>
  );
};

export default ServiceItem;
