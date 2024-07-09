import { Clients } from "../clients/Clients";
import { Agents } from "../agents/Agents";
import { Properties } from "../properties/Properties";

export type Appointments = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  time: Date | null;
  client?: Clients | null;
  agent?: Agents | null;
  property?: Properties | null;
};
