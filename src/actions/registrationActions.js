import { REGISTER_DAYCARE } from './types';

export const registerDaycare = values => {
  console.log(values);

  return {
    type: REGISTER_DAYCARE,
    payload: values
  }
}
