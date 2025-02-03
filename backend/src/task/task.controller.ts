import { Controller, Post, Get, Body, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    async addTask(
        @Body('title') title: string,
        @Body('description') description: string,
    ) {
        return this.taskService.addTask(title, description);
    }

    @Get()
    async getRecentTasks() {
        return this.taskService.getRecentTasks();
    }

    @Patch(':id/done')
    async completeTask(@Param('id', ParseIntPipe) id: number) {
        return this.taskService.completeTask(id);
    }
}
