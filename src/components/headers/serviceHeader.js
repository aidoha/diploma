import React from 'react';
import { useParams } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { useStyles } from './style';

const ServiceHeader = () => {
  const { slug } = useParams();
  const classes = useStyles();
  return (
    <AppBar position='sticky' elevation={1} className={classes.company_toolbar}>
      <Toolbar>
        <ArrowBack className={classes.service_arrow_back} />
        <Typography variant='h4'>
          <Box fontWeight={600} fontSize={18}>
            {slug === 'add' ? 'Новая услуга' : 'edit'}
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ServiceHeader;
