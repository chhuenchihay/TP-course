import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

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
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
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
