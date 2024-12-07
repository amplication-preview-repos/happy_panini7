import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";
import { AgentsWhereUniqueInput } from "../agents/AgentsWhereUniqueInput";
import { PropertiesWhereUniqueInput } from "../properties/PropertiesWhereUniqueInput";

export type AppointmentsWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  time?: DateTimeNullableFilter;
  client?: ClientsWhereUniqueInput;
  agent?: AgentsWhereUniqueInput;
  property?: PropertiesWhereUniqueInput;
};
