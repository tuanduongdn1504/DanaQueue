import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
import { map, isObject } from 'lodash';
import WayPoint from 'react-waypoint';
import FormTitle from '../FormTitle';
import IntlMessages from '../../utility/IntlMessages';
import { getRecordData } from '../../../helpers/Tools';
import { onSearch as onChangeSearch } from '../../../utils';
import LoadingComponent from '../../common/Loading';
import { SelectWrapper } from './style';

const FormItem = Form.Item;
const { Option } = Select;
class FormSelect extends Component {
  onSelectOption = (inputValue, option) => {
    if (
      onChangeSearch(
        isObject(option.props.children)
          ? getRecordData(
              option.props.children.props && option.props.children.props.record,
              this.props.searchKey,
            )
          : option.props.children,
        inputValue,
      )
    ) {
      return option.props.value;
    }
    return null;
  };

  render() {
    const {
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
      onSearch,
      onChange,
      format,
      className,
      loading,
      onEnter,
    } = this.props;

    return (
      <IntlMessages id={placeholder}>
        {placeholderText => (
          <FormItem>
            {title && <FormTitle title={title} icon={icon} required={required} />}
            {form.getFieldDecorator(source, {
              rules: [{ required, message: requiredMessage, ...rules }],
              initialValue: defaultValue,
            })(
              <SelectWrapper
                disabled={disabled}
                placeholder={placeholderText}
                filterOption={this.onSelectOption}
                showSearch
                allowClear
                className={className}
                onSearch={value => onSearch(value)}
                onChange={onChange}
              >
                {map(format ? format(resourceData) : resourceData, data => {
                  return children ? (
                    <Option
                      key={valueProp ? getRecordData(data, valueProp) : data}
                      value={valueProp ? getRecordData(data, valueProp) : data}
                    >
                      {React.cloneElement(children, {
                        key: valueProp ? getRecordData(data, valueProp) : data,
                        record: data,
                        valueProp,
                        titleProp,
                      })}
                    </Option>
                  ) : (
                    <Option
                      key={valueProp ? getRecordData(data, valueProp) : data}
                      value={valueProp ? getRecordData(data, valueProp) : data}
                    >
                      {titleProp ? getRecordData(data, titleProp) : data}
                    </Option>
                  );
                })}
                <Option key="loading" disabled value="loadingTracking">
                  {loading && <LoadingComponent />}
                  <WayPoint onEnter={onEnter} />
                </Option>
              </SelectWrapper>,
            )}
          </FormItem>
        )}
      </IntlMessages>
    );
  }
}

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
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  format: PropTypes.func,
  searchKey: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
  onEnter: PropTypes.func,
};

FormSelect.defaultProps = {
  required: false,
  requiredMessage: 'This field is required',
  rules: [],
  placeholder: 'placeholder.undefined',
  onChange: () => {},
  onSearch: () => {},
};

export default FormSelect;
