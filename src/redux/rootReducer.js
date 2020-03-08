import { combineReducers } from 'redux';
import signUpReducer from './auth/signUpReducer';
import signInReducer from './auth/signInReducer';
import introFormReducer from './intro/introFormReducer';
import timetableReducer from './intro/timetableReducer';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  introForm: introFormReducer,
  timetable: timetableReducer
});

export default rootReducer;
