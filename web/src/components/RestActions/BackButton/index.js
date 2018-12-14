import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import IntlMessages from '../../utility/IntlMessages';
import { ButtonWrapper } from './styles';

const BackButton = props => {
  return (
    <Tooltip title={<IntlMessages id="tooltip.goBack" />}>
      <ButtonWrapper icon="rollback" onClick={() => props.onBack()}>
        {/* <IntlMessages id="button.back" /> */}
      </ButtonWrapper>
    </Tooltip>
  );
};

BackButton.propTypes = {
  onBack: PropTypes.func,
};

BackButton.defaultProps = {
  source: 'back',
};

export default BackButton;
