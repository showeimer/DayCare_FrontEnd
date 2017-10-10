import { FETCH_GROUPS, CREATE_GROUP } from './types'


export const fetchGroups = () => {
  return (dispatch) => {
    fetch('https://fast-lake-96101.herokuapp.com/daycares/groups', {
      method: 'GET',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      return dispatch({
        type: FETCH_GROUPS,
        payload: data
      })
    })
  }
}

export const createGroup = values => {
  return (dispatch) => {
    const groupInfo = JSON.stringify(values);
    fetch('https://fast-lake-96101.herokuapp.com/daycares/groups', {
      method: 'POST',
      body: groupInfo,
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      return dispatch({
        type: CREATE_GROUP,
        payload: null
      })
    })
  }
}
