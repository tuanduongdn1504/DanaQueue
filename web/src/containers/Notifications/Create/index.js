import React from 'react';
import RestCreate from '../../rest/Create';
import RestFormInput from '../../../components/RestInput/RestFormInput';

const CreateNotifications = props => (
  <RestCreate {...props} showModal resource="notifications">
    <RestFormInput source="title" title="title" placeholder="title" />
    <RestFormInput
      source="content"
      title="content"
      placeholder="content"
      textArea
    />
  </RestCreate>
);

export default CreateNotifications;
