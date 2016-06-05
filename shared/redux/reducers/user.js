import * as ActionTypes from '../constants/constants';
export default function (state = {
  authenticated: false }, action = {}) {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return Object.assign({}, state, {
        isWaiting: true,
        message: ''
      });
    case ActionTypes.LOGIN_SUCCESS_USER:
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: true,
        message: ''
      });
    case ActionTypes.LOGIN_ERROR_USER:
      return Object.assign({}, state, {
        isWaiting: false,
        authenticated: false,
        message: action.message
      });
    default:
      return state;
  }
}
