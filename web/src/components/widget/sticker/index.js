import React, { Component } from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { StickerWidgetWrapper } from './style';

export default class StickerWidget extends Component {
  state = {
    choosedItem: 'Tất cả',
  };

  render() {
    const {
      fontColor,
      width,
      icon,
      number,
      text,
      menu,
      handleClick,
      link,
      numberSize,
      iconSize,
      labelSize,
      hasViewDetail,
    } = this.props;

    const textColor = {
      color: fontColor,
    };
    const widgetStyle = {
      width,
    };
    const iconStyle = {
      color: '#fff',
    };
    const overlay = (
      <Menu
        onClick={e => {
          handleClick(e.key);
          this.setState({ choosedItem: e.item.props.children });
        }}
      >
        {menu && menu.map(item => <Menu.Item key={item.Id}>{item.Name}</Menu.Item>)}
        <Menu.Item key="all">Tất cả</Menu.Item>
      </Menu>
    );
    return (
      <StickerWidgetWrapper>
        <div className="top-content isoStickerWidget" style={widgetStyle}>
          <div className="isoContentWrapper">
            <h3 className="isoStatNumber" style={{ ...textColor, fontSize: numberSize || 30 }}>
              {number}
            </h3>
            <span className="isoLabel" style={{ fontSize: labelSize || 15 }}>
              {text}
            </span>
          </div>
          <div
            className="isoIconWrapper"
            style={{ background: !hasViewDetail ? '#fff' : fontColor }}
          >
            {menu ? (
              <p>
                <span>{this.state.choosedItem}</span>
                <Dropdown overlay={overlay}>
                  <i className={icon} style={textColor} />
                </Dropdown>
              </p>
            ) : (
              <p>
                <Icon
                  type={icon}
                  style={{
                    ...iconStyle,
                    fontSize: iconSize || 35,
                    color: hasViewDetail ? '#fff' : fontColor,
                  }}
                />
              </p>
            )}
          </div>
        </div>
        {hasViewDetail && (
          <Link to={link || ''} className="link">
            <div className="bottom-content">
              <div className="linkText">Xem chi tiết</div>{' '}
              <div>
                <Icon type="double-right" className="linkText" />
              </div>{' '}
            </div>
          </Link>
        )}
      </StickerWidgetWrapper>
    );
  }
}

StickerWidget.propTypes = {
  fontColor: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  text: PropTypes.string,
  menu: PropTypes.array,
  handleClick: PropTypes.func,
  link: PropTypes.string,
  hasViewDetail: PropTypes.bool,
  numberSize: PropTypes.number,
  iconSize: PropTypes.number,
  labelSize: PropTypes.number,
};
