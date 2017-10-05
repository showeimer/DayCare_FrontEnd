import { FETCH_GROUPS } from './types'


export const fetchGroups = ()=> {
  return (dispatch) => {
    fetch('https://demo8413433.mockable.io/daycares/groups', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      console.log('original',data)
      return dispatch({
        type: FETCH_GROUPS,
        payload: data
      })
    })
  }
}
