import { makeConstantCreator, makeActionCreator } from '../reduxCreator';

export const LoginTypes = makeConstantCreator(
  'LOGIN',
  'LOGIN_AUTH_FAIL',
  'LOGIN_AUTH_SUCCESS',
  'LOGOUT',

  'GET_CURRENT_USER',
  'GET_CURRENT_USER_SUCCESS',
  'GET_CURRENT_USER_FAILURE'
);

export const login = (username, password) =>
  makeActionCreator(LoginTypes.LOGIN, { username, password });
export const loginSuccess = data =>
  makeActionCreator(LoginTypes.LOGIN_AUTH_SUCCESS, { data });
export const loginFailure = error =>
  makeActionCreator(LoginTypes.LOGIN_AUTH_FAIL, { error });

export const getCurrentUser = () =>
  makeActionCreator(LoginTypes.GET_CURRENT_USER);
export const getCurrentUserSuccess = data =>
  makeActionCreator(LoginTypes.GET_CURRENT_USER_SUCCESS, { data });
export const getCurrentUserFailure = error =>
  makeActionCreator(LoginTypes.GET_CURRENT_USER_FAILURE, { error });
export const logout = () => makeActionCreator(LoginTypes.LOGOUT);
