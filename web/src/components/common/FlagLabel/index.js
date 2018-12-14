import React from 'react';
import PropTypes from 'prop-types';
import vi from '../../../assets/images/flag/vi.png';
import en from '../../../assets/images/flag/en.png';
import FlagWrapper from './style';

const FLAG = {
  vi,
  en,
};

const FlagLabel = ({ country, className, style }) => {
  return <FlagWrapper src={FLAG[country]} style={style} className={className} />;
};
FlagLabel.propTypes = {
  country: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.any,
};

export default FlagLabel;
