import { createActions } from 'redux-actions';
import { ActionUsers } from '../constants';

export const {
  updateAuth,
  clearAuth,
  login,
  logout,
} = createActions({
  [ActionUsers.UPDATE_AUTH]: payload => payload,
  [ActionUsers.CLEAR_AUTH]: payload => payload,
  [ActionUsers.LOGIN]: payload => payload,
  [ActionUsers.LOGOUT]: payload => payload,
});
