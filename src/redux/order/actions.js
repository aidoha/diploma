import {
  UPDATE_CLIENT_NAME,
  UPDATE_CLIENT_PHONE,
  UPDATE_CLIENT_COMMENT,
  UPDATE_ORDER_DATE,
  GET_ORDERS,
  CREATE_ORDER,
  DELETE_ORDER,
  UPDATE_ORDER,
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

export const getOrderList = (list = []) => {
  return {
    type: GET_ORDERS,
    payload: list,
  };
};

export const handleCreateOrder = (order = {}) => {
  return {
    type: CREATE_ORDER,
    payload: order,
  };
};

export const handleUpdateOrder = (order = {}) => {
  return {
    type: UPDATE_ORDER,
    payload: order,
  };
};

export const handleDeleteOrder = (order = {}) => {
  return {
    type: DELETE_ORDER,
    payload: order,
  };
};
