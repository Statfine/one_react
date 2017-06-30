/**
 * Created by sj on 2017/6/30.
 * Header
 */

import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

const Foot = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0px;
  right: 0;
  display: flex;
  color: #c3c3c3;
  background: #4a4a4a;
`;

const EachItme = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: ${({ choosed }) => choosed ? '#fff' : '#c3c3c3'}
`;

export default class DashFoot extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { index } = this.props;
    return (
      <Foot>
        <EachItme choosed={index === '/list'} onClick={() => browserHistory.push('/list')}>首页</EachItme>
        <EachItme choosed={index === '/book'} onClick={() => browserHistory.push('/book')}>读书</EachItme>
        <EachItme choosed={index === '/music'} onClick={() => browserHistory.push('/music')}>音乐</EachItme>
        <EachItme choosed={index === '/move'} onClick={() => browserHistory.push('/move')}>视频</EachItme>
      </Foot>
    );
  }
}

DashFoot.propTypes = {
  index: PropTypes.string,
};
