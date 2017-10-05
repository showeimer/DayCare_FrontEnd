import { FETCH_GROUPS } from '../actions/types'


const INITIAL_STATE = {
  groups: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){

    case FETCH_GROUPS:
      console.log('groups', action.payload);
      return {...state, groups: action.payload}

    default:
      return state;
  }
}
