import {
  UPDATE_COMPANY_NAME,
  UPDATE_COMPANY_ID,
  UPDATE_BUSINESS_CATEGORY,
  UPDATE_BUSINESS_CATEGORIES,
  HIDE_FIRST_STEP,
  UPDATE_CUSTOMER_PHONE,
  UPDATE_CUSTOMER_NAME,
  UPDATE_CUSTOMER_EMAIL,
  UPDATE_CUSTOMER_PASSWORD,
  SHOW_PASSWORD,
  SET_AUTHORIZED,
  LOGOUT,
  AUTH_ERROR,
  COMPANY_SAVE_SUCCESS,
  VALIDATE_EMAIL,
} from './types';

export const handleAuthError = (error = false) => {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
};

//FIRST STEP
export const handleCompanyName = (companyName = '') => {
  return {
    type: UPDATE_COMPANY_NAME,
    payload: companyName,
  };
};
export const handleCompanyId = (companyId = null) => {
  return {
    type: UPDATE_COMPANY_ID,
    payload: companyId,
  };
};
export const handleBusinessCategories = (businessCategories = []) => {
  return {
    type: UPDATE_BUSINESS_CATEGORIES,
    payload: businessCategories,
  };
};
export const handleBusinessCategory = (
  businessCategory = '',
  businessCategoryId = null
) => {
  return {
    type: UPDATE_BUSINESS_CATEGORY,
    payload: { businessCategory, businessCategoryId },
  };
};
export const handleSteps = () => {
  return {
    type: HIDE_FIRST_STEP,
  };
};
export const handleCompanySuccess = (success = false) => {
  return {
    type: COMPANY_SAVE_SUCCESS,
    payload: success,
  };
};

//SECOND STEP
export const handleCustomerName = (name = '') => {
  return {
    type: UPDATE_CUSTOMER_NAME,
    payload: name,
  };
};
export const handleCustomerEmail = (email = '') => {
  return {
    type: UPDATE_CUSTOMER_EMAIL,
    payload: email,
  };
};
export const handleCustomerPassword = (password = '') => {
  return {
    type: UPDATE_CUSTOMER_PASSWORD,
    payload: password,
  };
};
export const handleCustomerPhone = (phone = '') => {
  return {
    type: UPDATE_CUSTOMER_PHONE,
    payload: phone,
  };
};
export const handlePasswordVisibility = (show = false) => {
  return {
    type: SHOW_PASSWORD,
    payload: show,
  };
};
export const handleSetAuthorized = (success = false) => {
  return {
    type: SET_AUTHORIZED,
    payload: success,
  };
};
export const handleLogout = () => {
  return {
    type: LOGOUT,
  };
};
export const handleValidateEmail = (validateEmail = false) => {
  return {
    type: VALIDATE_EMAIL,
    payload: validateEmail,
  };
};
