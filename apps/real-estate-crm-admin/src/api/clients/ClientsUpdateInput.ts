import { AppointmentsUpdateManyWithoutClientsItemsInput } from "./AppointmentsUpdateManyWithoutClientsItemsInput";

export type ClientsUpdateInput = {
  firstName?: string | null;
  email?: string | null;
  phone?: number | null;
  lastName?: string | null;
  appointmentsItems?: AppointmentsUpdateManyWithoutClientsItemsInput;
};
