import { FETCH_ROSTER } from '../actions/types'

const INITIAL_STATE = {
  roster: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case FETCH_ROSTER:
      return {...state, roster: action.payload}

    default:
      return state
  }
}
