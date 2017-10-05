import { LOAD_REPORT } from '../actions/types';

const INITIAL_STATE = {
  diapers: [],
  itemsNeeded: {},
  meals: [],
  naps: [],
  note: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case LOAD_REPORT:
      console.log('Reducer:', action.payload);
      return {...state,
        diapers: action.payload.diapers,
        itemsNeeded: action.payload.itemsNeeded,
        meals: action.payload.meals,
        naps: action.payload.naps,
        note: action.payload.note
      }

    default:
      console.log('failed');
      return state;
  }
}
