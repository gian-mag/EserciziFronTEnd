import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo: Todo[] = []

  constructor() { }

  //metodo per recuperare l'array
  todoGet() {
    /* let one = this
      let promise:Promise <any> = new Promise(function(succ,err){
      setTimeout(() => {
        if (one.todo == []) {
          one.todo.push({
            id: 99,
            title: "Ops ancora non ci sono elementi",
            completed: false
          })
        }
        one.todo
          succ(one.todo)

      }, 2000);

    })
    return promise */
    return this.todo

  }
  //metodo per aggiungere l'array
  todoAdd(list: Todo) {
      let one = this
      let promise:Promise <any> = new Promise(function(succ,err){
      setTimeout(() => {
        one.todo.push(list)
        succ(one.todo)
      }, 2000);

    })
    return promise
    }

    todoMod(id: number) {
      let one = this
      let promise:Promise <any> = new Promise(function(succ,err){
      setTimeout(() => {
        one.todo[id].completed = true;
        succ(one.todo)
      }, 2000);

    })
    return promise
    }
  }

