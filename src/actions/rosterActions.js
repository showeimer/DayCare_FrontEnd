import { FETCH_ROSTER, CREATE_CHILD, DELETE_CHILD, UPDATE_CHILD } from './types'

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

export const createChild = (values, callback) => {
  return (dispatch) => {
    const childInfo = JSON.stringify(values);
    console.log(values);
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
      callback()
      return dispatch({
        type: CREATE_CHILD,
        payload: null
      })
    })
  }
}

export const deleteChild = (id, callback) => {
  console.log(callback);
  return (dispatch) => {
    fetch(`https://fast-lake-96101.herokuapp.com/daycares/child/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    .then(response => response);
  }
}

export const updateChild = (values, id, callback) => {
  return (dispatch) => {

    const childInfo = {
      firstName: values.firstName,
      lastName: values.lastName,
      dob: values.dob,
      parentFirstName: values.parentFirstName,
      parentLastName: values.parentLastName,
      parentEmail: values.parentEmail,
      owner: {id: values.owner.id}
    };

    console.log('sending', childInfo);
    fetch(`https://fast-lake-96101.herokuapp.com/daycares/child/${id}`, {
      method: 'PUT',
      body: JSON.stringify(childInfo),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      callback()
      return dispatch({
        type: UPDATE_CHILD,
        payload: null
      })
    })
  }
}
