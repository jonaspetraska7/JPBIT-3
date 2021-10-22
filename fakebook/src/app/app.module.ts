import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeniuComponent } from './komponentai/meniu/meniu.component';
import { PagrindinispuslapisComponent } from './puslapiai/pagrindinispuslapis/pagrindinispuslapis.component';

import { StoryMeniuComponent } from './komponentai/story-meniu/story-meniu.component';

import { KairinisMeniuComponent } from './komponentai/kairinis-meniu/kairinis-meniu.component';
import { ZinutesIvedimasComponent } from './komponentai/zinutes-ivedimas/zinutes-ivedimas.component';

import { DrauguSarasasComponent } from './komponentai/draugu-sarasas/draugu-sarasas.component';
import { FeedasComponent } from './komponentai/feedas/feedas.component';
import { ProfilioPuslapisComponent } from './komponentai/profilio-puslapis/profilio-puslapis.component';

import { LoginComponent } from './komponentai/login/login.component';
import { LaikinasPuslapisComponent } from './puslapiai/laikinas-puslapis/laikinas-puslapis.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProfilioCoverisComponent } from './komponentai/profilio-coveris/profilio-coveris.component';
import { ProfilisAboutComponent } from './komponentai/profilis-about/profilis-about.component';
import { ProfilioNuotraukosComponent } from './komponentai/profilio-nuotraukos/profilio-nuotraukos.component';
import { ProfilioDraugaiComponent } from './komponentai/profilio-draugai/profilio-draugai.component';
import { KaruseleComponent } from './karusele/karusele.component';




@NgModule({
  declarations: [
    AppComponent,

    MeniuComponent,
    PagrindinispuslapisComponent,
    KairinisMeniuComponent,
    ZinutesIvedimasComponent,
    StoryMeniuComponent,
    KairinisMeniuComponent,
    DrauguSarasasComponent,
    FeedasComponent,
    LoginComponent,
    ProfilioPuslapisComponent,
    LaikinasPuslapisComponent,
    
    ProfilioCoverisComponent,
    ProfilisAboutComponent,
    ProfilioNuotraukosComponent,
    ProfilioDraugaiComponent,
    KaruseleComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
