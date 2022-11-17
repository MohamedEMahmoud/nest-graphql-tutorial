import { Employee } from './entities/employee.entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeInputDto } from './dtos/create-employee.input.dto';
import { ProjectService } from '../project/project.service';
import { Project } from 'src/project/entities/project.entity';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(Employee) private readonly employeeRepo: Repository<Employee>,
        private readonly projectService: ProjectService
    ) { };

    async create(employee: CreateEmployeeInputDto) {
        const emp = this.employeeRepo.create(employee);
        return this.employeeRepo.save(emp);
    }

    findAll(): Promise<Employee[]> {
        return this.employeeRepo.find();
    }

    getProject(id: string): Promise<Project> {
        return this.projectService.findOne(id);

    }




}
