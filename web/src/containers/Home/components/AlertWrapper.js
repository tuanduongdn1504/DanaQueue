import React from 'react';
import { Alert, Button } from 'antd';
import PropTypes from 'prop-types';
import Text from '../../../components/common/Text/index';
import { AlertStyle } from './styles/AlertWrapper.style';

const AlertWrapper = props => {
  const {
    isDisabledProcess,
    nextNumber,
    currentRunningBooking,
    onComplete,
    onStartProcess,
    number
  } = props;
  return (
    <AlertStyle>
      <Alert
        message={
          <div className="alertMessage justify">
            {isDisabledProcess ? (
              <div>Chưa có lượt trong hôm nay</div>
            ) : (
              <div className="alertMessage">
                Lượt hiện tại: &nbsp;&nbsp;{' '}
                <Text className="headline">
                  {currentRunningBooking ? number : <span>&nbsp;</span>}
                </Text>
                .{' '}
                {nextNumber ? (
                  <span className="alertMessage">
                    Lượt tiếp theo là: &nbsp;&nbsp;
                    <Text className="headline">{nextNumber}</Text>
                  </span>
                ) : (
                  'Đã hết lượt'
                )}
              </div>
            )}

            <div>
              {currentRunningBooking ? (
                <div>
                  <Button
                    type="primary"
                    icon="check-circle"
                    onClick={onComplete}
                  >
                    Hoàn thành
                  </Button>
                </div>
              ) : (
                <Button
                  icon="caret-right"
                  type="primary"
                  disabled={isDisabledProcess}
                  onClick={onStartProcess}
                >
                  Tiến hành xử lý
                </Button>
              )}
            </div>
          </div>
        }
      />
    </AlertStyle>
  );
};

AlertWrapper.propTypes = {
  isDisabledProcess: PropTypes.bool,
  onStartProcess: PropTypes.func,
  currentRunningBooking: PropTypes.object,
  nextNumber: PropTypes.number,
  number: PropTypes.number,
  onComplete: PropTypes.func
};

export default AlertWrapper;
