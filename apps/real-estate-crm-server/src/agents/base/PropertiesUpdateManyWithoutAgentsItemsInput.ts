/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PropertiesWhereUniqueInput } from "../../properties/base/PropertiesWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PropertiesUpdateManyWithoutAgentsItemsInput {
  @Field(() => [PropertiesWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PropertiesWhereUniqueInput],
  })
  connect?: Array<PropertiesWhereUniqueInput>;

  @Field(() => [PropertiesWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PropertiesWhereUniqueInput],
  })
  disconnect?: Array<PropertiesWhereUniqueInput>;

  @Field(() => [PropertiesWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PropertiesWhereUniqueInput],
  })
  set?: Array<PropertiesWhereUniqueInput>;
}

export { PropertiesUpdateManyWithoutAgentsItemsInput as PropertiesUpdateManyWithoutAgentsItemsInput };
