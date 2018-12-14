import { all } from 'redux-saga/effects';
import loginSaga from './login/sagas';

import bookingSagas from './bookings/sagas';
import restSaga from './rest/sagas';
import restFilterSaga from './restFilter/sagas';

import oneSignalNotificationsSaga from './oneSignalNotifications/sagas';

export default function* root() {
  yield all([
    ...oneSignalNotificationsSaga,
    ...bookingSagas,
    ...loginSaga,
    ...restSaga,
    ...restFilterSaga
  ]);
}
