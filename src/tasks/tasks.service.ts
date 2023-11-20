import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm/repository/Repository';
@Injectable()
export class TasksService {
  
  
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) {


  }

  async create(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto)
    return await this.taskRepository.save(task);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    return await this.taskRepository.findBy({
      id: id
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.taskRepository.update(id, updateTaskDto)
    return await this.findOne(id);
  }

  async remove(id: number) {
    await this.taskRepository.delete(id);
    return {message: 'Foi apagado! '}
  }
}
