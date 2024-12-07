import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CLIENTS_TITLE_FIELD } from "../clients/ClientsTitle";
import { AGENTS_TITLE_FIELD } from "../agents/AgentsTitle";
import { PROPERTIES_TITLE_FIELD } from "./PropertiesTitle";

export const PropertiesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="address" source="address" />
        <TextField label="price" source="price" />
        <TextField label="description" source="description" />
        <ReferenceField label="Agent" source="agents.id" reference="Agents">
          <TextField source={AGENTS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Appointments"
          target="propertyId"
          label="AppointmentsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="date" source="date" />
            <TextField label="time" source="time" />
            <ReferenceField
              label="Client"
              source="clients.id"
              reference="Clients"
            >
              <TextField source={CLIENTS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Agent" source="agents.id" reference="Agents">
              <TextField source={AGENTS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Property"
              source="properties.id"
              reference="Properties"
            >
              <TextField source={PROPERTIES_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
