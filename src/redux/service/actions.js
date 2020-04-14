import {
  UPDATE_NAME,
  UPDATE_SUBCATEGORY,
  UPDATE_SERVICE,
  UPDATE_DESCRIPTION,
  UPDATE_DURATION,
  UPDATE_PRICE,
} from './types';

export const handleServiceName = (serviceName = '') => {
  return {
    type: UPDATE_NAME,
    payload: serviceName,
  };
};
export const handleSubcategory = (subcateogry = []) => {
  return {
    type: UPDATE_SUBCATEGORY,
    payload: subcateogry,
  };
};
export const handleService = (service = []) => {
  return {
    type: UPDATE_SERVICE,
    payload: service,
  };
};
export const handleDescription = (description = '') => {
  return {
    type: UPDATE_DESCRIPTION,
    payload: description,
  };
};
export const handleDuration = (duration = '') => {
  return {
    type: UPDATE_DURATION,
    payload: duration,
  };
};
export const handlePrice = (price = '') => {
  return {
    type: UPDATE_PRICE,
    payload: price,
  };
};
