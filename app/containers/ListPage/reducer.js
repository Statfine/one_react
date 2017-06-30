
import { fromJS } from 'immutable';
import {
  FETCH_LIST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
} from './constants';

const initialState = fromJS({
  contentList: [],
  weather: {
    city_name: '',
    climate: '',
    date: '',
    humidity: '',
    hurricane: '',
    temperature: '',
    wind_direction: '',
  },
  date: '',
  reportsRequesting: false,
});

function listReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST:
      return state.set('reportsRequesting', true);
    case FETCH_LIST_SUCCESS:
      return state.set('reportsRequesting', false)
        .set('date', action.payload.date)
        .set('contentList', fromJS(action.payload.content_list))
        .set('weather', fromJS(action.payload.weather));
    case FETCH_LIST_FAILURE:
      return state.set('reportsRequesting', false);
    default:
      return state;
  }
}

export default listReducer;
