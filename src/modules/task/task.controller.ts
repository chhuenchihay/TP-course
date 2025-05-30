import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  getAllTask() {
    return this.taskService.getAllTask();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(id);

  }
  @Post()
  createTask(@Body() body: any) {
    return this.taskService.createTask(body);
  }

  @Patch('/:id/done')
  markAsDone(@Param('id') id: string) {
    return this.taskService.update(id, { completedAt: new Date() });
  }

  @Patch('/:id/pending')
  markAsPending(@Param('id') id: string) {
    return this.taskService.update(id, { completedAt: null });
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }

  @Delete()
  deleteAllTasks() {
    return this.taskService.deleteAllTasks();
  }

}
