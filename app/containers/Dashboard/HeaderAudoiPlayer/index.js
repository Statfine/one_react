/**
 * Created by easub on 2017/7/30.
 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';

const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: ${({ audioOpen }) => audioOpen ? 'block' : 'none'}
`;

const Container = styled.div`
  background: #434343;
  padding: 20px 30px;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Control = styled.div`
  height: 0.5rem;
  background: #7f7f7f;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
`;

const Progress = styled.div`
  height: 0.5rem;
  background: #3885ed;
  border-radius: 4px;
  width: ${({ duration, currentTime }) => `${(currentTime / duration) * 100}%`}
`;

function formatTime(t) {
  const m = parseInt(t / 60);
  const s = parseInt(t - (m * 60));
  return `${zeroFill(m)}:${zeroFill(s)}`;
}

function zeroFill(s) {
  if (s < 10 && s >= 0) return `0${s}`;
  return s;
}

export default class AudioPlayer extends PureComponent {

  state = {
    duration: 0,
    currentTime: 0,
  }

  componentDidMount() {
    window.addEventListener('click', this.onBodyCLick, false);
  }

  onBodyCLick = () => {
    const { musicObj, onChangeMusicPlay } = this.props;
    if (musicObj.audioOpen) onChangeMusicPlay({ audioOpen: false });
  }

  controlAudioCanPlay = () => {
    this.setState({ duration: this.audio.duration });
  }

  controlAudioTimeUpdate = () => {
    this.setState({ currentTime: this.audio.currentTime });
  }

  render() {
    const { musicObj } = this.props;
    const { duration, currentTime } = this.state;

    return (
      <Cover audioOpen={musicObj.audioOpen}>
        <Container
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
        >
          <audio
            ref={(ref) => { this.audio = ref; }}
            src={musicObj.musicSrc}
            style={{ display: 'none' }}
            controls={false}
            autoPlay
            onCanPlay={() => this.controlAudioCanPlay()}
            onTimeUpdate={() => this.controlAudioTimeUpdate()}
          />
          <Control>
            <Progress duration={duration} currentTime={currentTime} />
          </Control>
          <Time>
            <p>{formatTime(duration)}</p>
            <p>{formatTime(currentTime)}</p>
          </Time>
        </Container>
      </Cover>
    );
  }
}

AudioPlayer.propTypes = {
  musicObj: PropTypes.object,
  onChangeMusicPlay: PropTypes.func,
};
