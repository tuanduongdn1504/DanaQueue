import React from 'react';
import PropTypes from 'prop-types';
import { TextWrapper } from './styles';

const Text = props => {
  return (
    <TextWrapper>
      <div
        className={`${props.type} ${props.fontWeight} ${props.align} ${props.className || ''}`}
        style={(props.color && { color: props.color }) || props.style}
      >
        {props.children}
      </div>
    </TextWrapper>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  fontWeight: PropTypes.oneOf(['light', 'medium', 'regular', 'bold', 'semiBold']),
  align: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Text.defaultProps = {
  fontWeight: 'regular',
  align: 'left',
};

export default Text;
