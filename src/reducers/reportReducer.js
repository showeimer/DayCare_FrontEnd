import { LOAD_REPORT } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case LOAD_REPORT:
      return {...state, action.payload}

    default:
      return state;
  }
}
