import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import AntIconBox from './styles/icon.style';

const CaseIcon = AntIconBox(Icon);
const caseIconUI = props => {
  return (
    <div className={props.className} style={{ ...props.style }}>
      <CaseIcon
        className={props.className}
        type={props.type || 'ic-default'}
        style={{
          color: props.color,
          fontSize: props.size,
        }}
      />
    </div>
  );
};
caseIconUI.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.any,
};

caseIconUI.defaultProps = {
  size: 50,
  color: '#fff',
};

export default caseIconUI;
