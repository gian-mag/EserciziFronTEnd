import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-disattivati',
  templateUrl: './post-disattivati.component.html',
  styleUrls: ['./post-disattivati.component.scss']
})
export class PostDisattivatiComponent implements OnInit {

  posts: any = [];

  url: string = "http://localhost:3000/posts";

  constructor() {
  }

  ngOnInit(): void {

    fetch(this.url).then((response) => {return response.json()}).then((response)=>{
      response.forEach((e:any) =>
      {this.posts.push(e);
      this.posts = this.posts.filter((e:any) => e.active === false);}
      )
      console.log(this.posts);
    })

  }

  change(i: number) {
    fetch("http://localhost:3000/posts/" + i, {
      method: "PUT",
      headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
      },
      body: JSON.stringify({
        title: this.posts[i].title,
        body: this.posts[i].body,
        active: this.posts[i].active = true,
      })
      }).then(res => res.json()).then(res => {

        this.posts.splice(i, 1)})

  }
}
