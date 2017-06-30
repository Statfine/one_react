
import { createSelector } from 'reselect';

const selectListPageDomain = () => (state) => state.get('ListPage');

const selectContentList = () => createSelector(
  selectListPageDomain(),
  (substate) => substate.get('contentList').toJS()
);

const selectWeather = () => createSelector(
  selectListPageDomain(),
  (substate) => substate.get('weather').toJS()
);

const selectDate = () => createSelector(
  selectListPageDomain(),
  (substate) => substate.get('date')
);

const selectReportsRequesting = () => createSelector(
  selectListPageDomain(),
  (substate) => substate.get('reportsRequesting')
);


export {
  selectContentList,
  selectWeather,
  selectDate,
  selectReportsRequesting,
};
