import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';

import { UsersService } from './user.service';
import { User } from 'src/users/user.entity';
import { Task } from 'src/tasks/task.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Post()
  async create(@Body() body: any): Promise<User> {
    return this.userService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: any,): Promise<User> {
    return await this.userService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.userService.remove(id);
  }

  @Get('tasks/:id')
  async findUserTasks(@Param('id') id: number): Promise<Task[]> {
    return await this.userService.findUserTasks(id);
  }
}