import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { useStyles } from './style';

const OrdersHeader = () => {
  const classes = useStyles();
  return (
    <AppBar position='sticky' elevation={1} className={classes.company_toolbar}>
      <Toolbar>
        <Grid container justify='space-between' alignItems='center'>
          <Box display='flex' alignItems='center'>
            <Typography variant='h4'>
              <Box fontWeight={600} fontSize={18}>
                Календарь заказов
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default OrdersHeader;
