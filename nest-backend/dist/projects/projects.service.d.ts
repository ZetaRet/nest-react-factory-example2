import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { DataSource } from 'typeorm';
import { Project } from './entities/project.entity';
export declare class ProjectsService {
    private dataSource;
    constructor(dataSource: DataSource);
    create(createProjectDto: CreateProjectDto): Promise<{
        id: any;
    }>;
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
    update(id: number, updateProjectDto: UpdateProjectDto): Promise<{
        success: boolean;
    }>;
}
