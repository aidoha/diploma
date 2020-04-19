import { GET_COMPANY_SERVICES, DELETE_COMPANY_SERVICE, RESET } from './types';

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

export const handleResetCompanyServices = () => {
  return {
    type: RESET,
  };
};
