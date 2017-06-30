import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #231f21;
  position: relative;
  background: #fff;
  & p {
    font-size: 3rem;
  }
`;

const Time = styled.p`
  position: absolute;
  bottom: 10px;
  font-size: 1.2rem!important;
  right: 20px;
  color: #838383;
`;

export default class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    backward: 3,
  }
  componentDidMount() {
    this.handleStartInterval();
  }
  componentWillUnmount() {
    clearInterval(this.intervalTime);
  }
  getDate = () => {
    const myDate = new Date();
    return this.set(`${myDate.getFullYear()}年${myDate.getMonth() + 1}`);
  }
  handleStartInterval = () => {
    this.setState({ backward: 5 }, () => {
      this.intervalTime = setInterval(() => {
        const backward = this.state.backward - 1;
        if (backward > 1) this.setState({ backward });
        else browserHistory.push('/list');
      }, 1000);
    });
  }
  set = (date) => {
    const time = date.replace(/1/g, '一')
      .replace(/2/g, '二')
      .replace(/3/g, '三')
      .replace(/4/g, '四')
      .replace(/5/g, '五')
      .replace(/6/g, '六')
      .replace(/7/g, '七')
      .replace(/8/g, '八')
      .replace(/9/g, '九');
    return time;
  }

  render() {
    return (
      <Container>
        <p>ONE</p>
        <p>For</p>
        <p>You</p>
        <Time>地球历{this.getDate()}</Time>
      </Container>
    );
  }
}
