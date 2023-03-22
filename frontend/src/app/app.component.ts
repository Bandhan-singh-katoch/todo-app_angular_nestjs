import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newTodo = '';
  todoData : any;

  constructor(private appService: AppService){}

  ngOnInit(): void {
    this.getTodos();   
  }

  async createTodo(){
    this.appService.createTodo({ title: this.newTodo, completed: false })
      .subscribe(
        res => {
          this.getTodos();
          this.newTodo = "";
        }
      );
  }

  async getTodos(){
    this.appService.getTodos().subscribe(
      res => {
        this.todoData = res;
      }
    );
  }

  async deleteTodo(id:number){
    this.appService.deleteTodo(id)
    .subscribe(
      res=>{
        this.getTodos();
      }
    )
  }

  async updateTodo(id:number){
    this.appService.updateTodo(id)
    .subscribe(
      res=>{
        this.getTodos();
      }
    );
  }  
}
