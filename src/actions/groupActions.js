import { FETCH_GROUPS } from './types'


export const fetchGroups = ()=> {
  return (dispatch) => {
    fetch('https://fast-lake-96101.herokuapp.com/daycares/groups', {
      method: 'GET',
      credentials: 'include'
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
