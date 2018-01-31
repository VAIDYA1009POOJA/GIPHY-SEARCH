
const intialState = {
  gifs: []
}
export default function gifs(state = intialState, action) {
    switch (action.type) {
        case 'SEARCH_GIFS_SAVE':
            return Object.assign({}, state, { gifs: action.gifs });
        default:
            return state;
    }
}