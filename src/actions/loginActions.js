import {EMAIL_CHANGED, PASSWORD_CHANGED} from './types'

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
