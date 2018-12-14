import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { retrieveList } from '../../../redux/rest/actions';
import { getAddress } from '../../../redux/address/selectors';
import FormCascader from '../../form/FormCascader';
import { stringToSlug } from '../../../utils/textUtils';
import { selectAddress as selectAddressAction } from '../../../redux/address/actions';
import { getRecordData } from '../../../helpers/Tools';

class AddressSelect extends Component {
  componentDidMount() {
    const { record } = this.props;
    this.props.filter('addressLevel1s', { limit: 100, skip: 0 });
    const addressSlug1 = getRecordData(record, 'addressLine1Slug');
    const addressSlug2 = getRecordData(record, 'addressLine2Slug');
    const addressSlug3 = getRecordData(record, 'addressLine3Slug');
    if (addressSlug1) {
      this.onChangeAddress([addressSlug1], null, addressSlug1);
    }
    if (addressSlug2) {
      this.onChangeAddress([addressSlug1, addressSlug2], null, addressSlug2);
    }
    if (addressSlug3) {
      this.onChangeAddress([addressSlug1, addressSlug2, addressSlug3], null, '');
    }
  }

  componentDidUpdate(prevProps) {
    if (
      !getRecordData(this.props.record, 'addressLine1Slug') &&
      getRecordData(prevProps.record, 'addressLine1Slug')
    ) {
      this.onChangeAddress([]);
    }

    if (prevProps.record !== this.props.record) {
      const addressSlug1 = getRecordData(this.props.record, 'addressLine1Slug');
      const addressSlug2 = getRecordData(this.props.record, 'addressLine2Slug');
      const addressSlug3 = getRecordData(this.props.record, 'addressLine3Slug');
      if (addressSlug1) {
        this.onChangeAddress([addressSlug1], null, addressSlug1);
      }
      if (addressSlug2) {
        this.onChangeAddress([addressSlug1, addressSlug2], null, addressSlug2);
      }
      if (addressSlug3) {
        this.onChangeAddress([addressSlug1, addressSlug2, addressSlug3], null, '');
      }
    }
  }

  componentWillUnmount() {
    this.onChangeAddress([]);
  }

  onSearchAddressLevel = resource => value => {
    this.props.filter(resource, {
      limit: 100,
      offset: 0,
      filter: value ? { parentSlug: stringToSlug(value) } : {},
    });
  };

  onChangeAddress = (value, selectedOptions, slug) => {
    const { selectedAddress } = this.props;
    selectedAddress(value);
    const length = value.length;
    switch (length) {
      case 1:
        this.onSearchAddressLevel('addressLevel2s')(
          (selectedOptions && selectedOptions[0].slug) || slug,
        );
        break;
      case 2:
        this.onSearchAddressLevel('addressLevel3s')(
          (selectedOptions && selectedOptions[1].slug) || slug,
        );
        break;
      default:
    }
  };

  loadDataAddress = selectedOptions => {
    const { selectedAddress } = this.props;
    selectedAddress(selectedOptions.map(data => data.slug));
  };

  filterAddress = (inputValue, path) => {
    this.onSearchAddressLevel();
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  };

  render() {
    const { address, addressSelected } = this.props;
    return (
      <FormCascader
        {...this.props}
        options={address}
        loadData={this.loadDataAddress}
        onChange={this.onChangeAddress}
        defaultValue={addressSelected}
        fieldNames={{ label: 'name', value: 'slug', children: 'children' }}
        showSearch={this.filterAddress}
        style={{ width: '100%' }}
      />
    );
  }
}

AddressSelect.propTypes = {
  address: PropTypes.array,
  filter: PropTypes.func,
  selectedAddress: PropTypes.func,
  addressSelected: PropTypes.array,
  record: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    address: getAddress(state),
    addressSelected: state.address.addressSelected,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    filter: (resource, data) => dispatch(retrieveList(resource, data)),
    selectedAddress: data => dispatch(selectAddressAction(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressSelect);
