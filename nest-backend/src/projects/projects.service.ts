import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { DataSource } from 'typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(private dataSource: DataSource) {}

  async create(createProjectDto: CreateProjectDto) {
    const res = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Project)
      .values({ ...createProjectDto })
      .execute();

    return { id: res.raw.insertId };
  }

  findAll() {
    return this.dataSource.createQueryBuilder().select('*').from(Project, '*').getMany();
  }

  findOne(id: number) {
    return this.dataSource.createQueryBuilder().select('*').from(Project, '*').where('id = :id', { id }).getOne();
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const res = await this.dataSource
      .createQueryBuilder()
      .update(Project)
      .set({ ...updateProjectDto })
      .where('id = :id', { id })
      .execute();

    return { success: res.affected ? true : false };
  }
}
