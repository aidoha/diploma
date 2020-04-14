import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { MainLayout, ServiceHeader } from '../../components';
import ServiceDetail from './components/serviceDetail';
import { useStyles } from './style';

const Service = () => {
  const { slug } = useParams();
  // const classes = useStyles();
  return (
    <MainLayout padding='0'>
      <ServiceHeader />
      <ServiceDetail />
    </MainLayout>
  );
};

export default Service;
