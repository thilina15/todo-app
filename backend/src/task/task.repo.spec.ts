import { Test, TestingModule } from '@nestjs/testing';
import { TaskRepo } from './task.repo';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../models/task.model';

describe('TaskRepo', () => {
  let taskRepo: TaskRepo;
  let repo: Repository<Task>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskRepo,
        {
          provide: getRepositoryToken(Task),
          useClass: Repository, // Mock TypeORM repository
        },
      ],
    }).compile();

    taskRepo = module.get<TaskRepo>(TaskRepo);
    repo = module.get<Repository<Task>>(getRepositoryToken(Task));
  });

  it('should be defined', () => {
    expect(taskRepo).toBeDefined();
  });
});
