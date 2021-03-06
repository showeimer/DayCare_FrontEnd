import {
  FETCH_GROUPS,
  FETCH_CHILDREN,
  RESET_CHILDREN,
  CREATE_GROUP,
  GROUP_POPUP,
  DELETE_GROUP,
  UPDATE_GROUP } from './types'


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

export const fetchChildren = (groupID) => {
  return (dispatch) => {
    fetch(`https://fast-lake-96101.herokuapp.com/daycares/groups/${groupID}/childen`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log('list of children ', data);
      return dispatch({
        type: FETCH_CHILDREN,
        payload: data
      })
    })
  }
}

export const resetChildren = () => {
  return {
    type: RESET_CHILDREN,
    payload: null
  }
}

export const createGroup = (values, id) => {
  console.log(values, id);
  return (dispatch) => {
    const groupInfo = JSON.stringify({...values, owner: {id: id}});
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

export const deleteGroup = id => {
  return (dispatch) => {
    fetch(`https://fast-lake-96101.herokuapp.com/daycares/groups/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Network response not ok.')
    })
    .then(data => {
      return dispatch({
        type: DELETE_GROUP,
        payload: null
      })
    })
    .catch(error => console.log('propblem', error))
  }
}

export const groupPopup = () => {
  // this.state.flex === 'none' ? this.setState({flex: 'flex'}) : this.setState({flex: 'none'})
  // this.state.display === 'none' ? this.setState({display: 'block'}) : this.setState({display: 'none'})
  // this.state.filter === 'none' ? this.setState({filter: 'blur(3px)'}) : this.setState({filter: 'none'})
  console.log('action!');

  return ({
    type: GROUP_POPUP,
    payload: null
  })
}
