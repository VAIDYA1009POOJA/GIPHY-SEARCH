import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { searchGifs, sortGifs } from './gifs'

export function* sagas() {
  yield [
    fork(takeLatest, 'SEARCH_GIFS', searchGifs),
    fork(takeLatest, 'SORT_GIFS', sortGifs)
  ];
}
