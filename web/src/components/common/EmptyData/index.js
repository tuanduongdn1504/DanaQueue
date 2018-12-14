import React from 'react';
import PropTypes from 'prop-types';
import EmptyDataWrapper from './style';
import Text from '../Text';

const EmptyData = props => {
  return (
    <EmptyDataWrapper>
      <div className="content">
        <div className="icon">
          <i className={props.icon || 'anticon-ic-face-smile'} />
        </div>
        <div className="text">
          <Text type="body1" color="#b3b3b3">
            {props.text || 'Chưa có thông tin để hiển thị'}
          </Text>
        </div>
      </div>
    </EmptyDataWrapper>
  );
};

EmptyData.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};
export default EmptyData;
