import { Base64 } from "js-base64";
import { LOGGING_IN } from './types';

export const login = values => {
  console.log('logging in', values);
  let headers = new Headers();
  headers.append('Authorization', 'Basic ' + Base64.encode(values.email + ":" + values.password));

  return (dispatch) => {
    fetch('https://fast-lake-96101.herokuapp.com/daycares/authenticate',
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
