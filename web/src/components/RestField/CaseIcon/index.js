import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import Title from '../../../components/common/Title';
import CaseIconUI from '../../uielements/caseIconUI';
import { getRecordData } from '../../../helpers/Tools';

const CaseIcon = props => {
  return props.record ? (
    <div>
      {!props.table && <Title>{props.title}</Title>}
      <CaseIconUI
        type={getRecordData(props.record, props.source)}
        color={getRecordData(props.record, props.backgroundColor)}
      />
    </div>
  ) : (
    <Spin />
  );
};

CaseIcon.propTypes = {
  table: PropTypes.bool,
  title: PropTypes.any,
  record: PropTypes.object,
  backgroundColor: PropTypes.string,
  source: PropTypes.string,
};
export default CaseIcon;
