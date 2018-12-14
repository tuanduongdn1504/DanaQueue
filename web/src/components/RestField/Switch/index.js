import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Popconfirm } from 'antd';
import { getRecordData } from '../../../helpers/Tools';
import { renderMessage } from '../../../utils/textUtils';
import IntlMessages from '../../utility/IntlMessages';

const RestSwitch = props => {
  const value = getRecordData(props.record, props.source) || props.value;
  return props.isShowConfirm ? (
    <Popconfirm
      title={
        !value ? renderMessage(props.confirmMessage) : renderMessage(props.cancelConfirmMessage)
      }
      onConfirm={props.onChange}
      okText={renderMessage('button.ok')}
      cancelText={renderMessage('button.cancel')}
    >
      {props.placeholder && (
        <span className="txtPlaceholder" style={{ marginRight: 5 }}>
          <IntlMessages id={props.placeholder} />
        </span>
      )}
      <Switch checked={value} disabled={!props.onChange} />
    </Popconfirm>
  ) : (
    <div>
      {props.placeholder && (
        <span className="txtPlaceholder" style={{ marginRight: 5 }}>
          <IntlMessages id={props.placeholder} />
        </span>
      )}
      <Switch checked={value} onChange={props.onChange} disabled={!props.onChange} />
    </div>
  );
};

RestSwitch.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.bool,
  isShowConfirm: PropTypes.bool,
  confirmMessage: PropTypes.string,
  cancelConfirmMessage: PropTypes.string,
  placeholder: PropTypes.string,
};

RestSwitch.defaultProps = {
  format: data => data,
};
export default RestSwitch;
