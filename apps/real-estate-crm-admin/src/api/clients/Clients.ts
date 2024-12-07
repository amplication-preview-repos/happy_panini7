import { Appointments } from "../appointments/Appointments";

export type Clients = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  email: string | null;
  phone: number | null;
  lastName: string | null;
  appointmentsItems?: Array<Appointments>;
};
