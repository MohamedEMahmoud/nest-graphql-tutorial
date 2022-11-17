import { Project } from './../../project/entities/project.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsString, IsAlpha, IsOptional } from 'class-validator';

@Entity()
@ObjectType()
export class Employee {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => String)
    @IsAlpha()
    @Column()
    firstName: string;

    @Field(() => String)
    @IsAlpha()
    @Column()
    lastName: string;

    @Field(() => String)
    @IsString()
    @Column()
    designation: string;

    @Field(() => String, { nullable: true })
    @IsOptional()
    @IsString()
    @Column({ nullable: true })
    city?: string;

    @ManyToOne(() => Project, project => project.employees)
    @Field(() => Project)
    project: Project;

    @Field(() => String)
    @Column()
    projectId: string;
}