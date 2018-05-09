import userConstants from '../_constants/user.constants';
import history from '../_helpers/history';
import userService from '../_services/User';
import alertActions from './alert.actions';

function login(username, password) {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push('/');
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      },
    );
  };
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function getProfile() {
  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(user) {
    return { type: userConstants.GETALL_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }

  return (dispatch) => {
    dispatch(request());

    userService.getAll().then(user => dispatch(success(user)), error => dispatch(failure(error)));
  };
}

const userActions = {
  login,
  logout,
  getProfile,
};

export default userActions;
