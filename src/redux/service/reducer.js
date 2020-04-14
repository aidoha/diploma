import {
  UPDATE_NAME,
  UPDATE_SUBCATEGORY,
  UPDATE_SERVICE,
  UPDATE_DESCRIPTION,
  UPDATE_DURATION,
  UPDATE_PRICE,
} from './types';

const intialState = {
  name: '',
  subcategory: [],
  service: [],
  description: '',
  duration: '',
  price: 0,
};

const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: payload,
      };
    case UPDATE_SUBCATEGORY:
      return {
        ...state,
        subcategory: payload,
      };
    case UPDATE_SERVICE:
      return {
        ...state,
        service: payload,
      };
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        description: payload,
      };
    case UPDATE_DURATION:
      return {
        ...state,
        duration: payload,
      };
    case UPDATE_PRICE:
      return {
        ...state,
        price: payload,
      };
    default:
      return state;
  }
};

export default reducer;
