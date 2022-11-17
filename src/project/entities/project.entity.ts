import { Employee } from './../../employee/entities/employee.entities';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { IsNumber, IsAlpha } from 'class-validator';

@Entity()
@ObjectType()
export class Project {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  @IsAlpha()
  name: string;

  @Field(() => Number)
  @Column()
  @IsNumber()
  code: number;

  @OneToMany(() => Employee, employee => employee.project)
  @Field(() => [Employee], {
    nullable: true
  })
  employees: Employee[];
}
