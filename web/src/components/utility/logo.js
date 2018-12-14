import React from 'react';
import PropTypes from 'prop-types';
// import { siteConfig } from '../../config';
import Text from '../common/Text/index';

const Logo = ({ onClick }) => {
  return (
    <div role="button" onClick={onClick} style={{ marginLeft: 10 }}>
      <Text className="largeTitleBold" align="center" color="#fff">
        DQ
      </Text>
      {/* <img
        src={siteConfig.siteIcon}
        width={'32px'}
        style={{ cursor: 'pointer', marginRight: 24, marginLeft: 16, lineHeight: 0 }}
        alt="kuuho logo"
      /> */}
    </div>
  );
};

Logo.propTypes = {
  onClick: PropTypes.func,
};

export default Logo;
