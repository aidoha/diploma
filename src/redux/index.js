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

// export {
//   handleBackStep,
//   handleNextStep,
//   handleServiceName,
//   handleServiceAddress,
//   handleStartTime,
//   handleFinishTime,
//   handleServiceDuration,
//   handleServicePrice,
// } from './intro/actions';

export {
  handleServiceName as handleName,
  handleDescription,
  handleDuration,
  handlePrice,
  handleServices,
  handleSubcategories,
  handleServiceId,
  handleSubcategoryId,
  handleError as handleServiceError,
  handleSaveSuccess as handleServiceSaveSuccess,
  handleEditSuccess as handleServiceEditSuccess,
  handleDeleteSuccess as handleServiceDeleteSuccess,
} from './service/actions';
