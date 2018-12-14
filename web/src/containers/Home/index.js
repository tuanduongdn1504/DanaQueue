import React, { Component } from 'react';
import _ from 'lodash';
import { Row, Col, Button, Input } from 'antd';
import { connect } from 'react-redux';
import { HomeWrapper } from './style';
import LayountContent from '../../components/utility/LayoutWrapper/index';
import SummaryCart from './components/SummaryCart';
import basicStyle from '../../config/basicStyle';
import Box from '../../components/utility/Box/index';
import SimpleLineCharts from '../../components/common/Charts/SimpleLineCharts';
import AlertWrapper from './components/AlertWrapper';
import ListBookings from '../Bookings/List';
import {
  connectDataToGetNewBooking,
  setStatusBooking
} from '../../redux/bookings/actions';
import {
  getAllBookingOfOfficeState,
  getTodaysBookingsState,
  getChartBookingsState,
  getRunningBookingState,
  getAllTodayBookingsState
} from '../../redux/bookings/selector';

const findBooking = (current, todayBookings, value) => {
  const findNextIndex =
    current && _.findIndex(todayBookings, item => item.id === current.id);
  const index = findNextIndex + value;
  return todayBookings[index];
};

class Home extends Component {
  state = {
    number: null
  };
  componentDidMount() {}

  onStartProcess = () => {
    this.props.setStatusBooking('running', this.props.todayBookings[0].id);
  };

  onComplete = () => {
    const { currentRunningBooking, todayBookings } = this.props;

    this.props.setStatusBooking(
      'running',
      findBooking(currentRunningBooking, todayBookings, 1).id
    );
    this.props.setStatusBooking('finished', currentRunningBooking.id);
  };

  onNext = () => {
    const { currentRunningBooking, todayBookings } = this.props;
    if (currentRunningBooking.status === 'running') {
      this.props.setStatusBooking('pending', currentRunningBooking.id);
    }

    if (findBooking(currentRunningBooking, todayBookings, 1)) {
      this.props.setStatusBooking(
        'running',
        findBooking(currentRunningBooking, todayBookings, 1).id
      );
    }
  };

  onPrev = () => {
    const {
      currentRunningBooking,
      todayBookings,
      allTodayBookings
    } = this.props;
    if (currentRunningBooking.status === 'running') {
      this.props.setStatusBooking('pending', currentRunningBooking.id);
    }

    if (findBooking(currentRunningBooking, todayBookings, -1)) {
      this.props.setStatusBooking(
        'running',
        findBooking(currentRunningBooking, todayBookings, -1).id
      );
    }
  };

  render() {
    const {
      bookings,
      currentRunningBooking,
      chartData,
      todayBookings,
      allTodayBookings
    } = this.props;

    const sumaryData = [
      {
        number: allTodayBookings.length,
        text: 'Tổng lượt đặt hôm nay',
        icon: 'calendar',
        fontColor: '#1a9faa',
        link: '/users'
      },
      {
        number: bookings.length,
        text: 'Tổng lượt đặt lịch',
        icon: 'book',
        fontColor: '#7dd41f',
        link: '/bookings'
      }
    ];

    const colors = ['#726df9'];
    const keys = ['bk'];
    const keysList = [
      {
        key: keys[0],
        name: 'Lượt',
        color: colors[0]
      }
    ];
    const chartConfig = {
      datas: chartData,
      keysList,
      height: 220
    };

    return (
      <HomeWrapper>
        <LayountContent>
          <Row style={basicStyle.rowStyle} gutter={32}>
            <Col span={24} className="alertWrapper">
              <AlertWrapper
                number={
                  currentRunningBooking && currentRunningBooking.numerical
                }
                currentRunningBooking={currentRunningBooking}
                nextNumber={
                  findBooking(currentRunningBooking, todayBookings, 1) &&
                  findBooking(currentRunningBooking, todayBookings, 1).numerical
                }
                onComplete={() => this.onComplete()}
                onStartProcess={this.onStartProcess}
                isDisabledProcess={todayBookings.length === 0}
              />
              <div className="action-button">
                <Button.Group>
                  <Button
                    icon="caret-left"
                    onClick={() => this.onPrev()}
                    disabled={
                      !findBooking(currentRunningBooking, todayBookings, -1)
                    }
                  >
                    Lượt trước
                  </Button>
                  <Button
                    icon="caret-right"
                    type="primary"
                    disabled={
                      !findBooking(currentRunningBooking, todayBookings, 1)
                    }
                    onClick={() => this.onNext()}
                  >
                    Lượt tiếp theo
                  </Button>
                </Button.Group>
              </div>
            </Col>
            <Col span={6} className="reportData">
              <SummaryCart items={sumaryData} />
            </Col>
            <Col md={18}>
              <Box title="bookingChart">
                <SimpleLineCharts {...chartConfig} />
              </Box>
            </Col>
            <Col span={24} className="bookings">
              <Box title="newBookings">
                <ListBookings
                  isHome
                  noCardWrapper
                  hasCreate={false}
                  notShowPagination
                  resourceData={{ list: bookings }}
                />
              </Box>
            </Col>
          </Row>
        </LayountContent>
      </HomeWrapper>
    );
  }
}

export default connect(
  state => ({
    todayBookings: getTodaysBookingsState(state),
    currentRunningBooking: getRunningBookingState(
      getTodaysBookingsState(state)
    ),
    bookings: getAllBookingOfOfficeState(state),
    chartData: getChartBookingsState(state),
    allTodayBookings: getAllTodayBookingsState(state)
  }),
  dispatch => ({
    connectDataToGetNewBooking: () => dispatch(connectDataToGetNewBooking()),
    setStatusBooking: (status, id) => dispatch(setStatusBooking(status, id))
  })
)(Home);
