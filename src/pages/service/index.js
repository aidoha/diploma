import React from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { MainLayout, ServiceHeader } from '../../components';
import ServiceDetail from './components/serviceDetail';
import { handleServiceSuccess, handleServiceError } from '../../redux';

const saveStatuses = [
  {
    value: 'error',
    autoHideDuration: 6000,
    text: 'Упс... Что-то пошло не так',
  },
  {
    value: 'success',
    autoHideDuration: 6000,
    text: 'Вы успешно создали услугу!',
  },
];

const Service = () => {
  // const { slug } = useParams();
  const serviceState = useSelector((state) => state.service);
  const { error, success } = serviceState;
  const dispatch = useDispatch();

  const serviceStatusHandler = (status) => {
    switch (status) {
      case 'success':
        dispatch(handleServiceSuccess(!success));
        break;
      case 'error':
        dispatch(handleServiceError(!error));
        break;
    }
  };

  return (
    <MainLayout padding='0'>
      <ServiceHeader />
      <ServiceDetail />
      {saveStatuses.map((item) => (
        <Snackbar
          open={item.value}
          autoHideDuration={item.autoHideDuration}
          onClose={() => serviceStatusHandler(item.value)}
        >
          <Alert
            onClose={() => serviceStatusHandler(item.value)}
            severity={item.value}
          >
            {item.text}
          </Alert>
        </Snackbar>
      ))}
    </MainLayout>
  );
};

export default Service;
