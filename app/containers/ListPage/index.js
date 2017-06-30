/**
 * Created by sj on 2017/6/30.
 * ListPage
 */

import React, { PureComponent, PropTypes } from 'react';
import Header from 'components/ListHeader';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchList } from './actions';
import {
  selectContentList,
  selectWeather,
  selectDate,
  selectReportsRequesting,
} from './selector';
import Itme from './Item';

class ListPage extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onFetchList();
  }

  renderList = (list) =>
    list.map((item, index) => (
      <Itme key={index} info={item} />
    ))

  render() {
    const { contentList, weather, date, reportsRequesting } = this.props;

    return (
      <div>
        <Header date={date} weather={weather} />
        {
          reportsRequesting ?
            <div>Loading</div> : this.renderList(contentList)
        }
      </div>
    );
  }
}

ListPage.propTypes = {
  onFetchList: PropTypes.func,
  contentList: PropTypes.array,
  weather: PropTypes.object,
  date: PropTypes.string,
  reportsRequesting: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  contentList: selectContentList(),
  weather: selectWeather(),
  date: selectDate(),
  reportsRequesting: selectReportsRequesting(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetchList: () => dispatch(fetchList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
