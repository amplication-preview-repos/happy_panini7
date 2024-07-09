import { PropertiesUpdateManyWithoutAgentsItemsInput } from "./PropertiesUpdateManyWithoutAgentsItemsInput";
import { AppointmentsUpdateManyWithoutAgentsItemsInput } from "./AppointmentsUpdateManyWithoutAgentsItemsInput";

export type AgentsUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: number | null;
  propertiesItems?: PropertiesUpdateManyWithoutAgentsItemsInput;
  appointmentsItems?: AppointmentsUpdateManyWithoutAgentsItemsInput;
};
