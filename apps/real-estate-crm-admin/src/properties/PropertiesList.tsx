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
import { AGENTS_TITLE_FIELD } from "../agents/AgentsTitle";

export const PropertiesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PropertiesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
