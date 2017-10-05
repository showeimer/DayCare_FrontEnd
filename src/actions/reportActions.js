import { UPDATE_REPORT, LOAD_REPORT } from './types';

export const updateReport = values => {
  console.log(values);

  return {
    type: UPDATE_REPORT,
    payload: values
  }
}

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
