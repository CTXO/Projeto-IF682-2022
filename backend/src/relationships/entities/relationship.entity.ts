import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Relationship {
  @Field(() => [String], { description: 'Relationship e-mails' })
  contacts: string[];

  @Field(() => Boolean, { description: 'If was blocked or not' })
  blocked: boolean;
}
