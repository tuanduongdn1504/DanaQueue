import React from 'react';
import PropTypes from 'prop-types';
import { ComponentTitleWrapper } from './styles/pageHeader.style';

const PageHeader = props => (
  <ComponentTitleWrapper style={props.style} className={`isoComponentTitle ${props.className}`}>
    {props.children}
  </ComponentTitleWrapper>
);

PageHeader.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PageHeader;
