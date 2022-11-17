import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsAlpha } from 'class-validator';

@InputType()
export class CreateProjectInput {

  @Field(() => String)
  @IsAlpha()
  name: string;

  @Field(() => Number)
  @IsNumber()
  code: number;
}
