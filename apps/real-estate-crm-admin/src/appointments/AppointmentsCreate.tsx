import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ClientsTitle } from "../clients/ClientsTitle";
import { AgentsTitle } from "../agents/AgentsTitle";
import { PropertiesTitle } from "../properties/PropertiesTitle";

export const AppointmentsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <DateTimeInput label="time" source="time" />
        <ReferenceInput source="client.id" reference="Clients" label="Client">
          <SelectInput optionText={ClientsTitle} />
        </ReferenceInput>
        <ReferenceInput source="agent.id" reference="Agents" label="Agent">
          <SelectInput optionText={AgentsTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="property.id"
          reference="Properties"
          label="Property"
        >
          <SelectInput optionText={PropertiesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
