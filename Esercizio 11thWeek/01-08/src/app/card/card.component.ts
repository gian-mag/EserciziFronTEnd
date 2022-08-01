import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: User

  @Output() editEvent = new EventEmitter<number>();

  @Input() indice!: number

  constructor() { }

  ngOnInit(): void {

  }

  editEmit(id: number, indice: number) {
    this.editEvent.emit(id)
  }

}
