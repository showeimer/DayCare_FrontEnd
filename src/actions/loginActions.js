import base64 from 'base64-js';
import {LOGGING_IN} from './types'

export const login = values => {
  console.log('logging in', values);
  let headers = new Headers();
  // headers.append('Authorization', 'Basic' + base64.encode(username + ":" + password));

  return (dispatch) => {
    fetch('https://demo8413433.mockable.io/daycares/authenticate',
      {
        method: 'POST',
        headers: headers
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return dispatch({
          type: LOGGING_IN,
          payload: data
        });
      });
  }
}
