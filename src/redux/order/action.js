import {
  UPDATE_CLIENT_NAME,
  UPDATE_CLIENT_PHONE,
  UPDATE_CLIENT_COMMENT,
  UPDATE_ORDER_DATE,
} from './types';

export const handleClientName = (name = '') => {
  return {
    type: UPDATE_CLIENT_NAME,
    payload: name,
  };
};

export const handleClientPhone = (phone = '') => {
  return {
    type: UPDATE_CLIENT_PHONE,
    payload: phone,
  };
};

export const handleClientComment = (comment = '') => {
  return {
    type: UPDATE_CLIENT_COMMENT,
    payload: comment,
  };
};

export const handleOrderDate = (date = null) => {
  return {
    type: UPDATE_ORDER_DATE,
    payload: date,
  };
};
