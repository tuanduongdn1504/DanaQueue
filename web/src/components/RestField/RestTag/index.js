import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import TagWrapper from './style';
import { getRecordData } from '../../../helpers/Tools';

const RestTag = props => {
  return props.loading && !getRecordData(props.record, props.source) ? (
    <Spin />
  ) : (
    <TagWrapper className="tag-item" color={props.color} theme={props.theme}>
      {props.customText || getRecordData(props.record, props.source)}
    </TagWrapper>
  );
};

RestTag.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  customText: PropTypes.any,
  color: PropTypes.string,
  theme: PropTypes.object,
  loading: PropTypes.bool,
};

export default RestTag;
