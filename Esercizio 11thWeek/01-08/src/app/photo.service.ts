import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  counter = 0;


  counterSub = new Subject<number>();
  counterObs = this.counterSub.asObservable();

  constructor(private http:HttpClient) { }

  getTodos(){
    let obs = this.http.get<any[]>('http://localhost:3000/photos')
    return obs
  }

  deleteTodo(id:number){
    return this.http.delete<any>('http://localhost:3000/photos/'+ id)
  }

  addCounter() {
    this.counter++
    this.counterSub.next(this.counter)
  }
}
