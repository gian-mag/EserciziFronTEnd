import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {

  activePost: Post[] = []

  constructor(private arrayLink: PostService) { }

  ngOnInit(): void {
    this.activePost = this.arrayLink.getPost().filter((e) => {return e.active == true} )
  }

  disattivaPost(id: number) {
    this.arrayLink.editPost(id, false).then(() => {
      this.activePost = this.arrayLink.getPost().filter((e) => {return e.active == true});
    })
  }
}
