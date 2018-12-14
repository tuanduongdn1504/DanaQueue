import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import FormTitle from '../FormTitle';

const FormItemUI = Form.Item;

const FormItem = props => {
  const {
    source,
    title,
    required,
    requiredMessage,
    icon,
    form,
    defaultValue,
    ruleType,
    rules,
    children,
    valuePropName,
  } = props;
  return (
    <FormItemUI>
      <FormTitle title={title} icon={icon} required={required} />
      {form.getFieldDecorator(source, {
        rules: [{ type: ruleType, required, message: requiredMessage }, ...rules],
        valuePropName,
        initialValue: defaultValue,
      })(children)}
    </FormItemUI>
  );
};

FormItem.propTypes = {
  source: PropTypes.string,
  title: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  rules: PropTypes.array,
  valuePropName: PropTypes.string,
  ruleType: PropTypes.string,
  children: PropTypes.node,
};
FormItem.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: [],
  valuePropName: 'value',
};

export default FormItem;
