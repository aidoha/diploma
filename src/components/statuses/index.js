import React from 'react';
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
import { handleAuthError, handleSetAuthorized } from '../../redux/auth/actions';

const Statuses = ({ type }) => {
  const serviceState = useSelector((state) => state.service);
  const signUpState = useSelector((state) => state.signUp);
  const signInState = useSelector((state) => state.signIn);
  const companyScheduleState = useSelector((state) => state.companySchedule);
  const dispatch = useDispatch();

  const statusHandler = (status) => {
    switch (status) {
      // service handlers
      case 'saveService':
        dispatch(handleServiceSaveSuccess(!serviceState.statuses.save.value));
        break;
      case 'editService':
        dispatch(handleServiceEditSuccess(!serviceState.statuses.edit.value));
        break;
      case 'deleteService':
        dispatch(
          handleServiceDeleteSuccess(!serviceState.statuses.delete.value)
        );
        break;
      case 'errorService':
        dispatch(handleServiceError(!serviceState.statuses.error.value));
        break;
      // sign up handlers
      case 'saveCompany':
        dispatch(handleCompanySuccess(!signUpState.statuses.saveCompany.value));
        break;
      case 'singUpSuccess':
        dispatch(
          handleSetAuthorized(!signUpState.statuses.singUpSuccess.value)
        );
        break;
      // sign in handlers
      case 'singInSuccess':
        dispatch(
          handleSetAuthorized(!signInState.statuses.singInSuccess.value)
        );
        break;
      case 'errorAuth':
        dispatch(handleAuthError(!signUpState.statuses.error.value));
        break;
      // company schedule handlers

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
  } else if (type === 'signIn') {
    return Object.values(signInState.statuses).map((item, index) => (
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
  } else if (type === 'companySchedule') {
    return Object.values(companyScheduleState.statuses).map((item, index) => (
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
