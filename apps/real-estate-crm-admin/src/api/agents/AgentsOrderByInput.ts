import { SortOrder } from "../../util/SortOrder";

export type AgentsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
};
