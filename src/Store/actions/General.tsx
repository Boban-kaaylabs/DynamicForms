import {TAB_CHANGE} from '../actionTypes';

const TabChange = (payload: number) => ({
  type: TAB_CHANGE,
  payload,
});
export {TabChange};
