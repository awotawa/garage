import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCarInput {
  @Field()
  manufacturer: string;

  @Field()
  model: string;
}
