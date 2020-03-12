import {
  NEXT,
  BACK,
  UPDATE_SERVICE_NAME,
  UPDATE_SERVICE_ADDRESS
} from './types';

const initialState = {
  activeStep: 0,
  service: {
    name: 'Моя услуга',
    address: ''
  },
  touched: {
    name: false,
    service: false
  }
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
    case UPDATE_SERVICE_NAME:
      return {
        ...state,
        touched: {
          ...state.touched,
          name: true
        },
        service: {
          ...state.service,
          name: action.payload
        }
      };
    case UPDATE_SERVICE_ADDRESS:
      return {
        ...state,
        touched: {
          ...state.touched,
          address: true
        },
        service: {
          ...state.service,
          address: action.payload
        }
      };
    default:
      return state;
  }
};

export default introReducer;
