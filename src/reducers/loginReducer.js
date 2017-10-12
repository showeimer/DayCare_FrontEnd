import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types'


const INITIAL_STATE = {
  loginSuccess: false,
  error: false,
  account: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){

    case LOGIN_SUCCESS:
      return {...state, loginSuccess: true, error: false, account: action.payload};

    case LOGIN_FAIL:
      return {...state, loginSucess: false, error: true};

    case LOGOUT:
      return INITIAL_STATE

    default:
      return state;
  }
}
