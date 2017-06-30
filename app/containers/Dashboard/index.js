/**
 * Created by Dashboard on 2017/1/9.
 */
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import DashFoot from 'components/DashboardFoot';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export default class Dashboard extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, location } = this.props;
    return (
      <Container>
        {children}
        <DashFoot index={location.pathname} />
      </Container>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};
