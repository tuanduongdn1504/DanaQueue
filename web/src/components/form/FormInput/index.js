import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import FormTitle, { IconWrapper } from '../FormTitle';
import IntlMessages from '../../utility/IntlMessages';
import FlagLabel from '../../common/FlagLabel';

const FormItem = Form.Item;
const { TextArea } = Input;
const FormInput = props => {
  const {
    textArea,
    prefixIcon,
    source,
    valuePropName,
    title,
    required,
    requiredMessage,
    icon,
    placeholder,
    form,
    defaultValue,
    type,
    ruleType,
    disabled,
    rules,
    normalize,
    flagCountry,
    autosize,
    inputClassName,
  } = props;
  return (
    <IntlMessages id={placeholder}>
      {placeholderText => (
        <FormItem>
          {title && <FormTitle title={title} icon={icon} required={required} />}
          <div style={{ position: 'relative' }}>
            {form.getFieldDecorator(source, {
              rules: [{ type: ruleType, required, message: requiredMessage }, ...rules],
              initialValue: defaultValue,
              valuePropName,
              normalize,
            })(
              textArea ? (
                <TextArea
                  autosize={autosize || { minRows: 4, maxRows: 10 }}
                  disabled={disabled}
                  type={type || 'text'}
                  placeholder={placeholderText}
                  className={inputClassName}
                />
              ) : (
                <Input
                  prefix={prefixIcon ? <IconWrapper type={prefixIcon} /> : null}
                  disabled={disabled}
                  type={type || 'text'}
                  placeholder={placeholderText}
                  className={inputClassName}
                />
              ),
            )}
            {flagCountry && (
              <FlagLabel country={flagCountry} style={{ position: 'absolute', right: 0, top: 0 }} />
            )}
          </div>
        </FormItem>
      )}
    </IntlMessages>
  );
};

FormInput.propTypes = {
  source: PropTypes.string,
  title: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  ruleType: PropTypes.string,
  valuePropName: PropTypes.string,
  rules: PropTypes.array,
  textArea: PropTypes.bool,
  prefixIcon: PropTypes.string,
  type: PropTypes.string,
  normalize: PropTypes.func,
  flagCountry: PropTypes.string,
  autosize: PropTypes.object,
  inputClassName: PropTypes.string,
};
FormInput.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: [],
  valuePropName: 'value',
  placeholder: 'placeholder.undefined',
  format: data => data,
};

export default FormInput;
