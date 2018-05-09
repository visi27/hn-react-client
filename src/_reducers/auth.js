import userConstants from '../_constants/user.constants';
import getStorage from '../_services/Storage';

const storage = getStorage();

const user = JSON.parse(storage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
