import { LoginTypes } from './actions';
import { makeReducerCreator } from '../reduxCreator';

export const initialState = {
  isAuthenticated: !!localStorage.getItem('sessionToken'),
  data: null,
  roles: '',
  loginError: false,
  loginSuccess: false,
  loading: false
};

const loginSuccess = (state, { data }) => {
  return {
    ...state,
    data,
    isAuthenticated: true,
    loginError: false,
    loginSuccess: true
  };
};

const loginFail = (state, action) => {
  return {
    ...state,
    isAuthenticated: false,
    loginError: action.error,
    loginSuccess: false
  };
};

const logout = () => ({
  isAuthenticated: false
});

const getCurrentUserSuccess = (state, { data }) => {
  return {
    ...state,
    data
  };
};

const getCurrentUserFailure = (state, { error }) => {
  return {
    ...state,
    error
  };
};

export const login = makeReducerCreator(initialState, {
  [LoginTypes.LOGIN_AUTH_SUCCESS]: loginSuccess,
  [LoginTypes.LOGIN_AUTH_FAIL]: loginFail,
  [LoginTypes.LOGOUT]: logout,

  [LoginTypes.GET_CURRENT_USER_SUCCESS]: getCurrentUserSuccess,
  [LoginTypes.GET_CURRENT_USER_FAILURE]: getCurrentUserFailure
});
