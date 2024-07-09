import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AgentsTitle } from "../agents/AgentsTitle";
import { AppointmentsTitle } from "../appointments/AppointmentsTitle";

export const PropertiesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="address" source="address" />
        <NumberInput label="price" source="price" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="agent.id" reference="Agents" label="Agent">
          <SelectInput optionText={AgentsTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="appointmentsItems"
          reference="Appointments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
