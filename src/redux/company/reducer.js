import {
  GET_COMPANY_SERVICES,
  DELETE_COMPANY_SERVICE,
  RESET,
  GET_COMPANY_IMAGES,
  DELETE_COMPANY_IMAGE,
} from './types';

const intialState = {
  companyServices: [],
  images: [],
};

const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMPANY_SERVICES:
      return {
        ...state,
        companyServices: payload,
      };
    case DELETE_COMPANY_SERVICE:
      return {
        ...state,
        companyServices: state.companyServices.filter(
          (item) => item !== payload
        ),
      };
    case GET_COMPANY_IMAGES:
      return {
        ...state,
        images: payload,
      };
    case DELETE_COMPANY_IMAGE:
      return {
        ...state,
        images: state.images.filter((item) => item.imageID !== payload),
      };
    case RESET:
      return intialState;
    default:
      return state;
  }
};

export default reducer;
