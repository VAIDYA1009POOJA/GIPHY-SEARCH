import { call, put, select } from "redux-saga/effects";
import ApiGifs from '../api/getGifs';

export function* searchGifs(action) {
  let response = {};
  if (action.query === '') {
    response.data = [];
  } else {
    response = yield call(ApiGifs.getGifsList, action.query);
  }

  yield put({
    type: 'SEARCH_GIFS_SAVE',
    gifs: response.data,
  });
};


export function* sortGifs(action) {
  const state = yield select();
  let result = [];
  var gifs = [...state.gifs.gifs];
  result = gifs.sort((a, b) => {
    if (a.title < b.title)
      return -1 * action.direction;
    if (a.title > b.title)
      return -1 * action.direction;
    return 0;
  })
  yield put({
    type: 'SEARCH_GIFS_SAVE',
    gifs: result,
  });
}

