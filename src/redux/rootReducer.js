import { combineReducers } from 'redux';
import signUpReducer from './auth/signUpReducer';
import signInReducer from './auth/signInReducer';
import companyScheduleReducer from './companySchedule/reducer';
import serviceReducer from './service/reducer';
import companyReducer from './company/reducer';
import statusReducer from './statuses/reducer';
import orderReducer from './order/reducer';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  companySchedule: companyScheduleReducer,
  service: serviceReducer,
  company: companyReducer,
  status: statusReducer,
  order: orderReducer,
});

export default rootReducer;
