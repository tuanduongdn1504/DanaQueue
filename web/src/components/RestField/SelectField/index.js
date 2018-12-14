import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { Dropdown, Menu, Icon } from 'antd';
import { getRecordData } from '../../../helpers/Tools';
import { SelectFieldWrapper } from './style';

class SelectField extends Component {
  state = {
    visible: false,
  };
  render() {
    const { onChange, resourceData, valueProps, textProps, value, record, source } = this.props;
    const menu = (
      <Menu
        onClick={e => {
          onChange && onChange(e);
          this.setState({ visible: false });
        }}
      >
        {map(resourceData, item => {
          return (
            <Menu.Item key={valueProps ? item[valueProps] : item}>
              {getRecordData(item, textProps)}
            </Menu.Item>
          );
        })}
      </Menu>
    );

    return (
      <Dropdown
        overlay={menu}
        trigger={['click']}
        ref={dropDown => {
          this.refDropDown = dropDown;
        }}
        onVisibleChange={visible => this.setState({ visible })}
      >
        <SelectFieldWrapper>
          <a role="presentation">
            <div>{value || getRecordData(record, source)}</div>{' '}
            <div className={`icon ${this.state.visible && 'openDropdown'}`}>
              <Icon type="right" />
            </div>
          </a>
        </SelectFieldWrapper>
      </Dropdown>
    );
  }
}

SelectField.propTypes = {
  onChange: PropTypes.func,
  valueProps: PropTypes.string,
  textProps: PropTypes.string,
  resourceData: PropTypes.array,
  value: PropTypes.any,
  record: PropTypes.object,
  source: PropTypes.string,
};

SelectField.defaultProps = {
  format: data => data,
};
export default SelectField;
