import { take, call, put, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { NotificationTypes, updateNotification } from './actions';
import { initOneSignal } from '../../api/oneSignal';

let notificationChannel = null;

function createNotificationChannel() {
  return eventChannel(emit => {
    const notificationHandler = data => {
      emit(data);
    };
    const unsubscribe = initOneSignal(notificationHandler);
    return () => {
      unsubscribe();
    };
  });
}
// reply with a `pong` message by invoking `socket.emit('pong')`

export function* watchNotification() {
  notificationChannel = yield call(createNotificationChannel);
  while (true) {
    try {
      const payload = yield take(notificationChannel);
      console.log('data', payload);
      yield put(updateNotification(payload));
    } catch (error) {
      notificationChannel.close();
    }
  }
}

export function* closeNotification() {
  try {
    yield call(notificationChannel.close);
  } catch (error) {
    // tesst
  }
}

export default [
  takeEvery(NotificationTypes.WATCH_ONE_SIGNAL_NOTIFICATION, watchNotification),
  takeEvery(NotificationTypes.CLOSE_ONE_SIGNAL_NOTIFICATION, closeNotification),
];
