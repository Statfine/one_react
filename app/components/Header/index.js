/**
 * Created by sj on 2017/6/30.
 * Header
 */

import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  height: 60px;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #c3c3c3;
  background: #4a4a4a;
  font-size: 2.0rem;
`;

export default class Header extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title } = this.props;
    return (
      <Content>
        <p>{title}</p>
      </Content>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
};
