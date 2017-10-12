import { FETCH_ROSTER, LOGOUT } from '../actions/types'

const INITIAL_STATE = {
  roster: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case FETCH_ROSTER:
      return {...state, roster: action.payload}

    case LOGOUT:
      return INITIAL_STATE

    default:
      return state
  }
}
