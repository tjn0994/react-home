import { all, fork } from 'redux-saga/effects';

import userSaga from './userSaga';

export default function*() {
  yield all([
    fork(userSaga),
  ]);
}
