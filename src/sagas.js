import { call, put, select, takeEvery } from 'redux-saga/effects';
import { HTTP_REQUEST } from './constants';
import { tokenSelector } from './redux/user/selectors';

import request from './utils/http';

export function* processRequest({ payload }) {
  // Select username from store
  const { model, hasToken, ...rest } = payload;
  const token = hasToken ? yield select(tokenSelector()) : undefined;
  const method = payload.method.toUpperCase();
  const uppercaseModel = model.toUpperCase();

  try {
    yield put({
      type: `${method}_${uppercaseModel}_REQUEST`,
    });
    const response = yield call(request, {
      ...rest,
      token: token.get('accessToken'), // assume we need to pass accessToken through the api
    });
    yield put({
      type: `${method}_${uppercaseModel}_SUCCESS`,
      payload: response
    });
  } catch (err) {
    yield put({
      type: `${method}_${uppercaseModel}_FAILURE`,
      payload: err
    });
  }
}

export default function* () {
  yield takeEvery(HTTP_REQUEST, processRequest);
}
