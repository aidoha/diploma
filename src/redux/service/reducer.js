import {
  UPDATE_NAME,
  UPDATE_SUBCATEGORY,
  UPDATE_SERVICE,
  UPDATE_DESCRIPTION,
  UPDATE_DURATION,
  UPDATE_PRICE,
  UPDATE_SUBCATEGORY_ID,
  UPDATE_SERVICE_ID,
  SERVICE_ERROR,
  SERVICE_SAVE_SUCCESS,
  SERVICE_EDIT_SUCCESS,
  SERVICE_DELETE_SUCCESS,
} from './types';

const intialState = {
  name: '',
  subcategories: [],
  services: [],
  description: '',
  duration: '',
  price: 0,
  business_ids: {
    service: 0,
    subcategory: 0,
  },
  statuses: {
    error: {
      value: false,
      text: 'error',
      label: 'error',
      autoHideDuration: 6000,
      message: 'Упс... Что-то пошло не так',
    },
    save: {
      value: false,
      text: 'success',
      label: 'save',
      autoHideDuration: 6000,
      message: 'Вы успешно создали услугу!',
    },
    edit: {
      value: false,
      text: 'success',
      label: 'edit',
      autoHideDuration: 6000,
      message: 'Вы успешно редактировали свою услугу!',
    },
    delete: {
      value: false,
      text: 'success',
      label: 'delete',
      autoHideDuration: 6000,
      message: 'Вы успешно удалили услугу!',
    },
  },
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
        subcategories: payload,
      };
    case UPDATE_SERVICE:
      return {
        ...state,
        services: payload,
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
    case UPDATE_SUBCATEGORY_ID:
      return {
        ...state,
        business_ids: {
          ...state.business_ids,
          subcategory: payload,
        },
      };
    case UPDATE_SERVICE_ID:
      return {
        ...state,
        business_ids: {
          ...state.business_ids,
          service: payload,
        },
      };
    case SERVICE_ERROR:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          error: {
            ...state.statuses.error,
            value: payload,
          },
        },
      };
    case SERVICE_SAVE_SUCCESS:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          save: {
            ...state.statuses.save,
            value: payload,
          },
        },
      };
    case SERVICE_EDIT_SUCCESS:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          edit: {
            ...state.statuses.edit,
            value: payload,
          },
        },
      };
    case SERVICE_DELETE_SUCCESS:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          delete: {
            ...state.statuses.delete,
            value: payload,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
