import { ERROR, SUCCESS } from './types';

const intialState = {
  statuses: {
    error: {
      value: false,
      text: 'error',
      label: 'error',
      autoHideDuration: 6000,
      message: 'Упс... Что-то пошло не так',
    },
    success: {
      value: false,
      text: 'success',
      label: 'success',
      autoHideDuration: 6000,
      message: '',
    },
  },
};

const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          error: {
            ...state.statuses.error,
            value: payload.value,
            message: payload.message,
          },
        },
      };
    case SUCCESS:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          success: {
            ...state.statuses.success,
            value: payload.value,
            message: payload.message,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
