import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { getRecordData } from '../../../helpers/Tools';

const RestSelectedField = props => {
  const record = props.resourceData.find(
    data => data[props.valueProp] === getRecordData(props.record, props.source),
  );
  return props.record ? (
    <span>
      {props.bold ? (
        <b>{props.format(getRecordData(record, props.titleProp))}</b>
      ) : (
        props.format(getRecordData(record, props.titleProp))
      )}{' '}
    </span>
  ) : (
    <Spin />
  );
};

RestSelectedField.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  format: PropTypes.func,
  bold: PropTypes.bool,
  titleProp: PropTypes.string,
  resourceData: PropTypes.array,
};

RestSelectedField.defaultProps = {
  format: data => data,
  titleProp: 'name',
  valueProp: 'id',
  resourceData: [],
};
export default RestSelectedField;
