import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Button } from 'antd';
import clone from 'clone';
import { Scrollbars } from 'react-custom-scrollbars';
import IntlMessages from '../../../components/utility/IntlMessages';
import { getCurrentTheme } from '../ThemeSwitcher/config';
import SidebarWrapper from './style';
import appActions from '../../../redux/app/actions';
import { logout as logoutAction } from '../../../redux/login/actions';

import { rtl } from '../../../config/withDirection';
import Logo from '../../../components/utility/logo';

const { Sider } = Layout;
const customizedTheme = getCurrentTheme('sidebarTheme', 'themedefault');
const stripTrailingSlash = str => {
  if (str.substr(-1) === '/') {
    return str.substr(0, str.length - 1);
  }
  return str;
};
const listMenu = [
  {
    key: 'dashboard',
    url: '/',
    anticon: 'dashboard',
    text: 'sidebar.dashboard'
  },
  {
    key: 'bookings',
    url: '/bookings',
    anticon: 'calendar',
    text: 'sidebar.bookings'
  },
  {
    key: 'notifications',
    url: '/notifications',
    anticon: 'notification',
    text: 'sidebar.notifications'
  },
  {
    key: 'officeTypes',
    url: '/officeTypes',
    anticon: 'crown',
    text: 'sidebar.officeTypes'
  },
  {
    key: 'offices',
    url: '/offices',
    anticon: 'bank',
    text: 'sidebar.offices'
  },

  {
    key: 'procedures',
    url: '/procedures',
    anticon: 'audit',
    text: 'sidebar.procedures'
  }
];

class Sidebar extends Component {
  getAncestorKeys = key => {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  };

  renderView({ style, ...props }) {
    const viewStyle = {
      marginRight: rtl === 'rtl' ? '0' : '-25px',
      paddingRight: rtl === 'rtl' ? '0' : '9px',
      marginLeft: rtl === 'rtl' ? '-17px' : '0',
      paddingLeft: rtl === 'rtl' ? '9px' : '0'
    };
    return (
      <div className="box" style={{ ...style, ...viewStyle }} {...props} />
    );
  }

  render() {
    const { app, toggleCollapsed, logout } = this.props;
    const url = stripTrailingSlash('/');
    const collapsed = clone(app.collapsed) && !clone(app.openDrawer);
    const mode = collapsed === true ? 'vertical' : 'inline';
    const scrollheight = app.height;
    const styling = {
      backgroundColor: customizedTheme.backgroundColor
    };
    const submenuColor = {
      color: '#fff'
    };
    return (
      <SidebarWrapper>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width="240"
          className="isomorphicSidebar"
          collapsedWidth={64}
          style={styling}
        >
          <Scrollbars
            renderView={this.renderView}
            style={{ height: scrollheight }}
          >
            <div className="vButtonDrawer">
              <div className="row" style={submenuColor}>
                <Logo collapsed={collapsed} onClick={toggleCollapsed} />
                {!collapsed && (
                  <span className="appName">
                    <IntlMessages id="appName" />
                  </span>
                )}
              </div>
            </div>
            <Menu
              theme="dark"
              mode={mode}
              openKeys={collapsed ? [] : app.openKeys}
              defaultSelectedKeys={
                app.current.length > 0 ? app.current : ['dashboard']
              }
              className="isoDashboardMenu"
            >
              {listMenu.map(menu => {
                return menu.subMenu ? (
                  <Menu.SubMenu
                    key={menu.key}
                    title={
                      <span style={submenuColor}>
                        {menu.anticon ? (
                          <Icon type={menu.anticon} />
                        ) : (
                          <i className={menu.icon} />
                        )}
                        <span className="nav-text">
                          <IntlMessages id={menu.text} />
                        </span>
                      </span>
                    }
                  >
                    {menu.subMenu.map(item => (
                      <Menu.Item key={item.key}>
                        <Link to={`${url}${item.url}`}>
                          <span className="isoMenuHolder" style={submenuColor}>
                            {menu.anticon ? (
                              <Icon type={menu.anticon} />
                            ) : (
                              <i className={menu.icon} />
                            )}
                            <span className="nav-text">
                              <IntlMessages id={item.text} />
                            </span>
                          </span>
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item key={menu.key}>
                    <Link to={`${url}${menu.url}`}>
                      <span className="isoMenuHolder" style={submenuColor}>
                        {menu.anticon ? (
                          <Icon type={menu.anticon} />
                        ) : (
                          <i className={menu.icon} />
                        )}
                        <span className="nav-text">
                          <IntlMessages id={menu.text} />
                        </span>
                      </span>
                    </Link>
                  </Menu.Item>
                );
              })}
              {/* {getDevSidebar(url, submenuColor)} */}
            </Menu>
          </Scrollbars>
          <div className="footerSider">
            <Button onClick={logout} className="btnLogout">
              <Icon type="ic-logout-admin" className="iconDrawer" />
              {!collapsed && (
                <span className="txtLogout">
                  <IntlMessages id={'topbar.logout'} />
                </span>
              )}
            </Button>
          </div>
        </Sider>
      </SidebarWrapper>
    );
  }
}

Sidebar.propTypes = {
  app: PropTypes.object,
  toggleCollapsed: PropTypes.func,
  logout: PropTypes.func
};

const { toggleCollapsed } = appActions;

export default connect(
  state => ({
    app: state.App
  }),
  dispatch => ({
    toggleCollapsed: () => {
      dispatch(toggleCollapsed());
    },
    logout: () => dispatch(logoutAction())
  })
)(Sidebar);
