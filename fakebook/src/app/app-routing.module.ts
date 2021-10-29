import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrauguSarasasComponent } from './komponentai/draugu-sarasas/draugu-sarasas.component';
import { KairinisMeniuComponent } from './komponentai/kairinis-meniu/kairinis-meniu.component';
import { MeniuComponent } from './komponentai/meniu/meniu.component';
import { StoryMeniuComponent } from './komponentai/story-meniu/story-meniu.component';
import { ZinutesIvedimasComponent } from './komponentai/zinutes-ivedimas/zinutes-ivedimas.component';
import { PagrindinispuslapisComponent } from './puslapiai/pagrindinispuslapis/pagrindinispuslapis.component';
import { FeedasComponent } from './komponentai/feedas/feedas.component';
import { LoginComponent } from './komponentai/login/login.component';
import { ProfilioPuslapisComponent } from './komponentai/profilio-puslapis/profilio-puslapis.component';
import { LaikinasPuslapisComponent } from './puslapiai/laikinas-puslapis/laikinas-puslapis.component';

import{AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  {path: '', component: PagrindinispuslapisComponent, canActivate: [AngularFireAuthGuard] },
  {path: 'd1', component: DrauguSarasasComponent, canActivate: [AngularFireAuthGuard] },
  {path: 'k1', component: KairinisMeniuComponent},
  {path: 's1', component: StoryMeniuComponent},
  {path: 'z1', component: ZinutesIvedimasComponent},
  {path: 'm1', component: MeniuComponent},
  {path: 'g1', component: FeedasComponent},
  {path: 'p1', component: PagrindinispuslapisComponent},
  {path: 'l1', component: LoginComponent},
  {path: 'a1', component: ProfilioPuslapisComponent},
  {path:'lkn',component: LaikinasPuslapisComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
