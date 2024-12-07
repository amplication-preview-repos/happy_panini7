/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { PropertiesUpdateManyWithoutAgentsItemsInput } from "./PropertiesUpdateManyWithoutAgentsItemsInput";
import { Type } from "class-transformer";
import { AppointmentsUpdateManyWithoutAgentsItemsInput } from "./AppointmentsUpdateManyWithoutAgentsItemsInput";

@InputType()
class AgentsUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  phone?: number | null;

  @ApiProperty({
    required: false,
    type: () => PropertiesUpdateManyWithoutAgentsItemsInput,
  })
  @ValidateNested()
  @Type(() => PropertiesUpdateManyWithoutAgentsItemsInput)
  @IsOptional()
  @Field(() => PropertiesUpdateManyWithoutAgentsItemsInput, {
    nullable: true,
  })
  propertiesItems?: PropertiesUpdateManyWithoutAgentsItemsInput;

  @ApiProperty({
    required: false,
    type: () => AppointmentsUpdateManyWithoutAgentsItemsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentsUpdateManyWithoutAgentsItemsInput)
  @IsOptional()
  @Field(() => AppointmentsUpdateManyWithoutAgentsItemsInput, {
    nullable: true,
  })
  appointmentsItems?: AppointmentsUpdateManyWithoutAgentsItemsInput;
}

export { AgentsUpdateInput as AgentsUpdateInput };
