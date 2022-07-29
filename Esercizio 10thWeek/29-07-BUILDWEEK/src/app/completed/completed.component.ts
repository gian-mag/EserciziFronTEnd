import { Component, OnChanges, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  todoCompleted: Todo[] | any = [];

  constructor(private todo: TodoService) { }


  ngOnInit(): void {
      console.log(this.todo)

      this.todoCompleted = this.todo.todoGet().filter((e) => {return e.completed == true});
      console.log(this.todoCompleted);
  }

}
