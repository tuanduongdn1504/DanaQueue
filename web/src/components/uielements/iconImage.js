import React from 'react';
import PropTypes from 'prop-types';
import CaseIcon from './caseIconUI';
import { IconImageWrapper } from './styles/CaseImage.styles';
import { getRecordData } from '../../helpers/Tools';

const IconImage = props => {
  const { widthIcon } = props;
  const iconBackgroundColor =
    (props.form && props.form.getFieldValue(props.backgroundColor)) ||
    getRecordData(props.record, props.backgroundColor);
  const iconName =
    (props.form && props.form.getFieldValue(props.iconName)) ||
    getRecordData(props.record, props.iconName);
  return (
    <IconImageWrapper>
      <div
        style={{
          background: iconBackgroundColor || '#ddd',
          width: widthIcon || 120,
          height: widthIcon || 120,
          borderRadius: (widthIcon && widthIcon / 2) || 60,
        }}
        className="iconBorder"
      >
        <CaseIcon type={iconName} color="#fff" size={widthIcon * (8 / 15) || 150 * (8 / 15)} />
      </div>
    </IconImageWrapper>
  );
};

IconImage.propTypes = {
  form: PropTypes.object,
  backgroundColor: PropTypes.string,
  iconName: PropTypes.string,
  record: PropTypes.object,
  widthIcon: PropTypes.number,
};
export default IconImage;
