import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Label from '../../../components/RestField/Label';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import RestList from '../../rest/List';
import { BookingPersonInfo } from '../components/BookingPersonInfo';
import { formatDateTime } from '../../../utils/textUtils';
import RestTag from '../../../components/RestField/RestTag';

const ListBookings = props => (
  <RestList hasCreate resource="bookings" {...props}>
    <Label
      source="fullName"
      title="orderer"
      render={(value, record) => (
        <BookingPersonInfo
          items={[
            {
              title: 'name',
              valueProps: 'fullName',
              key: '1',
              isLink: true,
              userIdProps: 'userId'
            },
            { title: 'phoneNumber', valueProps: 'phoneNumber', key: '2' },
            { title: 'email', valueProps: 'email', key: '3' }
          ]}
          record={record}
        />
      )}
    />
    <Label source="numerical" title="numerical" align="center" />
    {props.isHome ? (
      <Label source="timeStamp" title="time" />
    ) : (
      <Label
        source="time"
        title="time"
        render={value => formatDateTime(value)}
      />
    )}
    <Label
      source="procedure"
      title="procedures"
      width={300}
      render={(value, record) => (
        <Link to={`/procedures/${record.procedureId}/edit`}>{value}</Link>
      )}
    />
    <Label
      source="office"
      title="offices"
      render={(value, record) => (
        <Link to={`/procedures/${record.officeId}/edit`}>
          <RestTag color="#6a69ef" customText={value} />
        </Link>
      )}
    />

    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </RestList>
);
ListBookings.propTypes = {
  isHome: PropTypes.bool
};

export default ListBookings;
