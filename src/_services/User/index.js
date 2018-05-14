import { Base64 } from 'js-base64';
import jwtDecode from 'jwt-decode';
import { isNumber } from 'util';
import authHeader from '../../_helpers/auth-header';

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Base64.encode(`${username}:${password}`)}`,
    },
  };

  return fetch('http://symfony.local:8080/app_dev.php/api/tokens', requestOptions)
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

  return fetch('http://symfony.local:8080/app_dev.php/api/user', requestOptions).then(handleResponse);
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

  return false;
};

const userService = {
  login,
  logout,
  getUser,
  isAuthenticated,
};

export default userService;
