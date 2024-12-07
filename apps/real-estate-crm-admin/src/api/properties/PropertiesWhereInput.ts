import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AgentsWhereUniqueInput } from "../agents/AgentsWhereUniqueInput";
import { AppointmentsListRelationFilter } from "../appointments/AppointmentsListRelationFilter";

export type PropertiesWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  price?: FloatNullableFilter;
  description?: StringNullableFilter;
  agent?: AgentsWhereUniqueInput;
  appointmentsItems?: AppointmentsListRelationFilter;
};
