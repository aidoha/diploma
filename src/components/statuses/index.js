import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {
  handleServiceSaveSuccess,
  handleServiceEditSuccess,
  handleServiceDeleteSuccess,
  handleServiceError,
  handleCompanySuccess,
} from '../../redux';
import { handleAuthError } from '../../redux/auth/actions';

const Statuses = ({ type }) => {
  const serviceState = useSelector((state) => state.service);
  const signUpState = useSelector((state) => state.signUp);
  const dispatch = useDispatch();

  const statusHandler = (status) => {
    switch (status) {
      case 'save':
        dispatch(handleServiceSaveSuccess(!serviceState.statuses.save.value));
        break;
      case 'edit':
        dispatch(handleServiceEditSuccess(!serviceState.statuses.edit.value));
        break;
      case 'delete':
        dispatch(
          handleServiceDeleteSuccess(!serviceState.statuses.delete.value)
        );
        break;
      case 'error':
        dispatch(handleServiceError(!serviceState.statuses.error.value));
        break;
      case 'saveCompany':
        dispatch(handleCompanySuccess(!signUpState.statuses.saveCompany.value));
        break;
      case 'errorCompany':
        dispatch(handleAuthError(!signUpState.statuses.error.value));
        break;
      default:
        return 'No such action';
    }
  };

  if (type === 'service') {
    return Object.values(serviceState.statuses).map((item, index) => (
      <Snackbar
        key={index}
        open={item.value}
        autoHideDuration={item.autoHideDuration}
        onClose={() => statusHandler(item.label)}
      >
        <Alert onClose={() => statusHandler(item.label)} severity={item.text}>
          {item.message}
        </Alert>
      </Snackbar>
    ));
  } else if (type === 'signUp') {
    return Object.values(signUpState.statuses).map((item, index) => (
      <Snackbar
        key={index}
        open={item.value}
        autoHideDuration={item.autoHideDuration}
        onClose={() => statusHandler(item.label)}
      >
        <Alert onClose={() => statusHandler(item.label)} severity={item.text}>
          {item.message}
        </Alert>
      </Snackbar>
    ));
  }
};

export default Statuses;
