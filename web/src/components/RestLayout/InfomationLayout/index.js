import React from 'react';
import PropTypes from 'prop-types';

import RestRow from '../../../components/RestLayout/RowLayout';
import RestCol from '../../../components/RestLayout/ColLayout';
import Box from '../../../components/utility/Box';

import basicStyle from '../../../config/basicStyle';
import SectionInfo from './SectionInfo';
import { InformationLayoutWrapper } from './styles/InformationLayoutWrapper.style';

const InfomationLayout = ({ avatarContent, infoContent, sections }) => {
  return (
    <InformationLayoutWrapper>
      <RestRow elementProps={{ style: basicStyle.rowStyle }}>
        <RestCol elementProps={{ lg: 24 }}>
          <Box className="main-user-info">
            <RestRow elementProps={{ style: basicStyle.rowStyle }}>
              <RestCol
                elementProps={{ lg: 6, md: 8, sm: 24, xs: 24, className: 'avatar-and-rating' }}
              >
                <div className="avatar-and-rating-content">
                  <div className="avatar-wrapper">{avatarContent}</div>
                  <div className="main-info">{infoContent}</div>
                </div>
              </RestCol>
              <RestCol
                elementProps={{
                  lg: 18,
                  md: 16,
                  sm: 24,
                  xs: 24,
                  className: 'user-info-content',
                }}
              >
                <div>{sections && sections.map(item => <SectionInfo {...item} />)}</div>
              </RestCol>
            </RestRow>
          </Box>
        </RestCol>
      </RestRow>
    </InformationLayoutWrapper>
  );
};

InfomationLayout.propTypes = {
  avatarContent: PropTypes.element,
  infoContent: PropTypes.element,
  sections: PropTypes.array,
};

export default InfomationLayout;
