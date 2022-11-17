import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entities';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CreateEmployeeInputDto } from './dtos/create-employee.input.dto';
import { Project } from '../project/entities/project.entity';

@Resolver(() => Employee)
export class EmployeeResolver {

    constructor(private readonly employeeService: EmployeeService) { }

    @Query(() => [Employee], { name: 'GetAllEmployees' })
    getEmployees() {
        return this.employeeService.findAll();
    }

    @Mutation(() => Employee, { name: 'CreateEmployee' })
    createEmployee(@Args('employee') employee: CreateEmployeeInputDto) {
        return this.employeeService.create(employee);
    }

    @ResolveField(() => Project)
    project(@Parent() employee: Employee) {
        return this.employeeService.getProject(employee.projectId);
    }
}
