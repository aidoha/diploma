import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { useStyles } from './style';

const ServiceHeader = () => {
  const { slug } = useParams();
  const classes = useStyles();
  const { goBack } = useHistory();
  const serviceState = useSelector((state) => state.service);
  return (
    <AppBar position='sticky' elevation={1} className={classes.company_toolbar}>
      <Toolbar>
        <ArrowBack
          className={classes.service_arrow_back}
          onClick={() => goBack()}
        />
        <Typography variant='h4'>
          <Box fontWeight={600} fontSize={18}>
            {slug === 'add' ? 'Новая услуга' : serviceState.name}
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ServiceHeader;
