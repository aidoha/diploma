import { combineReducers } from 'redux';
import signUpReducer from './auth/signUpReducer';
import signInReducer from './auth/signInReducer';
import introReducer from './intro/reducer';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  intro: introReducer
});

export default rootReducer;
