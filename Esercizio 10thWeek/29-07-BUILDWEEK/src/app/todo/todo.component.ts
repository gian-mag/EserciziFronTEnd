import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList: Todo[] = [];

  constructor(private todo: TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todo.todoGet().filter((e) => {return e.completed == false});
    console.log(this.todoList);
  }

  pushList() {

    let input: HTMLInputElement = document.querySelector("input") as HTMLInputElement;
    let list = {
        id: this.todo.todoGet().length,
        title: input.value,
        completed: false
      };
    this.todo.todoAdd(list).then((res) => this.todoList = res.filter((el:Todo) => el.completed == false))

    console.log(this.todoList);
  }

  editPost(id:number) {


    this.todo.todoMod(id).then((res) => {return this.todoList = res.filter((el:Todo) => el.completed == false)})

  }

}
