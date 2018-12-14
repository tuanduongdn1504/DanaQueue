import React, { Component } from 'react';
import { Popover, Badge, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IntlMessages from '../../utility/IntlMessages';
import TopbarDropdownWrapper from './topbarDropdown.style';
import Reference from '../../../containers/rest/Reference';
import MediaField from '../MediaField';
import { defineDateFromNow } from '../../../utils/textUtils';
import EmptyData from '../EmptyData';

class TopbarNotification extends Component {
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
    const { customizedTheme, unreadTotal, notifications } = this.props;
    const content = (
      <TopbarDropdownWrapper className="topbarNotification">
        <div className="isoDropdownHeader">
          <h3>
            <IntlMessages id="sidebar.notifications" />
          </h3>
        </div>
        <div className="isoDropdownBody">
          {notifications && notifications.length === 0 && <EmptyData />}
          {notifications &&
            notifications.map(notification => (
              <Link to="/" className="isoDropdownListItem" key={notification.id}>
                <Reference
                  record={notification}
                  source="sentCase.caseTypeSlug"
                  reference="caseTypes"
                  mappedBy="slug"
                >
                  <MediaField
                    mediaIcon="icon.name"
                    mediaBgColor="icon.backgroundColor"
                    content={notification.message.vi}
                  >
                    <small style={{ color: '#a0a2a6' }}>
                      <Icon
                        type="clock-circle"
                        theme="outlined"
                        style={{ fontSize: 12, marginRight: 5 }}
                      />
                      {defineDateFromNow(notification.createdAt)}
                    </small>
                  </MediaField>
                </Reference>
              </Link>
            ))}
        </div>
        <Link to="/notifications/me" className="isoViewAllBtn">
          <IntlMessages id="topbar.viewAll" />
        </Link>
      </TopbarDropdownWrapper>
    );
    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement="bottomLeft"
      >
        <Badge count={unreadTotal}>
          <div className="isoIconWrapper">
            <i className="ion-android-notifications" style={{ color: customizedTheme.textColor }} />
          </div>
        </Badge>
      </Popover>
    );
  }
}

TopbarNotification.propTypes = {
  customizedTheme: PropTypes.object,
  notifications: PropTypes.array,
  unreadTotal: PropTypes.number,
};

export default TopbarNotification;
