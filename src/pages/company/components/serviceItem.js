import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { routes } from '../../../constants';
import { useStyles } from '../style';

const ServiceItem = ({ item }) => {
  const classes = useStyles();
  const { push } = useHistory();
  const { companyServiceName, companyServiceID } = item;
  return (
    <Grid
      item
      lg={3}
      md={3}
      xs={12}
      className={classes.service_item}
      onClick={() => push(`${routes.service.edit}/${companyServiceID}`)}
    >
      <div>{companyServiceName}</div>
    </Grid>
  );
};

export default ServiceItem;
