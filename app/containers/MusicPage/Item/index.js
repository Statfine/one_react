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

const Top = styled.p`
  text-align: center;
  font-size: 1rem;
  padding: 10px;
`;

const Title = styled.p`
  font-size: 1.8rem;
  padding-bottom: 10px;
`;

const Auther = styled.p`
  font-size: 1.2rem;
  padding-bottom: 10px;
`;

const AudioAuther = styled.p`
  font-size: 1.2rem;
  padding-bottom: 10px;
  color: #6b6b6b;
`;

const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 60%;
  height: auto;
  border-radius: 50%;
`;

const Words = styled.p`
  font-size: 1.3rem;
  padding: 10px 0;
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
        <Top>-音乐-</Top>
        <Title>{info.title}</Title>
        <Auther>文&nbsp;/&nbsp;{info.author.user_name}</Auther>
        <ImageContent><Image src={info.img_url} /></ImageContent>
        <AudioAuther>{info.music_name}&nbsp;.&nbsp;{info.audio_author}</AudioAuther>
        <Words>{info.forward}</Words>
        <BottomInfo>
          <div>{info.post_date.substring(0, 10)}</div>
          <div>{info.like_count}&nbsp;&nbsp;<SvgLike color="#b7b7b7" style={{ width: '16px' }} /></div>
        </BottomInfo>
      </Content>
    );
  }
}

Item.propTypes = {
  info: PropTypes.object,
};
