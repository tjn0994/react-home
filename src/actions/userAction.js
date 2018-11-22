import { createActions } from 'redux-actions';
import { ActionUsers } from '../constants';

export const {
  createUser,
  updateUser,
  deleteUser,
  listUser,
} = createActions({
  [ActionUsers.CREATE_USER]: payload => payload,
  [ActionUsers.UPDATE_USER]: payload => payload,
  [ActionUsers.DELETE_USER]: payload => payload,
  [ActionUsers.LIST_USER]: payload => payload,
});
