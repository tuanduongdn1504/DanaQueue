import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Button } from 'antd';
import { SketchPicker } from 'react-color';
import FormItemUI from '../../../components/form/FormItem';
import { getRecordData } from '../../../helpers/Tools';

class ColorSelection extends React.Component {
  handleChangeComplete = color => {
    this.props.form.setFieldsValue({ [this.props.source]: color.hex });
  };

  render() {
    const { form, record, source } = this.props;
    const iconBackgroundColor = form.getFieldValue(source);
    if (!iconBackgroundColor && getRecordData(record, source)) {
      form.setFieldsValue({ iconBackgroundColor: getRecordData(record, source) });
    }
    return (
      <FormItemUI {...this.props} defaultValue={getRecordData(record, source)}>
        <Popover
          content={
            <SketchPicker
              color={iconBackgroundColor}
              onChangeComplete={this.handleChangeComplete}
            />
          }
          placement="bottom"
          trigger="click"
        >
          <Button block style={{ textAlign: 'left', color: '#000' }}>
            <div>{iconBackgroundColor || '#ddd'}</div>
          </Button>
        </Popover>
      </FormItemUI>
    );
  }
}

ColorSelection.propTypes = {
  form: PropTypes.object,
  record: PropTypes.object,
  source: PropTypes.string,
};

export default ColorSelection;
