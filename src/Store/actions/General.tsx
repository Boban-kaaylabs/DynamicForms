import {SET_API_PAYLOAD} from '../actionTypes';

const SetApiPaylaod = (payload: {}) => ({
  type: SET_API_PAYLOAD,
  payload,
});
export {SetApiPaylaod};
