import { UPDATE_REPORT } from './types';

export const updateReport = values => {
  console.log(values);

  return {
    type: UPDATE_REPORT,
    payload: null
  }
}
