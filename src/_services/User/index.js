import { Base64 } from 'js-base64';
import jwtDecode from 'jwt-decode';
import { isNumber } from 'util';
import authHeader from '../../_helpers/auth-header';
import apiConfig from '../../_config/api';

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Base64.encode(`${username}:${password}`)}`,
    },
  };

  return fetch(`${apiConfig.base_url}/tokens`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }

      return response.json();
    })
    .then((user) => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user
        // logged in between page refreshes
        localStorage.setItem(
          'user',
          JSON.stringify({ ...jwtDecode(user.token), token: user.token }),
        );
      }

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}

function getUser() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${apiConfig.base_url}/user`, requestOptions).then(handleResponse);
}

const isAuthenticated = () => {
  const user = localStorage.getItem('user');

  if (!user) {
    return false;
  }

  const expiryTime = JSON.parse(user).exp * 1000;
  const now = new Date().getTime();

  if (isNumber(expiryTime) && expiryTime > now) {
    return true;
  }

  localStorage.removeItem('user');
  return false;
};

const getToken = () => {
  const user = localStorage.getItem('user');
  if (!user) {
    return '';
  }

  return JSON.parse(user).token;
};

const userService = {
  login,
  logout,
  getUser,
  isAuthenticated,
  getToken,
};

export default userService;
