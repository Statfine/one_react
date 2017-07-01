/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { browserHistory } from 'react-router';

import { selectFirstOpen } from './selectors';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.isFirstOpen) browserHistory.push('/');
  }

  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  isFirstOpen: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isFirstOpen: selectFirstOpen(),
});

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
