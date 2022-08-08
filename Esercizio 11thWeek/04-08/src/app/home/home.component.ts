import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];

  sub!: Subscription;

  constructor(private post$: PostService) { }

  ngOnInit(): void {
    this.sub = this.post$.obs.subscribe((res)=>{
      this.posts = res})
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
