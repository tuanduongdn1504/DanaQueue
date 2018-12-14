import React from 'react';
import PropTypes from 'prop-types';
import BoxTitleWrapper from '../BoxTitle';
import { BoxWrapper } from './style';

const Box = ({ title, subtitle, children, icon, className, onClickExtraButton }) => (
  <BoxWrapper className={`isoBoxWrapper ${className}`}>
    {title && (
      <BoxTitleWrapper
        title={title}
        subtitle={subtitle}
        icon={icon}
        onClickExtraButton={onClickExtraButton}
      />
    )}
    {children}
  </BoxWrapper>
);
Box.propTypes = {
  title: PropTypes.any,
  subtitle: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.string,
  className: PropTypes.string,
  onClickExtraButton: PropTypes.func,
};

export default Box;
