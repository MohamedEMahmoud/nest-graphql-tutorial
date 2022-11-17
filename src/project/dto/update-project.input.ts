import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsAlpha, IsOptional } from 'class-validator';

@InputType()
export class UpdateProjectInput {

  @Field()
  id: string;

  @IsOptional()
  @Field(() => String)
  @IsAlpha()
  name: string;

  @IsOptional()
  @Field(() => Number)
  @IsNumber()
  code: number;
}
