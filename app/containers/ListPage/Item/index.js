/**
 * Created by sj on 2017/6/30.
 * Header
 */

import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';

import SvgLike from 'material-ui/svg-icons/action/favorite';

const Content = styled.div`
  margin-bottom: 20px;
  background: #4a4a4a;
  color: #b7b7b7;
  padding: 0 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto
`;

const Title = styled.p`
  text-align: center;
  font-size: 1.5rem;
  padding: 10px;
`;

const Forward = styled.p`
  text-align: center;
  font-size: 1.6rem;
  padding-bottom: 10px;
`;

const Words = styled.p`
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 10px;
`;

const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  color: #6b6b6b;
  font-size: 1.2rem;
`;

export default class Item extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { info } = this.props;

    return (
      <Content>
        <Image src={info.img_url} />
        <Title>{info.title}&nbsp;&nbsp;|&nbsp;&nbsp;{info.pic_info}</Title>
        <Forward>{info.forward}</Forward>
        <Words>{info.words_info}</Words>
        <BottomInfo>
          <div></div>
          <div>{info.like_count}&nbsp;&nbsp;<SvgLike color="#b7b7b7" style={{ width: '16px' }} /></div>
        </BottomInfo>
      </Content>
    );
  }
}

Item.propTypes = {
  info: PropTypes.object,
};
