import { takeLatest, all, put, } from 'redux-saga/effects';

import history from '../services/RoutingService';
import {
  createUser,
  updateUser,
  deleteUser,
  updateData,
} from '../actions/userAction';

function* update(action) {
  const { data } = action.payload;
  yield put(updateData({ users: data }));
  history.push('/users');
}

export default function*() {
  yield all([
    takeLatest(createUser, update),
    takeLatest(updateUser, update),
    takeLatest(deleteUser, update),
  ]);
}
