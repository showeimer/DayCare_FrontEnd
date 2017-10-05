import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';
import reportReducer from './reportReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  report: reportReducer,
  form: formReducer
});

export default rootReducer;
