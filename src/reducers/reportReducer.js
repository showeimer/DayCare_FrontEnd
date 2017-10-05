import { LOAD_REPORT } from '../actions/types';

const INITIAL_STATE = {
  diapers: [],
  itemsNeeded: {},
  meals: [],
  naps: [],
  note: ''
}

export default (state = {}, action) => {
  switch(action.type) {
    case LOAD_REPORT:
      return {...state,
        diapers: action.payload.diapers,
        itemsNeeded: action.payload.itemsNeeded,
        meals: action.payload.meals,
        naps: action.payload.naps,
        note: action.payload.note
      }

    default:
      return state;
  }
}
