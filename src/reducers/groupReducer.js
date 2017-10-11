import { FETCH_GROUPS, GROUP_POPUP } from '../actions/types'


const INITIAL_STATE = {

  groups: [],
  popup: false,
  styling: {
    display: 'none',
    flex: 'none',
    filter: 'none'
  }

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){

    case FETCH_GROUPS:
      return {...state, groups: action.payload}

    case GROUP_POPUP:
      if (!state.popup) {
        console.log('no popup');
        return {
          ...state,
          popup: true,
          styling: {
            display: 'block',
            flex: 'flex',
            filter: 'blur(3px)'
          }
        }
      }
      if (state.popup) {
        console.log('yes popup');
        return {
          ...state,
          popup: false,
          styling: {
            display: 'none',
            flex: 'none',
            filter: 'none'
          }
        }
      }

    default:
      return state;
  }
}
