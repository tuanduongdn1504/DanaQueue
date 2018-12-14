import _ from 'lodash';
import { makeReducerCreator } from '../reduxCreator';
import { BOOKINGS_ACTION_TYPES } from './actions';

const initState = {
  total: 0,
  bookings: []
};

const getNewBookingSuccess = (state, action) => {
  return {
    ...state,
    bookings: [action.res, ...state.bookings]
  };
};

const getModifiedBooking = (state, action) => {
  return {
    ...state,
    bookings: _.map(state.bookings, item =>
      item.id === action.data.id ? action.data : item
    )
  };
};

export const bookings = makeReducerCreator(initState, {
  [BOOKINGS_ACTION_TYPES.GET_NEW_BOOKING_SUCCESS]: getNewBookingSuccess,
  [BOOKINGS_ACTION_TYPES.GET_MODIFIED_BOOKING]: getModifiedBooking
});
