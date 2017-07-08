/**
 * Created by sj on 2017/6/30.
 * MusicPage
 */

import React, { PureComponent, PropTypes } from 'react';
import Header from 'components/Header';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Loading from 'components/Loading';
import { fetchList } from './actions';
import { changeMusicPlay } from '../App/actions';
import {
  selectContentList, selectReportsRequesting,
} from './selector';
import { selectMusic } from '../App/selectors';
import Itme from './Item';

class MusicPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onFetchList();
  }

  renderList = (list) =>
    list.map((item, index) => (
      <Itme key={index} info={item} onChoosed={this.props.omChangeMusicPlay} musicObj={this.props.musicObj} />
    ))

  render() {
    const { contentList, reportsRequesting } = this.props;
    return (
      <div>
        <Header title={'一个音乐'} />
        {
          reportsRequesting ?
            <Loading /> : <div style={{ padding: '60px 0', backgroundColor: '#3e3e3e' }}>{this.renderList(contentList)}</div>
        }
      </div>
    );
  }
}

MusicPage.propTypes = {
  onFetchList: PropTypes.func,
  contentList: PropTypes.array,
  reportsRequesting: PropTypes.bool,
  omChangeMusicPlay: PropTypes.func,
  musicObj: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  contentList: selectContentList(),
  reportsRequesting: selectReportsRequesting(),
  musicObj: selectMusic(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetchList: () => dispatch(fetchList()),
    omChangeMusicPlay: (...arg) => dispatch(changeMusicPlay(...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPage);
