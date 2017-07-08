import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const ani = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Ani = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  padding-top: 300px;
  animation: ${ani} 0.45s ease;
  & > span {
    width: 12px;
    height: 12px;
    margin: 5px;
    border-radius: 50%;
    background-color: #4885ED;
    animation: ${ani} 1s infinite alternate;
    &:nth-of-type(2) {
      background: #669efe;
      animation-delay: 0.2s;
    }
    &:nth-of-type(3) {
      background: #7fafff;
      animation-delay: 0.4s;
    }
    &:nth-of-type(4) {
      background: #9ac0ff ;
      animation-delay: 0.6s;
    }
    &:nth-of-type(5) {
      background: #abcafd;
      animation-delay: 0.8s;
    }
  }
`;

const Model = styled.div`
  z-index: 1;
  left: 0;
  top: 0;
`;

class Loading extends PureComponent {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }
  componentWillUnmount() {
    document.body.style.overflow = '';
  }
  render() {
    return (
      <Model>
        <Ani>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Ani>
      </Model>
    );
  }
}

export default Loading;
