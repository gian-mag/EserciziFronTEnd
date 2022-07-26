import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostDisattivatiComponent } from './post-disattivati/post-disattivati.component';

const routes: Routes = [
  {
    path: '', //la stringa vuota rappresenta l'url localhost:4200/ (quindi la home)
    component: PostComponent
  },
  {
    path: 'linkAttivi', //la stringa vuota rappresenta l'url localhost:4200/ (quindi la home)
    component: PostAttiviComponent
  },
  {
    path: 'linkInattivi', //la stringa vuota rappresenta l'url localhost:4200/ (quindi la home)
    component: PostDisattivatiComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
