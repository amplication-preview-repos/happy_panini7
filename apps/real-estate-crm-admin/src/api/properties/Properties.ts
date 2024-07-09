import { Agents } from "../agents/Agents";
import { Appointments } from "../appointments/Appointments";

export type Properties = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  price: number | null;
  description: string | null;
  agent?: Agents | null;
  appointmentsItems?: Array<Appointments>;
};
