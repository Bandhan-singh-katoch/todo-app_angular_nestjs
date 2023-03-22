import { Repository } from 'typeorm';
import { TodoDto } from './todo.dto';
import { Todos } from './todo.entity';
export declare class AppService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<Todos>);
    createTodo(createTodo: TodoDto): Promise<Todos>;
    getTodos(): Promise<Todos[]>;
    updateTodo(id: number): Promise<any>;
    deleteTodo(id: number): Promise<import("typeorm").DeleteResult>;
}
