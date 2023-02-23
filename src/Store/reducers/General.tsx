import {SET_API_PAYLOAD} from '../actionTypes';

const initialstate = {
  isLogged: true,
  apiPayload: {},
};

type Action = {
  type: string;
  payload?: any;
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case SET_API_PAYLOAD:
      return {...state, apiPayload: action.payload};
    default:
      return state;
  }
};
