
import { fromJS } from 'immutable';
import {
  FETCH_LIST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
} from './constants';

const initialState = fromJS({
  contentList: [],
  reportsRequesting: false,
});

function moveReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST:
      return state.set('reportsRequesting', true);
    case FETCH_LIST_SUCCESS:
      return state.set('reportsRequesting', false)
        .set('contentList', fromJS(action.payload));
    case FETCH_LIST_FAILURE:
      return state.set('reportsRequesting', false);
    default:
      return state;
  }
}

export default moveReducer;
