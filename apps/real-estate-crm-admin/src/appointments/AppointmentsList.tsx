import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLIENTS_TITLE_FIELD } from "../clients/ClientsTitle";
import { AGENTS_TITLE_FIELD } from "../agents/AgentsTitle";
import { PROPERTIES_TITLE_FIELD } from "../properties/PropertiesTitle";

export const AppointmentsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AppointmentsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="date" source="date" />
        <TextField label="time" source="time" />
        <ReferenceField label="Client" source="clients.id" reference="Clients">
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
    </List>
  );
};
