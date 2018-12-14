import React from 'react';
import Label from '../../../components/RestField/Label';

import RestList from '../../rest/List';

const ListNotifications = props => (
  <RestList {...props} hasCreate resource="notifications">
    <Label source="title" title="title" />
    <Label source="content" title="content" />
  </RestList>
);

export default ListNotifications;
