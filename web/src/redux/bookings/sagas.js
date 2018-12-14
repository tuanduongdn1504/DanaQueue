import { eventChannel } from 'redux-saga';
import { call, put, takeLatest, take, select } from 'redux-saga/effects';
import {
  BOOKINGS_ACTION_TYPES,
  getNewBookingSuccess,
  getModifiedBooking
} from './actions';
import { firebaseStore } from '../../firebase/config';
import { formatDateTimeStamp, compareDate } from '../../utils/textUtils';
import { openNotificationWithIcon } from '../../components/common/Notification/index';
import { setStatusBookingsApi } from '../../api/bookings';
import { apiWrapper } from '../reduxCreator';

const createBookingChanel = () =>
  eventChannel(emit => {
    const hander = firebaseStore.collection('bookings').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          emit({
            type: 'added',
            data: {
              ...change.doc.data(),
              id: Number(change.doc.id),
              timeStamp: formatDateTimeStamp(change.doc.data().time.seconds)
            }
          });
        }
        if (change.type === 'modified') {
          emit({
            type: 'modified',
            data: {
              ...change.doc.data(),
              id: Number(change.doc.id),
              timeStamp: formatDateTimeStamp(change.doc.data().time.seconds)
            }
          });
        }
      });
    });
    return () => {
      hander.off();
    };
  });

export function* startListenBooking() {
  try {
    const snapshot = yield call(createBookingChanel);

    while (true) {
      const payload = yield take(snapshot);
      if (payload.type === 'added') {
        const userId = yield select(
          state => state.login.data && state.login.data.officeId
        );
        if (payload.data.officeId === userId) {
          if (compareDate(payload.data.time.seconds)) {
            openNotificationWithIcon(
              'info',
              payload.data.id,
              `bookings/${payload.data.id}/edit`,
              'Có một lượt lịch hẹn mới'
            );
          }
        }
        yield put(getNewBookingSuccess(payload.data));
      }
      if (payload.type === 'modified') {
        yield put(getModifiedBooking(payload.data));
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export function* setStatusBooking({ status, bookingId }) {
  try {
    yield call(
      apiWrapper,
      setStatusBookingsApi,
      false,
      false,
      status,
      bookingId
    );
  } catch (err) {
    console.log(err);
  }
}

function bookingSagas() {
  return [
    takeLatest(
      BOOKINGS_ACTION_TYPES.CONNECT_FIREBASE_TO_GET_BOOKING,
      startListenBooking
    ),
    takeLatest(BOOKINGS_ACTION_TYPES.SET_STATUS_BOOKING, setStatusBooking)
  ];
}

export default bookingSagas();
