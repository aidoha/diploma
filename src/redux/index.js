export {
  handleBusinessCategory,
  handleCompanyName,
  handleSteps,
  handleCustomerEmail,
  handleCustomerName,
  handleCustomerPassword,
  handleCustomerPhone,
  handlePasswordVisibility,
  handleSetAuthorized,
} from './auth/actions';

export {
  handleBackStep,
  handleNextStep,
  handleServiceName,
  handleServiceAddress,
  handleStartTime,
  handleFinishTime,
  handleServiceDuration,
  handleServicePrice,
} from './intro/actions';

export {
  handleServiceName as handleName,
  handleDescription,
  handleDuration,
  handlePrice,
  handleService,
  handleSubcategory,
  handleServiceId,
  handleSubcategoryId,
  handleError as handleServiceError,
  handleSuccess as handleServiceSuccess,
} from './service/actions';
