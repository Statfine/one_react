/**
 * Created by sj on 2017/6/30.
 * BookPage
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

class BookPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function

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
        <Header title={'一个阅读'} />
        {
          reportsRequesting ?
            <div>Loading</div> : <div style={{ paddingTop: '60px', backgroundColor: '#3e3e3e' }}>{this.renderList(contentList)}</div>
        }
      </div>
    );
  }
}

BookPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
