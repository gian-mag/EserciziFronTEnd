import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  News: boolean = false;

  @Input() post: any

  constructor() { }

  ngOnInit(): void {
    if(this.post.type == 'news') {
      this.News = true;
    }

  }

}
