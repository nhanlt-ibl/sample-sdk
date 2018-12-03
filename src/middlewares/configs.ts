import axios from 'axios';
export const END_POINT = 'http://test-api.mocogateway.com/';
export const AUTHEN_URL = `auth/v1/{product}/token`;
export const request = axios.create({
  baseURL: END_POINT,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${
      !!localStorage ? localStorage.get('access_token') : ''
    }`,
    platform: 'uk',
    lang: 'en',
  },
});
