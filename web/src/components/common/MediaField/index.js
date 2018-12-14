import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import MediaFieldWrapper from './style';
import { getRecordData } from '../../../helpers/Tools';

const MediaField = props => {
  return (
    <MediaFieldWrapper>
      <div>
        <Avatar
          size="large"
          src={props.mediaSource && getRecordData(props.record, props.mediaSource)}
          style={{ backgroundColor: getRecordData(props.record, props.mediaBgColor) || '' }}
        >
          <i className={`anticon-${getRecordData(props.record, props.mediaIcon)}`} />
        </Avatar>
      </div>
      <div className="content">
        <div>{props.content}</div>
        {props.children}
      </div>
    </MediaFieldWrapper>
  );
};

MediaField.propTypes = {
  mediaSource: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.element,
  record: PropTypes.object,
  mediaBgColor: PropTypes.string,
  mediaIcon: PropTypes.string,
};

export default MediaField;
