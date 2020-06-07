import {
  GET_COMPANY_SERVICES,
  DELETE_COMPANY_SERVICE,
  RESET,
  GET_COMPANY_IMAGES,
  DELETE_COMPANY_IMAGE,
} from './types';

export const handleCompanyServices = (companyServices = []) => {
  return {
    type: GET_COMPANY_SERVICES,
    payload: companyServices,
  };
};
export const handleDeleteCompanyService = (service = {}) => {
  return {
    type: DELETE_COMPANY_SERVICE,
    payload: service,
  };
};
export const handleImages = (images = []) => {
  return {
    type: GET_COMPANY_IMAGES,
    payload: images,
  };
};
export const handleDeleteImage = (image = {}) => {
  return {
    type: DELETE_COMPANY_IMAGE,
    payload: image,
  };
};
export const handleResetCompanyServices = () => {
  return {
    type: RESET,
  };
};
