import { UPDATE_REPORT, LOAD_REPORT } from './types';

export const updateReport = values => {
  console.log(values);

  return {
    type: UPDATE_REPORT,
    payload: values
  }
}

export const loadReport = data => {

  return {
    type: LOAD_REPORT,
    payload: data
  }
}
