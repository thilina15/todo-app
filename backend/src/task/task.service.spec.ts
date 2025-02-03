import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { TaskRepo } from './task.repo';
import { BadRequestException } from '@nestjs/common';
import { Task } from '../models/task.model';

describe('TaskService', () => {
  let service: TaskService;
  let taskRepo: TaskRepo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        {
          provide: TaskRepo,
          useValue: {
            createTask: jest.fn(),
            getRecentTasks: jest.fn(),
            markTaskAsDone: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
    taskRepo = module.get<TaskRepo>(TaskRepo);
  });

  it('should create a task', async () => {
    const task = new Task();
    task.id = 1;
    task.title = 'Test Task';
    task.description = 'Test Desc';
    jest.spyOn(taskRepo, 'createTask').mockResolvedValue(task);

    expect(await service.addTask('Test Task', 'Test Desc')).toEqual(task);
  });

  it('should throw error when adding task without title', async () => {
    await expect(service.addTask('', 'Test Desc')).rejects.toThrow(BadRequestException);
  });

  it('should return recent 5 tasks', async () => {
    let tasks = [];
    const task = new Task();
    task.id = 1;
    task.title = 'Test';
    task.description = 'Desc';
    task.done = false;
    tasks.push(task);
    jest.spyOn(taskRepo, 'getRecentTasks').mockResolvedValue(tasks);

    expect(await service.getRecentTasks()).toEqual(tasks);
  });

  it('should mark task as done', async () => {
    jest.spyOn(taskRepo, 'markTaskAsDone').mockResolvedValue(undefined);
    expect(await service.completeTask(1)).toEqual({ message: 'Task marked as done' });
  });
});
