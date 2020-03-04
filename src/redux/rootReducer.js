import { combineReducers } from 'redux';
import signUpReducer from './auth/signUpReducer';
import signInReducer from './auth/signInReducer';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer
});

export default rootReducer;
