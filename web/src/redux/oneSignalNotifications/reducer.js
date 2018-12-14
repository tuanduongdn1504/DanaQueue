import { NotificationTypes } from './actions';
import { makeReducerCreator } from '../reduxCreator';

export const initialState = {
  total: 0,
  list: [],
};

const updateNotification = (state, { data }) => {
  return {
    ...state,
    ...data,
  };
};

export default makeReducerCreator(initialState, {
  [NotificationTypes.UPDATE_ONE_SIGNAL_NOTIFICATION]: updateNotification,
});
