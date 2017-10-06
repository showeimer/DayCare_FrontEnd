import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';
import reportReducer from './reportReducer';
import groupReducer from './groupReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  report: reportReducer,
  form: formReducer,
  groupList: groupReducer
});

export default rootReducer;
