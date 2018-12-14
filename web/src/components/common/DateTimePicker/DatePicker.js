import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DatePicker, Icon } from 'antd';
import Text from '../../common/Text';
import IntlMessages from '../../utility/IntlMessages';
import { DatePickerWrapper } from './styles';
import { formatRangeTime } from '../../../utils/textUtils';

const RangePicker = DatePicker.RangePicker;

class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      text: formatRangeTime(),
      value: [],
    };
    this.rangePicker = React.createRef();
  }

  onDateChange = value => {
    const { onDateChange } = this.props;
    this.setState({ value, text: formatRangeTime(value) });
    onDateChange(value);
  };

  onMouseDown = () => {
    if (this.state.focused) {
      this.setState({ focused: false });
    }
  };

  onClick = () => {
    this.setState({ focused: !this.state.focused });
  };

  render() {
    return (
      <DatePickerWrapper>
        <div className="viewButton">
          <Text align="left" className="txt">
            <IntlMessages id={this.state.text} />
          </Text>
          <Icon type="calendar" theme="outlined" className="icon" />
        </div>
        <RangePicker
          ref={ref => {
            this.rangePicker = ref;
          }}
          ranges={{
            'Hôm nay': [moment(), moment()],
          }}
          value={this.state.value}
          format="YYYY/MM/DD HH:mm:ss"
          onChange={this.onDateChange}
          className="viewDatepicker"
        />
      </DatePickerWrapper>
    );
  }
}
MyDatePicker.propTypes = {
  onDateChange: PropTypes.func,
};

export default MyDatePicker;
