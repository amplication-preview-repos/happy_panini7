import { AppointmentsCreateNestedManyWithoutClientsItemsInput } from "./AppointmentsCreateNestedManyWithoutClientsItemsInput";

export type ClientsCreateInput = {
  firstName?: string | null;
  email?: string | null;
  phone?: number | null;
  lastName?: string | null;
  appointmentsItems?: AppointmentsCreateNestedManyWithoutClientsItemsInput;
};
