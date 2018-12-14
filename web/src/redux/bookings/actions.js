import { makeActionCreator, makeConstantCreator } from '../reduxCreator';

export const BOOKINGS_ACTION_TYPES = makeConstantCreator(
  'CONNECT_FIREBASE_TO_GET_BOOKING',
  'GET_NEW_BOOKING_SUCCESS',
  'GET_MODIFIED_BOOKING',
  'SET_STATUS_BOOKING'
);

export const connectDataToGetNewBooking = () =>
  makeActionCreator(BOOKINGS_ACTION_TYPES.CONNECT_FIREBASE_TO_GET_BOOKING);

export const getNewBookingSuccess = res =>
  makeActionCreator(BOOKINGS_ACTION_TYPES.GET_NEW_BOOKING_SUCCESS, {
    res
  });

export const setStatusBooking = (status, bookingId) =>
  makeActionCreator(BOOKINGS_ACTION_TYPES.SET_STATUS_BOOKING, {
    status,
    bookingId
  });

export const getModifiedBooking = data =>
  makeActionCreator(BOOKINGS_ACTION_TYPES.GET_MODIFIED_BOOKING, { data });
