import { put, takeLatest } from "redux-saga/effects";
import * as TYPE from "../constant";

function* fetchText(action) {
  try {
    const { payload: data } = action;
    const rs = yield fetch(`https://baconipsum.com/api/?type=all-meat&paras=${data}&start-with-lorem=1&format=array`)
    const payload = yield rs.json()
    yield put(fetchSuccess(payload));
  } catch (error) {
    yield put(fetchError(null));
  }
}

const fetchSuccess = payload => ({
  type: TYPE.TEXT_SUCCESS,
  payload
});
const fetchError = payload => ({
  type: TYPE.TEXT_ERROR,
  payload
});

export default function* watch() {
  yield takeLatest(TYPE.FETCH_TEXT, fetchText);
}
