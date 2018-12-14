import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

import IntlMessages from '../../utility/IntlMessages';
import { ButtonWrapper } from './styles';

const EditButton = props => {
  return (
    <Tooltip title={<IntlMessages id="tooltip.edit" />}>
      <ButtonWrapper
        icon="ic-edit-1"
        onClick={() => props.gotoEditPage(props.record ? props.record.id : '')}
      >
        {/* <IntlMessages id="button.edit" /> */}
      </ButtonWrapper>
    </Tooltip>
  );
};

EditButton.propTypes = {
  gotoEditPage: PropTypes.func,
  record: PropTypes.object,
};

EditButton.defaultProps = {
  source: 'edit',
};

export default EditButton;
