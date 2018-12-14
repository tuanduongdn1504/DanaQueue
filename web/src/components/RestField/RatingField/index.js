import React from 'react';
import { Rate } from 'antd';
import PropTypes from 'prop-types';
import { RatingWrapper } from './style';
import { getRecordData } from '../../../helpers/Tools';
import Text from '../../common/Text';

const RatingField = props => {
  return (
    <RatingWrapper>
      <div>
        <Rate
          value={
            getRecordData(props.record, props.totalRate) /
            getRecordData(props.record, props.totalRater)
          }
          disabled={props.disabled}
          allowHalf
        />
      </div>
      <div>
        {!props.isHideTotalRater && (
          <Text type="body3" fontWeight="light" color="#27324b">
            {getRecordData(props.record, props.totalRater) || 0} lượt đánh giá
          </Text>
        )}
      </div>
    </RatingWrapper>
  );
};

RatingField.propTypes = {
  record: PropTypes.object,
  disabled: PropTypes.bool,
  isHideTotalRater: PropTypes.bool,
  totalRate: PropTypes.string,
  totalRater: PropTypes.string,
};

export default RatingField;
