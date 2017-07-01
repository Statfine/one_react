
import { createSelector } from 'reselect';

const selectListPageDomain = () => (state) => state.get('MusicPage');

const selectContentList = () => createSelector(
  selectListPageDomain(),
  (substate) => substate.get('contentList').toJS()
);

const selectReportsRequesting = () => createSelector(
  selectListPageDomain(),
  (substate) => substate.get('reportsRequesting')
);


export {
  selectContentList,
  selectReportsRequesting,
};
