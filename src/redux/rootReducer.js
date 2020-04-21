import { combineReducers } from 'redux';
import signUpReducer from './auth/signUpReducer';
import signInReducer from './auth/signInReducer';
import scheduleReducer from './intro/scheduleReducer';
import serviceReducer from './service/reducer';
import companyReducer from './company/reducer';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  schedule: scheduleReducer,
  service: serviceReducer,
  company: companyReducer,
});

export default rootReducer;
