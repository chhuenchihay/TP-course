import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/task.entity';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async getAllTask(): Promise<Task[]> {
    return this.taskRepository.find({ relations: ['user'] });
  }

  async getTask(id: string): Promise<Task> {
    const task = await this.taskRepository.findOne({
      where: { id: Number(id) },
      relations: ['user'],
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }

  async createTask(body: any): Promise<Task> {

    const user = await this.userRepository.findOne({ where: { id: body.userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${body.userId} not found`);
    }

    const task = this.taskRepository.create({
      name: body.name,
      description: body.description,
      user,
    });

    return await this.taskRepository.save(task);
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  async update(id: string, data: { completedAt?: Date | null }): Promise<Task> {
    const task = await this.getTask(id);
    if (data.completedAt !== undefined) task.completedAt = data.completedAt;
    return this.taskRepository.save(task);
  }

  async deleteAllTasks(): Promise<{ message: string }> {
    await this.taskRepository.clear();
    return { message: 'All tasks have been deleted successfully' };
  }
}