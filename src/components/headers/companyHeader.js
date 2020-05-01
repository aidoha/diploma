import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { ExitToApp, ArrowBack } from '@material-ui/icons';
import { useStyles } from './style';

const CompanyHeader = ({ hasBackArrow }) => {
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
          <Box display='flex' alignItems='center'>
            {hasBackArrow && (
              <ArrowBack
                className={classes.service_arrow_back}
                onClick={() => goBack()}
              />
            )}
            <Typography variant='h4'>
              <Box fontWeight={600} fontSize={18}>
                Компания и услуги
              </Box>
            </Typography>
          </Box>
          <ExitToApp className={classes.logout} onClick={onLogoutHandler} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default CompanyHeader;
