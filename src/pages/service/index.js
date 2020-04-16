import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Grid, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { MainLayout, ServiceHeader } from '../../components';
import ServiceDetail from './components/serviceDetail';
import { useStyles } from './style';
import { useSelector } from 'react-redux';

const Service = () => {
  const { slug } = useParams();
  const serviceState = useSelector((state) => state.service);
  const { error, success } = serviceState;
  return (
    <MainLayout padding='0'>
      <ServiceHeader />
      <ServiceDetail />
      <Snackbar
        open={error}
        autoHideDuration={6000}
        // onClose={handleClose}
      >
        <Alert
          // onClose={handleClose}
          severity='error'
        >
          This is a error message!
        </Alert>
      </Snackbar>
      <Snackbar
        open={success}
        autoHideDuration={6000}
        // onClose={handleClose}
      >
        <Alert
          // onClose={handleClose}
          severity='success'
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </MainLayout>
  );
};

export default Service;
