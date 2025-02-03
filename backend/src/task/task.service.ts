import { BadRequestException, Injectable } from '@nestjs/common';
import { TaskRepo } from './task.repo'

@Injectable()
export class TaskService {
    constructor(
        private readonly taskRepo: TaskRepo,
    ) { }

    async addTask(title: string, description: string): Promise<any> {
        if (!title || !description) {
            throw new BadRequestException('Title and description are required');
        }
        return this.taskRepo.createTask(title, description);
    }

    async getRecentTasks(): Promise<any> {
        return this.taskRepo.getRecentTasks();
    }

    async completeTask(id: number): Promise<any> {
        await this.taskRepo.markTaskAsDone(id);
        return { message: 'Task marked as done' };
    }
}
