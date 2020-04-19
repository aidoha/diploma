import { GET_COMPANY_SERVICES, DELETE_COMPANY_SERVICE, RESET } from './types';

const intialState = {
  companyServices: [],
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
    case RESET:
      return intialState;
    default:
      return state;
  }
};

export default reducer;
