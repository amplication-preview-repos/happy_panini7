import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AppointmentsListRelationFilter } from "../appointments/AppointmentsListRelationFilter";

export type ClientsWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: IntNullableFilter;
  lastName?: StringNullableFilter;
  appointmentsItems?: AppointmentsListRelationFilter;
};
