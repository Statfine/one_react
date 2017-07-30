/**
 * Created by Dashboard on 2017/1/9.
 */
import React, { PureComponent, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import DashFoot from 'components/DashboardFoot';
import IconMusic from 'material-ui/svg-icons/image/music-note';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HeaderAudoiPlayer from './HeaderAudoiPlayer';
import { selectMusic } from '../App/selectors';
import { changeMusicPlay } from '../App/actions';


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const ani = keyframes`
  0%{ transform:rotate(0deg); }
  100%{ transform:rotate(360deg); }
`;

const opacityIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MusicContent = styled.div`
  position: fixed;
  width: 3rem;
  background: rgba(0, 0, 0, 0.6);
  right: 0;
  top: 16%;
  height: 2rem;
  animation: ${opacityIn} 1s linear;
`;

const Music = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  height: 2rem;
  background: #e6e6e6;
  width: 2rem;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  margin-left: -1rem;
  animation: ${ani} 5s infinite linear;
`;

class Dashboard extends PureComponent {

  handleOpenAudio = (event) => {
    const { onChangeMusicPlay, musicObj } = this.props;
    event.preventDefault();
    event.stopPropagation();
    onChangeMusicPlay({ audioOpen: !musicObj.audioOpen });
  }

  render() {
    const { children, location, musicObj, onChangeMusicPlay } = this.props;
    return (
      <Container>
        <HeaderAudoiPlayer musicObj={musicObj} onChangeMusicPlay={onChangeMusicPlay} />
        { (!!musicObj.musicSrc && musicObj.play) && <MusicContent onClick={(e) => this.handleOpenAudio(e)}><Music><IconMusic /></Music></MusicContent>}
        {children}
        <DashFoot index={location.pathname} />
      </Container>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  musicObj: PropTypes.object,
  onChangeMusicPlay: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  musicObj: selectMusic(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeMusicPlay: (...arg) => dispatch(changeMusicPlay(...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
