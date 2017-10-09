import { REGISTER_DAYCARE } from './types';

export const registerDaycare = values => {
  return (dispatch) => {
      const registration = JSON.stringify(values);
      fetch('https://fast-lake-96101.herokuapp.com/daycares/register', {
        method: 'POST',
        body: registration,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return dispatch ({
          type: REGISTER_DAYCARE,
          payload: null
        })
      })
  }
}
