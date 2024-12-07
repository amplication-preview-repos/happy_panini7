import { AgentsWhereUniqueInput } from "../agents/AgentsWhereUniqueInput";
import { AppointmentsCreateNestedManyWithoutPropertiesItemsInput } from "./AppointmentsCreateNestedManyWithoutPropertiesItemsInput";

export type PropertiesCreateInput = {
  name?: string | null;
  address?: string | null;
  price?: number | null;
  description?: string | null;
  agent?: AgentsWhereUniqueInput | null;
  appointmentsItems?: AppointmentsCreateNestedManyWithoutPropertiesItemsInput;
};
