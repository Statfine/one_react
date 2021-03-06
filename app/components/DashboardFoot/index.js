/**
 * Created by sj on 2017/6/30.
 * Header
 */

import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

import SvgFish from 'material-ui/svg-icons/image/panorama-fish-eye';
import SvgContact from 'material-ui/svg-icons/communication/import-contacts';
import SvgMusic from 'material-ui/svg-icons/av/library-music';
import SvgMove from 'material-ui/svg-icons/av/movie';

const Foot = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0px;
  right: 0;
  display: flex;
  color: #c3c3c3;
  background: #4a4a4a;
  z-index: 1001;
`;

const EachItme = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  border-top: 1px solid #3e3e3e;
  & svg {
    color: ${({ choosed }) => choosed ? '#fff!important' : '#333!important'}
    filter: ${({ choosed }) => choosed ? '#fff!important' : '#333!important'}
  }
`;

export default class DashFoot extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { index } = this.props;
    return (
      <Foot
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <EachItme choosed={index === '/list'} onClick={() => browserHistory.push('/list')}>
          <SvgFish />
        </EachItme>
        <EachItme choosed={index === '/book'} onClick={() => browserHistory.push('/book')}>
          <SvgContact />
        </EachItme>
        <EachItme choosed={index === '/music'} onClick={() => browserHistory.push('/music')}>
          <SvgMusic />
        </EachItme>
        <EachItme choosed={index === '/move'} onClick={() => browserHistory.push('/move')}>
          <SvgMove />
        </EachItme>
      </Foot>
    );
  }
}

DashFoot.propTypes = {
  index: PropTypes.string,
};
