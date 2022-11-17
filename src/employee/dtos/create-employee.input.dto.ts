import { Field, Int, InputType } from '@nestjs/graphql';
import { IsString, IsAlpha, IsOptional } from 'class-validator';

@InputType()
export class CreateEmployeeInputDto {

    @Field(() => String)
    @IsAlpha()
    firstName: string;

    @Field(() => String)
    @IsAlpha()
    lastName: string;

    @Field(() => String)
    @IsString()
    designation: string;

    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsString()
    city?: string;

    @Field(() => String)
    @IsString()
    projectId: string;
}