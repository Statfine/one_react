/**
 * Created by sj on 2017/6/30.
 * Header
 */

import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  height: 60px;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #c3c3c3;
  background: #4a4a4a;
  border-bottom: 1px solid #3e3e3e;
`;

const Time = styled.p`
  font-size: 2.0rem;
`;

const Address = styled.p`
  font-size: 1.4rem;
`;

export default class DashHeader extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { date, weather } = this.props;
    return (
      <Header>
        <Time>{date.substring(0, 10)}</Time>
        <Address>{weather.city_name}</Address>
      </Header>
    );
  }
}

DashHeader.propTypes = {
  weather: PropTypes.object,
  date: PropTypes.string,
};
