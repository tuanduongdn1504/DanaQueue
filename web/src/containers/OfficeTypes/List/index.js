import React from 'react';
import Label from '../../../components/RestField/Label';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import RestList from '../../rest/List';
import BooleanField from '../../../components/RestField/BooleanField';

const ListOfficeTypes = props => (
  <RestList {...props} hasCreate resource="officeTypes">
    <Label source="name" title="name" />
    <BooleanField
      source="isDisabled"
      title="isDisabled"
      align="center"
      falseColor="#6a69ef"
      trueColor="#f50"
    />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </RestList>
);

export default ListOfficeTypes;
