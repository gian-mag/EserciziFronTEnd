import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrayPosts: Post[] = []

  url = "http://localhost:3000/todos";

  sub = new Subject<Post[]>()
  obs = this.sub.asObservable()

  constructor(private http: HttpClient) {
      this.http.get<Post[]>(this.url).subscribe((posts) => {
      this.arrayPosts = posts;
      this.sub.next(this.arrayPosts)
    })
  }

}
