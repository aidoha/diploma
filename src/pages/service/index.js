import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { MainLayout, ServiceHeader } from '../../components';
import ServiceDetail from './components/serviceDetail';
import {
  handleServiceSaveSuccess,
  handleServiceEditSuccess,
  handleServiceError,
} from '../../redux';

const Service = () => {
  const serviceState = useSelector((state) => state.service);
  const { statuses } = serviceState;
  const dispatch = useDispatch();

  const serviceStatusHandler = (status) => {
    switch (status) {
      case 'save':
        dispatch(handleServiceSaveSuccess(!statuses.success.value));
        break;
      case 'edit':
        dispatch(handleServiceEditSuccess(!statuses.edit.value));
        break;
      case 'error':
        dispatch(handleServiceError(!statuses.error.value));
        break;
    }
  };

  return (
    <MainLayout padding='0'>
      <ServiceHeader />
      <ServiceDetail />
      {Object.values(statuses).map((item, index) => (
        <Snackbar
          key={index}
          open={item.value}
          autoHideDuration={item.autoHideDuration}
          onClose={() => serviceStatusHandler(item.label)}
        >
          <Alert
            onClose={() => serviceStatusHandler(item.label)}
            severity={item.text}
          >
            {item.message}
          </Alert>
        </Snackbar>
      ))}
    </MainLayout>
  );
};

export default Service;
