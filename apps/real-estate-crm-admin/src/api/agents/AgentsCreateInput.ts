import { PropertiesCreateNestedManyWithoutAgentsItemsInput } from "./PropertiesCreateNestedManyWithoutAgentsItemsInput";
import { AppointmentsCreateNestedManyWithoutAgentsItemsInput } from "./AppointmentsCreateNestedManyWithoutAgentsItemsInput";

export type AgentsCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: number | null;
  propertiesItems?: PropertiesCreateNestedManyWithoutAgentsItemsInput;
  appointmentsItems?: AppointmentsCreateNestedManyWithoutAgentsItemsInput;
};
