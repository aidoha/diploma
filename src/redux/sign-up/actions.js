import {
  UPDATE_COMPANY_NAME,
  UPDATE_BUSINESS_CATEGORY,
  HIDE_FIRST_STEP
} from './types';

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

export const handleFirstStep = () => {
  return {
    type: HIDE_FIRST_STEP
  };
};
