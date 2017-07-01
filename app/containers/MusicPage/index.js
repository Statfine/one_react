/**
 * Created by sj on 2017/6/30.
 * MusicPage
 */

import React, { PureComponent, PropTypes } from 'react';
import Header from 'components/Header';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchList } from './actions';
import {
  selectContentList, selectReportsRequesting,
} from './selector';
import Itme from './Item';

class MusicPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onFetchList();
  }

  renderList = (list) =>
    list.map((item, index) => (
      <Itme key={index} info={item} />
    ))

  render() {
    const { contentList, reportsRequesting } = this.props;
    return (
      <div>
        <Header title={'一个音乐'} />
        {
          reportsRequesting ?
            <div>Loading</div> : <div style={{ paddingTop: '60px', backgroundColor: '#3e3e3e' }}>{this.renderList(contentList)}</div>
        }
      </div>
    );
  }
}

MusicPage.propTypes = {
  onFetchList: PropTypes.func,
  contentList: PropTypes.array,
  reportsRequesting: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  contentList: selectContentList(),
  reportsRequesting: selectReportsRequesting(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetchList: () => dispatch(fetchList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPage);
