import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoDto } from './todo.dto';
import { Todos } from './todo.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Todos) private readonly todoRepository: Repository<Todos>,){}

  async createTodo(createTodo: TodoDto){
    const newTodo = this.todoRepository.create(createTodo);
    return this.todoRepository.save(newTodo);
  }

  async getTodos(){
    return this.todoRepository.find();
  }

  async updateTodo(id:number): Promise<any>{
    return await this.todoRepository.update(+id, { completed: true });
  }

  async deleteTodo(id:number){
    return await this.todoRepository.delete(+id);
  }
}
