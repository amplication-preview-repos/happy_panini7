import { SortOrder } from "../../util/SortOrder";

export type AppointmentsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  time?: SortOrder;
  clientId?: SortOrder;
  agentId?: SortOrder;
  propertyId?: SortOrder;
};
