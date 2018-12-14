import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { BoxTitle, BoxSubTitle } from './style';
import IntlMessages from '../IntlMessages';

const BoxTitleUI = props => {
  return (
    <div style={{ marginBottom: 20 }}>
      {props.title ? (
        <BoxTitle className="isoBoxTitle">
          <div>
            {props.icon && <Icon type={props.icon} />} <IntlMessages id={props.title} />{' '}
          </div>
          {props.onClickExtraButton && (
            <Icon
              onClick={props.onClickExtraButton}
              size={24}
              type="ic-edit-1"
              theme="outlined"
              className="buttonEdit"
            />
          )}
        </BoxTitle>
      ) : (
        ''
      )}
      {props.subtitle ? (
        <BoxSubTitle className="isoBoxSubTitle"> {props.subtitle} </BoxSubTitle>
      ) : (
        ''
      )}
    </div>
  );
};
BoxTitleUI.propTypes = {
  title: PropTypes.any,
  icon: PropTypes.string,
  subtitle: PropTypes.string,
  onClickExtraButton: PropTypes.func,
};

export default BoxTitleUI;
