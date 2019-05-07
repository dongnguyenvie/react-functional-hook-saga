import { all, fork } from "redux-saga/effects";
import textSaga from "./textSaga";

export default function* rootSaga() {
  yield all([fork(textSaga)]);
}
