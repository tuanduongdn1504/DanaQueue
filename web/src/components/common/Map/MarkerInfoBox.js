import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Icon } from 'antd';
import MarkerInfoBoxWrapper from './MarkerInfoBox.style';
import { formatDateTime } from '../../../utils/textUtils';
import StatusLabel from '../../../containers/SentCase/components/StatusLabel';
import Text from '../Text';

const EmergencyItem = ({ item, caseType, theme }) => {
  if (!item.caseTypeSlug) return <span />;
  return (
    <MarkerInfoBoxWrapper>
      <div className="viewHeader">
        <Text type="body2" fontWeight="medium" color={theme.palette.primary[2]}>
          {caseType && caseType.displayName.vi}
        </Text>
      </div>
      <div className="row">
        <Icon type="ic-time-1" className="iconInfobox" />
        <Text type="small" color={theme.palette.text[2]}>
          {formatDateTime(item.createdAt)}
        </Text>
      </div>
      <div className="row">
        <Icon type="ic-map" className="iconInfobox" />
        <Text type="small" color={theme.palette.text[2]}>
          {item.address}
        </Text>
      </div>
      <StatusLabel record={item} isOutline />
    </MarkerInfoBoxWrapper>
  );
};
EmergencyItem.propTypes = {
  item: PropTypes.object,
  caseType: PropTypes.object,
  theme: PropTypes.object,
};

export default withTheme(EmergencyItem);
