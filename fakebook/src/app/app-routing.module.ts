import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagrindinispuslapisComponent } from './puslapiai/pagrindinispuslapis/pagrindinispuslapis.component';

const routes: Routes = [
  {path: 'pagrindinisPuslapis', component:PagrindinispuslapisComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
