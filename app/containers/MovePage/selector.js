
import { createSelector } from 'reselect';

const selectListPageDomain = () => (state) => state.get('MovePage');

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
