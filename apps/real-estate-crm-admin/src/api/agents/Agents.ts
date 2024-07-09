import { Properties } from "../properties/Properties";
import { Appointments } from "../appointments/Appointments";

export type Agents = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: number | null;
  propertiesItems?: Array<Properties>;
  appointmentsItems?: Array<Appointments>;
};
