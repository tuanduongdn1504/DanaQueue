import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover, Avatar } from 'antd';
import IntlMessages from '../../utility/IntlMessages';
import userpic from '../../../assets/images/user.png';
import TopbarDropdownWrapper from './topbarDropdown.style';
import Text from '../Text';
import { MEMBER_ROLES } from '../../../config/constants';

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false,
    };
  }

  hide() {
    this.setState({ visible: false });
  }

  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { userInfo } = this.props;
    const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
        <a href="/profile" className="isoDropdownLink">
          <IntlMessages id="themeSwitcher.settings" />
        </a>
        {/* <a className="isoDropdownLink">
          <IntlMessages id="sidebar.feedback" />
        </a>
        <a className="isoDropdownLink">
          <IntlMessages id="topbar.help" />
        </a> */}
        <div role="button" onClick={this.props.logout} className="isoDropdownLink">
          <IntlMessages id="topbar.logout" />
        </div>
      </TopbarDropdownWrapper>
    );
    if (!userInfo) return null;

    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement="bottomLeft"
      >
        <div className="isoImgWrapper">
          <div className="isoUserInfoWrapper">
            <Text type="body3" fontWeight="medium" align="right">
              {userInfo ? userInfo.fullName : ''}
            </Text>
            <Text type="small" align="right">
              {getUserRole(userInfo.roleId)}
            </Text>
          </div>
          <Avatar alt="user" size={40} src={userInfo.avatar || userpic} />
          <span className="userActivity online" />
        </div>
      </Popover>
    );
  }
}

const getUserRole = role => {
  const userRole = MEMBER_ROLES.find(data => data.id === role);
  return userRole ? userRole.text.vi : '';
};

TopbarUser.propTypes = {
  // customizedTheme: PropTypes.object,
  logout: PropTypes.func,
  userInfo: PropTypes.object,
};

export default TopbarUser;
