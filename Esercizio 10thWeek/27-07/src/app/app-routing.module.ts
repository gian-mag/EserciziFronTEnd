import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostComponent } from './active-post/active-post.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UnactivePostComponent } from './unactive-post/unactive-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'active',
    component: ActivePostComponent
  },
  {
    path: 'unactive',
    component: UnactivePostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
