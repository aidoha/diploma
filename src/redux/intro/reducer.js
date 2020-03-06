import { NEXT, BACK } from './types';

const initialState = {
  activeStep: 0
};

const introReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT:
      return {
        ...state,
        activeStep: action.payload + 1
      };
    case BACK:
      return {
        ...state,
        activeStep: action.payload - 1
      };
    default:
      return state;
  }
};

export default introReducer;
