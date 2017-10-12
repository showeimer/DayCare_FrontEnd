import { FETCH_ROSTER, CREATE_CHILD, DELETE_CHILD } from './types'

export const fetchRoster = ()=> {
  return (dispatch) => {
    fetch('https://fast-lake-96101.herokuapp.com/daycares/roster', {
      method: 'GET',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log('original roster', data)
      return dispatch({
        type: FETCH_ROSTER,
        payload: data
      })
    })
  }
}

export const createChild = values => {
  return (dispatch) => {
    const childInfo = JSON.stringify(values);
    fetch('https://fast-lake-96101.herokuapp.com/daycares/child', {
      method: 'POST',
      body: childInfo,
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      return dispatch({
        type: CREATE_CHILD,
        payload: null
      })
    })
  }
}

export const deleteChild = id => {
  return (dispatch) => {
    fetch(`https://fast-lake-96101.herokuapp.com/daycares/child/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      return dispatch({
        type: DELETE_CHILD,
        payload: null
      })
    })
  }
}
