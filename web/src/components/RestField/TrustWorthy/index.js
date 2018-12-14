import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import { getRecordData } from '../../../helpers/Tools';
import TrustWorthyWrapper from './style';
import Text from '../../common/Text';

const TrustWorthy = props => {
  return (
    <TrustWorthyWrapper>
      <div className="progress">
        <Progress
          percent={getRecordData(props.record, props.source) || 0}
          size="small"
          status="success"
          strokeWidth={props.strokeWidth}
          showInfo={false}
        />
      </div>
      <div className="text">
        <Text type="body3" fontWeight="light" color="#5f5f5f">
          {getRecordData(props.record, props.source) || 0}% độ tin cậy
        </Text>
      </div>
    </TrustWorthyWrapper>
  );
};

TrustWorthy.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string,
  strokeWidth: PropTypes.number,
};
export default TrustWorthy;
