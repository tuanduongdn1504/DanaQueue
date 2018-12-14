import _ from 'lodash';
import moment from 'moment';
import { createSelector } from 'reselect';

const isToday = time => {
  return moment.unix(time).format('DDMMYYYY') === moment().format('DDMMYYYY');
};

const timeWithFormat = time => {
  return moment.unix(time).format('MMM-Do');
};

const sortBookingASC = bookings => {
  return _.orderBy(bookings, ['numerical'], 'asc');
};

const getOfficeBookings = (bookings, officeId) => {
  return _.filter(bookings, item => item.officeId === officeId);
};

const getAllTodayBookings = bookings => {
  return _.filter(bookings, item => isToday(item.time.seconds));
};
const getAvailableTodayBooking = bookings => {
  return _.filter(
    sortBookingASC(bookings),
    item =>
      isToday(item.time && item.time.seconds) &&
      (item.status === 'pending' || item.status === 'running')
  );
};

const getBookingsList = state => state.bookings.bookings;

const getOfficerAdminId = state => state.login.data;

export const getTodaysBookingsState = createSelector(
  [getBookingsList, getOfficerAdminId],
  (bookings, user) => {
    return getOfficeBookings(
      getAvailableTodayBooking(bookings),
      user && user.officeId
    );
  }
);

const getRunningBooking = bookings => bookings;

export const getAllBookingOfOfficeState = createSelector(
  [getBookingsList, getOfficerAdminId],
  (bookings, user) => {
    return getOfficeBookings(bookings, user && user.officeId);
  }
);

export const getRunningBookingState = createSelector(
  [getRunningBooking],
  bookings => _.find(bookings, item => item.status === 'running')
);

const keys = () => {
  const keys = [];
  for (let i = 0; i <= 13; i++) {
    keys.push(
      moment()
        .add(i, 'd')
        .format('MMM-Do')
    );
  }
  return keys;
};

export const getChartBookingsState = createSelector(
  [getBookingsList, getOfficerAdminId],
  (bookings, user) => {
    const newBookings = getOfficeBookings(bookings, user && user.officeId);

    const counts = _.map(keys(), item => {
      const data = _.filter(
        newBookings,
        obj => timeWithFormat(obj.time.seconds) === item
      );
      return {
        name: item,
        bk: data.length
      };
    });
    return counts;
  }
);

export const getAllTodayBookingsState = createSelector(
  [getBookingsList, getOfficerAdminId],
  (bookings, user) => {
    return getAllTodayBookings(
      getOfficeBookings(bookings, user && user.officeId)
    );
  }
);
