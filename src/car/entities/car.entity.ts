import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Car {
  @Field(() => Int)
  id: number;

  @Field()
  manufacturer: string;

  @Field()
  model: string;
}
