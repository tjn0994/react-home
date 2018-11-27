import { combineActions, handleActions } from 'redux-actions';

import {
  createUser,
  updateUser,
  listUser,
} from '../actions/userAction';

export default handleActions({
  [combineActions(
    createUser,
    updateUser,
    listUser,
  )]: (state, action) => ({
    ...state, ...action.payload,
  }),
}, {
  id: '',
  name: '',
  age: '',
});
