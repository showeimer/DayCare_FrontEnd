import { REGISTER_DAYCARE } from './types';

export const registerDaycare = () => {
  return (dispatch) => {
      fetch('https://demo8413433.mockable.io/daycares/register', {
        method: 'POST'
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
