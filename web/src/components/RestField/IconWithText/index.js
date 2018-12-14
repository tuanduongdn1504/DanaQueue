import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { getRecordData } from '../../../helpers/Tools';

const IconWithText = props => {
  return (
    <div>
      <Avatar
        icon={
          antIcon ? (
            <i className={`anticon-${getRecordData(props.record, props.antIcon)}`} />
          ) : (
            getRecordData(props.record, props.icon)
          )
        }
        style={{ backgroundColor: getRecordData(props.record, props.backgroundColor) }}
      />
      <span> {getRecordData(props.record, props.text)}</span>
    </div>
  );
};

IconWithText.propTypes = {
  record: PropTypes.object,
  icon: PropTypes.string,
  backgroundColor: PropTypes.string,
  antIcon: PropTypes.string,
  text: PropTypes.string,
};
export default IconWithText;
