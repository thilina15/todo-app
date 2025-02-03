import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../models/task.model';

@Injectable()
export class TaskRepo {
    constructor(
        @InjectRepository(Task)
        private readonly repo: Repository<Task>,
    ) { }

    async createTask(title: string, description: string): Promise<Task> {
        const task = this.repo.create({ title, description });
        return this.repo.save(task);
    }

    async getRecentTasks(): Promise<Task[]> {
        return this.repo.find({
            where: { done: false },
            order: { createdAt: 'DESC' },
            take: 5,
        });
    }

    async markTaskAsDone(id: number): Promise<void> {
        await this.repo.update(id, { done: true });
    }
}
