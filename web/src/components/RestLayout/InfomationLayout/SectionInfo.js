import React from 'react';
import PropTypes from 'prop-types';
import { SectionInfoWrapper } from './styles/SectionInfo.style';
import Text from '../../../components/common/Text';
import IntlMessages from '../../../components/utility/IntlMessages';
import RestRow from '../../../components/RestLayout/RowLayout';
import RestCol from '../../../components/RestLayout/ColLayout';
import basicStyle from '../../../config/basicStyle';

const SectionInfo = props => {
  const { sectionName, items } = props;
  return (
    <SectionInfoWrapper className="section-content">
      {sectionName && (
        <Text type="body3" fontWeight="light" color="#ababab" className="section-name">
          <IntlMessages id={sectionName} />
        </Text>
      )}
      <RestRow
        elementProps={{
          className: 'items-content',
          style: basicStyle.rowStyle,
        }}
      >
        {items &&
          items.map(obj => {
            return (
              <RestCol
                elementProps={{
                  xl: 6,
                  lg: 8,
                  md: 8,
                  sm: 12,
                  xs: 24,
                  className: 'item',
                }}
                key={Math.random()}
              >
                <Text type="body3" fontWeight="light" color="#5f5f5f" className="label">
                  <IntlMessages id={obj.label} />:
                </Text>
                <span>
                  {obj.value || (
                    <i>
                      <Text type="body3">
                        <IntlMessages id="form.notUpdate" fontWeight="light" />
                      </Text>
                    </i>
                  )}
                </span>
              </RestCol>
            );
          })}
      </RestRow>
    </SectionInfoWrapper>
  );
};

SectionInfo.propTypes = {
  sectionName: PropTypes.string,
  items: PropTypes.array,
};

export default SectionInfo;
