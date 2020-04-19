import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {
  handleServiceSaveSuccess,
  handleServiceEditSuccess,
  handleServiceDeleteSuccess,
  handleServiceError,
} from '../../redux';

const ServiceStatuses = () => {
  const serviceState = useSelector((state) => state.service);
  const { statuses } = serviceState;
  const dispatch = useDispatch();

  const serviceStatusHandler = (status) => {
    switch (status) {
      case 'save':
        dispatch(handleServiceSaveSuccess(!statuses.save.value));
        break;
      case 'edit':
        dispatch(handleServiceEditSuccess(!statuses.edit.value));
        break;
      case 'delete':
        dispatch(handleServiceDeleteSuccess(!statuses.delete.value));
        break;
      case 'error':
        dispatch(handleServiceError(!statuses.error.value));
        break;
      default:
        return 'No such action';
    }
  };

  return Object.values(statuses).map((item, index) => (
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
  ));
};

export default ServiceStatuses;
