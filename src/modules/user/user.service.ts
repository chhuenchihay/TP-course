import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import * as bcrypt from 'bcrypt';
import { Task } from 'src/tasks/task.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      select: ['id', 'username', 'email'],
    });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      select: ['id', 'username', 'email'],
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findUserTasks(id: number): Promise<Task[]> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['tasks'],
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user.tasks;
  }

  async create(body: any): Promise<User> {

    const user = this.userRepository.create({
      username: body.username,
      email: body.email,
      password: body.password
    });

    return await this.userRepository.save(user);
  }

  async update(id: number, body: any): Promise<User> {

    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    user.username = body.username;
    user.email = body.email;

    await this.userRepository.save(user);

    const { password, ...result } = user;
    return result as User;
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.userRepository.delete(id);

    if (result.affected && result.affected > 0) {
      return { message: 'User deleted successfully' };
    } else {
      return { message: 'User not found' };
    }
  }

}