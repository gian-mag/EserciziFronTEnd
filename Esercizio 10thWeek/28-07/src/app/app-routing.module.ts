import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostComponent } from './active-post/active-post.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UnactivePostComponent } from './unactive-post/unactive-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'active',
    component: ActivePostComponent,
  },
  {
    path: 'unactive',
    component: UnactivePostComponent
  },
  {
    path: 'dettagli/:id',
    component: DettagliComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
