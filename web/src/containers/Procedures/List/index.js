import React from 'react';
import Label from '../../../components/RestField/Label';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';
import RestList from '../../rest/List';
import BooleanField from '../../../components/RestField/BooleanField/index';

const ListProcedures = props => (
  <RestList {...props} hasCreate resource="procedures">
    <Label source="name" title="name" />
    <Label source="officeId" title="officeId" />
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

export default ListProcedures;
