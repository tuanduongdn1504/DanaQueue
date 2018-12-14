import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import appActions from '../../../redux/app/actions';
import TopbarWrapper from './style';
import { getCurrentTheme } from '../ThemeSwitcher/config';
import {
  TopbarUser,
  TopbarNotification
} from '../../../components/common/topbar';
import {
  logout as logoutAction,
  getCurrentUser as getCurrentUserAction
} from '../../../redux/login/actions';
import { watchNotification as watchNotificationAction } from '../../../redux/oneSignalNotifications/actions';
import { connectDataToGetNewBooking } from '../../../redux/bookings/actions';

const { Header } = Layout;
const customizedTheme = getCurrentTheme('topbarTheme', 'themedefault');

class Topbar extends Component {
  state = {
    selectedItem: ''
  };

  componentDidMount() {
    const { getCurrentUser, watchNotification } = this.props;
    getCurrentUser();
    watchNotification();
    this.props.connectDataToGetNewBooking();
  }

  render() {
    const {
      locale,
      openDrawer,
      logout,
      userInfo,
      userNotifications,
      unreadNotifications
    } = this.props;
    const collapsed = this.props.collapsed && !openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 64
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
          }
        >
          <div className="isoLeft">
            {/* <button
              type="button"
              className={collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'}
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            /> */}
          </div>
          <ul className="isoRight">
            {/* <li className="isoSearch">
              <TopbarSearch locale={locale} customizedTheme={customizedTheme} />
            </li> */}
            <li
              onClick={() => this.setState({ selectedItem: 'notification' })}
              className="isoNotify"
            >
              <TopbarNotification
                locale={locale}
                customizedTheme={customizedTheme}
                unreadTotal={unreadNotifications}
                notifications={userNotifications}
              />
            </li>
            <li
              onClick={() => this.setState({ selectedItem: 'user' })}
              className="isoUser"
            >
              <TopbarUser
                userInfo={userInfo}
                logout={logout}
                locale={locale}
                customizedTheme={customizedTheme}
              />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

Topbar.propTypes = {
  collapsed: PropTypes.bool,
  openDrawer: PropTypes.bool,
  locale: PropTypes.string,
  logout: PropTypes.func,
  userInfo: PropTypes.object,
  getCurentUser: PropTypes.func,
  connectDataToGetNewBooking: PropTypes.func
};

const { toggleCollapsed } = appActions;

export default connect(
  state => ({
    ...state.App,
    userInfo: state.login.data,
    locale: state.LanguageSwitcher.language.locale
  }),
  dispatch => ({
    toggleCollapsed: () => {
      dispatch(toggleCollapsed());
    },
    logout: () => dispatch(logoutAction()),
    getCurrentUser: () => dispatch(getCurrentUserAction()),
    connectDataToGetNewBooking: () => dispatch(connectDataToGetNewBooking()),
    watchNotification: () => dispatch(watchNotificationAction())
  })
)(Topbar);
