import { makeConstantCreator, makeActionCreator } from '../reduxCreator';

export const NotificationTypes = makeConstantCreator(
  'WATCH_ONE_SIGNAL_NOTIFICATION',
  'CLOSE_ONE_SIGNAL_NOTIFICATION',
  'UPDATE_ONE_SIGNAL_NOTIFICATION',
);
export const watchNotification = data =>
  makeActionCreator(NotificationTypes.WATCH_ONE_SIGNAL_NOTIFICATION, { data });
export const closeNotification = data =>
  makeActionCreator(NotificationTypes.CLOSE_ONE_SIGNAL_NOTIFICATION, { data });
export const updateNotification = data =>
  makeActionCreator(NotificationTypes.UPDATE_ONE_SIGNAL_NOTIFICATION, { data });
