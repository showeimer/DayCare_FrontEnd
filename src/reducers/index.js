import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';
import reportReducer from './reportReducer';
import groupReducer from './groupReducer';
import rosterReducer from './rosterReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  report: reportReducer,
  form: formReducer,
  groupList: groupReducer,
  rosterList: rosterReducer
});

export default rootReducer;
