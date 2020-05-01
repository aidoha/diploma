import { ERROR, SUCCESS } from './types';

export const handleErrorStatus = ({ value, message }) => {
  return {
    type: ERROR,
    payload: { value, message },
  };
};

export const handleSuccessStatus = ({ value, message }) => {
  return {
    type: SUCCESS,
    payload: { value, message },
  };
};
