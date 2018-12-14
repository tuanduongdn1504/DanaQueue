import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Tag } from 'antd';
import Title from '../../common/Title';
import { getRecordData } from '../../../helpers/Tools';

const BooleanField = props => {
  return props.loading ? (
    <Spin />
  ) : (
    (props.record && (
      <div>
        {!props.table && <Title>{props.title}</Title>}
        <Tag
          color={
            !props.record[props.source] ? props.falseColor || '#f50' : props.trueColor || '#2db7f5'
          }
        >
          {getRecordData(props.record, props.source)
            ? props.trueText || 'Có'
            : props.falseText || 'Không'}
        </Tag>
      </div>
    )) || (
      <div>
        {!props.table && <Title>{props.title}</Title>}
        <Tag color={!props.value ? '#f50' : '#2db7f5'}>{String(props.value ? 'Có' : 'Không')}</Tag>
      </div>
    )
  );
};

BooleanField.propTypes = {
  table: PropTypes.bool,
  source: PropTypes.string,
  record: PropTypes.object,
  title: PropTypes.any,
  loading: PropTypes.bool,
  value: PropTypes.bool,
};

export default BooleanField;
