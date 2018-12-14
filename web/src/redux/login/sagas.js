import { takeEvery, put, call } from 'redux-saga/effects';
import { apiWrapper } from '../reduxCreator';
import {
  LoginTypes,
  loginSuccess,
  loginFailure,
  getCurrentUser,
  getCurrentUserFailure,
  getCurrentUserSuccess
} from './actions';
import { loginApi, logoutApi, getCurrentUserApi } from '../../api/users';

function* loginSaga({ username, password }) {
  try {
    const response = yield call(
      apiWrapper,
      loginApi,
      false,
      false,
      username,
      password
    );
    if (response.token) {
      localStorage.setItem('sessionToken', response.token);
      yield put(loginSuccess(response));
      yield put(getCurrentUser());
    } else {
      yield put(loginFailure(response));
    }
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* logoutSaga() {
  try {
    yield call(apiWrapper, logoutApi, false, false);
    localStorage.clear('sessionToken');
  } catch (error) {
    // /logic here
  }
}

function* getCurrentUserSaga() {
  try {
    const response = yield call(apiWrapper, getCurrentUserApi, false, false, {
      includes: ['medicalInfo', 'userInfo']
    });
    if (response.id) {
      yield put(getCurrentUserSuccess(response));
    } else {
      yield put(getCurrentUserFailure(response));
    }
  } catch (error) {
    yield put(getCurrentUserFailure(error));
  }
}

export default [
  takeEvery(LoginTypes.LOGIN, loginSaga),
  takeEvery(LoginTypes.LOGOUT, logoutSaga),
  takeEvery(LoginTypes.GET_CURRENT_USER, getCurrentUserSaga)
];
