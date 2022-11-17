import { ProjectModule } from './../project/project.module';
import { Employee } from './entities/employee.entities';
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]), ProjectModule],
  providers: [EmployeeService, EmployeeResolver]
})
export class EmployeeModule { }
