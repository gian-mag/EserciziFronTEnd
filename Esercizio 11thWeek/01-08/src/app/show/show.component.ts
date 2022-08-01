import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PhotoService } from '../photo.service';
import { User } from '../user';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  cardList: User[] = []

  constructor(private photoSrv:PhotoService ) { }

  subGet!:Subscription

  ngOnInit(): void {
    this.photoSrv.getTodos().subscribe((res) => this.cardList = res);
  }

  editPost(id:number, indice:number){

    this.photoSrv.deleteTodo(id).subscribe((res) => {
       return this.cardList = this.cardList.filter((e:any)=> {return e.id != indice})
      });

  }


}
