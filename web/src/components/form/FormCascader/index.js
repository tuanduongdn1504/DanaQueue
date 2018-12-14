import React from 'react';
import PropTypes from 'prop-types';
import { Form, Cascader } from 'antd';
import FormTitle from '../FormTitle';
import IntlMessages from '../../utility/IntlMessages';

const FormItem = Form.Item;
const FormCascader = props => {
  const {
    source,
    title,
    required,
    requiredMessage,
    icon,
    placeholder,
    form,
    defaultValue,
    rules,
    onChange,
    loadData,
    fieldNames,
    options,
    showSearch,
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
            <Cascader
              fieldNames={fieldNames}
              changeOnSelect
              onChange={onChange}
              options={options}
              showSearch={showSearch}
              placeholder={placeholderText}
              loadData={loadData}
              style={{ width: '100%' }}
            />,
          )}
        </FormItem>
      )}
    </IntlMessages>
  );
};

FormCascader.propTypes = {
  source: PropTypes.string,
  title: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  rules: PropTypes.any,
  onChange: PropTypes.func,
  loadData: PropTypes.func,
  fieldNames: PropTypes.object,
  options: PropTypes.array,
  showSearch: PropTypes.func,
};
FormCascader.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: [],
  placeholder: 'placeholder.undefined',
};
export default FormCascader;
