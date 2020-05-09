import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { ArrowBack, ExitToApp } from '@material-ui/icons';
import { useStyles } from './style';

const OrdersHeader = ({ hasBackArrow }) => {
  const classes = useStyles();
  const { goBack } = useHistory();

  const onLogoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = `${window.location.protocol}//${
      window.location.hostname
    }${window.location.port ? `:${window.location.port}` : ''}`;
  };

  return (
    <AppBar position='sticky' elevation={1} className={classes.company_toolbar}>
      <Toolbar>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item lg={4} md={4}>
            <Box display='flex' alignItems='center'>
              {hasBackArrow && (
                <ArrowBack
                  className={classes.service_arrow_back}
                  onClick={() => goBack()}
                />
              )}
              <Typography variant='h4'>
                <Box fontWeight={600} fontSize={18}>
                  Календарь заказов
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <ExitToApp className={classes.logout} onClick={onLogoutHandler} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default OrdersHeader;
