import { combineReducers } from 'redux';
import signUpReducer from './sign-up/reducer';

const rootReducer = combineReducers({
  signUp: signUpReducer
});

export default rootReducer;
