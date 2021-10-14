import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeniuComponent } from './komponentai/meniu/meniu.component';
import { PagrindinispuslapisComponent } from './puslapiai/pagrindinispuslapis/pagrindinispuslapis.component';

import { StoryMeniuComponent } from './komponentai/story-meniu/story-meniu.component';

import { KairinisMeniuComponent } from './komponentai/kairinis-meniu/kairinis-meniu.component';


@NgModule({
  declarations: [
    AppComponent,

    MeniuComponent,
    PagrindinispuslapisComponent,
    StoryMeniuComponent,
    KairinisMeniuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
