import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];

  constructor() { }

  fetchGet() {
    let url='http://localhost:3000/posts';
    fetch(url).then(res => res.json()).then((res) =>
    {this.posts = res})
  }

  getPost() {
    return this.posts;
  }

}
