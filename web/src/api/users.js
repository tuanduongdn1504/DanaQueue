import { post, get } from './utils';

export async function loginApi(phoneNumber, password) {
  return post('/auth/login', { phoneNumber, password });
}

export async function logoutApi() {
  return post('/auth/logout');
}

export async function getCurrentUserApi() {
  return get('/users/me');
}
