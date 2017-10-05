import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGGING_IN} from './types'

export const emailChanged = email => {
  console.log('email change', email);
  return {
    type: EMAIL_CHANGED,
    payload: email
  }
}

export const passwordChanged = password => {
  console.log('password change', password);
  return {
    type: PASSWORD_CHANGED,
    payload: password
  }
}

export const login = () => {
  console.log('logging in');
  return (dispatch) => {
    fetch('https://demo8413433.mockable.io/daycares/authenticate',
      {
        method: 'POST'
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
