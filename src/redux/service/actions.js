import {
  UPDATE_NAME,
  UPDATE_SUBCATEGORY,
  UPDATE_SERVICE,
  UPDATE_DESCRIPTION,
  UPDATE_DURATION,
  UPDATE_PRICE,
  UPDATE_SUBCATEGORY_ID,
  UPDATE_SERVICE_ID,
  UPDATE_SUBCATEGORY_IDS,
} from './types';

export const handleServiceName = (serviceName = '') => {
  return {
    type: UPDATE_NAME,
    payload: serviceName,
  };
};
export const handleSubcategories = (subcategories = []) => {
  return {
    type: UPDATE_SUBCATEGORY,
    payload: subcategories,
  };
};
export const handleServices = (services = []) => {
  return {
    type: UPDATE_SERVICE,
    payload: services,
  };
};
export const handleDescription = (description = '') => {
  return {
    type: UPDATE_DESCRIPTION,
    payload: description,
  };
};
export const handleDuration = (duration = '') => {
  return {
    type: UPDATE_DURATION,
    payload: duration,
  };
};
export const handlePrice = (price = '') => {
  return {
    type: UPDATE_PRICE,
    payload: price,
  };
};
export const handleSubcategoryId = (id = 0) => {
  return {
    type: UPDATE_SUBCATEGORY_ID,
    payload: id,
  };
};
export const handleSubcategoryIds = (ids = []) => {
  return {
    type: UPDATE_SUBCATEGORY_IDS,
    payload: ids,
  };
};
export const handleServiceId = (id = 0) => {
  return {
    type: UPDATE_SERVICE_ID,
    payload: id,
  };
};
