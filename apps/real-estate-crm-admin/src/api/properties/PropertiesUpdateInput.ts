import { AgentsWhereUniqueInput } from "../agents/AgentsWhereUniqueInput";
import { AppointmentsUpdateManyWithoutPropertiesItemsInput } from "./AppointmentsUpdateManyWithoutPropertiesItemsInput";

export type PropertiesUpdateInput = {
  name?: string | null;
  address?: string | null;
  price?: number | null;
  description?: string | null;
  agent?: AgentsWhereUniqueInput | null;
  appointmentsItems?: AppointmentsUpdateManyWithoutPropertiesItemsInput;
};
