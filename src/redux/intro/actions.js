import {
  NEXT,
  BACK,
  UPDATE_SERVICE_NAME,
  UPDATE_SERVICE_ADDRESS,
  UPDATE_START_TIME,
  UPDATE_FINISH_TIME
} from './types';

//Intro form (first step)
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

//Timetable (second step)
export const handleStartTime = (time = '') => {
  return {
    type: UPDATE_START_TIME,
    payload: time
  };
};
export const handleFinishTime = (time = '') => {
  return {
    type: UPDATE_FINISH_TIME,
    payload: time
  };
};
