import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  posts: any = [];

  url: string = "http://localhost:3000/posts";

  constructor() {
  }

  ngOnInit(): void {

    fetch(this.url).then((response) => {return response.json()}).then((response)=>{
      response.forEach((e:any) =>
      {this.posts.push(e);
      this.posts = this.posts.filter((e:any) => e.active === true);}
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
      active: this.posts[i].active = false,
    })
      }).then(res => res.json()).then(res => {
        this.posts.splice(i, 1)})
  }

}
