import { UPDATE_REPORT, LOAD_REPORT, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
  diapers: [],
  itemsNeeded: {},
  meals: [],
  naps: [],
  note: '',
  loaded: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case UPDATE_REPORT:
      return {...state,
        diapers: action.payload.diapers,
        itemsNeeded: action.payload.itemsNeeded,
        meals: action.payload.meals,
        naps: action.payload.naps,
        note: action.payload.note
      }

    case LOAD_REPORT:
      console.log('Reducer:', action.payload);
      return {...state,
        diapers: action.payload.diapers,
        itemsNeeded: action.payload.itemsNeeded,
        meals: action.payload.meals,
        naps: action.payload.naps,
        note: action.payload.note,
        loaded: true
      }

    case LOGOUT:
      return INITIAL_STATE

    default:
      return state;
  }
}
