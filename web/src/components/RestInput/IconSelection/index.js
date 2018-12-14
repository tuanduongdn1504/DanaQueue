import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { getIconCategories } from '../../../redux/config/actions';
import RestSelect from '../../../components/RestInput/RestSelect';
import { OptionWrapper } from './style';

class IconSelection extends Component {
  componentDidMount() {
    this.props.getIconCategories();
  }
  render() {
    const { record, iconCategories, source } = this.props;
    return record ? (
      <RestSelect
        {...this.props}
        resourceData={iconCategories}
        source={source}
        placeholder="form.selectIcon"
      >
        <OptionIcon />
      </RestSelect>
    ) : (
      <Spin />
    );
  }
}

const OptionIcon = ({ record }) => {
  return (
    <OptionWrapper>
      <i className={`anticon-${record}`} />
      {` ${record}`}
    </OptionWrapper>
  );
};

OptionIcon.propTypes = {
  record: PropTypes.string,
};

IconSelection.propTypes = {
  record: PropTypes.object,
  getIconCategories: PropTypes.func,
  iconCategories: PropTypes.array,
  source: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    iconCategories: state.config.iconCategories,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getIconCategories: () => dispatch(getIconCategories()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { withRef: true },
)(IconSelection);
