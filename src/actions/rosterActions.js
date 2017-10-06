import { FETCH_ROSTER } from './types'

export const fetchRoster = ()=> {
  return (dispatch) => {
    fetch('http://demo8413433.mockable.io/daycares/roster/', {
      method: 'GET'
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
