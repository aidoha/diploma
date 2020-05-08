import {
  UPDATE_CLIENT_NAME,
  UPDATE_CLIENT_PHONE,
  UPDATE_CLIENT_COMMENT,
  UPDATE_ORDER_DATE,
} from './types';

const initialState = {
  client: {
    name: '',
    phone: '',
    comment: '',
  },
  orderDate: new Date(),
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case UPDATE_CLIENT_NAME:
      return {
        ...state,
        client: {
          ...state.client,
          name: payload,
        },
      };
    case UPDATE_CLIENT_PHONE:
      return {
        ...state,
        client: {
          ...state.client,
          phone: payload,
        },
      };
    case UPDATE_CLIENT_COMMENT:
      return {
        ...state,
        client: {
          ...state.client,
          comment: payload,
        },
      };
    case UPDATE_ORDER_DATE:
      return {
        ...state,
        orderDate: payload,
      };
    default:
      return state;
  }
};

export default reducer;
