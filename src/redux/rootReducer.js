import { combineReducers } from 'redux';
import signUpReducer from './auth/signUpReducer';
import signInReducer from './auth/signInReducer';
import introFormReducer from './intro/introFormReducer';
import scheduleReducer from './intro/scheduleReducer';
import serviceReducer from './service/reducer';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  introForm: introFormReducer,
  schedule: scheduleReducer,
  service: serviceReducer,
});

export default rootReducer;
