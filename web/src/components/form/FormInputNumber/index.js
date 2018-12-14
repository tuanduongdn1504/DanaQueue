import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputNumber } from 'antd';
import FormTitle, { IconWrapper } from '../FormTitle';
import IntlMessages from '../../utility/IntlMessages';

const FormItem = Form.Item;
const FormInputNumber = props => {
  const {
    prefixIcon,
    source,
    title,
    required,
    requiredMessage,
    icon,
    placeholder,
    form,
    defaultValue,
    type,
    disabled,
    min,
    max,
    rules,
  } = props;
  return (
    <IntlMessages id={placeholder}>
      {placeholderText => (
        <FormItem>
          <FormTitle title={title} icon={icon} required={required} />
          {form.getFieldDecorator(source, {
            rules: [{ required, message: requiredMessage }, ...rules],
            initialValue: defaultValue,
          })(
            <InputNumber
              min={min}
              max={max}
              prefix={prefixIcon ? <IconWrapper type={prefixIcon} /> : null}
              disabled={disabled}
              type={type || 'text'}
              placeholder={placeholderText}
              style={{ width: '100%' }}
            />,
          )}
        </FormItem>
      )}
    </IntlMessages>
  );
};

FormInputNumber.propTypes = {
  source: PropTypes.string,
  title: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  max: PropTypes.number,
  rules: PropTypes.array,
  min: PropTypes.number,
  prefixIcon: PropTypes.string,
  type: PropTypes.string,
};
FormInputNumber.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: [],
  placeholder: 'placeholder.undefined',
};
export default FormInputNumber;
