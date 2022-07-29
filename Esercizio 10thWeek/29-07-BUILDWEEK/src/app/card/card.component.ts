import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Todo
  @Input() index!: number
  @Output() editEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {

  }

  editCard(index: number) {
    this.editEvent.emit(index)
  }

}
