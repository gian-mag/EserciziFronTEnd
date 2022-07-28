import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  url: string ='http://localhost:3000/posts'
  constructor() { }

  fetchGet() {

    fetch(this.url).then(res => res.json()).then((res) =>
    {this.posts = res})
  }

  getPost() {
    return this.posts;
  }

  editPost(id: number, attiva: boolean) {
    return fetch(this.url+ "/" + id, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        active: attiva
      })
    }).then((res) => {

      this.posts = this.posts.map((e) => {
        if (e.id == id) {
          e.active = attiva
        }
        return e
      })

    })
  }

  getPostById(id:number) {
    return this.posts.filter((e)=>e.id==id)[0]
  }

}
