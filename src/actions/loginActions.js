import { Base64 } from "js-base64";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';

export const login = values => {
  let headers = new Headers();
  headers.append('Authorization', 'Basic ' + Base64.encode(values.email + ":" + values.password));

  return (dispatch) => {
    fetch('https://fast-lake-96101.herokuapp.com/daycares/authenticate',
      {
        method: 'POST',
        headers: headers
      })
      .then(response => {
        console.log('response', response);
        if(response.status === 200) {
          response.json()
            .then(data => {
              console.log(data);
              return dispatch({
                type: LOGIN_SUCCESS,
                payload: data
              });
            });
        } else {
          return dispatch({
            type: LOGIN_FAIL,
            payload: null
          })
        }
      })
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
    payload: null
  }
}
