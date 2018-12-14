import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { getRecordData } from '../../../helpers/Tools';

const RestLabel = props => {
  return props.loading && !getRecordData(props.record, props.source) ? (
    <Spin style={{ display: props.disableLoading && 'none' }} />
  ) : (
    (props.record && (
      <span>
        {props.bold ? (
          <b>{props.format(getRecordData(props.record, props.source))}</b>
        ) : (
          props.format(getRecordData(props.record, props.source))
        )}{' '}
        {props.children}
      </span>
    )) || <i>Chưa cập nhật</i>
  );
};

RestLabel.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  format: PropTypes.func,
  bold: PropTypes.bool,
  loading: PropTypes.bool,
  disableLoading: PropTypes.bool,
  children: PropTypes.any,
};

RestLabel.defaultProps = {
  format: data => data,
};
export default RestLabel;
