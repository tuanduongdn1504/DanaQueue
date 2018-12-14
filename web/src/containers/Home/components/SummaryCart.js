import React from 'react';
import PropTypes from 'prop-types';
import StickerWidget from '../../../components/widget/sticker';

const SummaryCart = ({ items }) => {
  return items.map(item => {
    return (
      <div key={item.fontColor} className="widget-wrapper">
        <StickerWidget {...item} hasViewDetail />
      </div>
    );
  });
};

SummaryCart.propTypes = {
  items: PropTypes.array
};
export default SummaryCart;
