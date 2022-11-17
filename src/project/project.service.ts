import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectService {
  constructor(@InjectRepository(Project) private readonly projectRepo: Repository<Project>) { }

  create(createProjectInput: CreateProjectInput) {
    const project = this.projectRepo.create(createProjectInput);
    return this.projectRepo.save(project);
  }

  findAll() {
    return this.projectRepo.find({
      relations: ["employees"]
    });
  }

  findOne(id: string) {
    return this.projectRepo.findOne({ where: { id }, relations: ["employees"] });
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    return this.projectRepo.update(id, updateProjectInput);
  }

  async remove(id: string) {
    const project = await this.findOne(id);
    return this.projectRepo.remove(project);
  }
}
