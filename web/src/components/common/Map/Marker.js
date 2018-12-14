import React from 'react';
import PropTypes from 'prop-types';
import MarkerInfoBox from './MarkerInfoBox';

const { Marker, InfoWindow } = require('react-google-maps');

const MarkerUI = props => {
  const { isOpen, position, item, onToggleOpen, onToggleClose, markerIcons, record } = props;
  const icon = record
    ? {
        url: `data:image/svg+xml;utf-8,\
        <svg width="50px" height="50px" viewBox="0 0 911 855" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
       
        <g transform="translate(150 0)" id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="map-marker">
                <path d="M302.517487,800.954358 C308.064405,584.543046 544.214664,476.024618 566.850352,285.200506 C590.044593,149.434391 482.638633,22.9881293 326.975987,2.74678631 C171.313339,-17.4807494 26.3057947,76.1872386 3.11155375,211.939546 C0.768381272,225.677702 -0.260714744,239.55393 0.0559301845,253.443965 C0.404239605,263.606058 1.44916786,273.754343 3.22237946,283.819786 C25.8608494,475.983543 263.115674,583.368275 267.563352,801.033275 C268.877306,865.33683 300.867716,865.319702 302.517487,800.954358 Z" id="Path" fill="${
                  record.icon.backgroundColor
                }"></path>
                <path transform="translate(120 100) scale(0.6 0.6)" d="${
                  markerIcons[record.icon.name]
                }" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
            </g>
        </g>
    </svg>`,
      }
    : {};

  return (
    <Marker options={{ icon }} position={position} onClick={onToggleOpen}>
      {isOpen && (
        <InfoWindow onCloseClick={onToggleClose}>
          <MarkerInfoBox item={item} caseType={record} />
        </InfoWindow>
      )}
    </Marker>
  );
};
MarkerUI.propTypes = {
  isOpen: PropTypes.bool,
  position: PropTypes.object,
  record: PropTypes.object,
  item: PropTypes.object,
  onToggleOpen: PropTypes.func,
  onToggleClose: PropTypes.func,
  markerIcons: PropTypes.object,
};

export default MarkerUI;
