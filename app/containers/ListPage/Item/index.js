/**
 * Created by sj on 2017/6/30.
 * Header
 */

import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';


const Image = styled.img`
  width: 100%;
  height: auto
`;

export default class Item extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { info } = this.props;

    return (
      <div>
        <Image src={info.img_url} />
      </div>
    );
  }
}

Item.propTypes = {
  info: PropTypes.object,
};
