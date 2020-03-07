import {
  NEXT,
  BACK,
  UPDATE_SERVICE_NAME,
  UPDATE_SERVICE_ADDRESS
} from './types';

export const handleNextStep = step => {
  return {
    type: NEXT,
    payload: step
  };
};
export const handleBackStep = step => {
  return {
    type: BACK,
    payload: step
  };
};
export const handleServiceName = (name = '') => {
  return {
    type: UPDATE_SERVICE_NAME,
    payload: name
  };
};
export const handleServiceAddress = (address = '') => {
  return {
    type: UPDATE_SERVICE_ADDRESS,
    payload: address
  };
};
