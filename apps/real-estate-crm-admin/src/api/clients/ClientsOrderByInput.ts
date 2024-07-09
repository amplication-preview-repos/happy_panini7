import { SortOrder } from "../../util/SortOrder";

export type ClientsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
  lastName?: SortOrder;
};
