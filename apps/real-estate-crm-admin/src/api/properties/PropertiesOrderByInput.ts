import { SortOrder } from "../../util/SortOrder";

export type PropertiesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  address?: SortOrder;
  price?: SortOrder;
  description?: SortOrder;
  agentId?: SortOrder;
};
