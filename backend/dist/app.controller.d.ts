import { AppService } from './app.service';
import { TodoDto } from './todo.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getTodos(): Promise<import("./todo.entity").Todos[]>;
    createTodo(createTodo: TodoDto): Promise<import("./todo.entity").Todos>;
    updateTodo(id: number): Promise<any>;
    deleteTodo(id: number): Promise<import("typeorm").DeleteResult>;
}
