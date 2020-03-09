import {
  NEXT,
  BACK,
  UPDATE_SERVICE_NAME,
  UPDATE_SERVICE_ADDRESS,
  UPDATE_START_TIME,
  UPDATE_FINISH_TIME,
  UPDATE_SERVICE_DURATION,
  UPDATE_SERVICE_PRICE
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
export const handleStartTime = (day = '', startTime = '') => {
  return {
    type: UPDATE_START_TIME,
    payload: { day, startTime }
  };
};
export const handleFinishTime = (day = '', finishTime = '') => {
  return {
    type: UPDATE_FINISH_TIME,
    payload: { day, finishTime }
  };
};
export const handleServiceDuration = duration => {
  return {
    type: UPDATE_SERVICE_DURATION,
    payload: duration
  };
};
export const handleServicePrice = price => {
  return {
    type: UPDATE_SERVICE_PRICE,
    payload: price
  };
};
