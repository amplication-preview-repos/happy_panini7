import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";
import { AgentsWhereUniqueInput } from "../agents/AgentsWhereUniqueInput";
import { PropertiesWhereUniqueInput } from "../properties/PropertiesWhereUniqueInput";

export type AppointmentsUpdateInput = {
  date?: Date | null;
  time?: Date | null;
  client?: ClientsWhereUniqueInput | null;
  agent?: AgentsWhereUniqueInput | null;
  property?: PropertiesWhereUniqueInput | null;
};
