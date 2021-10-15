import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrauguSarasasComponent } from './komponentai/draugu-sarasas/draugu-sarasas.component';
import { KairinisMeniuComponent } from './komponentai/kairinis-meniu/kairinis-meniu.component';
import { MeniuComponent } from './komponentai/meniu/meniu.component';
import { StoryMeniuComponent } from './komponentai/story-meniu/story-meniu.component';
import { ZinutesIvedimasComponent } from './komponentai/zinutes-ivedimas/zinutes-ivedimas.component';
import { PagrindinispuslapisComponent } from './puslapiai/pagrindinispuslapis/pagrindinispuslapis.component';
import { FeedasComponent } from './komponentai/feedas/feedas.component';

const routes: Routes = [
  {path: '', component: PagrindinispuslapisComponent},
  {path: 'd1', component: DrauguSarasasComponent},
  {path: 'k1', component: KairinisMeniuComponent},
  {path: 's1', component: StoryMeniuComponent},
  {path: 'z1', component: ZinutesIvedimasComponent},
  {path: 'm1', component: MeniuComponent},
  {path: 'g1', component: FeedasComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
