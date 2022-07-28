import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivePostComponent } from './active-post/active-post.component';
import { UnactivePostComponent } from './unactive-post/unactive-post.component';
import { ShowlessPipe } from './showless.pipe';
import { HighlightsDirective } from './highlights.directive';
import { DettagliComponent } from './dettagli/dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomepageComponent,
    ActivePostComponent,
    UnactivePostComponent,
    ShowlessPipe,
    HighlightsDirective,
    DettagliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
