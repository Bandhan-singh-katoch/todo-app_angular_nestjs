import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoDto } from './todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/todos')
  getTodos() {
    return this.appService.getTodos();    
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createTodo(@Body() createTodo: TodoDto){
    return this.appService.createTodo(createTodo);
  }

  @Put('/update/:id')
  updateTodo(@Param('id') id: number){
    return this.appService.updateTodo(id);
  }

  @Delete('/delete/:id')
  deleteTodo(@Param('id') id:number){
    return this.appService.deleteTodo(id);
  }
}
