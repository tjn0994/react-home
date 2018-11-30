import { takeLatest, all, put, call, } from 'redux-saga/effects';

import history from '../services/RoutingService';
import {
  login,
  logout,
  updateAuth,
  clearAuth,
} from '../actions/authAction';
import { AuthApi } from '../services/api';

function* loginSaga(action) {
  const { user, meta: {setErrors} } = action.payload;
  try {
    const response = yield call([AuthApi, AuthApi.login], user);
    yield put(updateAuth({
      email: user['email'],
      isAuth: true,
    }));
    history.push('/users');
  } catch (e) {
    // errors by server response, setErrors of formik
    setErrors({ api: e.errors.message });
  }
}

function* logoutSaga(action) {
  try {
    yield call([AuthApi, AuthApi.logout]);
    yield put(clearAuth());
  } catch (errors) {
    // handle show message errors
  } finally {
    history.push('/');
  }
}

export default function*() {
  yield all([
    takeLatest(login, loginSaga),
    takeLatest(logout, logoutSaga),
  ]);
}
