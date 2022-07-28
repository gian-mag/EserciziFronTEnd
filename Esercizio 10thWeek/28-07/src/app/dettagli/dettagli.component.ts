import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit {

  p!: Post

  sub!: Subscription

  constructor(private router: ActivatedRoute, private arrayLink: PostService) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params)=>{

      let id = +params["id"]

      this.p = this.arrayLink.getPostById(id);
    })
  }

}
