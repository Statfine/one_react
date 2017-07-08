// makeSelectLocationState expects a plain JS object for the routing state
import { createSelector } from 'reselect';

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectGlobal = () => createSelector(
  (state) => state.get('global'),
  (substate) => substate.get('appReducer')
);

const selectFirstOpen = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('isFirstOpen')
);

const selectMusic = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('music').toJS()
);

export {
  makeSelectLocationState,
  selectFirstOpen,
  selectMusic,
};
