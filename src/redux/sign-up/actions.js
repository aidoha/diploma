import {
  UPDATE_COMPANY_NAME,
  UPDATE_BUSINESS_CATEGORY,
  BTN_CONTINUE,
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

export const handleBtnContinue = () => {
  return {
    type: BTN_CONTINUE
  };
};

export const handleSteps = () => {
  return {
    type: HIDE_FIRST_STEP
  }
}
