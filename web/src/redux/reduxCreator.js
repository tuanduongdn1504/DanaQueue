import { success, error, removeAll } from 'react-notification-system-redux';
import { call, put, fork, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import _ from 'lodash';
import { changeMainLoadingStatus } from './loading/actions';
import { logout } from './login/actions';

const ERROR_CODE = [401];

export function makeConstantCreator(...params) {
  const constant = {};
  _.each(params, param => {
    constant[param] = param;
  });
  return constant;
}

export const makeActionCreator = (type, params = null) => ({ type, ...params });

export const makeReducerCreator = (initialState = null, handlers = {}) => (
  state = initialState,
  action,
) => {
  if (!action && !action.type) return state;
  const handler = handlers[action.type];
  return (handler && handler(state, action)) || state;
};

export function* apiWrapper(apiFunc, isShowLoading = true, isShowSuccessNoti = true, ...params) {
  try {
    yield put(changeMainLoadingStatus(isShowLoading));
    const response = yield call(apiFunc, ...params);
    yield fork(checkError, response);
    yield put(removeAll());
    yield put(changeMainLoadingStatus(false));
    if (isShowSuccessNoti) {
      yield put(
        success({
          title: 'Done',
          message: 'Process sucessfully',
          autoDismiss: 3,
        }),
      );
    }
    return response;
  } catch (err) {
    yield fork(checkError, err);
    yield put(removeAll());
    yield put(changeMainLoadingStatus(false));
    yield put(
      error({
        title: 'Error',
        message: err && err.message ? err.message : 'Server Internall Error. Please try later !!!!',
        position: 'tr',
        autoDismiss: 15,
      }),
    );
    throw new Error(err);
  } finally {
    yield put(changeMainLoadingStatus(false));
  }
}

export function* checkError(res) {
  const { isAuthenticated } = yield select(state => state.login);
  if (res.code === 401 && isAuthenticated) {
    yield put(logout());
  }
  if (ERROR_CODE.indexOf(res.code) > -1) {
    yield put(push(`/error/${res.code}`));
  }
}
