import {
  UPDATE_CLIENT_NAME,
  UPDATE_CLIENT_PHONE,
  UPDATE_CLIENT_COMMENT,
  UPDATE_ORDER_DATE,
  GET_ORDERS,
  CREATE_ORDER,
  DELETE_ORDER,
  UPDATE_ORDER,
} from './types';

const initialState = {
  client: {
    name: '',
    phone: '',
    comment: '',
  },
  orderList: [],
  orderItem: {},
  date: new Date(),
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
        date: payload,
      };
    case GET_ORDERS:
      return {
        ...state,
        orderList: payload,
      };
    case CREATE_ORDER:
      return {
        ...state,
        orderList: [...state.orderList, payload],
      };
    case UPDATE_ORDER:
      return {
        ...state,
        orderList: [
          ...state.orderList.map((item) => {
            if (
              item.businessServiceOrderID === payload.businessServiceOrderID
            ) {
              return {
                ...item,
                edited: true,
              };
            }
            return item;
          }),
        ],
      };
    case DELETE_ORDER:
      return {
        ...state,
        orderList: [
          ...state.orderList.filter((item) => {
            return (
              item.businessServiceOrderID !== payload.businessServiceOrderID
            );
          }),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
