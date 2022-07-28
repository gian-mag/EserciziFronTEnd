import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  home: any;
  constructor(private arrayLink: PostService) { }

  ngOnInit(): void {
    this.home = this.arrayLink.fetchGet();
    console.log(this.home)
  }

}
