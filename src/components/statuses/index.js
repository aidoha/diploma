import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {
  handleErrorStatus,
  handleSuccessStatus,
} from '../../redux/statuses/actions';

const Statuses = () => {
  const statusState = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const statusHandler = (status) => {
    switch (status) {
      case 'error':
        dispatch(
          handleErrorStatus({
            value: !statusState.statuses.error.value,
            message: statusState.statuses.error.message,
          })
        );
        break;
      case 'success':
        dispatch(
          handleSuccessStatus({
            value: !statusState.statuses.success.value,
            message: statusState.statuses.success.message,
          })
        );
        break;
      default:
        return 'No such action';
    }
  };

  return Object.values(statusState.statuses).map((item, index) => (
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
};

export default Statuses;
