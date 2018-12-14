import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import IntlMessages from '../../utility/IntlMessages';
import { ButtonWrapper } from './styles';

const ShowButton = props => {
  return (
    <Tooltip title={<IntlMessages id="tooltip.viewDetail" />}>
      <ButtonWrapper icon="profile" onClick={() => props.gotoShowPage(props.record.id)}>
        {/* <IntlMessages id="button.show" /> */}
      </ButtonWrapper>
    </Tooltip>
  );
};

ShowButton.propTypes = {
  gotoShowPage: PropTypes.func,
  record: PropTypes.object,
};

ShowButton.defaultProps = {
  source: 'show',
};

export default ShowButton;
