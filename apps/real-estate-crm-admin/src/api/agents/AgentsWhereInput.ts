import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PropertiesListRelationFilter } from "../properties/PropertiesListRelationFilter";
import { AppointmentsListRelationFilter } from "../appointments/AppointmentsListRelationFilter";

export type AgentsWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: IntNullableFilter;
  propertiesItems?: PropertiesListRelationFilter;
  appointmentsItems?: AppointmentsListRelationFilter;
};
