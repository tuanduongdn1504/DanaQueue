import { put } from './utils';

export const setStatusBookingsApi = (status, bookingId) => {
  return put(`/bookings/${bookingId}`, { status });
};
