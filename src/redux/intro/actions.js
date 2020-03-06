import { NEXT, BACK } from './types';

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
