import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  News: boolean = false;

  @Input() post!: Post

  @Output() editEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    if(this.post.type == 'news') {
      this.News = true;
    };


  }

  editPost(id:number) {
    this.editEvent.emit(id)
  }



}
