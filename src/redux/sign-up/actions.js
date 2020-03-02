import { UPDATE_COMPANY_NAME, UPDATE_BUSINESS_CATEGORY } from './types';

export const handleCompanyName = (companyName = '') => {
  return {
    type: UPDATE_COMPANY_NAME,
    payload: companyName
  };
};

export const handleBusinessCategory = (businessCategory = '') => {
  return {
    type: UPDATE_BUSINESS_CATEGORY,
    payload: businessCategory
  };
};
