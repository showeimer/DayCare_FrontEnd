import { UPDATE_REPORT, LOAD_REPORT } from './types';

export const updateReport = (values, id) => {
  console.log(values);
  const reportInfo = JSON.stringify({...values, owner: {id: id}});
  return (dispatch) => {
    fetch(`https://fast-lake-96101.herokuapp.com/daycares/reports/${id}`, {
      method: 'PUT',
      credentials: 'include',
      body: reportInfo,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      return dispatch({
        type: UPDATE_REPORT,
        payload: null
      })
    })
  }
}

// export const loadReport = id => {
//   return (dispatch) => {
//     fetch(`https://fast-lake-96101.herokuapp.com/daycares/reports`, {
//       mode: 'no-cors',
//       credentials: 'include'
//     })
//     .then(response => response.json())
//     .then(data => {
//       return dispatch({
//         type: LOAD_REPORT,
//         payload: data
//       })
//     })
//     .catch(error => console.log(error))
//   }
// }

export const loadReport = callback => {

  const data = {
    diapers: [{time: "0800", type: "wet"}, {time: "1015", type: "dry"}],
    itemsNeeded: {wipes: true},
    meals: [{type: "breakfast", food: "Bacon, Eggs, Toast", amount: "most"},{type: "lunch", food: "Sandwich", amount: "all"}],
    naps: [{napStart: "1130", napEnd: "1230"}],
    note: 'Billy had a really great day!'
  };

  return function(dispatch) {
    console.log('Action:', data);

    dispatch(receiveReport(data));
    callback(data);
  }
}

function receiveReport(data) {
    return {
      type: LOAD_REPORT,
      payload: data
    }
}
