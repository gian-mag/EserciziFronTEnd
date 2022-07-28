import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-unactive-post',
  templateUrl: './unactive-post.component.html',
  styleUrls: ['./unactive-post.component.scss']
})
export class UnactivePostComponent implements OnInit {

  unactivePost: Post[] = []

  constructor(private arrayLink: PostService) { }

  ngOnInit(): void {
    this.unactivePost = this.arrayLink.getPost().filter((e) => {return e.active == false} )
  }

  attivaPost(id: number) {
    this.arrayLink.editPost(id, true).then(() => {
      this.unactivePost = this.arrayLink.getPost().filter((e) => {return e.active == false});
    })
  }

}
