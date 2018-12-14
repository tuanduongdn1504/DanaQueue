import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { Form, Select } from 'antd';
import WayPoint from 'react-waypoint';
import FormTitle from '../FormTitle';
import IntlMessages from '../../utility/IntlMessages';
import { getRecordData } from '../../../helpers/Tools';
import WayPointLoading from '../../common/WayPointLoading';

const FormItem = Form.Item;
const { Option } = Select;

const FormSelect = ({
  source,
  title,
  required,
  requiredMessage,
  icon,
  placeholder,
  form,
  defaultValue,
  disabled,
  resourceData,
  valueProp,
  titleProp,
  children,
  rules,
  format,
  loading,
  onEnter,
}) => {
  const value = valueProp || 'id';
  return (
    <IntlMessages id={placeholder}>
      {placeholderText => (
        <FormItem>
          {title && <FormTitle title={title} icon={icon} required={required} />}
          {form.getFieldDecorator(source, {
            rules: [{ required, message: requiredMessage, type: 'array' }, ...rules],
            initialValue: defaultValue,
          })(
            <Select disabled={disabled} mode="multiple" placeholder={placeholderText}>
              {map(format ? format(resourceData) : resourceData, data => {
                return children ? (
                  <Option key={getRecordData(data, value)} value={getRecordData(data, value)}>
                    {React.cloneElement(children, {
                      key: getRecordData(data, value),
                      record: data,
                      valueProp: getRecordData(data, value),
                      titleProp: getRecordData(data, titleProp),
                    })}
                  </Option>
                ) : (
                  <Option key={getRecordData(data, value)} value={getRecordData(data, value)}>
                    {getRecordData(data, titleProp)}
                  </Option>
                );
              })}
              <Option key="loading" disabled value="loadingTracking">
                {loading && <WayPointLoading />}
                <WayPoint onEnter={onEnter} />
              </Option>
            </Select>,
          )}
        </FormItem>
      )}
    </IntlMessages>
  );
};

FormSelect.propTypes = {
  source: PropTypes.string,
  title: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  resourceData: PropTypes.any,
  valueProp: PropTypes.string,
  titleProp: PropTypes.string,
  children: PropTypes.node,
  rules: PropTypes.array,
  format: PropTypes.func,
  loading: PropTypes.bool,
  onEnter: PropTypes.func,
};
FormSelect.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: [],
};
export default FormSelect;
