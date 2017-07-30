/**
 * Created by sj on 2017/6/30.
 * App reducer
 */
import { fromJS } from 'immutable';

import { combineReducers } from 'redux-immutable';

import { CHANGE_LOCALE, CHANGE_FIRST_OPEN, CHANGE_MUSCI_PALY } from './constants';

const initialState = fromJS({
  language: 'en',
  isFirstOpen: true,
  promptInfo: {
    promptOpen: false,
    promptMsg: '默认提示信息',
    promptType: 0,
  },
  music: {
    id: '',
    musicSrc: '',
    play: false,
    audioOpen: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state.set('language', action.payload);
    case CHANGE_FIRST_OPEN:
      return state.set('isFirstOpen', action.payload);
    case CHANGE_MUSCI_PALY:
      return state.mergeDeep(fromJS({ music: action.payload }));
    default:
      return state;
  }
}

export default combineReducers({
  appReducer,
});
