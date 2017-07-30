/**
 * Created by sj on 2017/6/30.
 * Header
 */

import React, { PureComponent, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';

import SvgLike from 'material-ui/svg-icons/action/favorite';
import IconPlay from 'material-ui/svg-icons/av/play-arrow';
import IconPause from 'material-ui/svg-icons/av/pause';

const ani = keyframes`
  0%{ transform:rotate(0deg); }
  100%{ transform:rotate(360deg); }
`;

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
  position: relative;
  margin-bottom: 10px;
  animation: ${ani} 5s infinite linear;
  animation-fill-mode:forwards;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

const PlayIcon = styled.div`
  position: absolute;
  width: 6rem;
  height: 6rem;
  top: 50%;
  left: 50%;
  margin-top: -3rem;
  margin-left: -3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  & svg {
    width: 4rem!important;
    height: 4rem!important;
    color: #fff!important;
    fill: #fff!important;
  }
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

  componentDidMount() {
    this.cover.style.webkitAnimationPlayState = 'paused';
  }

  handleClick = () => {
    const { info, onChoosed, musicObj } = this.props;
    if (info.id === musicObj.id && musicObj.play) {
      this.cover.style.webkitAnimationPlayState = 'paused';  // 旋转动画暂停
      return onChoosed({ id: info.id, play: false, musicSrc: '' });
    }
    this.cover.style.webkitAnimationPlayState = 'running';
    return onChoosed({ id: info.id, play: true, musicSrc: 'http://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/mp3/49908875-9691-422a-ac80-bd3de781753f_5d9c746f-2328-409f-8064-44bda29695b8.mp3' });
  }

  render() {
    const { info, musicObj } = this.props;

    return (
      <Content>
        <Top>-音乐-</Top>
        <Title>{info.title}</Title>
        <Auther>文&nbsp;/&nbsp;{info.author.user_name}</Auther>
        <ImageContent innerRef={(c) => { this.cover = c; }} choosed={info.id === musicObj.musicSrc && musicObj.play} onClick={() => this.handleClick()}>
          <PlayIcon>{musicObj.musicSrc === info.id && musicObj.play ? <IconPause /> : <IconPlay />}</PlayIcon>
          <Image src={info.img_url} />
        </ImageContent>
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
  onChoosed: PropTypes.func,
  musicObj: PropTypes.object,
};
